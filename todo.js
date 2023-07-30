const getElementDom = (element) => {
  return document.querySelector(`.${element}`);
};

const todoInput = getElementDom("todo__form-input");
console.log(todoInput);
