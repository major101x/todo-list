import { todoFactory } from "./todoFactory";
export default class Project {
  constructor(title) {
    this.title = title;

    // Initialize the todo list using the factory function
    this.todoList = todoFactory();
  }
}
