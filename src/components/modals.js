import { projects } from "../index";
import { projectMenu } from "./projectMenu";
import { todoDisplay } from "./todoDisplay";

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

  // Creates a new todo and re-renders the project display
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
