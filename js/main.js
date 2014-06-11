require(["helpers/marked", "helpers/getFile", "coffee-script"], function (marked, getFile, coffeeScript) { 
//	click = click.click;


//	function success (xhr) {
//		htmlText.insert(xhr.responseText, "#article", "html", marked)
//	}

//	click("click", "a", ["data-responsibility", 'communication'], function (e) {
//		var i;
//		e = e.target;
//		console.log(e);
//		for (i = 0; i < e.attributes.length; ++i) {
//			file.load((e.attributes[i].name.split("data-")[1] + "/" + e.attributes[i].value + ".md"), success);
//		}
//	});
	window.coffeescript = coffeeScript	

	$.get("json/html.json", function (xhr) {
		var api = new Absurd;
		api.morph('html').add(xhr).compile(function (err, html) {
			window.marked = marked;
			$("body").prepend(html);
			getFile.aLoadClick("a", "click", ['responsibility', 'communication', 'critical-thinking'],  "#article", {});
			getFile.aLoadClick('a', 'click', ['nav-title'], '#article', {}, false, true);
			$.get("json/css.json", function (xhr) {api.add(xhr).compile(function (err, css) { $("head").append("<style>" + css + "</style>") }) });
		});
	});

	function fn (x) {
		console.dir(x);
	};
	getFile.htmlText("index.md", "#article", {});

})
