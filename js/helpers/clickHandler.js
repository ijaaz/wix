define(["helpers/elementHandler"], function (el) {
	window.clickHandler = {};

	clickHandler.click = function (click, element, name, fn) {
		var element = el.elementHandler(element);

		

		if(!element.id) {
			for (var i = 0; i < element.domElement.length; i++) {
				element.domElement[i]["on" + click]= function (e) {
					for (var i = 0; i < e.target.attributes.length; i++) {
						if (e.target.attributes[i].name == name[i]) {
							fn(e);
						}
					}
				}
			}
		}
	
	};
	 return clickHandler;
}) 
