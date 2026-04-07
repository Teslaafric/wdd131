const lastModifiedElement = document.querySelector("#lastModified-js");
const yearElement = document.querySelector("#year-js");

const year = new Date().getFullYear();

yearElement.textContent = year;

lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;