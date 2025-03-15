import { todoDisplay } from "./todoDisplay";
import { projects } from "./index.js";

export const todayTasksDisplay = () => {
  // Gets all todos in all projects
  const todoList = projects.getAllTodayTodos();

  // Selects the todo container and clears it
  const todoContainer = document.querySelector(".todo-container");
  todoContainer.textContent = "";

  // Create and append the todo header section
  const todoHeader = document.createElement("div");
  todoHeader.classList.add("todo-header");
  todoContainer.appendChild(todoHeader);

  // Display todo title
  const TodoListTitleElement = document.createElement("h1");
  TodoListTitleElement.classList.add("project-title");
  TodoListTitleElement.textContent = "Today's Tasks";
  todoHeader.appendChild(TodoListTitleElement);

  // Display the number of todos in the project
  const numberOfTodos = document.createElement("p");
  numberOfTodos.classList.add("number-of-todos");
  numberOfTodos.textContent = `${todoList.length}`;
  todoHeader.appendChild(numberOfTodos);

  todoDisplay(todoList, todoContainer);
};