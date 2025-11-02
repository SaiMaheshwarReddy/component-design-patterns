import useCounter from '../hooks/useCounter';
const Decrement = () => {
  const { handleDecrement } = useCounter();
  return <button onClick={handleDecrement}>Decrement</button>;
};

export default Decrement;
