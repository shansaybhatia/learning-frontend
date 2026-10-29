import ToDoList from "./todolist.js";
import { ToDoItem } from "./todoitem.js";

const toDoList = new ToDoList();
let currentFilter = "all";

// Launch App
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  // Set up current date display
  displayCurrentDate();

  // Initialize theme from storage / system preference
  initTheme();

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

  // Filter navigation buttons
  initFilterButtons();

  // Theme toggle button
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

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

// Theme Management
const initTheme = () => {
  const savedTheme = localStorage.getItem("todo_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (prefersDark ? "dark" : "light");
  applyTheme(theme);
};

const applyTheme = (theme) => {
  const root = document.documentElement;
  const themeIcon = document.querySelector(".themeIcon");
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
    if (themeIcon) themeIcon.textContent = "☀️";
  } else {
    root.removeAttribute("data-theme");
    if (themeIcon) themeIcon.textContent = "🌙";
  }
  localStorage.setItem("todo_theme", theme);
};

const toggleTheme = () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";
  applyTheme(newTheme);
  updateScreenReaderConfirmation(`Switched to ${newTheme} mode`, "");
};

// Filter Management
const initFilterButtons = () => {
  const filterBtns = document.querySelectorAll(".filterBtn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      currentFilter = btn.dataset.filter || "all";
      renderList();
      updateScreenReaderConfirmation(`Filter set to ${currentFilter} tasks`, "");
    });
  });
};

const loadListObject = () => {
  const storedList = localStorage.getItem("myTodoList");
  if (typeof storedList !== "string") return;
  try {
    const parsedList = JSON.parse(storedList);
    if (!Array.isArray(parsedList)) return;
    parsedList.forEach((itemObj) => {
      const newToDoItem = createNewItem(
        itemObj._id,
        itemObj._item,
        Boolean(itemObj._completed),
      );
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
  const filteredList = list.filter((item) => {
    if (currentFilter === "active") return !item.isCompleted();
    if (currentFilter === "completed") return item.isCompleted();
    return true;
  });

  const emptyState = document.getElementById("emptyState");
  if (filteredList.length === 0) {
    if (emptyState) {
      emptyState.hidden = false;
      const subtitle = emptyState.querySelector(".emptySubtitle");
      if (subtitle) {
        if (list.length === 0) {
          subtitle.textContent = "Add a task above to keep your momentum going.";
        } else if (currentFilter === "active") {
          subtitle.textContent = "All tasks completed! Great job! 🎉";
        } else if (currentFilter === "completed") {
          subtitle.textContent = "No completed tasks yet. Check off a task when done!";
        }
      }
    }
  } else {
    if (emptyState) emptyState.hidden = true;
    filteredList.forEach((item) => {
      buildListItem(item);
    });
  }

  updateMetrics();
};

const buildListItem = (item) => {
  const div = document.createElement("div");
  div.className = `item ${item.isCompleted() ? "completed" : ""}`;
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
  check.checked = item.isCompleted();
  check.setAttribute(
    "aria-label",
    `Mark "${item.getItem()}" as ${item.isCompleted() ? "incomplete" : "complete"}`,
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
  deleteBtn.title = "Delete task";
  deleteBtn.setAttribute("aria-label", `Delete task "${item.getItem()}"`);
  deleteBtn.tabIndex = 0;
  deleteBtn.textContent = "✕";

  // Event Listeners
  addClickListenerToCheckbox(check, item.getId(), div);
  addClickListenerToDelete(deleteBtn, item.getId(), item.getItem());

  div.appendChild(itemContent);
  div.appendChild(deleteBtn);

  const container = document.getElementById("listItems");
  container.appendChild(div);
};

const addClickListenerToCheckbox = (checkbox, itemId, itemDiv) => {
  checkbox.addEventListener("change", () => {
    const isCompleted = toDoList.toggleItemCompletion(itemId);
    updatePersistentData(toDoList.getList());

    if (isCompleted) {
      itemDiv.classList.add("completed");
    } else {
      itemDiv.classList.remove("completed");
    }

    const labelText = getLableText(`item-${itemId}`);
    const statusText = isCompleted ? "marked as completed" : "marked as active";
    updateScreenReaderConfirmation(labelText, statusText);

    updateMetrics();

    // If currently filtered, re-render after a brief transition
    if (currentFilter !== "all") {
      setTimeout(() => {
        renderList();
      }, 300);
    }
  });
};

const addClickListenerToDelete = (deleteBtn, itemId, itemText) => {
  deleteBtn.addEventListener("click", () => {
    toDoList.removeItemFromList(itemId);
    updatePersistentData(toDoList.getList());
    updateScreenReaderConfirmation(itemText, "removed from list");
    renderList();
    setFocusItemEntry();
  });
};

const getLableText = (checkboxId) => {
  const el = document.getElementById(checkboxId);
  if (!el) return "";
  const wrapper = el.closest(".itemContent");
  if (!wrapper) return "";
  const label = wrapper.querySelector("label");
  return label ? label.textContent : "";
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
  const toDoItem = createNewItem(nextItemId, newEntryText, false);
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

const createNewItem = (itemId, itemText, isCompleted = false) => {
  const todo = new ToDoItem();
  todo.setId(itemId);
  todo.setItem(itemText);
  todo.setCompleted(isCompleted);
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
  const active = toDoList.getActiveCount();
  const completed = toDoList.getCompletedCount();

  // Task counter badge
  const taskCounter = document.getElementById("taskCounter");
  if (taskCounter) {
    taskCounter.textContent = `${active} active · ${total} total`;
  }

  // Filter button count badges
  const countAll = document.getElementById("countAll");
  const countActive = document.getElementById("countActive");
  const countCompleted = document.getElementById("countCompleted");

  if (countAll) countAll.textContent = total;
  if (countActive) countActive.textContent = active;
  if (countCompleted) countCompleted.textContent = completed;

  // Progress Bar
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  const progressBarFill = document.getElementById("progressBarFill");
  const progressPercent = document.getElementById("progressPercent");
  const progressBar = document.getElementById("progressBar");

  if (progressBarFill) {
    progressBarFill.style.width = `${percent}%`;
  }
  if (progressPercent) {
    progressPercent.textContent = `${percent}%`;
  }
  if (progressBar) {
    progressBar.setAttribute("aria-valuenow", percent);
  }
};
