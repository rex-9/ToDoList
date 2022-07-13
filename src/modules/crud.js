/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

import Task from './task.js';

const addTask = (description, allTasks) => {
  const newTask = new Task(allTasks.length, false, description);
  allTasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(allTasks));
  window.location.reload();
};

const editTask = (index, description, allTasks) => {
  const task = allTasks.find((task) => task.index === index);
  task.description = description;
  localStorage.setItem('tasks', JSON.stringify(allTasks));
};

const toggleTask = (index, completed, allTasks) => {
  const task = allTasks.find((task) => task.index === index);
  task.completed = completed;
  localStorage.setItem('tasks', JSON.stringify(allTasks));
};

const removeTask = (allTasks) => {
  const completedTasks = [];
  for (let i = 0; i < allTasks.length; i++) {
    if (allTasks[i].completed === false) {
      completedTasks.push(allTasks[i]);
    }
  }
  for (let i = 0; i < completedTasks.length; i += 1) {
    completedTasks[i].index = i + 1;
  }
  allTasks = completedTasks;
  localStorage.setItem('tasks', JSON.stringify(allTasks));
  window.location.reload();
};

export {
  addTask,
  editTask,
  toggleTask,
  removeTask,
};