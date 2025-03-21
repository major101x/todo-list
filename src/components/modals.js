import { projects } from "../index";
import { projectMenu } from "./projectMenu";
import { todoDisplay } from "./todoDisplay";
import { todoMenu } from "./todoMenu";

export const openModal = (modal) => {
  modal.showModal();
};

export const closeModal = (modal) => {
  modal.close();
};

export const addTaskModal = () => {
  const addTaskModalElem = document.querySelector("#add-task-modal");
  const closeAddTaskModalBtn = document.querySelector(".add-task-cancel");
  const titleInput = document.querySelector("#task-title");
  const descriptionInput = document.querySelector("#task-description");
  const dueDateInput = document.querySelector("#due-date");
  const taskPrioritySelect = document.querySelector("#task-priority");
  const taskProjectSelect = document.querySelector("#task-project");
  const confirmBtn = document.querySelector(".add-task-confirm");
  const todoContainer = document.querySelector(".todo-container");
  const allInputs = document.querySelectorAll("#add-task-modal input");
  const addTaskForm = document.querySelector("#add-task-modal form");

  // Gets the project titles
  const taskProjectSelectOptions = projects
    .getProjects()
    .map((project) => project.title);

  // Creates a new select option for each project title
  taskProjectSelectOptions.forEach((project) => {
    const projectOption = document.createElement("option");
    projectOption.textContent = project;
    taskProjectSelect.appendChild(projectOption);
  });

  // Closes the add task modal
  closeAddTaskModalBtn.addEventListener("click", () =>
    closeModal(addTaskModalElem)
  );

  // Creates a new todo and re-renders the todoList
  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (!addTaskForm.checkValidity()) {
      addTaskForm.reportValidity();
      return;
    }
    projects.addTodoToProject(taskProjectSelect.value, {
      title: titleInput.value,
      description: descriptionInput.value,
      dueDate: dueDateInput.value,
      priority: taskPrioritySelect.value,
      checked: false,
    });
    todoDisplay(
      projects.getTodosInProject(taskProjectSelect.value),
      taskProjectSelect.value
    );
    closeModal(addTaskModalElem);

    // Reset all inputs
    allInputs.forEach((input) => (input.value = ""));
    taskPrioritySelect.value = "none";
  });
};

export const addProjectModal = () => {
  const addProjectModalElem = document.querySelector("#add-project-modal");
  const closeAddProjectModalBtn = document.querySelector(".add-project-cancel");
  const projectTitleInput = document.querySelector("#project-title");
  const confirmBtn = document.querySelector(".add-project-confirm");
  const projectMenuDiv = document.querySelector(".projects-container");
  const addProjectForm = document.querySelector("#add-project-modal form");

  // Closes the add project modal
  closeAddProjectModalBtn.addEventListener("click", () => {
    closeModal(addProjectModalElem);
  });

  // Creates a new project,clears inputs and re-renders the project menu
  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (!addProjectForm.checkValidity()) {
      addProjectForm.reportValidity();
      return;
    }
    projects.createProject(projectTitleInput.value);
    closeModal(addProjectModalElem);
    projectTitleInput.value = "";
    projectMenuDiv.textContent = "";
    projectMenu();
  });
};

export const editTaskModal = (todoObject) => {
  const editTaskModalElem = document.querySelector("#edit-task-modal");
  const closeEditTaskModalBtn = document.querySelector(".edit-task-cancel");
  const titleInput = document.querySelector("#edit-task-modal #task-title");
  const descriptionInput = document.querySelector(
    "#edit-task-modal #task-description"
  );
  const dueDateInput = document.querySelector("#edit-task-modal #due-date");
  const taskPrioritySelect = document.querySelector(
    "#edit-task-modal #task-priority"
  );
  const taskProjectSelect = document.querySelector(
    "#edit-task-modal #task-project"
  );
  const confirmBtn = document.querySelector(".edit-task-confirm");
  const todoContainer = document.querySelector(".todo-container");
  const allInputs = document.querySelectorAll("#edit-task-modal input");
  const editTaskForm = document.querySelector("#edit-task-modal form");

  // Gets the project titles
  const taskProjectSelectOptions = projects
    .getProjects()
    .map((project) => project.title);

  // Creates a new select option for each project title
  taskProjectSelectOptions.forEach((project) => {
    const projectOption = document.createElement("option");
    projectOption.textContent = project;
    taskProjectSelect.appendChild(projectOption);
  });

  // Sets the input values to the todo object values
  titleInput.value = todoObject.title;
  descriptionInput.value = todoObject.description;
  dueDateInput.value = todoObject.dueDate;
  taskPrioritySelect.value = todoObject.priority;

  // Gets the parent project of the todo
  const parentProject = projects.getTodoParentProject(todoObject.title);

  // Gets the parent project of the todo and sets the select to the received value
  taskProjectSelect.value = parentProject;

  // Edits todo and re-renders the todoList
  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (!editTaskForm.checkValidity()) {
      editTaskForm.reportValidity();
      return;
    }

    if (parentProject === taskProjectSelect.value) {
      projects.editTodoInProject(parentProject, todoObject.title, {
        title: titleInput.value,
        description: descriptionInput.value,
        dueDate: dueDateInput.value,
        priority: taskPrioritySelect.value,
      });
      todoDisplay(projects.getTodosInProject(parentProject), parentProject);
    } else {
      projects.removeTodoFromProject(parentProject, todoObject.title);
      projects.addTodoToProject(taskProjectSelect.value, {
        title: titleInput.value,
        description: descriptionInput.value,
        dueDate: dueDateInput.value,
        priority: taskPrioritySelect.value,
      });
      todoDisplay(
        projects.getTodosInProject(taskProjectSelect.value),
        taskProjectSelect.value
      );
      todoMenu();
      projectMenu();
    }

    closeModal(editTaskModalElem);
  });

  // Closes the add task modal
  closeEditTaskModalBtn.addEventListener("click", () =>
    closeModal(editTaskModalElem)
  );
};

export const deleteTodoModal = (todo) => {
  const deleteTodoModalElem = document.querySelector("#delete-todo-modal");
  const todoNameSpan = document.querySelector("#delete-todo-modal .todo-name");
  const cancelBtn = document.querySelector("#delete-todo-modal .cancel-btn");
  const deleteBtn = document.querySelector("#delete-todo-modal .delete-btn");

  // Sets the todoName to the todo title
  todoNameSpan.textContent = todo.title;

  // Gets the parent project of the todo
  const parentProject = projects.getTodoParentProject(todo.title);

  deleteBtn.addEventListener("click", () => {
    projects.removeTodoFromProject(parentProject, todo.title);
    todoDisplay(projects.getTodosInProject(parentProject), parentProject);

    todoMenu();
    projectMenu();
    closeModal(deleteTodoModalElem);
  });

  // Closes the delete todo modal
  cancelBtn.addEventListener("click", () => closeModal(deleteTodoModalElem));
};
