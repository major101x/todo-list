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
    todoItem.textContent = todo.title;
    todoListContainer.appendChild(todoItem);
  });
};
