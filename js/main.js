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

	function dataLoad (from, attribute, element, manualFolder) {
		if(!manualFolder) {
			htmlText(attribute + "/" +  $(from).data(attribute) + ".md", element)
		}	else {
			htmlText($(from).data(attribute), element)
		}
	}

	htmlText("index.md", "#article");

	function aLoadClick (element, click, list, outputElement, folderOpt) {
		$(element).on(click, function () {

			for(var i = 0; i < list.length; ++i) {
				if ( $(this).data(list[i]) ) {
					dataLoad(this, list[i], outputElement, folderOpt);

				}
			}
		});
	}

	aLoadClick("a", "click", ['responsibility', 'communication', 'critical-thinking'], "#article");

	aLoadClick('a', 'click', ['nav-title'], '#article', true);

})