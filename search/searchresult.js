---
layout: null
sitemap: false
---

function init() {
	keywords = getParameter("keywords");
	document.getElementById("search-keywords-box").value = keywords;
}

function showResults() {
	var htmlOut = "";
	for ( var i = 0; i < data.length; i++ ) {
		if ( casualize(data[i][0]).search(casualize(keywords)) !== -1 ) {
			htmlOut = htmlOut.concat("<li><h2><a class=\"post-link\" href=\"" + data[i][1] + "\">" + data[i][0] + "</a></h2></li>");
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

var data = [{% for post in site.posts %}["{{ post.title | xml_escape }}", "{{ post.url | prepend: site.baseurl }}"]{% if forloop.last == false %}, {% endif %}{% endfor %}];

init();
showResults();
