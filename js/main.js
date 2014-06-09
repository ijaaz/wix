require(["helpers/marked", "helpers/insertData", "helpers/clickHandler", "helpers/loadFile"], function (marked, htmlText, click, file) { 
	click = click.click;


	function success (xhr) {
		htmlText.insert(xhr.responseText, "#article", "html", marked)
	}

	click("click", "a", ["data-responsibility", 'communication'], function (e) {
		var i;
		e = e.target;
		console.log(e);
		for (i = 0; i < e.attributes.length; ++i) {
			file.load((e.attributes[i].name.split("data-")[1] + "/" + e.attributes[i].value + ".md"), success);
		}
	});

//	getFile.htmlText("index.md", "#article");

//	getFile.aLoadClick("a", "click", ['responsibility', 'communication', 'critical-thinking'], "#article");

//	getFile.aLoadClick('a', 'click', ['nav-title'], '#article', true);

})
