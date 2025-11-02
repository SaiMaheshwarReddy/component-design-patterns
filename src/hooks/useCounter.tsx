import React from 'react';
import CounterContext from '../context/CounterContext';
const useCounter = () => {
  const { count, handleDecrement, handleIncrement, handleReset } =
    React.use(CounterContext);

  return { count, handleDecrement, handleIncrement, handleReset };
};

export default useCounter;
