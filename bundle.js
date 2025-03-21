(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

css.textContent = "linear-gradient(to right, rgb(255, 0, 0) , rgb(255, 255, 0));";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setInputElement(randomColor1, randomColor2) {
	// set random colors to html input element
	color1.value = randomColor1;
	color2.value = randomColor2;
}

function generateRandomBackgroundColor() {
	var randomColor1 = '#' + Math.floor((Math.random() * 0xFFFFFF)).toString(16).padStart(6,'0');
	var randomColor2 = '#' + Math.floor((Math.random() * 0xFFFFFF)).toString(16).padStart(6,'0');
	setInputElement(randomColor1, randomColor2);
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click",generateRandomBackgroundColor);
},{}]},{},[1]);
