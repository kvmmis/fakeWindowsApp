const windowsBtn = document.querySelector('.windows-button');
const windowsPopup = document.querySelector('.windowsPopup');
const calculatorBtn = document.querySelector('.calc-app');
const calculator = document.querySelector('.calc');
const closeCalcBtn = document.querySelector('.red');

const showWindowsPopup = () => {
	windowsPopup.classList.toggle('active');
};

const showCalculator = () => {
	calculator.classList.toggle('calc-active');
};

const closeCalculator = () => {
	calculator.classList.toggle('calc-active');
};

windowsBtn.addEventListener('click', showWindowsPopup);
calculatorBtn.addEventListener('dblclick', showCalculator);
closeCalcBtn.addEventListener('click', closeCalculator);
