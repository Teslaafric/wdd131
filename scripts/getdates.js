const yearElement = document.querySelector("#currentyear-js");
const year = new Date().getFullYear();

yearElement.textContent = year;

const modifiedElement = document.querySelector("#lastmodified-js");
modifiedElement.textContent = document.lastModified;