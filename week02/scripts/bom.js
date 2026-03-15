
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const unorderedElement = document.querySelector("#list");

const bom = ["1 Nephi", "2 Nephi", "Jacob", "Enos", "Jarom", "Omni", "Words of mormon", "Mosiah", "Alma", "Helaman", "3 Nephi", "4 Nephi", "Mormon", "Ether", "Moroni"];

let count = 0

buttonElement.addEventListener("click", ()=> {
  if (inputElement.value !== "") {
    inputElement.focus();
    bom.forEach(book => {
      if (book === inputElement.value) {
        count +=1;

        if (count <= 10) {
          const listElement = document.createElement("li"); 
          const deleteElement = document.createElement("button");

          listElement.textContent = inputElement.value;
          deleteElement.textContent = "❌";
          deleteElement.setAttribute("aria-label", "close");

          listElement.append(deleteElement);
          unorderedElement.appendChild(listElement);
        
          deleteElement.addEventListener("click", ()=> {
          listElement.remove();
          });
        }
        
      }
      else {
        console.log("Enter Book of Mormon Scripture.")
      }
       
    });
    inputElement.value = "";
    inputElement.focus();
  }
    
});









