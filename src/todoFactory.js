import Todo from "./todo";

export const todoFactory = () => {
  const todos = [];

  const getTodos = () => todos;

  const printTodos = () => console.log(todos);

  const addTodo = ({ title, description, dueDate, priority, checked }) => {
    const newTodo = new Todo(title, description, dueDate, priority, checked);
    todos.push(newTodo);
  };

  const removeTodo = (title) => {
    const filteredTodos = todos.filter((todo) => title !== todo.title);
    todos.length = 0; 
    todos.push(...filteredTodos);
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
};
