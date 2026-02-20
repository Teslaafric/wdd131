const year = document.querySelector('#currentyear-js');
year.textContent = new Date().getFullYear();

const modified = document.querySelector('#lastmodified-js');
modified.textContent = `Last Modified: ${document.lastModified}`;
