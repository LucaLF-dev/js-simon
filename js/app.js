// console.log('js simon')

function getArrayOfRandomIntBetween(min, max, number) {
	const arrayRandomNumber = [];

	while (arrayRandomNumber.length < number) {
		const n = getRandomIntInclusive(min, max);

		console.log(arrayRandomNumber.includes(n));
		if (arrayRandomNumber.includes(n) !== true) {
			arrayRandomNumber.push(n);
		}
	}

	return arrayRandomNumber;
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

const btnGeneratorDOMElement = document.querySelector(".btn__number-generator");
console.log(btnGeneratorDOMElement);

const wrapperBtnDOMElement = document.querySelector(".wrapper__button");
console.log(wrapperBtnDOMElement);

let arrayNumber = [];
let arrayRandomNumber = getArrayOfRandomIntBetween(1, 99, 5);
let arrayNumeriPrompt = [];
let promptNumber;
console.log(arrayNumber, arrayRandomNumber);

btnGeneratorDOMElement.addEventListener("click", function () {
	for (i = 0; i < 5; i++) {
		const htmlItem = `<div class="number-item"> ${arrayRandomNumber[i]}</div> `;

		containerDOMElement.innerHTML += htmlItem;
	}

	wrapperBtnDOMElement.innerHTML = "";

	const idSecondInteval = setTimeout(function () {
		containerDOMElement.innerHTML = "";
		console.log(containerDOMElement);

		setTimeout(function () {
			for (i = 0; i < 5; i++) {
				promptNumber = parseInt(prompt("inserisci i numeri che ricordi"));
				if (arrayNumber === promptNumber[i]) {
					arrayNumber.push(promptNumber);
				}
			}

			alert("hai indovinato" + arrayNumber + "e esattamenti i numeri:");
			console.log(idSecondInteval);
		}, 2 * 1000);

	}, 5000);
});


setTimeout(() => {
	console.log('Ciao');
}, 1000);

while (true) {
	console.log('Loop');
}