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

const btnGeneratorDOMElement = document.querySelector(".btn__number-generator");
console.log(btnGeneratorDOMElement);

const wrapperBtnDOMElement = document.querySelector('.wrapper__button')
console.log(wrapperBtnDOMElement);

let arrayNumber = [];
let arrayRandomNumber = getArrayOfRandomIntBetween(1, 99, 5);
let arrayNumeriPrompt = []
let promptNumber
console.log(arrayNumber, arrayRandomNumber);



btnGeneratorDOMElement.addEventListener('click', function () {

   
    containerDOMElement.innerHTML = ''

	for (i = 0; i < 5; i++) {
		const htmlItem = `<div class="number-item"> ${arrayRandomNumber[i]}</div> `;

		containerDOMElement.innerHTML += htmlItem;
	}

    wrapperBtnDOMElement.innerHTML = ''


const idSecondInteval = setTimeout(function (){
    btnGeneratorDOMElement.innerHTML = ''
   
    for ( i= 0; i < 5; i++) {
    promptNumber = parseInt(prompt('inserisci i numeri che ricordi'))
    for ( j = 0; j < arrayRandomNumber.length; i++){
        if (promptNumber == arrayRandomNumber[j]) {
            arrayNumber.push(promptNumber)
        }
    }
}
    alert('hai indovinato' + arrayNumber)
  
    clearInterval(idSecondInteval)
    
},10000)
});

// const idInterval = setInterval(function(){
//     containerDOMElement.innerHTML = ''

//     clearInterval(idInterval)

// },5000)
// console.log(idInterval)
