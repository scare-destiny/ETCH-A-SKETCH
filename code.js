

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

document.addEventListener('DOMContentLoaded', e => {
	makeGrid(50, 50)
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
}

function generateArt(array) {
	for (const element of array) {
		let div = document.getElementById(`${element}`);
		div.style.backgroundColor = randomRGB();
	}
}

window.addEventListener('DOMContentLoaded', (event) => {
	generateArt(paintedDivs);
})


const paintedDivs = [
	"1864",
	"1864",
	"1864",
	"1813",
	"1813",
	"1763",
	"1762",
	"1712",
	"1661",
	"1611",
	"1560",
	"1510",
	"1460",
	"1359",
	"1309",
	"1259",
	"1158",
	"1108",
	"1008",
	"857",
	"757",
	"607",
	"507",
	"458",
	"408",
	"358",
	"359",
	"309",
	"310",
	"311",
	"311",
	"312",
	"312",
	"313",
	"313",
	"313",
	"313",
	"313",
	"364",
	"364",
	"414",
	"464",
	"514",
	"514",
	"564",
	"564",
	"614",
	"614",
	"614",
	"614",
	"614",
	"614",
	"614",
	"614",
	"614",
	"614",
	"614",
	"614",
	"614",
	"614",
	"614",
	"565",
	"565",
	"565",
	"565",
	"516",
	"516",
	"467",
	"468",
	"469",
	"420",
	"421",
	"422",
	"422",
	"473",
	"473",
	"474",
	"524",
	"525",
	"575",
	"575",
	"575",
	"625",
	"625",
	"675",
	"675",
	"675",
	"725",
	"725",
	"775",
	"775",
	"824",
	"874",
	"923",
	"973",
	"973",
	"1022",
	"1072",
	"1121",
	"1171",
	"1220",
	"1270",
	"1319",
	"1369",
	"1419",
	"1418",
	"1468",
	"1468",
	"1517",
	"1517",
	"1517",
	"1517",
	"1567",
	"1567",
	"1567",
	"1567",
	"1567",
	"1567",
	"1567",
	"1566",
	"1566",
	"1566",
	"1616",
	"1616",
	"1616",
	"1616",
	"1616",
	"1616",
	"1666",
	"1666",
	"1666",
	"1715",
	"1715",
	"1715",
	"1715",
	"1765",
	"1765",
	"1765",
	"1765",
	"1815",
	"1815",
	"1815",
	"1815",
	"1815",
	"1815",
	"1814",
	"1814",
	"1814",
	"1814",
	"1814",
	"1814",
	"1814",
	"1814",
	"1814",
	"1814",
	"1814",
	"1814"
]

