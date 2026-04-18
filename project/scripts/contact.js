const yearElement = document.querySelector("#currentyear-js");
const year = new Date().getFullYear();

yearElement.textContent = year;

const modifiedElement = document.querySelector("#lastmodified-js");
modifiedElement.textContent = document.lastModified;


const form = document.getElementById("contactForm");

form?.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;

  localStorage.setItem("username", name);

  document.getElementById("message").textContent =
    `Thanks ${name}, your message has been saved!`;

  form.reset();
});