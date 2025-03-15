import "./styles.css";
import { projectFactory } from "./projectFactory";
import { projectMenu } from "./projectMenu";
import { allTasksDisplay } from "./allTasksDisplay";

// Calls the projectFactory function to initialize the projects object
export const projects = projectFactory();

// Selects the all tasks button
const allTasksBtn = document.querySelector(".all-tasks-btn");

/* TEST CODE. WILL BE REWRITTEN AFTER DEVELOPMENT PROCESS */

// Creates a project
const project = projects.createProject("nig");

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

/* Edits todos in the project */
projects.editTodoInProject("nig", "mao", "description", "hi");
projects.editTodoInProject("nig", "brock", "checked", false);

/* Removes todos from the project */
projects.removeTodoFromProject("nig", "sissy");
console.log(projects.getTodosInProject("nig"));

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

// Calls the projectMenu function
projectMenu();
