import React from 'react';
const useTimer = (decrement) => {
  const timerRef = React.useRef({});

  const resetTimer = () => {
    clearInterval(timerRef.current.intervalId);
    clearTimeout(timerRef.current.timeoutId);
  };

  const startAutoDecrement = () => {
    timerRef.current.intervalId = setInterval(() => {
      decrement();
      console.count('Decreased');
    }, 1000);
  };

  const startTimer = () => {
    resetTimer();
    timerRef.current.timeoutId = setTimeout(() => {
      startAutoDecrement();
      console.log('Start Timer');
    }, 5000);
  };

  return {
    resetTimer,
    startTimer,
  };
};

export default useTimer;
