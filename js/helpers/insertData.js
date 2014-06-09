define(["helpers/elementHandler"], function (el) {
	var htmlText = {}


	htmlText.insert = function (text, element, method, compiler) {
		// method = "text" || "html"

		var elementHandler = el.elementHandler(element);
		var insert = elementHandler.domElement;
		var id = elementHandler.id;
		
		method = (method == "html") ? method.toUpperCase() : method.charAt(0).toUpperCase() + method.slice(1);
		compilerIf =  (compiler) ? compiler(text) : text;

		if (!id) {
			for (var i = 0; i < insert.length; i++) {
				insert[i]["inner" + method] = compilerIf;
			}
		} else {
				insert["inner" + method] = compilerIf;
		}
	};
	return htmlText;
})
