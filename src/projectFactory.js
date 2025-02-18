import Project from "./project";
import { isToday, isThisWeek, isPast } from "date-fns";

export const projectFactory = () => {
  const projects = [];

  const getProjects = () => projects;

  const printProjects = () =>
    projects.forEach((project) => {
      console.log({
        title: project.title,
        todoList: project.todoList.getTodos(),
      });
    });

  const createProject = (title) => {
    const newProject = new Project(title);
    projects.push(newProject);
    return newProject;
  };

  const removeProject = (title) => {
    const filteredProjects = projects.filter(
      (project) => title !== project.title
    );
    projects.length = 0;
    projects.push(...filteredProjects);
  };

  const editProject = (title, newTitle) => {
    projects.forEach((project) =>
      title === project.title ? (project[title] = newTitle) : project
    );
  };

  const getTodosInProject = (projectTitle) => {
    const project = projects.find((project) => project.title === projectTitle);
    if (project) {
      return project.todoList.getTodos();
    }
  };

  const addTodoToProject = (projectTitle, todoObject) => {
    const project = projects.find((project) => project.title === projectTitle);
    if (project) {
      project.todoList.addTodo(todoObject);
    }
  };

  const editTodoInProject = (projectTitle, todoTitle, key, newValue) => {
    const project = projects.find((project) => project.title === projectTitle);
    if (project) {
      project.todoList.editTodo(todoTitle, key, newValue);
    }
  };

  const removeTodoFromProject = (projectTitle, todoTitle) => {
    const project = projects.find((project) => project.title === projectTitle);
    if (project) {
      project.todoList.removeTodo(todoTitle);
    }
  };

  const getAllTodos = () => {
    const allTodos = projects.flatMap((project) => project.todoList.getTodos());
    return allTodos;
  };

  const getAllTodayTodos = () => {
    const allTodos = projects.flatMap((project) => project.todoList.getTodos());
    return allTodos.filter((todo) => isToday(new Date(todo.dueDate)));
  };

  const getAllUpcomingTodos = () => {
    const allTodos = projects.flatMap((project) => project.todoList.getTodos());
    return allTodos.filter((todo) => isThisWeek(new Date(todo.dueDate)));
  };

  const getAllOverdueTodos = () => {
    const allTodos = projects.flatMap((project) => project.todoList.getTodos());
    return allTodos.filter((todo) => isPast(new Date(todo.dueDate)));
  };

  return {
    getProjects,
    printProjects,
    createProject,
    editProject,
    removeProject,
    getTodosInProject,
    addTodoToProject,
    editTodoInProject,
    removeTodoFromProject,
    getAllTodos,
    getAllTodayTodos,
    getAllUpcomingTodos,
    getAllOverdueTodos,
  };
};
