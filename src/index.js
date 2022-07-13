/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */

import './style.css';

import {
  removeTask,
} from './modules/crud.js';

import { add, build } from './modules/dom.js';

let allTasks = JSON.parse(localStorage.getItem('tasks'));
let tasks = [];

const paper = document.getElementById('paper');

const load = (storedTasks) => {
  if (storedTasks === null) {
    allTasks = [];
    tasks = [];
  } else {
    tasks = allTasks.sort((a, b) => a.index - b.index);
    const footer = document.createElement('footer');
    footer.id = 'remove';
    footer.innerHTML = 'Clear all completed';
    footer.addEventListener('click', () => {
      removeTask(allTasks);
    });
    paper.appendChild(footer);
  }
};

load(allTasks);

add();

build(tasks);

export default allTasks;