jest.mock('./crud.js')

import { addTask, editTask, toggleTask, removeTask } from '../modules/crud.js'

test('Add one new item to the list', () => {
    document.body.innerHTML =
    '<div>' +
    '  <ul id="list"></ul>' +
    '</div>';
    addTask();
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
});
