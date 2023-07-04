import { useDispatch } from "react-redux";
import { decrementOneById, incrementOneById } from "../../../store/cartSlice";
import CartCounter from "./CartCounter";

const CartCounterContainer = ({ id, quantity, stock }) => {
  const dispatch = useDispatch();
  return (
    <CartCounter
      id={id}
      quantity={quantity}
      decrementOneById={decrementOneById}
      incrementOneById={incrementOneById}
      dispatch={dispatch}
      stock={stock}
    />
  );
};

export default CartCounterContainer;
