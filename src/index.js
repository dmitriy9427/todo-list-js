import "./styles/index.css";

const getElementDom = (element) => document.querySelector(`.${element}`);

const createItem = (item) => document.createElement(item);

const todoInput = getElementDom("todo__form-input");
const todoAddBtn = getElementDom("todo__form-btn");
const todoList = getElementDom("todo__list");
const popupCloseBtn = getElementDom("popup-edit__btn-close");
const popupSaveBtn = getElementDom("popup-edit__btn-save");
const popupCancelBtn = getElementDom("popup-edit__btn-cancel");
const popupInput = getElementDom("popup-edit__input");
const popup = getElementDom("popup");
const localArr = JSON.parse(localStorage.getItem("arr")) || [];

function render() {
  todoList.innerHTML = "";
  for (let i = 0; i < localArr.length; i++) {
    let li = createItem("li");
    li.classList.add("todo__list-item");

    let input = createItem("input");
    input.setAttribute("type", "checkbox");
    input.classList.add("todo__list-item-input");

    let span = createItem("span");
    span.classList.add("todo__list-item-text");
    span.textContent = localArr[i];

    let div = createItem("div");
    div.classList.add("todo__list-item-svg");

    let buttonEdit = createItem("button");
    buttonEdit.className = "btn todo__list-item-edit";
    buttonEdit.addEventListener("click", () => {
      editTodoElement(i);
    });
    buttonEdit.removeEventListener("click", () => {
      editTodoElement(i);
    });

    let buttonDelete = createItem("button");
    buttonDelete.className = "btn todo__list-item-delete";
    buttonDelete.addEventListener("click", () => {
      deleteTodoElement(i);
    });

    div.append(buttonEdit, buttonDelete);
    li.append(input, span, div);
    todoList.append(li);
  }
}

function addElement(e) {
  e.preventDefault();
  let value = todoInput.value;
  if (value.length > 0) {
    localArr.push(value);
    todoInput.value = "";
  }
  localStorage.setItem("arr", JSON.stringify(localArr));
  render();
}

function editTodoElement(index) {
  let item = localArr[index];
  if (index !== undefined) {
    togglePopup();
    popupInput.value = item;
    popupSaveBtn.addEventListener("click", () => {
      localArr[index] = popupInput.value;
      togglePopup();
      localStorage.setItem("arr", JSON.stringify(localArr));
      render();
    });
  }
}

function deleteTodoElement(index) {
  if (index !== undefined) {
    localArr.splice(index, 1);
  }
  localStorage.setItem("arr", JSON.stringify(localArr));
  render();
}

todoAddBtn.addEventListener("click", addElement);

function togglePopup() {
  popup.classList.toggle("open-popup");
}

popupCancelBtn.addEventListener("click", togglePopup);

popupCloseBtn.addEventListener("click", togglePopup);

render();
