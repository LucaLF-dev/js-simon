// console.log('js simon')

function getArrayOfRandomIntBetween(min, max, number) {
	const arrayBombs = [];

	while (arrayBombs.length < number) {
		const n = getRandomIntInclusive(min, max);

		console.log(arrayBombs.includes(n));
		if (arrayBombs.includes(n) !== true) {
			arrayBombs.push(n);
		}
	}

	return arrayBombs;
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const containerDOMElement = document.querySelector(".container");
console.log(containerDOMElement);

const numberItemDOMElement = document.querySelectorAll(".number-item");
console.log(numberItemDOMElement);

const arrayNumber = [];
const arrayRandomNumber = getArrayOfRandomIntBetween(1, 99, 5);
console.log(arrayNumber, arrayRandomNumber);

for (i = 0; i < 5; i++) {
	const htmlItem = `<div class="number-item"> ${arrayRandomNumber[i]}</div> `;

	containerDOMElement.innerHTML += htmlItem;
}
