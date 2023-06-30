import { useState } from "react";
import Navbar from "./Navbar";
import { menu } from "../../../routes/navigation";
import { useSelector } from "react-redux";

const NavbarContainer = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useSelector((store) => store.cartSlice);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Navbar
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        menu={menu}
        cart={cart}
      />
    </div>
  );
};

export default NavbarContainer;
