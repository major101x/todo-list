import { projects } from "../index.js";
import { projectDisplay } from "./projectDisplay.js";

export const projectMenu = () => {
  // Selects the projects menu
  const projectMenu = document.querySelector(".projects-menu");

  // Gets the project list
  const projectList = projects.getProjects();

  // Iterates over the project list and creates a button for each project
  projectList.forEach((project) => {
    const projectItem = document.createElement("button");
    projectItem.classList.add("project-item");
    projectItem.textContent = project.title;
    projectMenu.appendChild(projectItem);

    // Event listener to display the project's todos when clicked
    projectItem.addEventListener("click", () => {
      const todoList = projects.getTodosInProject(project.title);
      const todoContainer = document.querySelector(".todo-container");
      projectDisplay(project.title, todoList, todoContainer);
    });
  });
};
