/*
var elemImg = document.getElementById("img-article");
var elemInf = document.getElementById("article-darck");

elemInf.style.height = elemImg["height"] + "px";
elemInf = document.getElementById("article-white");
elemInf.style.height = elemImg["height"] + "px";

window.onresize = function makeTheSameHight() {
	var elemImg = document.getElementById("img-article");
	var elemInf = document.getElementById("article-darck");

	elemInf.style.height = elemImg["height"] + "px";
	elemInf = document.getElementById("article-white");
	elemInf.style.height = elemImg["height"] + "px";
}
*/

function makeTheSameHight() {
	var elemImg = document.getElementById("img-article");
	var elemInf = document.getElementById("article-darck");

	elemInf.style.height = elemImg["height"] + "px";
	elemInf = document.getElementById("article-white");
	elemInf.style.height = elemImg["height"] + "px";
}

makeTheSameHight();
window.onresize = makeTheSameHight;