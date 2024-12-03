import "./styles.css";
import { projectFactory } from "./projectFactory";

const projects = projectFactory();
const project = projects.createProject("nig");

project.todoList.printTodos();
project.todoList.addTodo({
  title: "do sished",
  description: "just do the dishes",
  dueDate: "tomorrow",
  priority: "high",
});
project.todoList.addTodo({
  title: "mao",
  description: "just do the dishes",
  dueDate: "tomorrow",
});
project.todoList.addTodo({
  title: "sissy",
  description: "just do the dishes",
  dueDate: "today",
});
project.todoList.editTodo("mao", "description", "hi");

project.todoList.removeTodo("sissy");
project.todoList.printTodos();

projects.printProjects();
