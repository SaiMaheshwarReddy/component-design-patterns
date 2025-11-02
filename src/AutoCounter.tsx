import Increment from './components/Increment';
import Decrement from './components/Decrement';
import Reset from './components/Reset';
import React from 'react';
import CounterContext from './context/CounterContext';
import useTimer from './hooks/useTimer';
const AutoCounter = () => {
  const [count, setCount] = React.useState(0);
  const { startTimer, resetTimer } = useTimer(handleDecrement);

  function handleIncrement() {
    resetTimer();
    setCount((prev) => prev + 1);
    startTimer();
  }

  function handleDecrement() {
    setCount((prev) => {
      if (prev === 0) {
        resetTimer();
        return 0;
      } else {
        return prev - 1;
      }
    });
  }

  function handleReset() {
    resetTimer();
    // setCount(0);
  }

  return (
    <CounterContext
      value={{ count, handleDecrement, handleIncrement, handleReset }}
    >
      <div>
        <Increment />
        <Decrement />
        <Reset />
      </div>
      <h2>{count}</h2>
    </CounterContext>
  );
};

export default AutoCounter;
