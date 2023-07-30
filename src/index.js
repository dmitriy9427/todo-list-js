import "./styles/index.css";

const getElementDom = (element) => {
  return document.querySelector(`.${element}`);
};

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
    let li = document.createElement("li");
    li.insertAdjacentHTML(
      "afterbegin",
      `
    <input id="checbox" class="todo__list-item-input" type="checkbox" />
    <label for="checbox" class="todo__list-item-label"></label>
    <span class="todo__list-item-text">${localArr[i]}</span>
    <div class="todo__list-item-svg">
      
    <svg
    onClick=editTodoElement(${i})
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z"
          fill="#000000"
        />
      </svg>
 
      <svg
      onclick=deleteTodoElement(${i})
      width="30px"
      height="30px"
      viewBox="0 0 1024 1024"
      class="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M667.8 362.1H304V830c0 28.2 23 51 51.3 51h312.4c28.4 0 51.4-22.8 51.4-51V362.2h-51.3z"
        fill="#CCCCCC"
      />
      <path
        d="M750.3 295.2c0-8.9-7.6-16.1-17-16.1H289.9c-9.4 0-17 7.2-17 16.1v50.9c0 8.9 7.6 16.1 17 16.1h443.4c9.4 0 17-7.2 17-16.1v-50.9z"
        fill="#CCCCCC"
      />
      <path
        d="M733.3 258.3H626.6V196c0-11.5-9.3-20.8-20.8-20.8H419.1c-11.5 0-20.8 9.3-20.8 20.8v62.3H289.9c-20.8 0-37.7 16.5-37.7 36.8V346c0 18.1 13.5 33.1 31.1 36.2V830c0 39.6 32.3 71.8 72.1 71.8h312.4c39.8 0 72.1-32.2 72.1-71.8V382.2c17.7-3.1 31.1-18.1 31.1-36.2v-50.9c0.1-20.2-16.9-36.8-37.7-36.8z m-293.5-41.5h145.3v41.5H439.8v-41.5z m-146.2 83.1H729.5v41.5H293.6v-41.5z m404.8 530.2c0 16.7-13.7 30.3-30.6 30.3H355.4c-16.9 0-30.6-13.6-30.6-30.3V382.9h373.6v447.2z"
        fill="#211F1E"
      />
      <path
        d="M511.6 798.9c11.5 0 20.8-9.3 20.8-20.8V466.8c0-11.5-9.3-20.8-20.8-20.8s-20.8 9.3-20.8 20.8v311.4c0 11.4 9.3 20.7 20.8 20.7zM407.8 798.9c11.5 0 20.8-9.3 20.8-20.8V466.8c0-11.5-9.3-20.8-20.8-20.8s-20.8 9.3-20.8 20.8v311.4c0.1 11.4 9.4 20.7 20.8 20.7zM615.4 799.6c11.5 0 20.8-9.3 20.8-20.8V467.4c0-11.5-9.3-20.8-20.8-20.8s-20.8 9.3-20.8 20.8v311.4c0 11.5 9.3 20.8 20.8 20.8z"
        fill="#211F1E"
      />
    </svg>
      
    </div>`
    );
    li.className = "todo__list-item";
    todoList.prepend(li);
  }
}

function addElement() {
  let value = todoInput.value;
  if (value.length > 0) {
    localArr.push(value);
    todoInput.value = "";
  }
  localStorage.setItem("arr", JSON.stringify(localArr));
  render();
}

function editTodoElement(index) {
  togglePopup();
  let item = localArr[index];
  if (index !== undefined) {
    popupSaveBtn.addEventListener("click", function (e) {
      e.preventDefault();
      save(index);
    });
    popupInput.value = item;
  }
}

function save(index) {
  if (popupInput.value.length > 0) {
    localArr[index] = popupInput.value;
    localStorage.setItem("arr", JSON.stringify(localArr));
    render();
    togglePopup();
  }
}

function deleteTodoElement(index) {
  if (index !== undefined) {
    localArr.splice(index, 1);
  }
  localStorage.setItem("arr", JSON.stringify(localArr));
  render();
}

todoAddBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addElement();
});
todoAddBtn.removeEventListener("click", (e) => {
  e.preventDefault();
  addElement();
});

function togglePopup() {
  popup.classList.toggle("open-popup");
}

popupCancelBtn.addEventListener("click", togglePopup);

popupCloseBtn.addEventListener("click", togglePopup);

render();
