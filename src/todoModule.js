import Todo from "./todo";
export const todoModule = (() => {
  let todos = [];

  const getTodos = () => todos;

  const printTodos = () => console.log(todos);

  const addTodo = ({ title, description, dueDate, priority }) => {
    const newTodo = new Todo(title, description, dueDate, priority);
    todos.push(newTodo);
  };

  const removeTodo = (title) => {
    todos = todos.filter((todo) => title !== todo.title);
  };

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
})();
