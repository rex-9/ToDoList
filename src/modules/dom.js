/* eslint-disable import/no-cycle */

import allTasks from '../index.js';

import {
  addTask,
  editTask,
  toggleTask,
} from './crud.js';

const add = () => {
  const add = document.getElementById('add');
  add.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addTask(add.value, allTasks);
      add.value = '';
    }
  });
};

const build = (tasks) => {
  tasks.forEach((task) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.style.cssText = 'display: flex; align-items: center; padding-left: 10px; width: 100%;';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.cssText = 'cursor: pointer;';
    checkbox.checked = task.completed;
    checkbox.onchange = function checked() {
      if (checkbox.checked) {
        toggleTask(task.index, true, allTasks);
        li.style.cssText = 'text-decoration: line-through; color: gray; background-color: gainsboro;';
      } else {
        toggleTask(task.index, false, allTasks);
        li.style.cssText = 'text-decoration: none; background-color: white;';
      }
    };
    const p = document.createElement('p');
    p.innerHTML = task.description;
    p.style.cssText = 'width: 100%;';
    const move = document.createElement('span');
    move.style.cssText = 'cursor: move; width: 20px;';
    move.innerHTML += '<i class="fa-solid fa-ellipsis-vertical"></i>';
    move.draggable = true;
    div.appendChild(checkbox);
    div.appendChild(p);
    li.appendChild(div);
    li.appendChild(move);

    p.addEventListener('dblclick', () => {
      const edit = document.createElement('input');
      edit.id = 'edit';
      edit.type = 'text';
      edit.style.cssText = 'color: lightgreen';
      edit.value = task.description;
      document.addEventListener('click', (e) => {
        if (!edit.contains(e.target)) {
          if (li.contains(edit)) {
            li.replaceChild(div, edit);
          }
        }
      });
      edit.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          editTask(task.index, edit.value, allTasks);
          li.replaceChild(div, edit);
          window.location.reload();
        }
      });
      li.replaceChild(edit, div);
    });
    document.getElementById('list').appendChild(li);
  });
};

export {
  add,
  build,
};