const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');




buttonElement.addEventListener('click', () => {
  if (inputElement.value.trim() !== '') {
const itemElement = document.createElement('li');
const deleteElement = document.createElement('button');


itemElement.textContent = inputElement.value;
inputElement.value = '';
inputElement.focus();

deleteElement.textContent = '❌';
deleteElement.setAttribute('aria-label', 'Close');

itemElement.append(deleteElement);
listElement.append(itemElement);


deleteElement.addEventListener('click', () => { listElement.removeChild(itemElement);})




}});



