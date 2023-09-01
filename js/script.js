const windowsButton = document.querySelector('.windows-button');
const windowsPopup = document.querySelector('.windows__popup');

const showWindowsPopup = () => {
	windowsPopup.classList.toggle('active');
};

windowsButton.addEventListener('click', showWindowsPopup);
