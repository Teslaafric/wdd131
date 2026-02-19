const year = document.querySelector('#currentYear-js');
year.textContent = new Date().getFullYear();

const modified = document.querySelector('#lastModified-js');
modified.textContent = `Last Modified: ${document.lastModified}`;