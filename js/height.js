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
		var elemInf = document.getElementById("article-darck");
		elemInf.style.height = "auto";
	}; 
}

if (document.documentElement.clientWidth > 1200) {
	makeTheSameHightOfArticle();
}

window.onresize = makeTheSameHightOfArticleForResize;

// alert(document.documentElement.clientWidth);