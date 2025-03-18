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

  // Opens the add task modal
  addTaskBtn.addEventListener("click", () => openModal(addTaskModalElem));

  // Closes the add task modal
  closeAddTaskModalBtn.addEventListener("click", () =>
    closeModal(addTaskModalElem)
  );
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
