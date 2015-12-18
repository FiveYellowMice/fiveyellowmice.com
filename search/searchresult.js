---
---

function init() {
	keywords = getParameter("keywords");
	document.getElementById("search-keywords-box").value = keywords;
}

function showResults() {
	var keywordsList = keywords.split(" ");
	var resultList = [];
	for ( var i = 0; i < data.length; i++ ) {
		var pass = true;
		for ( var t = 0; t < keywordsList.length; t++ ) {
			if ( casualize(data[i].title).search(casualize(keywordsList[t])) === -1 ) {
				pass = false;
				break;
			}
		}
		if (pass) {
			resultList.push(data[i])
		}
	}
	var htmlOut = "";
	if ( resultList.length === 0 ) {
		htmlOut = "<p>没有找到结果。</p>";
	} else {
		for ( var i = 0; i < resultList.length; i++ ) {
			htmlOut += resultToHtml(resultList[i]);
		}
	}
	document.getElementById("search-results").innerHTML = htmlOut;
}

function getParameter(varName) {
	var parameters = location.search.substring(1).split("&");
	for ( var i = 0; i < parameters.length; i++ ) {
		var pair = parameters[i].split("=");
		if ( pair[0] === varName ) {
			return decodeURI(pair[1]);
		}
	}
	return null;
}

function resultToHtml(item) {
	var tags;
	if ( item.tags.length === 0 ) {
		tags = "";
	} else {
		tags = "&nbsp;&nbsp;&nbsp;<img class=\"tag-icon\" src=\"{{ site.baseurl }}/images/tags.svg\" alt=\"标签：\">&nbsp;";
		for ( var i = 0; i < item.tags.length; i++ ) {
			tags += "<a href=\"{{ site.baseurl }}/tags/" + item.tags[i] + ".html\">" + item.tags[i] + "</a>";
			if ( i !== item.tags.length - 1 ) {
				tags += ", ";
			}
		}
	}
	var meta = "<span class=\"post-meta\">" + item.date + tags + "</span>";
	var title = "<h2 class=\"post-link\"><a href=\"" + item.url + "\">" + item.title + "</a></h2>";
	return "<li>" + meta + title + "</li>";
}

var data = [
	{% for post in site.posts %}
	{
		"title": "{{ post.title | xml_escape }}",
		"url": "{{ post.url | prepend: site.baseurl }}",
		"date": "{{ post.date | date: '%Y 年 %m 月 %d 日 %H 时 %M 分' }}",
		"tags": [{% for tag in post.tags %}"{{ tag | xml_escape }}"{% if forloop.last == false %}, {% endif %}{% endfor %}]
	}{% if forloop.last == false %}, {% endif %}
	{% endfor %}
]

init();
showResults();
