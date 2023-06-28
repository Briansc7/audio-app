import { useSelector } from "react-redux";

import CustomModal from "./customModal";

const CustomModalContainer = ({ handleClose, open }) => {
  const { cart } = useSelector((store) => store.cartSlice);
  return <CustomModal open={open} handleClose={handleClose} cart={cart} />;
};

export default CustomModalContainer;
