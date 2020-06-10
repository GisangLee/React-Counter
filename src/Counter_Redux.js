import "./Counter_Redux.css";
import { createStore } from "redux";

const addBtn = document.querySelector(".add");
const minusBtn = document.querySelector(".minus");
const number = document.querySelector("span");

const ADD = "add";
const MINUS = "minus";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

const handleAdd = () => {
  store.dispatch({ type: ADD });
};

const handleMinus = () => {
  store.dispatch({ type: MINUS });
};

const onChage = () => {
  number.innerText = store.getState();
};

store.subscribe(onChage);

addBtn.addEventListener("click", handleAdd);
minusBtn.addEventListener("click", handleMinus);
