import "./styles.css";
import { projectFactory } from "./projectFactory";

const projects = projectFactory();
const project = projects.createProject("nig");

project.todoList.addTodo({
  title: "do sished",
  description: "just do the dishes",
  dueDate: "tomorrow",
  priority: "high",
  checked: true,
});
project.todoList.addTodo({
  title: "mao",
  description: "just do the dishes",
  dueDate: "tomorrow",
  checked: false,
});
project.todoList.addTodo({
  title: "sissy",
  description: "just do the dishes",
  dueDate: "today",
  checked: true,
});
project.todoList.addTodo({
  title: "brock",
  description: "simpson",
  dueDate: "today",
  checked: true,
});
project.todoList.editTodo("mao", "description", "hi");
project.todoList.editTodo("brock", "checked", false);

project.todoList.removeTodo("sissy");
project.todoList.printTodos();

projects.printProjects();
