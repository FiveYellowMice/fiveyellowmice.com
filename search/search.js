function search() {
	keywords = document.getElementById("search-keywords-box").value;
	if ( casualize(keywords).length === 0 ) {
		alert("请输入有效的关键词！");
	} else {
		location = "result.html?keywords=" + keywords;
	}
}

function keyDown(e) {
	if ( e.keyCode === 13 ) {
		search();
	}
}

function casualize(input) {
	output = input.toLowerCase();
	var charactersRemoving = [" ", ":", ";", ",", ".", "-", "_", "\"", "\'", "+", "=", "<", ">", "\\", "/"];
	for ( i in charactersRemoving ) {
		output = output.split(charactersRemoving[i]).join("");
	}
	return output;
}

var keywords;
