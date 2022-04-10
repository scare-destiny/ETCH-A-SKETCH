let isDrawing = false;
let activeColor = '#e885aa';
let rainbowModeOn = false;
let items;

const container = document.getElementById("container");

function makeGrid(rows, cols) {
	container.style.setProperty('--grid-rows', rows);
	container.style.setProperty('--grid-cols', cols);

	for (i = 0; i < (rows * cols); i++) {
		let cell = document.createElement("div");
		container.appendChild(cell).className = "grid-item";
	}
	items = Array.from(document.getElementsByClassName("grid-item"));
	updateRows(items)
}

function removeGrid() {
	const parent = document.getElementById('container');
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

document.addEventListener('DOMContentLoaded', e => {
	makeGrid(24, 24)
}
)


function updateRows(items) {
	items.forEach(item => {
		item.addEventListener('mousedown', e => {
			isDrawing = true;
			changeColor(e.target, activeColor);
		});
	});

	items.forEach(item => {
		item.addEventListener('mousemove', e => {
			if (isDrawing === true) {
				changeColor(e.target, activeColor);
				console.log(e.target.color);
			};
		});
	});

	items.forEach(item => {
		item.addEventListener('mouseup', e => {
			if (isDrawing === true) {
				changeColor(e.target, activeColor);
				isDrawing = false;
			};
		});
	});
}

function changeColor(element, color) {
	if (rainbowModeOn) {
		element.style.backgroundColor = randomRGB();
		return;
	}
	element.style.backgroundColor = activeColor;
}

function toggleColorPicker() {
	if (rainbowModeOn) {
		document.getElementById('colorInput').style.visibility = 'hidden';
		return;
	}
	document.getElementById('colorInput').style.visibility = 'visible';
}

function randomRGB() {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	return "#" + randomColor;
}

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', removeGrid);
resetBtn.addEventListener('click', askUser);

const rnbwBtn = document.getElementById('rainbow');
rnbwBtn.addEventListener('click', toggleColorMode);
rnbwBtn.addEventListener('click', toggleColorPicker);

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", updateActiveColor);
colorPicker.addEventListener("change", updateActiveColor);

function updateActiveColor(event) {
	activeColor = event.target.value;
}

function toggleColorMode(event) {
	let target = event.target;
	if (rainbowModeOn) {
		rainbowModeOn = false;
		target.innerHTML = "Rainbow mode";
		return;
	}
	rainbowModeOn = true;
	target.innerHTML = "Pinky Color mode";
	console.log(event.target.innerHTML, rainbowModeOn);
}

function askUser() {
	let answer;
	do {
		answer = parseInt(prompt("Choose a number from 1 to 100", ""));
	}
	while (isNaN(answer) || (answer > 100) || (answer < 1));
	console.log(answer, answer);
	makeGrid(answer, answer);
}

window.addEventListener('beforeunload', function (e) {
	// Cancel the event
	e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
	// Chrome requires returnValue to be set
	e.returnValue = '';
  });