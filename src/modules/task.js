export default class Task {
  constructor(index, completed, description) {
    this.index = index + 1;
    this.completed = completed;
    this.description = description;
  }
}