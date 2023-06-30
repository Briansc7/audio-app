import { Button } from "@mui/material";
import { BotonNaranja } from "../../custom/customComponents";

const Counter = ({ counter, setCounter, onAdd }) => {
  return (
    <div>
      <Button
        onClick={() => setCounter(counter - 1)}
        sx={{
          color: "primary.main",
          minWidth: "20px",
          height: "20px",
          fontSize: "2rem",
        }}
        disabled={counter > 1 ? false : true}
      >
        -
      </Button>
      <h5>{counter}</h5>
      <Button
        onClick={() => setCounter(counter + 1)}
        sx={{
          color: "primary.main",
          minWidth: "20px",
          height: "20px",
          fontSize: "2rem",
        }}
      >
        +
      </Button>

      <BotonNaranja variant="contained" onClick={() => onAdd(counter)}>
        Add to Cart
      </BotonNaranja>
    </div>
  );
};

export default Counter;
