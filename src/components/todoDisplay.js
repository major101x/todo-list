import editIcon from "../assets/icons/edit.svg";
import deleteIcon from "../assets/icons/delete.svg";
import { editTaskModal, openModal } from "./modals";

export const todoDisplay = (todoList, todoTitle) => {
  // Select the todo container
  const todoContainer = document.querySelector(".todo-container");

  // Clear previous content
  todoContainer.textContent = "";

  // Create and append the todo header section
  const todoHeader = document.createElement("div");
  todoHeader.classList.add("todo-header");
  todoContainer.appendChild(todoHeader);

  // Display project title
  const todoTitleElement = document.createElement("h1");
  todoTitleElement.classList.add("project-title");
  todoTitleElement.textContent = todoTitle;
  todoHeader.appendChild(todoTitleElement);

  // Display the number of todos in the project
  const numberOfTodos = document.createElement("p");
  numberOfTodos.classList.add("number-of-todos");
  numberOfTodos.textContent = `${todoList.length}`;
  todoHeader.appendChild(numberOfTodos);

  // Create container for todo items
  const todoListContainer = document.createElement("div");
  todoListContainer.classList.add("todo-list-container");
  todoContainer.appendChild(todoListContainer);

  // Iterate over todos and render each one
  todoList.forEach((todo) => {
    // Create and append the todo item
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    // Conditional to add a class to visually indicate that the todo is checked
    if (todo.checked) {
      todoItem.classList.add("todo-item-checked");
    }
    todoListContainer.appendChild(todoItem);

    // Left section: Checkbox and title
    const todoItemLeft = document.createElement("div");
    todoItemLeft.classList.add("todo-item-left");
    todoItem.appendChild(todoItemLeft);

    // Checkbox to mark todo as completed
    const todoItemCheckbox = document.createElement("input");
    todoItemCheckbox.classList.add("todo-item-checkbox");
    todoItemCheckbox.type = "checkbox";
    todoItemCheckbox.checked = todo.checked;
    todoItemLeft.appendChild(todoItemCheckbox);

    // Todo title
    const todoItemTitle = document.createElement("p");
    todoItemTitle.classList.add("todo-item-title");
    todoItemTitle.textContent = todo.title;
    todoItemLeft.appendChild(todoItemTitle);

    // Description section
    const todoItemDescription = document.createElement("p");
    todoItemDescription.classList.add("todo-item-description");
    todoItemDescription.textContent = todo.description;
    todoItem.appendChild(todoItemDescription);

    // Right section: Due date, priority, edit, and delete buttons
    const todoItemRight = document.createElement("div");
    todoItemRight.classList.add("todo-item-right");
    todoItem.appendChild(todoItemRight);

    // Due date display
    const todoItemDate = document.createElement("p");
    todoItemDate.classList.add("todo-item-date");
    todoItemDate.textContent = todo.dueDate;
    todoItemRight.appendChild(todoItemDate);

    // Priority indicator
    const todoItemPriority = document.createElement("div");
    todoItemPriority.classList.add("todo-item-priority");
    todoItemPriority.classList.add(`${todo.priority}Priority-todo`);
    todoItemPriority.setAttribute("title", `${todo.priority} priority`);
    todoItemRight.appendChild(todoItemPriority);

    // Edit button
    const todoItemEditButton = document.createElement("button");
    todoItemEditButton.classList.add("todo-item-edit");
    todoItemRight.appendChild(todoItemEditButton);

    // Edit icon inside the button
    const todoItemEditIcon = document.createElement("img");
    todoItemEditIcon.classList.add("todo-item-edit-icon");
    todoItemEditIcon.classList.add("icon");
    todoItemEditIcon.src = editIcon;
    todoItemEditButton.appendChild(todoItemEditIcon);

    // Delete button
    const todoItemDeleteButton = document.createElement("button");
    todoItemDeleteButton.classList.add("todo-item-delete");
    todoItemRight.appendChild(todoItemDeleteButton);

    // Delete icon inside the button
    const todoItemDeleteIcon = document.createElement("img");
    todoItemDeleteIcon.classList.add("todo-item-delete-icon");
    todoItemDeleteIcon.classList.add("icon");
    todoItemDeleteIcon.src = deleteIcon;
    todoItemDeleteButton.appendChild(todoItemDeleteIcon);

    // Event listener to open the edit modal to edit a todo
    todoItemEditButton.addEventListener("click", () => {
      const editTaskModalElem = document.querySelector("#edit-task-modal");
      openModal(editTaskModalElem);
      editTaskModal(todo);
    });

    console.log(todoList);

    // Event listener to update the checked status and refresh the UI
    todoItemCheckbox.addEventListener("change", () => {
      todo.checked = todoItemCheckbox.checked;
      todoDisplay(todoList, todoTitle);
      console.log(todo);
    });
  });
};
