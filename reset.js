var iScale = window.devicePixelRatio;
	iScale = 1/iScale;
	document.write('<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale='+ iScale +', maximum-scale='+ iScale +', minimum-scale='+ iScale +'" />');
//动态设置根节点的字体大小。
var iWidth = document.documentElement.clientWidth;
var iFont = iWidth/10;
document.getElementsByTagName('html')[0].style.fontSize = iFont+'px';
