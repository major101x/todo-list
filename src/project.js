import { todoFactory } from "./todoFactory";
export default class Project {
  constructor(title) {
    this.title = title;
    this.todoList = todoFactory();
  }
}
