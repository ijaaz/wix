define(function (marked) {

	var marked = require("helpers/marked");

	window.getFile = {};

	getFile.htmlText = function (file, element, obj) {
		var $main = $.get(file, function (data) {
			var absurd = new Absurd;

			var html = absurd.morph('html').add({
				'':  marked(data).replace(/&lt;%/gi, "<%").replace(/%&gt;/gi, "%>")
			}).compile(null, obj);

				getFile.insert(element, html);
		})
		return $main
	};

	getFile.insert = function (element, text) {
		// type can either be html or text
		$(element)
			.html(text);
	};

	getFile.dataLoad = function (from, attribute, element, obj, fn, manualFolder) {
		var attr = $(from).data(attribute) + ( (attribute.search(".")) ? "" : ".md" );
		if(!manualFolder && !fn) {
			this.htmlText(attribute + "/" + attr , element, obj)
		}	else if (manualFolder) {
			this.htmlText($(from).data(attribute), element, obj)
		} else if (fn) {
			fn(from)
		}
	};

	getFile.aLoadClick = function (from, click, attribute, element, obj, fn, manualFolder) {
		$(from).on(click, function () {

			for(var i = 0; i < attribute.length; ++i) {
				if ( $(this).data(attribute[i]) ) {
					getFile.dataLoad(this, attribute[i], element, obj, fn, manualFolder);

				}
			}
		});
	}
	return getFile;
});
