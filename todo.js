const getElementDom = (element) => {
  return document.querySelector(`.${element}`);
};

const todoInput = getElementDom("todo__form-input");
const todoAddBtn = getElementDom("todo__form-btn");
const todoList = getElementDom("todo__list");

console.log(todoInput);
