define(function () {
	var elements = {};
	elements.elementHandler = function (element) {
		var insert;
		var id;

		switch (element[0]) {
			case ".":
				element = element.split(".");
				element = element[1]
				insert = document.getElementsByClassName(element);
				break;
			case "#":
				element = element.split("#");
				element = element[1]
				insert = document.getElementById(element);
				id = true;
				break;
			default:
				insert = document.getElementsByTagName(element);
				break;
		}

		return {
			domElement: insert,
			elementName: element,
			id: id
		};
	};

	return elements;
});
