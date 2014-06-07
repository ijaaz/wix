require(["helpers/marked"], function (marked) {
	
	window.marked = marked;

	function htmlText (file, element) {
		var $main = $.get(file, function (data) {
				insert(element, marked(data));
		})
		return $main
	}

	function insert(element, text) {
		// type can either be html or text
		$(element)
			.html(text);
	}


	htmlText("index.md", "#article");
})
