import "./styles.css";
import { projectFactory } from "./modules/projectModule/projectFactory";
import { projectMenu } from "./components/projectMenu";
import { addProjectModal, addTaskModal, openModal } from "./components/modals";
import { todoMenu } from "./components/todoMenu";
import { todoDisplay } from "./components/todoDisplay";

// Calls the projectFactory function to initialize the projects object
export const projects = projectFactory();

const addTaskModalElem = document.querySelector("#add-task-modal");
const addTaskBtn = document.querySelector(".add-task-btn");

const addProjectModalElem = document.querySelector("#add-project-modal");
const addProjectBtn = document.querySelector(".add-project-btn");

/* TEST CODE. WILL BE REWRITTEN AFTER DEVELOPMENT PROCESS */

// Creates a project
const nig = projects.createProject("nig");
const silo = projects.createProject("silo");
const prop = projects.createProject("prop");

/* Adds todos to the project */
projects.addTodoToProject("nig", {
  title: "do sished",
  description: "just do the dishes",
  dueDate: "2025-02-19",
  priority: "high",
  checked: true,
});
projects.addTodoToProject("nig", {
  title: "mao",
  description: "just do the dishes",
  dueDate: "2025-02-17",
  priority: "low",
  checked: false,
});
projects.addTodoToProject("nig", {
  title: "sissy",
  description: "just do the dishes",
  dueDate: "2025-02-27",
  priority: "medium",
  checked: true,
});
projects.addTodoToProject("nig", {
  title: "brock",
  description: "I don't know man",
  dueDate: "2025-02-13",
  priority: "none",
  checked: true,
});

projects.addTodoToProject("silo", {
  title: "cross",
  description: "there is a cross",
  dueDate: "2025-02-17",
  priority: "low",
  checked: false,
});
projects.addTodoToProject("prop", {
  title: "mag",
  description: "mag as in magnificient",
  dueDate: "2025-02-27",
  priority: "medium",
  checked: true,
});
projects.addTodoToProject("silo", {
  title: "truly",
  description: "lorem ipsum dollar sit on it",
  dueDate: "2025-02-13",
  priority: "none",
  checked: true,
});

/* Edits todos in the project */
projects.editTodoInProject("nig", "mao", { description: "hi" });
projects.editTodoInProject("nig", "brock", { checked: false });

/* Removes todos from the project */
projects.removeTodoFromProject("nig", "sissy");

addTaskBtn.addEventListener("click", () => {
  openModal(addTaskModalElem);
  addTaskModal();
});

addProjectBtn.addEventListener("click", () => {
  openModal(addProjectModalElem);
  addProjectModal();
});
// Displays all Todos on load
todoDisplay(projects.getAllTodos(), "All Tasks");

projects.fetchFromLocalStorage();

// Displays the todo menu
todoMenu();

// Displays the project menu
projectMenu();