import { projects } from "../index.js";
import projectIcon from "../assets/icons/project.svg";
import { todoDisplay } from "./todoDisplay.js";

export const projectMenu = () => {
  // Selects the projects menu
  const projectMenu = document.querySelector(".projects-container");

  // Clears previous content before new render
  projectMenu.textContent = "";

  // Gets the project list
  const projectList = projects.getProjects();

  // Iterates over the project list and creates a button for each project
  projectList.forEach((project) => {
    const projectItem = document.createElement("button");
    projectItem.classList.add("project-item");
    projectItem.classList.add(project.title);
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

    const todoTitleElement = document.querySelector(".project-title");

    // Sets menuItem to active if it matches todoHeader textContent
    if (todoTitleElement.textContent === projectItemTitle.textContent) {
      document
        .querySelectorAll(".task-item")
        .forEach((btn) => btn.classList.remove("active"));
      document
        .querySelectorAll(".project-item")
        .forEach((btn) => btn.classList.remove("active"));

      projectItem.classList.add("active");
    }

    // Event listener to display the project's todos when clicked
    projectItem.addEventListener("click", () => {
      // Remove "active" from all task and project items
      document
        .querySelectorAll(".task-item")
        .forEach((btn) => btn.classList.remove("active"));
      document
        .querySelectorAll(".project-item")
        .forEach((btn) => btn.classList.remove("active"));

      // Add "active" to the clicked task item
      projectItem.classList.add("active");
      const todoList = projects.getTodosInProject(project.title);
      todoDisplay(todoList, project.title);
    });
  });
};
