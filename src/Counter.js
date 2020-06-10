import React from "react";
import "./Counter.css";

const count = document.querySelector("span");

class Counter extends React.Component {
  state = {
    number: 0,
  };

  addNumber = () => {
    const { number } = this.state;
    this.setState({ number: number + 1 });
    console.log(number);
  };

  minusNumber = () => {
    const { number } = this.state;
    this.setState({ number: number - 1 });
    console.log(number);
  };
  render() {
    return (
      <div className="counter">
        <div className="counter__column">
          <div className="counter__number">
            <span>0</span>
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
