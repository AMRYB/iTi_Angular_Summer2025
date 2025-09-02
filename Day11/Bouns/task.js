export class Task {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.created = new Date();
    this.completed = false;
  }
  markCompleted() {
    this.completed = true;
  }
}
