import Project from "./project";

export const projectFactory = () => {
  const projects = [];

  const getProjects = () => projects;

  const printProjects = () => projects.forEach(project => {
    console.log({
        title: project.title,
        todoList: project.todoList.getTodos()
    });
});;

  const createProject = (title) => {
    const newProject = new Project (title);
    projects.push(newProject);
    return newProject
  };

  const removeProject = (title) => {
    projects = projects.filter((project) => title !== project.title);
  };

  const editProject = (title, newTitle) => {
    projects.forEach((project) =>
      title === project.title ? (project[title] = newTitle) : project
    );
  };

  return {
    getProjects,
    printProjects,
    createProject,
    editProject,
    removeProject,
  };
};
