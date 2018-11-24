
var elemImg = document.getElementById("img-article");
//alert(elemImg["height"]);
/*
for (key in elemImg) {
	if (elemImg[key] == 196) {
		alert( key);
	}
}
*/
// var heightOfImg = elemImg.style.height;

// var heightOfImg = elem.style.height;

elemInf = document.getElementById("article-darck");
elemInf.style.height = elemImg["height"] + "px";
elemInf = document.getElementById("article-white");
elemInf.style.height = elemImg["height"] + "px";

