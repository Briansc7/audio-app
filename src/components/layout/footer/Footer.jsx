import { AppBar, Badge, Box, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = ({ menu }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "background.second",
        }}
      >
        <Toolbar className={styles.footerContainer}>
          <Box sx={{ display: "flex", gap: "50px" }}>
            {menu.map((item) => {
              return (
                <Link key={item.id} sx={{ flexGrow: 1 }} to={item.path}>
                  {item.title}
                </Link>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
