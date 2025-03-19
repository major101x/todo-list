import { projects } from "../index";
import { projectDisplay } from "./projectDisplay";
import { todoDisplay } from "./todoDisplay";

const openModal = (modal) => {
  modal.showModal();
};

const closeModal = (modal) => {
  modal.close();
};

export const addTaskModal = () => {
  const addTaskModalElem = document.querySelector("#add-task-modal");
  const addTaskBtn = document.querySelector(".add-task-btn");
  const closeAddTaskModalBtn = document.querySelector(".add-task-cancel");
  const titleInput = document.querySelector("#task-title");
  const descriptionInput = document.querySelector("#task-description");
  const dueDateInput = document.querySelector("#due-date");
  const taskPrioritySelect = document.querySelector("#task-priority");
  const taskProjectSelect = document.querySelector("#task-project");
  const confirmBtn = document.querySelector(".add-task-confirm");
  const todoContainer = document.querySelector(".todo-container");
  const allInputs = document.querySelectorAll("#add-task-modal input");

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

  // Opens the add task modal
  addTaskBtn.addEventListener("click", () => openModal(addTaskModalElem));

  // Closes the add task modal
  closeAddTaskModalBtn.addEventListener("click", () =>
    closeModal(addTaskModalElem)
  );

  // Creates a new todo and re-renders the project display
  confirmBtn.addEventListener("click", () => {
    projects.addTodoToProject(taskProjectSelect.value, {
      title: titleInput.value,
      description: descriptionInput.value,
      dueDate: dueDateInput.value,
      priority: taskPrioritySelect.value,
      checked: false,
    });
    projectDisplay(
      taskProjectSelect.value,
      projects.getTodosInProject(taskProjectSelect.value),
      todoContainer
    );
    closeModal(addTaskModalElem);

    // Reset all inputs
    allInputs.forEach((input) => (input.value = ""));
    taskPrioritySelect.value = "none";
  });
};

export const addProjectModal = () => {
  const addProjectModalElem = document.querySelector("#add-project-modal");
  const addProjectBtn = document.querySelector(".add-project-btn");
  const closeAddProjectModalBtn = document.querySelector(".add-project-cancel");

  // Opens the add project modal
  addProjectBtn.addEventListener("click", () => openModal(addProjectModalElem));

  // Closes the add project modal
  closeAddProjectModalBtn.addEventListener("click", () =>
    closeModal(addProjectModalElem)
  );
};
