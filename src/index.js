import "./styles.css";
import { todoModule } from "./todoModule";

todoModule.printTodos();
todoModule.addTodo({
  title: "do sished",
  description: "just do the dishes",
  dueDate: "tomorrow",
  priority: "high",
});
todoModule.addTodo({
  title: "mao",
  description: "just do the dishes",
  dueDate: "tomorrow",
});
todoModule.addTodo({
  title: "sissy",
  description: "just do the dishes",
  dueDate: "today",
});
todoModule.editTodo("mao", "description", "hi");

todoModule.removeTodo("sissy");
todoModule.printTodos();
