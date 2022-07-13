import {
  addTask,
  editTask,
  toggleTask,
  removeTask,
} from '../modules/crud.js';

delete window.location;
window.location = {
  reload: jest.fn(),
};

document.body.innerHTML = '<div> <ul id="list"></li> </div>';

describe('Local Storage functions', () => {
  test('Add one new item to the list', () => {
    addTask('First Task', []);
    expect(JSON.parse(localStorage.getItem('tasks')).length).toBe(1);
    const lists = document.querySelectorAll('#list li');
    expect(lists).toHaveLength(1);
  });

  test('Edit the existing item of the specific index', () => {
    editTask(1, 'Task 1', [{
      index: 1,
      description: 'First Task',
      completed: false,
    }]);
    expect(JSON.parse(localStorage.getItem('tasks'))[0]).toEqual({
      index: 1,
      description: 'Task 1',
      completed: false,
    });
  });

  test('Toggle the existing item of the specific index', () => {
    toggleTask(1, true, [{
      index: 1,
      description: 'First Task',
      completed: false,
    }]);
    expect(JSON.parse(localStorage.getItem('tasks'))[0]).toEqual({
      index: 1,
      description: 'First Task',
      completed: true,
    });
  });

  test('Remove specific items to the list', () => {
    const allTasks = [{
      index: 1,
      description: 'First Task',
      completed: false,
    }, {
      index: 2,
      description: 'Second Task',
      completed: false,
    }];
    removeTask('first task', allTasks);
    expect(JSON.parse(localStorage.getItem('tasks')).length).toBe(localStorage.getItem('tasks').length - 2);
  });
});

// fkkkkkkkkkkkkkkkkkkkkkkkkkk