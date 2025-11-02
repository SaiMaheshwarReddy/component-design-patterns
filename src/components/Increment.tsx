import useCounter from '../hooks/useCounter';
const Increment = () => {
  const { handleIncrement } = useCounter();
  return <button onClick={handleIncrement}>Increment</button>;
};

export default Increment;
