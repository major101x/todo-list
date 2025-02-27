import editIcon from "./assets/icons/edit.svg";
import deleteIcon from "./assets/icons/delete.svg";

export const projectDisplay = (projectTitle, todoList, todoContainer) => {
  todoContainer.textContent = "";

  const todoHeader = document.createElement("div");
  todoHeader.classList.add("todo-header");
  todoContainer.appendChild(todoHeader);

  const projectTitleElement = document.createElement("h1");
  projectTitleElement.classList.add("project-title");
  projectTitleElement.textContent = projectTitle;
  todoHeader.appendChild(projectTitleElement);

  const numberOfTodos = document.createElement("p");
  numberOfTodos.classList.add("number-of-todos");
  numberOfTodos.textContent = `${todoList.length}`;
  todoHeader.appendChild(numberOfTodos);

  const todoListContainer = document.createElement("div");
  todoListContainer.classList.add("todo-list-container");
  todoContainer.appendChild(todoListContainer);

  todoList.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    if (todo.checked) {
      todoItem.classList.add("todo-item-checked");
    }
    todoListContainer.appendChild(todoItem);

    const todoItemLeft = document.createElement("div");
    todoItemLeft.classList.add("todo-item-left");
    todoItem.appendChild(todoItemLeft);

    const todoItemCheckbox = document.createElement("input");
    todoItemCheckbox.classList.add("todo-item-checkbox");
    todoItemCheckbox.type = "checkbox";
    todoItemCheckbox.checked = todo.checked;
    todoItemLeft.appendChild(todoItemCheckbox);

    const todoItemTitle = document.createElement("p");
    todoItemTitle.classList.add("todo-item-title");
    todoItemTitle.textContent = todo.title;
    todoItemLeft.appendChild(todoItemTitle);

    const todoItemDescription = document.createElement("p");
    todoItemDescription.classList.add("todo-item-description");
    todoItemDescription.textContent = todo.description;
    todoItem.appendChild(todoItemDescription);

    const todoItemRight = document.createElement("div");
    todoItemRight.classList.add("todo-item-right");
    todoItem.appendChild(todoItemRight);

    const todoItemDate = document.createElement("p");
    todoItemDate.classList.add("todo-item-date");
    todoItemDate.textContent = todo.dueDate;
    todoItemRight.appendChild(todoItemDate);

    const todoItemPriority = document.createElement("div");
    todoItemPriority.classList.add("todo-item-priority");
    todoItemPriority.classList.add(`${todo.priority}Priority-todo`);
    todoItemPriority.setAttribute("title", `${todo.priority} priority`);
    todoItemRight.appendChild(todoItemPriority);

    const todoItemEditButton = document.createElement("button");
    todoItemEditButton.classList.add("todo-item-edit");
    todoItemRight.appendChild(todoItemEditButton);

    const todoItemEditIcon = document.createElement("img");
    todoItemEditIcon.classList.add("todo-item-edit-icon");
    todoItemEditIcon.classList.add("icon");
    todoItemEditIcon.src = editIcon;
    todoItemEditButton.appendChild(todoItemEditIcon);

    const todoItemDeleteButton = document.createElement("button");
    todoItemDeleteButton.classList.add("todo-item-delete");
    todoItemRight.appendChild(todoItemDeleteButton);

    const todoItemDeleteIcon = document.createElement("img");
    todoItemDeleteIcon.classList.add("todo-item-delete-icon");
    todoItemDeleteIcon.classList.add("icon");
    todoItemDeleteIcon.src = deleteIcon;
    todoItemDeleteButton.appendChild(todoItemDeleteIcon);

    todoItemCheckbox.addEventListener("change", () => {
      todo.checked = todoItemCheckbox.checked;
      projectDisplay(projectTitle, todoList, todoContainer);
      console.log(todo);
    });
  });
};
