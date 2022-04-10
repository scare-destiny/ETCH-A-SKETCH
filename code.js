let isDrawing = false;
let activeColor = '#e885aa';
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
	makeGrid(8, 8)
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
	element.style.backgroundColor = randomRGB();
}

function randomRGB() {
	const randomColor = Math.floor(Math.random() *16777215).toString(16);
	return "#" + randomColor;
}

const button = document.querySelector('button');

button.addEventListener('click', removeGrid);
button.addEventListener('click', askUser);



function askUser() {
	let answer;
	do {
		answer = parseInt(prompt("Choose a number from 1 to 100", ""));
	}
	while (isNaN(answer) || (answer > 100) || (answer < 1));
	console.log(answer, answer);
	makeGrid(answer, answer);
}