import { Task } from './task.js';

export class TaskManager {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }
  addTask(title, description) {
    const task = new Task(this.nextId++, title, description);
    this.tasks.push(task);
    return task;
  }
  completeTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (!task) return false;
    task.markCompleted();
    this.tasks = this.tasks.filter(t => t.id !== id);
    return true;
  }
  listTasks() {
    return this.tasks;
  }
}
