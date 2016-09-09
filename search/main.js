---
---

(function(stuff) {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", stuff);
	} else {
		stuff();
	}
})(function() {
	// This var is going to be used as the cache of data.json, in parsed form
	var cachedIndex;
	
	var resultTemplate = _.template(
		"<li><article>" +
		"<span class=\"post-meta\">" +
		"<time class=\"post-date\" datetime=\"<%- date %>\"><%- formatDate(date) %></time>" +
		"<% if (tags) { %><span class=\"post-tags\"><img class=\"tag-icon\" src=\"{{ site.baseurl }}/images/tags.svg\" alt=\"标签：\">&nbsp;" +
		"<% for (var i = 0; i < tags.length; i++) { %>" +
		"<a rel=\"tag\" href=\"{{ site.baseurl }}/tags/<%- tags[i] %>.html\"><%- tags[i] %></a>" +
		"<% if (i !== tags.length - 1) { %>, <% } %>" +
		"<% } %>" +
		"</span><% } %>" +
		"</span>" +
		"<h1><a href=\"{{ site.baseurl }}<%- url %>\"><%- title %></a></h1>" +
		"</aritlce></li>", {
			imports: {
				formatDate: function formatDate(input) {
					var date = new Date(input);
					return date.getUTCFullYear() + " 年 " +
					_.padStart(date.getUTCMonth() + 1, 2, "0") + " 月 " +
					_.padStart(date.getUTCDate(), 2, "0") + " 日 " +
					_.padStart(date.getUTCHours(), 2, "0") + " 时 " +
					_.padStart(date.getUTCMinutes(), 2, "0") + " 分";
				}
			}
		}
	);
	
	function performSearch(keywordString) {
		console.log("%cStart a new search.", "font-weight: bold; text-decoration: underline");
		var searchStartTime = Date.now();
		
		// Parse keywords
		try {
			var keywords = {
				include: [],
				exclude: []
			};
			var splitedKeywordString = keywordString.trim().split(/\s/).reduce(function(p, c) {
				c = c.toLowerCase();
				
				if (_.startsWith(p[p.length - 1], "\"")) {
					if (_.endsWith(c, "\"")) {
						p[p.length - 1] = p[p.length - 1].substr(1) + " " + c.substr(0, c.length - 1);
					} else {
						p[p.length - 1] = p[p.length - 1] + " " + c;
					}
				} else if (_.endsWith(p[p.length - 1], "\\")) {
					p[p.length - 1] = p[p.length - 1].substr(0, p[p.length - 1].length - 1) + " " + c;
				} else {
					p.push(c);
				}
				
				return p;
			}, []);
			splitedKeywordString.forEach(function(s) {
				if (_.startsWith(s, "-")) {
					keywords.exclude.push(s.substr(1));
				} else {
					keywords.include.push(s);
				}
			});
			console.log(keywords);
		} catch (err) {
			return Promise.reject(err);
		}
		
		return new Promise(function(resolve, reject) {
			// Fetch data.json if haven't
			if (cachedIndex) {
				setTimeout(function() { resolve(cachedIndex); }, 0);
				return;
			}
			console.log("Fetching data.json...");
			$.get("{{ site.baseurl }}/search/data.json")
			.then(function(data) {
				if (typeof data === "object") {
					cachedIndex = data;
					resolve(data);
				} else {
					reject(new Error("Malformed data.json."));
				}
			})
			.fail(function() {
				reject(new Error("Coundn't fetch data.json."));
			});
		})
		.then(function(posts) { return new Promise(function(resolve, reject) {
			var iteration = 0;
			
			function processPost(post) {
				{% comment %}"No need for site.baseurl because it's already applied in data.json."{% endcomment %}
				console.log("Fetching content of " + post.url + " .");
				$.get(post.url, function(postHtml){
					// Parse HTML
					var postDocument = document.implementation.createHTMLDocument("");
					postDocument.documentElement.innerHTML = postHtml;
					var articleText = $("article", postDocument).text().replace(/\s+/g, " ").toLowerCase();
					
					// Match keywords
					var matches = 0;
					keywords.include.forEach(function(ik) {
						matches = matches + articleText.split(ik).length - 1;
					});
					keywords.exclude.forEach(function(ek) {
						(articleText.indexOf(ek) >= 0) && (matches = 0);
					});
					
					// Show matching result
					if (matches > 0) {
						console.log("%c" + post.title + " is a result.", "color: green; font-weight: bold");
						$("#results-list").show().append(resultTemplate(post));
					}
					
					// Recurse
					iteration++;
					if (iteration < posts.length) {
						processPost(posts[iteration]);
					} else {
						resolve();
					}
				}, "text");
			}
			
			processPost(posts[iteration]);
		}); })
		.then(function() {
			$("#search-status").text("找到 " + $("#results-list>li").length + " 个结果，耗时 " + (Date.now() - searchStartTime) / 1000 + " 秒。").show();
			$(".spinner").hide();
		});
	}
	
	function getQueryParam(key) {
		var parameters = location.search.substring(1).split("&");
		for ( var i = 0; i < parameters.length; i++ ) {
			var pair = parameters[i].split("=");
			if ( pair[0] === key ) {
				return decodeURIComponent(pair[1]);
			}
		}
		return null;
	}
	
	// Attach action on clicking the search button
	$(".search-button input").click(function(event) {
		event.preventDefault();
		var keywords = $(".keyword-box input").val();
		history.pushState(null, "", location.pathname + "?q=" + encodeURIComponent(keywords));
		$("#search-status").hide();
		$("#results-list").hide().empty();
		$(".spinner").show();
		performSearch(keywords);
	});
	
	// Start search if appropiate query param exists
	new Promise(function(resolve, reject) {
		var noKeywordError = new Error("No keyword.");
		if (!location.search) {
			reject(noKeywordError);
			return;
		}
		var keywords = getQueryParam("q");
		if (!keywords) {
			reject(noKeywordError);
			return;
		}
		keywords = keywords.replace(/\+/g, " ");
		resolve(keywords);
	})
	.then(function(keywords) {
		$(".keyword-box input").val(keywords);
		$("#search-panel").show();
		return performSearch(keywords);
	})
	.catch(function(err) {
		if (err.message === "No keyword.") {
			$(".keyword-box input").attr("autofocus", true);
			$("#search-panel").show();
			$(".spinner").hide();
		} else {
			console.error(err);
			$("#search-status").text("错误： " + err.message).show();
			$(".spinner").hide();
		}
	});
});
