---
---

(function(stuff) {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", stuff);
	} else {
		stuff();
	}
})(function() {
	$("<div>")
	.attr("id", "local-data-notify")
	.html("此网站会在您的浏览器中保存本地信息以提升浏览体验。")
	.css({
		"position": "fixed",
		"top": ($(".site-header").height() + 24) + "px",
		"left": "0",
		"right": "0",
		"margin": "auto",
		"max-width": "600px",
		"padding": "5px",
		"color": "white",
		"background-color": "#424242",
		"border": "1px solid #212121",
		"border-radius": "5px",
		"box-shadow": "0 5px 16px 0 rgba(0, 0, 0, 0.25)",
		"z-index": "12"
	})
	.append(
		$("<span>")
		.css("float", "right")
		.append(
			$("<a>")
			.html("详情")
			.css({
				"color": "white",
				"margin-left": "8px"
			})
			.attr("href", "{{ site.baseurl }}/about/#privacy")
		)
		.append(
			$("<a>")
			.html("好的")
			.css({
				"color": "white",
				"margin-left": "8px"
			})
			.attr("href", "javascript:void(0);")
			.click(function() {
				$("#local-data-notify").remove();
				document.cookie = "localDataAccepted=yes;path=/;max-age=31536000";
			})
		)
	)
	.insertAfter("header");
});
