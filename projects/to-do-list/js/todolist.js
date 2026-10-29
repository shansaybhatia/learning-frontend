export default class ToDoList {
  constructor() {
    this._list = [];
  }

  getList() {
    return this._list;
  }

  clearList() {
    this._list = [];
  }

  addItemToList(itemObj) {
    this._list.push(itemObj);
  }

  removeItemFromList(id) {
    const list = this._list;
    for (let i = 0; i < list.length; i++) {
      if (list[i].getId() == id) {
        list.splice(i, 1);
        break;
      }
    }
  }

  getItemById(id) {
    return this._list.find((item) => item.getId() == id) || null;
  }

  toggleItemCompletion(id) {
    const item = this.getItemById(id);
    if (item) {
      item.setCompleted(!item.isCompleted());
      return item.isCompleted();
    }
    return false;
  }

  clearCompleted() {
    this._list = this._list.filter((item) => !item.isCompleted());
  }

  getActiveCount() {
    return this._list.filter((item) => !item.isCompleted()).length;
  }

  getCompletedCount() {
    return this._list.filter((item) => item.isCompleted()).length;
  }
}
