import Task from './task.js';

const addTask = (description, allTasks) => {
  const newTask = new Task(allTasks.length, false, description);
  allTasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(allTasks));
  window.location.reload();

  const ul = document.getElementById('list');
  const li = document.createElement('li');
  ul.appendChild(li);
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

const clearAllCompletedTask = (allTasks) => {
  const completedTasks = [];
  for (let i = 0; i < allTasks.length; i += 1) {
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
  clearAllCompletedTask,
};