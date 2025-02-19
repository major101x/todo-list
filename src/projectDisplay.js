export const projectDisplay = (projectTitle, todoList, todoContainer) => {
  todoContainer.textContent = "";

  const todoHeader = document.createElement("h1");
  todoHeader.classList.add("todo-header");
  todoHeader.textContent = projectTitle;
  todoContainer.appendChild(todoHeader);

  const todoListContainer = document.createElement("div");
  todoListContainer.classList.add("todo-list-container");
  todoContainer.appendChild(todoListContainer);

  todoList.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.textContent = todo.title;
    todoListContainer.appendChild(todoItem);
  });
};
