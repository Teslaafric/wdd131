let yearElement = document.querySelector("#currentyear-js");
const today = new Date().getFullYear();
yearElement.textContent = today;

const modifiedElement = document.querySelector("#lastmodified-js");
modifiedElement.textContent = document.lastModified; 


const buttonElement = document.querySelector('#menu-js');
const navigationElement = document.querySelector('.nav-js');

buttonElement.addEventListener('click', () => {
	navigationElement.classList.toggle('open');
	buttonElement.classList.toggle('open');
});