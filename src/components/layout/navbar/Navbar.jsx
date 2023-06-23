import { AppBar, Box, Button, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CustomModalContainer from "../../common/customModal/customModalContainer";

const Navbar = ({ handleClose, handleOpen, open, menu }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "background.second" }}>
        <Toolbar>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <img src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg" />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <img src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg" />
            <Button color="inherit">Login</Button>
            <Box>
              {menu.map((item) => {
                return (
                  <Link key={item.id} sx={{ flexGrow: 1 }} to={item.path}>
                    {item.title}
                  </Link>
                );
              })}
            </Box>
            <IconButton onClick={handleOpen}>
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <CustomModalContainer open={open} handleClose={handleClose} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
