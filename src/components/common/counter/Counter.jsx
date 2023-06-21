import { BotonNaranja } from "../../custom/customComponents";

const Counter = ({ counter, setCounter, onAdd }) => {
  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+</button>

      <BotonNaranja variant="contained" onClick={() => onAdd(counter)}>
        Add to Cart
      </BotonNaranja>
    </div>
  );
};

export default Counter;
