const yearElement = document.querySelector("#currentyear-js");
const year = new Date().getFullYear();

yearElement.textContent = year;

const modifiedElement = document.querySelector("#lastmodified-js");
modifiedElement.textContent = document.lastModified;

const projects = [
  { name: "Temple App", year: 2024, type: "web" },
  { name: "Review Form", year: 2025, type: "form" },
  { name: "Portfolio", year: 2026, type: "web" }
];

function displayProjects(list) {
  const container = document.getElementById("projectContainer");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(project => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${project.name}</h3>
      <p>Year: ${project.year}</p>
      <p>Type: ${project.type}</p>
    `;

    container.appendChild(div);
  });
}
function showRecent() {
  const filtered = projects.filter(p => p.year >= 2025);
  displayProjects(filtered);
}

function showAll() {
  displayProjects(projects);
}

document.getElementById("recentBtn")?.addEventListener("click", showRecent);
document.getElementById("allBtn")?.addEventListener("click", showAll);

displayProjects(projects);