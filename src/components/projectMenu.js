import { projects } from "../index.js";
import { projectDisplay } from "./projectDisplay.js";
import projectIcon from "../assets/icons/project.svg";

export const projectMenu = () => {
  // Selects the projects menu
  const projectMenu = document.querySelector(".projects-container");

  // Gets the project list
  const projectList = projects.getProjects();

  // Iterates over the project list and creates a button for each project
  projectList.forEach((project) => {
    const projectItem = document.createElement("button");
    projectItem.classList.add("project-item");
    projectMenu.appendChild(projectItem);

    const projectItemLeft = document.createElement("div");
    projectItemLeft.classList.add("project-item-left");
    projectItem.appendChild(projectItemLeft);

    const projectIconElem = document.createElement("img");
    projectIconElem.classList.add("icon");
    projectIconElem.src = projectIcon;
    projectItemLeft.appendChild(projectIconElem);

    const projectItemTitle = document.createElement("div");
    projectItemTitle.classList.add("project-item-title");
    projectItemTitle.textContent = project.title;
    projectItemLeft.appendChild(projectItemTitle);

    const todosLength = document.createElement("span");
    todosLength.classList.add("todo-length");
    todosLength.textContent = project.todoList.getTodos().length;
    projectItem.appendChild(todosLength);

    // Event listener to display the project's todos when clicked
    projectItem.addEventListener("click", () => {
      const todoList = projects.getTodosInProject(project.title);
      const todoContainer = document.querySelector(".todo-container");
      projectDisplay(project.title, todoList, todoContainer);
    });
  });
};
