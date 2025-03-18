import Todo from "./todo";

// Factory function for managing a collection of todo instances
export const todoFactory = () => {
  const todos = [];

  // Returns all todos
  const getTodos = () => todos;

  // Logs all todos to the console
  const printTodos = () => console.log(todos);

  // Adds a new todo to the todoList
  const addTodo = ({ title, description, dueDate, priority, checked }) => {
    const newTodo = new Todo(title, description, dueDate, priority, checked);
    todos.push(newTodo);
  };

  // Removes a todo by title
  const removeTodo = (title) => {
    const filteredTodos = todos.filter((todo) => title !== todo.title);
    todos.length = 0;
    todos.push(...filteredTodos);
  };

  // Edits a todo's property by title
  const editTodo = (title, key, newValue) => {
    todos.forEach((todo) =>
      title === todo.title ? (todo[key] = newValue) : todo
    );
  };

  return {
    getTodos,
    printTodos,
    addTodo,
    editTodo,
    removeTodo,
  };
};
