var numsquares = 6;
var colors = generaterandomcolor(numsquares);

var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.querySelector("#colordisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn")

easybtn.addEventListener("click", function () {
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numsquares = 3;
	colors = generaterandomcolor(numsquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardbtn.addEventListener("click", function () {
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numsquares = 6;
	colors = generaterandomcolor(numsquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";

	}
});


reset.addEventListener("click", function () {
	colors = generaterandomcolor(numsquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	messagedisplay.textContent = "";
	this.textContent = "New Colors";

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

colordisplay.textContent = pickedcolor;

for (var i = 0; i < squares.length; i++) {

	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function () {
		var clickedcolor = this.style.background;

		if (clickedcolor === pickedcolor) {
			messagedisplay.textContent = "CORRECT !"
			changecolors(clickedcolor);
			reset.textContent = "Play Again ? "
			h1.style.background = clickedcolor;
		} else {
			this.style.background = "#232323";
			messagedisplay.textContent = "Try Again"
		}
	});
}

function changecolors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickcolor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generaterandomcolor(num) {
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomcolor())

	}
	return arr;
}

function randomcolor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}