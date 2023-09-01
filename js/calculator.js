const previousNumber = document.querySelector('.previous-number p');
const currentNumber = document.querySelector('.current-number');
const sign = document.querySelector('.sign');
const numbersButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const clearAll = document.querySelector('.allclear');
const closeBtn = document.querySelector('.red');
let numbers = [];
let result = 0;

const displayNumbers = e => {
	if (e.target.textContent === '.' && currentNumber.textContent === '') {
		return;
	} else if (e.target.textContent === '.' && currentNumber.textContent.includes('.')) {
		return;
	} else if (e.target.textContent === '0' && currentNumber.textContent === '0') {
		return;
	} else {
		numbers.push(e.target.textContent);
		currentNumber.textContent = numbers.join('');
		console.log(numbers);
	}
};

const operate = e => {
	if (e.target.textContent === '-' && currentNumber.textContent === '') {
		currentNumber.textContent = '-';
		return;
	} else if (currentNumber.textContent === '') {
		return;
	}

	if (sign.textContent !== '') {
		showResult();
	}
	previousNumber.textContent = currentNumber.textContent;
	sign.textContent = e.target.textContent;
	currentNumber.textContent = '';
	numbers = [];
};

// const addition = () => {
// 	if (sign.textContent !== '') {
// 		showResult();
// 	}
// 	previousNumber.textContent = currentNumber.textContent;
// 	sign.textContent = '+';
// 	currentNumber.textContent = '';
// 	numbers = [];
// 	result = parseFloat(currentNumber.textContent) + parseFloat(previousNumber.textContent);

// 	// if (previousNumber.textContent !== '' && currentNumber.textContent !== '') {
// 	// 	result = parseFloat(currentNumber.textContent) + parseFloat(previousNumber.textContent);
// 	// 	operate();
// 	// } else {
// 	// 	console.log('object');
// 	// }
// };
const showResult = () => {
	let a = parseFloat(currentNumber.textContent);
	let b = parseFloat(previousNumber.textContent);
	let operator = sign.textContent;

	switch (operator) {
		case '-':
			result = b - a;
			break;

		case 'x':
			result = a * b;
			break;

		case '/':
			result = b / a;
			break;

		case 'x²':
			result = b ** a;
			break;

		default:
			break;
	}
	currentNumber.textContent = result;
	previousNumber.textContent = '';
	sign.textContent = '';
};

const backspace = () => {
	if (currentNumber.textContent !== '' && currentNumber.textContent !== '0') {
		numbers.pop();
		currentNumber.textContent = numbers.join('');
	} else {
		currentNumber.textContent = '0';
	}
};

const clearScreen = () => {
	numbers = [];
	currentNumber.textContent = '0';
	previousNumber.textContent = '';
	sign.textContent = '';
};

const keyboard = event => {
	if (event.defaultPrevented) {
		return; // Do nothing if the event was already processed
	}

	switch (event.key) {
		case '1':
			numbers.push(1);
			currentNumber.textContent = numbers.join('');
			console.log(numbers);
			break;
		case '2':
			numbers.push(2);
			currentNumber.textContent = numbers.join('');
			break;
		case '3':
			numbers.push(3);
			currentNumber.textContent = numbers.join('');
			break;
		case '4':
			numbers.push(4);
			currentNumber.textContent = numbers.join('');
			break;
		case '5':
			numbers.push(5);
			currentNumber.textContent = numbers.join('');
			break;
		case '6':
			numbers.push(6);
			currentNumber.textContent = numbers.join('');
			break;
		case '7':
			numbers.push(7);
			currentNumber.textContent = numbers.join('');
			break;
		case '8':
			numbers.push(8);
			currentNumber.textContent = numbers.join('');
			break;
		case '9':
			numbers.push(9);
			currentNumber.textContent = numbers.join('');
			break;
		case 'Backspace':
			backspace();
			break;
		case '+':
			addition();

			break;
		case '-':
			numbers.push(1);
			currentNumber.textContent = numbers.join('');
			break;
		case '*':
			numbers.push(1);
			currentNumber.textContent = numbers.join('');
			break;
		case '/':
			numbers.push(1);
			currentNumber.textContent = numbers.join('');
			break;
		case '^':
			numbers.push(1);
			currentNumber.textContent = numbers.join('');
			break;
		case 'Enter':
			showResult();
			break;
		default:
			return;
	}
};

numbersButtons.forEach(button => {
	button.addEventListener('click', displayNumbers);
});
operatorButtons.forEach(button => {
	button.addEventListener('click', operate);
});
equalsButton.addEventListener('click', showResult);
clear.addEventListener('click', backspace);
clearAll.addEventListener('click', clearScreen);
document.addEventListener('keydown', keyboard);
