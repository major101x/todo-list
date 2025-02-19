import { projects } from "./index.js";
import { projectDisplay } from "./projectDisplay.js";

export const projectMenu = () => {
  const projectMenu = document.querySelector(".projects-menu");

  const projectList = projects.getProjects();

  projectList.forEach((project) => {
    const projectItem = document.createElement("button");
    projectItem.classList.add("project-item");
    projectItem.textContent = project.title;
    projectMenu.appendChild(projectItem);

    projectItem.addEventListener("click", () => {
      const todoList = projects.getTodosInProject(project.title);
      const todoContainer = document.querySelector(".todo-container");
      projectDisplay(project.title, todoList, todoContainer);
    });
  });
};
