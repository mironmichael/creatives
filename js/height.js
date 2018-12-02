function makeTheSameHightOfArticle() {
		var elemImg = document.getElementById("img-article");
		var elemInf = document.getElementById("article-darck");
		var computedStyleOfElemInf = getComputedStyle(elemInf);

		elemInf.style.height = getTheHight();
		elemInf = document.getElementById("article-white");
		elemInf.style.height = getTheHight();

	function getTheHight() {
		return (elemImg.height - parseInt(computedStyleOfElemInf.paddingTop, 10) + "px");
	}
}
if (document.documentElement.clientWidth > 1200) {
	makeTheSameHightOfArticle();
	window.onresize = makeTheSameHightOfArticle;
}

// alert(document.documentElement.clientWidth);