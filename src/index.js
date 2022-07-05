import './style.css';

const rawTasks = [{
  index: 0,
  completed: true,
  description: 'wash the dishes',
}, {
  index: 1,
  completed: false,
  description: 'complete To Do list project',
}];

const tasks = rawTasks.sort((a, b) => a.index - b.index);

tasks.forEach((task) => {
  const li = document.createElement('li');
  const div = document.createElement('div');
  div.style.cssText = 'display: flex; padding-left: 10px;';
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.style.cssText = 'cursor: pointer;';
  const p = document.createElement('p');
  p.innerHTML = task.description;
  // let img = document.createElement('img');
  // img.src = '/assets/move.png';
  // img.alt = 'move';
  div.appendChild(input);
  div.appendChild(p);
  li.appendChild(div);
  // li.appendChild(img);
  document.getElementById('list').appendChild(li);
});