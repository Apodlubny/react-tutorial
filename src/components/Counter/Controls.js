import React from "react";

const Controls = ({ onIncrement, onDecrement, onMultiplier, onDivider }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      Увеличить на 1
    </button>
    <button type="button" onClick={onDecrement}>
      Уменьшить на 1
    </button>
    <button type="button" onClick={onMultiplier}>
      Умножить на 2
    </button>
    <button type="button" onClick={onDivider}>
      Pазделить на 2
    </button>
  </div>
);

export default Controls;
