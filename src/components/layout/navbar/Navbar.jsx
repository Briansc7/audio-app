import { AppBar, Badge, Box, Button, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import "./Navbar.css";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CustomModalContainer from "../../common/customModal/CustomModalContainer";

const Navbar = ({ handleClose, handleOpen, open, menu, cart }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "background.second",
        }}
      >
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
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "space-between",
              width: "100vw",
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingBottom: "5px",
              paddingTop: "5px",
            }}
          >
            <img src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg" />

            <Box sx={{ display: "flex", gap: "50px" }}>
              {menu.map((item) => {
                return (
                  <Link key={item.id} sx={{ flexGrow: 1 }} to={item.path}>
                    {item.title}
                  </Link>
                );
              })}
            </Box>
            <Box>
              <Button color="inherit" component={Link} to="/register">
                Signup
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Badge badgeContent={cart.length} color="primary">
                <IconButton onClick={handleOpen}>
                  <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
                </IconButton>
              </Badge>
              <CustomModalContainer open={open} handleClose={handleClose} />
            </Box>
            <Link to="/dashboard">Ir al dashboard</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
