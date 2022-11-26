import React, { Component } from "react";
import Controls from "./Controls";
import Value from "./Value";
import "./Counter.css";

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  handleMultiply = () => {
    this.setState(prevState => ({ value: prevState.value * 2 }));
  };
  handleDivider = () => {
    this.setState(prevState => ({ value: prevState.value / 2 }));
  };

  render() {
    const { value } = this.state;

    return (
      <div className="Counter">
        <Value value={value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onMultiplier={this.handleMultiply}
          onDivider={this.handleDivider}
        />
      </div>
    );
  }
}

export default Counter;
