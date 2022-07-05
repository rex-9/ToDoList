/* eslint-disable max-len */

import './style.css';

// window.localStorage.clear();

let allTasks = JSON.parse(localStorage.getItem('tasks'));
let tasks = [];
class Task {
  constructor(index, completed, description) {
    this.index = index;
    this.completed = completed;
    this.description = description;
  }
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
  allTasks = completedTasks;
  localStorage.setItem('tasks', JSON.stringify(allTasks));
  window.location.reload();
};

const paper = document.getElementById('paper');

if (allTasks.length === 0) {
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

tasks.forEach((task) => {
  const li = document.createElement('li');
  const div = document.createElement('div');
  div.style.cssText = 'display: flex; padding-left: 10px;';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.style.cssText = 'cursor: pointer;';
  checkbox.checked = task.completed;
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      toggleTask(task.index, true);
      li.style.cssText = 'text-decoration: line-through; background-color: gainsboro;';
    } else {
      toggleTask(task.index, false);
      li.style.cssText = 'text-decoration: none; background-color: white;';
    }
  });
  const p = document.createElement('p');
  p.innerHTML = task.description;
  // console.log(task.description)
  // let img = document.createElement('img');
  // img.src = '/assets/move.png';
  // img.alt = 'move';
  div.appendChild(checkbox);
  div.appendChild(p);
  li.appendChild(div);

  const edit = document.createElement('input');
  edit.id = 'edit';
  edit.type = 'text';
  edit.value = task.description;
  edit.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      editTask(task.index, edit.value);
      li.replaceChild(div, edit);
      window.location.reload();
    }
  });
  li.addEventListener('dblclick', () => {
    li.replaceChild(edit, div);
  });
  // li.appendChild(img);
  document.getElementById('list').appendChild(li);
});

// tasks.forEach(task => {
//   const li =
//     `<li>
//       <div style="display: flex; padding-left: 10px;">
//         <input value=${task.completed} type="checkbox" name="checkbox" id="checkbox${task.index}">
//         <p>${task.description}</p>
//       </div>
//   </li>`
//   document.getElementById('list').innerHTML += li;
// });