import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "../services/date.js";
import dateElement from "./dateElement.js";

export const readTask = () => {
  const list = document.querySelector("[data-list]");
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];

  const dates = uniqueDates(taskList);
  orderDates(dates);
  
  dates.forEach((date) => {
    const dateBase = moment(date, "DD/MM/YYYY");
    list.appendChild(dateElement(date));
    taskList.forEach((task) => {
      const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
      const diff = dateBase.diff(taskDate);
      if (diff === 0) list.appendChild(createTask(task));
    });
  });
};
