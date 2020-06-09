import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  state = {
    number: 0,
  };
  render() {
    const addBtn = document.querySelector(".counter__btn-add");
    const minusBtn = document.querySelector(".counter__btn-minus");
    const number = document.querySelector("span");

    const addNumber = () => {
      const { number } = this.state;
      console.log(number);
      this.setState({ number: number + 1 });
    };

    const minusNumber = () => {
      console.log("Fuck");
    };

    return (
      <div className="counter">
        <div className="counter__column">
          <div className="counter__number">
            <span>0</span>
          </div>
        </div>
        <div className="counter__column">
          <div className="counter__btn">
            <button className="counter__btn-add" onClick={addNumber}>
              더하기
            </button>
            <button className="counter__btn-minus" onClick={minusNumber}>
              빼기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
