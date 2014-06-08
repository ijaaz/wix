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

	function dataLoad (from, attribute, element, folder, extension) {
		if(!folder && !extension) {
			htmlText(attribute + "/" +  $(from).data(attribute) + ".md", element)
		}	else {
			htmlText(folder + "/" + $(from).data(attribute) + extension, element)
		}
	}

	htmlText("index.md", "#article");

	$("a").on("click", function () {
		var art = "#article";
		var th = this;
		if ($(this).data("responsibility")) {
			dataLoad(this, "responsibility", art);
			$(this).parent().parent().addClass("active");
		}
		if ($(this).data("communication")) {
			dataLoad(this, "communication", art);
			$(this).parent().parent().addClass("active");
		}
		if ($(this).data("criticalThinking")) {
			dataLoad(this, "critical-thinking", art);
			$(this).parent().parent().addClass("active");
		}
		if ($(this).data('nav-title')) {
			dataLoad(this, "nav-title", art, "", ".md")
			$(this).parent().parent().addClass("active");
		}
	});


})
