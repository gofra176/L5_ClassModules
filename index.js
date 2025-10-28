import { ITProject } from "./ITProject.js";

const project1 = new ITProject("CRM-система", 50000, true, true);
const project2 = new ITProject("Мобильное приложение", 30000, false, false);
const projects = [project1, project2];

const container = document.getElementById("projectContainer");

function renderProjects() {
  container.innerHTML = "";

  projects.forEach((p, i) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <h2>Проект ${i + 1}: ${p.name}</h2>
      <p><strong>Бюджет:</strong> ${p.budget} $</p>
      <p><strong>Активен:</strong> ${p.isActive ? "Да" : "Нет"}</p>
      <p><strong>Веб-проект:</strong> ${p.isWebBased ? "Да" : "Нет"}</p>
    `;

    container.appendChild(card);
  });
}

renderProjects();
