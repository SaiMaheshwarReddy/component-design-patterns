import React from 'react';
type startTimer = {
  initWaitTime?: number;
  gapBtw?: number;
}
const useTimer = (decrement:() => void) => {
  const timerRef = React.useRef<{timeoutId?: number, intervalId?: number}>({});

  const resetTimer = () => {
    clearInterval(timerRef.current.intervalId);
    clearTimeout(timerRef.current.timeoutId);
  };

  const startAutoDecrement = (gapBtw?:number) => {
    timerRef.current.intervalId = setInterval(() => {
      decrement();
      console.count('Decreased');
    }, gapBtw);
  };

  const startTimer = ({initWaitTime = 5000, gapBtw = 1000}: startTimer ) => {
    resetTimer();
    timerRef.current.timeoutId = setTimeout(() => {
      startAutoDecrement(gapBtw);
      console.log('Start Timer');
    }, initWaitTime);
  };

  return {
    resetTimer,
    startTimer,
  };
};

export default useTimer;
