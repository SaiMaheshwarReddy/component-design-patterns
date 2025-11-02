import useCounter from '../hooks/useCounter';
const Reset = () => {
  const { handleReset } = useCounter();

  return <button onClick={handleReset}>Reset</button>;
};

export default Reset;
