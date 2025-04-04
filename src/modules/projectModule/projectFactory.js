import Project from "./project";
import { isToday, isThisWeek, isPast } from "date-fns";

// Factory function for managing a collection of project instances
export const projectFactory = () => {
  const projects = [];

  const updateLocalStorage = () => {
    localStorage.setItem(
      "projects",
      JSON.stringify(
        projects.map((project) => {
          return {
            title: project.title,
            todoList: project.todoList.getTodos(),
          };
        })
      )
    );
  };

  const fetchFromLocalStorage = () => {
    const storedProjectData = localStorage.getItem("projects");
    if (storedProjectData) {
      let projectData = JSON.parse(storedProjectData);
      projects.length = 0;
      projectData.forEach((project) => {
        const newProject = new Project(project.title);
        projects.push(newProject);
        project.todoList.forEach((todo) => {
          newProject.todoList.addTodo({
            title: todo.title,
            description: todo.description,
            dueDate: todo.dueDate,
            priority: todo.priority,
            checked: todo.checked,
          });
        });
      });
    } else {
      console.log("User data not found in local storage");
    }
  };

  // Returns all projects
  const getProjects = () => projects;

  // Logs all projects and their todos to the console
  const printProjects = () =>
    projects.forEach((project) => {
      console.log({
        title: project.title,
        todoList: project.todoList.getTodos(),
      });
    });

  // Creates a new project and adds it to the collection
  const createProject = (title) => {
    const newProject = new Project(title);
    projects.push(newProject);
    return newProject;
  };

  // Removes a project by title
  const removeProject = (title) => {
    const filteredProjects = projects.filter(
      (project) => title !== project.title
    );
    projects.length = 0;
    projects.push(...filteredProjects);
  };

  // Edits a project by title
  const editProject = (title, newTitle) => {
    projects.forEach((project) =>
      title === project.title ? (project[title] = newTitle) : project
    );
  };

  // Returns all todos in a specific project
  const getTodosInProject = (projectTitle) => {
    const project = projects.find((project) => project.title === projectTitle);
    if (project) {
      return project.todoList.getTodos();
    }
  };

  // Adds a todo to a specific project
  const addTodoToProject = (projectTitle, todoObject) => {
    const project = projects.find((project) => project.title === projectTitle);
    if (project) {
      project.todoList.addTodo(todoObject);
    }
  };

  // Edits a todo within a specific project
  const editTodoInProject = (projectTitle, todoTitle, valuesObject) => {
    const project = projects.find((project) => project.title === projectTitle);
    if (project) {
      const oldTodo = project.todoList
        .getTodos()
        .find((todo) => todo.title === todoTitle);
      if (oldTodo) {
        project.todoList.editTodo(oldTodo.title, valuesObject);
      }
    }
  };

  // Removes a todo from a specific project
  const removeTodoFromProject = (projectTitle, todoTitle) => {
    const project = projects.find((project) => project.title === projectTitle);
    if (project) {
      project.todoList.removeTodo(todoTitle);
    }
  };

  // Returns all todos in all projects
  const getAllTodos = () => {
    const allTodos = projects.flatMap((project) => project.todoList.getTodos());
    return allTodos;
  };

  // Returns todos due today across all projects
  const getAllTodayTodos = () => {
    const allTodos = projects.flatMap((project) => project.todoList.getTodos());
    return allTodos.filter((todo) => isToday(new Date(todo.dueDate)));
  };

  // Returns todos due this week across all projects
  const getAllUpcomingTodos = () => {
    const allTodos = projects.flatMap((project) => project.todoList.getTodos());
    return allTodos.filter((todo) => isThisWeek(new Date(todo.dueDate)));
  };

  // Returns overdue todos across all projects
  const getAllOverdueTodos = () => {
    const allTodos = projects.flatMap((project) => project.todoList.getTodos());
    return allTodos.filter((todo) => isPast(new Date(todo.dueDate)));
  };

  // Returns the parent project of the todo title
  const getTodoParentProject = (todoTitle) => {
    let parentProject = null;
    for (const project of projects) {
      const foundProject = project.todoList
        .getTodos()
        .find((todo) => todo.title === todoTitle);
      if (foundProject) {
        parentProject = project.title;
        break;
      }
    }
    return parentProject;
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
    getTodoParentProject,
    updateLocalStorage,
    fetchFromLocalStorage,
  };
};
