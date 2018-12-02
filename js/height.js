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

function makeTheSameHightOfArticleForResize() {
	if (document.documentElement.clientWidth > 1200) {
		makeTheSameHightOfArticle();
	} else {
		makeAutoHeight("article-darck");
		makeAutoHeight("article-white");
	}; 
		function makeAutoHeight(element) {
			var elemInf = document.getElementById(element);
			elemInf.style.height = "auto";
		}
}

if (document.documentElement.clientWidth > 1200) {
	makeTheSameHightOfArticle();
}

window.onresize = makeTheSameHightOfArticleForResize;