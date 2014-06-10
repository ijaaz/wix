define(function (marked) {

	var marked = require("helpers/marked");
	window.getFile = {};

	getFile.htmlText = function (file, element) {
		var $main = $.get(file, function (data) {
				getFile.insert(element, marked(data));
		})
		return $main
	};

	getFile.insert = function (element, text) {
		// type can either be html or text
		$(element)
			.html(text);
	};

	getFile.dataLoad = function (from, attribute, element, manualFolder) {
		var attr = $(from).data(attribute);
		if(!manualFolder) {
			this.htmlText(attribute + "/" + attr + ".md", element)
		}	else {
			this.htmlText($(from).data(attribute), element)
		}
	};

	getFile.aLoadClick = function (element, click, list, outputElement, folderOpt) {
		$(element).on(click, function () {

			for(var i = 0; i < list.length; ++i) {
				if ( $(this).data(list[i]) ) {
					getFile.dataLoad(this, list[i], outputElement, folderOpt);

				}
			}
		});
	}
	return getFile;
});
