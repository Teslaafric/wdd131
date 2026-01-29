const year = document.querySelector('#copyyear-js');
year.textContent = new Date().getFullYear();

const modified = document.querySelector('#currentyear-js');
modified.textContent = `Last Modified: ${document.lastModified}`;

const navElement = document.querySelector('.navigation')
const buttonElement = document.querySelector('#menu');


buttonElement.addEventListener('click', () => {
	navElement.classList.toggle('open');

	if (navElement.classList.contains('open')) {
		buttonElement.textContent = 'X';
	}
	else {
		buttonElement.textContent = '☰';
	}
});
