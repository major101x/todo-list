import "./styles.css";
import { projectFactory } from "./modules/projectModule/projectFactory";
import { projectMenu } from "./components/projectMenu";
import {
  allTasksDisplay,
  todayTasksDisplay,
  upcomingTasksDisplay,
  overdueTasksDisplay,
} from "./screens";
import { addProjectModal, addTaskModal } from "./components/modals";

// Calls the projectFactory function to initialize the projects object
export const projects = projectFactory();

// Selects the all tasks button
const allTasksBtn = document.querySelector(".all-tasks-btn");

// Selects the today tasks button
const todayTasksBtn = document.querySelector(".today-tasks-btn");

// Selects the upcoming tasks button
const upcomingTasksBtn = document.querySelector(".upcoming-tasks-btn");

// Selects the overdue tasks button
const overdueTasksBtn = document.querySelector(".overdue-tasks-btn");

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
projects.editTodoInProject("nig", "mao", "description", "hi");
projects.editTodoInProject("nig", "brock", "checked", false);

/* Removes todos from the project */
projects.removeTodoFromProject("nig", "sissy");
console.log(projects.getTodosInProject("nig"));
console.log(projects.getProjects());

/* Tests general project functions */
console.log(projects.getAllTodos());
console.log(projects.getAllTodayTodos());
console.log(projects.getAllUpcomingTodos());
console.log(projects.getAllOverdueTodos());

console.log(projects.getProjects());

// Displays all tasks
allTasksBtn.addEventListener("click", () => {
  allTasksDisplay();
});

// Displays today's tasks
todayTasksBtn.addEventListener("click", () => {
  todayTasksDisplay();
});

// Displays upcoming tasks
upcomingTasksBtn.addEventListener("click", () => {
  upcomingTasksDisplay();
});

// Displays overdue tasks
overdueTasksBtn.addEventListener("click", () => {
  overdueTasksDisplay();
});

// Allows the creation of tasks
addTaskModal();

// Allows the creation on projects
addProjectModal();

// Calls the projectMenu function
projectMenu();
