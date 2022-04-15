import { paintedDivs } from "./modules/drawing.js";

let isDrawing = false;
let activeColor = '#e885aa';
let rainbowModeOn = false;
let items;

const container = document.getElementById("container");

function makeGrid(rows, cols) {
	container.style.setProperty('--grid-rows', rows);
	container.style.setProperty('--grid-cols', cols);

	for (let i = 0; i < (rows * cols); i++) {
		let cell = document.createElement("div");
		cell.id = `${i}`
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



function updateRows(items) {
	items.forEach(item => {
		item.addEventListener('mousedown', e => {
			isDrawing = true;
			changeColor(e.target, activeColor);
		});
	});

	items.forEach(item => {
		item.addEventListener('mousemove', e => {
			console.log(e);
			if (isDrawing === true) {
				changeColor(e.target, activeColor);
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

const slider = document.getElementById('slider');
slider.addEventListener("input", removeGrid);
slider.addEventListener("input", processSlider);

const rnbwBtn = document.getElementById('rainbow');
rnbwBtn.addEventListener('click', toggleColorMode);
rnbwBtn.addEventListener('click', toggleColorPicker);

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", updateActiveColor);
colorPicker.addEventListener("change", updateActiveColor);


function processSlider(e) {
	makeGrid(e.target.value, e.target.value);
}

function updateActiveColor(event) {
	console.log(event.target);
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
	target.innerHTML = "Single Color mode";
};

function makeDrawing(array) {
	for (let i = 0; i < array.length; i++) {
		setTimeout(function () {
			paintDiv(array[i]);
		}, i * 15)
	}
}

function paintDiv(div) {
	div = document.getElementById(`${div}`);
	div.style.backgroundColor = randomRGB();

}



window.addEventListener('DOMContentLoaded', (event) => {
	makeGrid(50, 50)
	makeDrawing(paintedDivs);
	setTimeout(function () {
		removeGrid();
		makeGrid(50, 50);
	}, 3000)
})


