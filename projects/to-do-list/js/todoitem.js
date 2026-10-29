export class ToDoItem {
  constructor() {
    this._id = null;
    this._item = null;
    this._completed = false;
    this._created = Date.now();
  }

  getId() {
    return this._id;
  }

  setId(id) {
    this._id = id;
  }

  getItem() {
    return this._item;
  }

  setItem(item) {
    this._item = item;
  }

  isCompleted() {
    return Boolean(this._completed);
  }

  setCompleted(completed) {
    this._completed = Boolean(completed);
  }

  getCreated() {
    return this._created;
  }

  setCreated(timestamp) {
    this._created = timestamp;
  }
}
