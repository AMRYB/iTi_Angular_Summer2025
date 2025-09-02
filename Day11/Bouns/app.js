import { TaskManager } from './taskManager.js';

window.addEventListener('DOMContentLoaded', () => {
  const manager = new TaskManager();

  const form = document.querySelector('#task-form');
  const titleInput = document.querySelector('#title');
  const descInput = document.querySelector('#description');
  const list = document.querySelector('#task-list');

  function render() {
    list.innerHTML = '';
    manager.listTasks().forEach(task => {
      const li = document.createElement('li');
      li.dataset.id = task.id;

      const header = document.createElement('div');
      header.textContent = `${task.id}. ${task.title}`;

      const body = document.createElement('div');
      body.textContent = task.description || '';

      const meta = document.createElement('div');
      meta.className = 'meta';
      meta.textContent = `Created: ${task.created.toLocaleString()}`;

      const btn = document.createElement('button');
      btn.textContent = 'Complete';
      btn.addEventListener('click', () => {
        manager.completeTask(task.id);
        render();
      });

      li.appendChild(header);
      li.appendChild(body);
      li.appendChild(meta);
      li.appendChild(btn);
      list.appendChild(li);
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const description = descInput.value.trim();
    if (!title) return;
    manager.addTask(title, description);
    titleInput.value = '';
    descInput.value = '';
    render();
  });

  render();
});
