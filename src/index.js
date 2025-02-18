import "./styles.css";
import { projectFactory } from "./projectFactory";
import { projectMenu } from "./projectMenu";

export const projects = projectFactory();
const project = projects.createProject("nig");

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
projects.editTodoInProject("nig", "mao", "description", "hi");
projects.editTodoInProject("nig", "brock", "checked", false);

projects.removeTodoFromProject("nig", "sissy");
console.log(projects.getTodosInProject("nig"));

console.log(projects.getAllTodos());
console.log(projects.getAllTodayTodos());
console.log(projects.getAllUpcomingTodos());
console.log(projects.getAllOverdueTodos());

console.log(projects.getProjects());
projectMenu();
