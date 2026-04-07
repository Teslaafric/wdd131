let yearElement = document.querySelector("#currentyear-js");
const today = new Date().getFullYear();
yearElement.textContent = today;

const modifiedElement = document.querySelector("#lastmodified-js");
modifiedElement.textContent = `Last Modified: ${document.lastModified}`; 


const buttonElement = document.querySelector('#menu-js');
const navigationElement = document.querySelector('.nav-js');

buttonElement.addEventListener('click', () => {
  navigationElement.classList.toggle('open');

  if (navigationElement.classList.contains('open')) {
    buttonElement.textContent = '✖';
  } else {
    buttonElement.textContent = '☰'; 
  }
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
	{
    templeName: "Abidjan Ivory Coast",
    location: "Abidjan, Ivory Coast",
    dedicated: "2025, May, 25",
    area: 17362,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-1108.jpg"
	},
	{
    templeName: "Vernal Utah",
    location: "Vernal, Utah, United States",
    dedicated: "1997, November, 4",
    area: 38771,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/vernal-utah-temple/vernal-utah-temple-63191.jpg"
	}, 
	{
    templeName: "Bangkok Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2023, October, 22",
    area: 48525,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037.jpg"}]


const templeElement = document.querySelector(".temple-container-js");
const navLinksElement = document.querySelectorAll(".nav-link");

navLinksElement.forEach((link) => {
	link.addEventListener("click", function (e){
		e.preventDefault();

		navLinksElement.forEach((l) => {
			l.classList.remove("active");
		})

		this.classList.add("active");

		const filter = this.getAttribute("data-filter");
    filterTemples(filter);
	});
});

function filterTemples(filter) {
  let filteredTemples = temples; 
	if (filter === "home") {
    filteredTemples = temples;
  } else if (filter === "old") {
    filteredTemples = temples.filter((temple) => {
      return new Date(temple.dedicated).getFullYear() < 1900;
    });
  } else if (filter === "new") {
    filteredTemples = temples.filter((temple) => {
      return new Date(temple.dedicated).getFullYear() > 2000;
    });
  } else if (filter === "large") {
    filteredTemples = temples.filter((temple) => {
      return temple.area > 90000;
    });
  } else if (filter === "small") {
    filteredTemples = temples.filter((temple) => {
      return temple.area < 10000;
    });
  }

	 displayTemples(filteredTemples);
}



displayTemples(temples);

function displayTemples(temples) {
	let templeCards = "";

	temples.forEach((temple) => {
		const name = temple.templeName;
		const location = temple.location;
		const dedicated = temple.dedicated;
		const area = temple.area;
		const image = temple.imageUrl;

		templeCards +=
		`	<section class="temple-card">
				<h2>${name}</h2>
				<p><strong>Location:</strong> ${location}</p>
				<p><strong>Dedicated:</strong> ${dedicated}</p>
				<p><strong>Area:</strong> ${area.toLocaleString()} sq ft</p>
				<img src="${image}"  alt="${name} Temple" loading="lazy">
			</section>
		`;
});

templeElement.innerHTML = templeCards;

}
