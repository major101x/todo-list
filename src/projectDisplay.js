import { todoDisplay } from "./todoDisplay";

export const projectDisplay = (projectTitle, todoList, todoContainer) => {
  // Clear previous content
  todoContainer.textContent = "";

  // Create and append the todo header section
  const todoHeader = document.createElement("div");
  todoHeader.classList.add("todo-header");
  todoContainer.appendChild(todoHeader);

  // Display project title
  const projectTitleElement = document.createElement("h1");
  projectTitleElement.classList.add("project-title");
  projectTitleElement.textContent = projectTitle;
  todoHeader.appendChild(projectTitleElement);

  // Display the number of todos in the project
  const numberOfTodos = document.createElement("p");
  numberOfTodos.classList.add("number-of-todos");
  numberOfTodos.textContent = `${todoList.length}`;
  todoHeader.appendChild(numberOfTodos);

  todoDisplay(todoList, todoContainer);
};
