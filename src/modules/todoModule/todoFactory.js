import Todo from "./todo";

// Factory function for managing a collection of todo instances
export const todoFactory = () => {
  let todos = [];

  // Returns all todos
  const getTodos = () => todos;

  // Logs all todos to the console
  const printTodos = () => console.log(todos);

  // Adds a new todo to the todoList
  const addTodo = ({ title, description, dueDate, priority, checked }) => {
    const newTodo = new Todo(title, description, dueDate, priority, checked);
    todos = [...todos, newTodo];
  };

  // Removes a todo by title
  const removeTodo = (title) => {
    todos = todos.filter((todo) => todo.title !== title);
  };

  // Edits a todo's property by title
  const editTodo = (title, valuesObject) => {
    todos = todos.map((todo) =>
      todo.title === title ? { ...todo, ...valuesObject } : todo
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
