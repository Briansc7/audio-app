import { AppBar, Box, Button, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
          <Box>
            <img src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg" />
            <Button color="inherit">Login</Button>
            <div>
              <Link>HOME</Link>
              <Link>HEADPHONES</Link>
              <Link>SPEAKERS</Link>
              <Link>EARPHONES</Link>
            </div>

            <ShoppingCartOutlinedIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
