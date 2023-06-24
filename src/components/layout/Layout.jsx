import { Outlet } from "react-router-dom";
import FooterContainer from "./footer/FooterContainer";
import NavbarContainer from "./navbar/NavbarContainer";

const Layout = () => {
  return (
    <div>
      <div
        style={{
          height: "60px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <NavbarContainer />
      </div>

      <div
        style={{
          minHeight: "calc(100vh - 260px)",
          backgroundColor: "white",
        }}
      >
        <Outlet />
      </div>

      <div style={{ height: "200px", backgroundColor: "black" }}>
        <FooterContainer />
      </div>
    </div>
  );
};

export default Layout;
