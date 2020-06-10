import React from "react";
import "./Counter.css";

const count = document.querySelector("span");

class Counter extends React.Component {
  state = {
    number: 0,
  };

  addNumber = () => {
    this.setState((current) => ({ number: this.state.number + 1 }));
  };

  minusNumber = () => {
    this.setState((current) => ({ number: this.state.number - 1 }));
  };
  render() {
    const { number } = this.state;
    return (
      <div className="counter">
        <div className="counter__column">
          <div className="counter__number">
            <span>{number}</span>
          </div>
        </div>
        <div className="counter__column">
          <div className="counter__btn">
            <button className="counter__btn-add" onClick={this.addNumber}>
              더하기
            </button>
            <button className="counter__btn-minus" onClick={this.minusNumber}>
              빼기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
