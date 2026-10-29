import ToDoList from "./todolist.js";
import { ToDoItem } from "./todoitem.js";

const toDoList = new ToDoList();

// Launch App
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  // Set up current date display
  displayCurrentDate();

  // Add event listeners
  const itemEntryForm = document.getElementById("itemEntryForm");
  itemEntryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    processSubmission();
  });

  const clearItems = document.getElementById("clearItems");
  clearItems.addEventListener("click", () => {
    const list = toDoList.getList();
    if (list.length) {
      const confirmed = confirm(
        "Are you sure you want to clear all tasks from the list?",
      );
      if (confirmed) {
        toDoList.clearList();
        updatePersistentData(toDoList.getList());
        updateScreenReaderConfirmation("All tasks", "cleared from list");
        refreshThePage();
      }
    }
  });

  // Load existing tasks from storage and render
  loadListObject();
  refreshThePage();
};

const displayCurrentDate = () => {
  const dateEl = document.getElementById("currentDate");
  if (!dateEl) return;
  const options = { weekday: "long", month: "short", day: "numeric" };
  const today = new Date().toLocaleDateString("en-US", options);
  dateEl.textContent = today;
};

const loadListObject = () => {
  const storedList = localStorage.getItem("myTodoList");
  if (typeof storedList !== "string") return;
  try {
    const parsedList = JSON.parse(storedList);
    if (!Array.isArray(parsedList)) return;
    parsedList.forEach((itemObj) => {
      const newToDoItem = createNewItem(itemObj._id, itemObj._item);
      toDoList.addItemToList(newToDoItem);
    });
  } catch (err) {
    console.error("Failed to parse stored to-do list:", err);
  }
};

const refreshThePage = () => {
  clearListDisplay();
  renderList();
  updateMetrics();
  clearItemEntryField();
  setFocusItemEntry();
};

const clearListDisplay = () => {
  const parentElement = document.getElementById("listItems");
  deleteContents(parentElement);
};

const deleteContents = (parentElement) => {
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};

const renderList = () => {
  clearListDisplay();
  const list = toDoList.getList();
  const emptyState = document.getElementById("emptyState");

  if (list.length === 0) {
    if (emptyState) {
      emptyState.hidden = false;
      emptyState.classList.add("visible");
      emptyState.style.display = "flex";
    }
  } else {
    if (emptyState) {
      emptyState.hidden = true;
      emptyState.classList.remove("visible");
      emptyState.style.display = "none";
    }
    list.forEach((item) => {
      buildListItem(item);
    });
  }

  updateMetrics();
};

const buildListItem = (item) => {
  const div = document.createElement("div");
  div.className = "item";
  div.setAttribute("role", "listitem");

  // Content Group (Checkbox + Label)
  const itemContent = document.createElement("div");
  itemContent.className = "itemContent";

  // Accessible custom styled checkbox wrapper
  const checkboxWrapper = document.createElement("div");
  checkboxWrapper.className = "checkboxWrapper";

  const check = document.createElement("input");
  check.type = "checkbox";
  check.id = `item-${item.getId()}`;
  check.tabIndex = 0;
  check.setAttribute(
    "aria-label",
    `Complete and remove "${item.getItem()}"`,
  );

  const customCheckbox = document.createElement("span");
  customCheckbox.className = "customCheckbox";
  customCheckbox.setAttribute("aria-hidden", "true");
  customCheckbox.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  `;

  checkboxWrapper.appendChild(check);
  checkboxWrapper.appendChild(customCheckbox);

  const label = document.createElement("label");
  label.htmlFor = `item-${item.getId()}`;
  label.textContent = item.getItem();

  itemContent.appendChild(checkboxWrapper);
  itemContent.appendChild(label);

  // Delete Action Button
  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "deleteBtn";
  deleteBtn.title = "Delete task immediately";
  deleteBtn.setAttribute("aria-label", `Delete task "${item.getItem()}"`);
  deleteBtn.tabIndex = 0;
  deleteBtn.textContent = "✕";

  // Event Listeners:
  // Checkbox automatically removes the item with a smooth completion animation
  addClickListenerToCheckbox(check, item.getId(), div, item.getItem());
  addClickListenerToDelete(deleteBtn, item.getId(), div, item.getItem());

  div.appendChild(itemContent);
  div.appendChild(deleteBtn);

  const container = document.getElementById("listItems");
  container.appendChild(div);
};

const addClickListenerToCheckbox = (checkbox, itemId, itemDiv, itemText) => {
  checkbox.addEventListener("change", () => {
    // Immediate visual satisfaction: strikethrough + smooth removal animation
    itemDiv.classList.add("completed");
    itemDiv.classList.add("removing");

    updateScreenReaderConfirmation(itemText, "completed and removed from list");

    // Automatically remove after animation completes
    setTimeout(() => {
      toDoList.removeItemFromList(itemId);
      updatePersistentData(toDoList.getList());
      refreshThePage();
    }, 450);
  });
};

const addClickListenerToDelete = (deleteBtn, itemId, itemDiv, itemText) => {
  deleteBtn.addEventListener("click", () => {
    itemDiv.classList.add("removing");
    updateScreenReaderConfirmation(itemText, "removed from list");

    setTimeout(() => {
      toDoList.removeItemFromList(itemId);
      updatePersistentData(toDoList.getList());
      refreshThePage();
    }, 250);
  });
};

const updatePersistentData = (listArray) => {
  localStorage.setItem("myTodoList", JSON.stringify(listArray));
};

const clearItemEntryField = () => {
  document.getElementById("newItem").value = "";
};

const setFocusItemEntry = () => {
  const input = document.getElementById("newItem");
  if (input) input.focus();
};

const processSubmission = () => {
  const newEntryText = getNewEntry();
  if (!newEntryText.length) return;
  const nextItemId = calcNextItemId();
  const toDoItem = createNewItem(nextItemId, newEntryText);
  toDoList.addItemToList(toDoItem);
  updatePersistentData(toDoList.getList());
  updateScreenReaderConfirmation(newEntryText, "added to list");
  refreshThePage();
};

const getNewEntry = () => {
  return document.getElementById("newItem").value.trim();
};

const calcNextItemId = () => {
  let nextItemId = 1;
  const list = toDoList.getList();
  if (list.length > 0) {
    const highestId = list.reduce(
      (max, item) => Math.max(max, Number(item.getId()) || 0),
      0,
    );
    nextItemId = highestId + 1;
  }
  return nextItemId;
};

const createNewItem = (itemId, itemText) => {
  const todo = new ToDoItem();
  todo.setId(itemId);
  todo.setItem(itemText);
  return todo;
};

const updateScreenReaderConfirmation = (itemText, actionVerb) => {
  const confirmation = document.getElementById("confirmation");
  if (confirmation) {
    confirmation.textContent = actionVerb
      ? `${itemText} ${actionVerb}.`
      : itemText;
  }
};

const updateMetrics = () => {
  const list = toDoList.getList();
  const total = list.length;

  // Task counter badge
  const taskCounter = document.getElementById("taskCounter");
  if (taskCounter) {
    taskCounter.textContent = `${total} ${total === 1 ? "task" : "tasks"}`;
  }
};
