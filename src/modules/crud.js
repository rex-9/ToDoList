/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

import Task from './task.js';

let allTasks;

if (JSON.parse(localStorage.getItem('tasks')) === null) {
  allTasks = [];
} else {
  allTasks = JSON.parse(localStorage.getItem('tasks'));
}

const addTask = (description) => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (storedTasks === null) {
    allTasks = [];
  } else {
    allTasks = JSON.parse(localStorage.getItem('tasks'));
  }
  const newTask = new Task(allTasks.length, false, description);
  allTasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(allTasks));
  window.location.reload();
};

const editTask = (index, description) => {
  const task = allTasks.find((task) => task.index === index);
  task.description = description;
  localStorage.setItem('tasks', JSON.stringify(allTasks));
};

const toggleTask = (index, completed) => {
  const task = allTasks.find((task) => task.index === index);
  task.completed = completed;
  localStorage.setItem('tasks', JSON.stringify(allTasks));
};

const removeTask = () => {
  const completedTasks = [];
  allTasks.forEach((task) => {
    if (task.completed === false) {
      completedTasks.push(task);
    }
  });
  for (let i = 0; i < completedTasks.length; i += 1) {
    completedTasks[i].index = i;
  }
  allTasks = allTasks.filter((task) => {
    if (completedTasks.includes(task)) {
      return task;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(allTasks));
  window.location.reload();
};

export {
  addTask,
  editTask,
  toggleTask,
  removeTask,
};