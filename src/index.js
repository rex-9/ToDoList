import './style.css';
import {
  addTask, editTask, toggleTask, removeTask,
} from './modules/crud.js';

const allTasks = JSON.parse(localStorage.getItem('tasks'));
let tasks = [];

const paper = document.getElementById('paper');

if (allTasks === null) {
  tasks = [];
  if (paper.childNodes.length < 4) {
    const footer = document.getElementById('remove');
    paper.removeChild(footer);
  }
} else {
  tasks = allTasks.sort((a, b) => a.index - b.index);
  const footer = document.createElement('footer');
  footer.id = 'remove';
  footer.innerHTML = 'Clear all completed';
  footer.onclick = removeTask;
  paper.appendChild(footer);
}

const add = document.getElementById('add');
add.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask(add.value);
    add.value = '';
  }
});

const dragStart = () => {
  console.log('dragstart');
};
const dragEnter = () => {
  console.log('dragEnter');
};
const dragOver = () => {
  console.log('dragOver');
};
const dragEnd = () => {
  console.log('dragEnd');
};
const drop = () => {
  console.log('drop');
};

tasks.forEach((task) => {
  const li = document.createElement('li');
  const div = document.createElement('div');
  div.style.cssText = 'display: flex; align-items: center; padding-left: 10px;';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.style.cssText = 'cursor: pointer;';
  checkbox.checked = task.completed;
  checkbox.onchange = function () {
    if (checkbox.checked) {
      console.log('checked');
      toggleTask(task.index, true);
      li.style.cssText = 'text-decoration: line-through; background-color: gainsboro;';
    } else {
      toggleTask(task.index, false);
      li.style.cssText = 'text-decoration: none; background-color: white;';
    }
  };
  const p = document.createElement('p');
  p.innerHTML = task.description;
  const move = document.createElement('span');
  move.style.cssText = 'cursor: move; width: 20px;';
  move.innerHTML += '<i class="fa-solid fa-ellipsis-vertical"></i>';
  move.draggable = true;
  move.addEventListener('dragstart', dragStart);
  move.addEventListener('dragenter', dragEnter);
  move.addEventListener('dragover', dragOver);
  move.addEventListener('dragend', dragEnd);
  move.addEventListener('drop', drop);
  div.appendChild(checkbox);
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(move);

  p.addEventListener('dblclick', () => {
    const edit = document.createElement('input');
    edit.id = 'edit';
    edit.type = 'text';
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
        editTask(task.index, edit.value);
        li.replaceChild(div, edit);
        window.location.reload();
      }
    });
    li.replaceChild(edit, div);
  });
  document.getElementById('list').appendChild(li);
});