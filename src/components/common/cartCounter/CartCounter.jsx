import { Box, Button, Typography } from "@mui/material";
import { removeById } from "../../../store/cartSlice";

const CartCounter = ({
  id,
  quantity,
  decrementOneById,
  incrementOneById,
  dispatch,
  stock,
}) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "secondary.second",
          width: "120px",
          height: "48px",
        }}
      >
        <Button
          onClick={
            quantity > 1
              ? () => dispatch(decrementOneById(id))
              : () => {
                  dispatch(removeById(id));
                }
          }
          sx={{
            color: "primary.main",
            minWidth: "20px",
            height: "20px",
          }}
        >
          -
        </Button>
        <Typography>{quantity}</Typography>
        <Button
          onClick={() => dispatch(incrementOneById(id))}
          sx={{
            color: "primary.main",
            minWidth: "20px",
            height: "20px",
          }}
          disabled={quantity >= stock ? true : false}
        >
          +
        </Button>
      </Box>
    </div>
  );
};

export default CartCounter;
