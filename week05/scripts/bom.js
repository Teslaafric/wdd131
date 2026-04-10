
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const unorderedElement = document.querySelector("#list");

const bom = ["1 Nephi", "2 Nephi", "Jacob", "Enos", "Jarom", "Omni", "Words of Mormon", "Mosiah", "Alma", "Helaman", "3 Nephi", "4 Nephi", "Mormon", "Ether", "Moroni"];

let count = 0

let chaptersArray = getChapterList();

if (chaptersArray === null) {
  chaptersArray = [];
}

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

buttonElement.addEventListener("click", () => {
  const value = inputElement.value.trim();

  if (value === "") return;

  if (!bom.includes(value)) {
    console.log("Enter Book of Mormon Scripture.");
    return;
  }

  if (count >= 10) return;

  displayList(value);
  chaptersArray.push(value);
  setChapterList();

  inputElement.value = "";
  inputElement.focus();
});

function displayList(item) {
    if (count >= 10) return;
    count ++;

    const listElement = document.createElement("li"); 
    const deleteElement = document.createElement("button");

    listElement.textContent = item;
    deleteElement.textContent = "❌";
    deleteElement.setAttribute("aria-label", "close");

    listElement.append(deleteElement);
    unorderedElement.appendChild(listElement);
  
    deleteElement.addEventListener("click", ()=> {
    listElement.remove();
    deleteChapter(item);
    count--;
    });
}

function setChapterList() {
  localStorage.setItem('myBomList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myBomList'));
}

function deleteChapter(chapter) {
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}

