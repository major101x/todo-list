import allTasksIcon from "../assets/icons/all-tasks.svg";
import todayTasksIcon from "../assets/icons/today.svg";
import upcomingTasksIcon from "../assets/icons/upcoming.svg";
import overdueTasksIcon from "../assets/icons/overdue.svg";
import { projects } from "..";
import { todoDisplay } from "./todoDisplay";

export const todoMenu = () => {
  // Create task items to render
  const taskItems = [
    {
      title: "All Tasks",
      btnClass: "all-tasks-btn",
      iconSrc: allTasksIcon,
      taskTitleClass: "all-tasks",
      todos: projects.getAllTodos,
    },
    {
      title: "Today",
      btnClass: "today-tasks-btn",
      iconSrc: todayTasksIcon,
      taskTitleClass: "today",
      todos: projects.getAllTodayTodos,
    },
    {
      title: "Upcoming",
      btnClass: "upcoming-tasks-btn",
      iconSrc: upcomingTasksIcon,
      taskTitleClass: "upcoming",
      todos: projects.getAllUpcomingTodos,
    },
    {
      title: "Overdue",
      btnClass: "overdue-tasks-btn",
      iconSrc: overdueTasksIcon,
      taskTitleClass: "overdue",
      todos: projects.getAllOverdueTodos,
    },
  ];

  // Selects the todo menu
  const todosMenu = document.querySelector(".tasks-container");

  // Clears previous content before new render
  todosMenu.textContent = "";

  // Creates task items and renders them on the todos menu
  taskItems.forEach((item, index) => {
    const taskItem = document.createElement("button");
    taskItem.classList.add("task-item");
    taskItem.classList.add(item.btnClass);
    todosMenu.appendChild(taskItem);

    const taskItemLeft = document.createElement("div");
    taskItemLeft.classList.add("task-item-left");
    taskItem.appendChild(taskItemLeft);

    const taskIconElem = document.createElement("img");
    taskIconElem.classList.add("icon");
    taskIconElem.src = item.iconSrc;
    taskItemLeft.appendChild(taskIconElem);

    const taskItemTitle = document.createElement("div");
    taskItemTitle.classList.add("task-item-title");
    taskItemTitle.classList.add(item.taskTitleClass);
    taskItemTitle.textContent = item.title;
    taskItemLeft.appendChild(taskItemTitle);

    const todosLength = document.createElement("span");
    todosLength.classList.add("todo-length");
    todosLength.textContent = item.todos().length;
    taskItem.appendChild(todosLength);

    taskItem.addEventListener("click", () => {
      // Remove "active" from all task and project items
      document
        .querySelectorAll(".task-item")
        .forEach((btn) => btn.classList.remove("active"));
      document
        .querySelectorAll(".project-item")
        .forEach((btn) => btn.classList.remove("active"));

      // Add "active" to the clicked task item
      taskItem.classList.add("active");

      todoDisplay(item.todos(), item.title);
    });
  });

  // Sets all tasks as active menu on page load
  document.querySelector(".all-tasks-btn").classList.add("active");
};
