import "./styles.css";
import { projectFactory } from "./projectFactory";

const projects = projectFactory();
const project = projects.createProject("nig");

projects.addTodoToProject("nig", {
  title: "do sished",
  description: "just do the dishes",
  dueDate: "tomorrow",
  priority: "high",
  checked: true,
});
projects.addTodoToProject("nig", {
  title: "mao",
  description: "just do the dishes",
  dueDate: "tomorrow",
  checked: false,
});
projects.addTodoToProject("nig", {
  title: "sissy",
  description: "just do the dishes",
  dueDate: "today",
  checked: true,
});
projects.addTodoToProject("nig", {
  title: "brock",
  description: "simpson",
  dueDate: "today",
  checked: true,
});
projects.editTodoInProject("nig", "mao", "description", "hi");
projects.editTodoInProject("nig", "brock", "checked", false);

projects.removeTodoFromProject("nig", "sissy");
console.log(projects.getTodosInProject("nig"));

projects.printProjects();
