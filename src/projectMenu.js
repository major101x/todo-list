import { projects } from "./index.js";

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
      todoContainer.textContent = "";

      todoList.forEach((todo) => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.textContent = todo.title;
        todoContainer.appendChild(todoItem);
      });
    });
  });
};
