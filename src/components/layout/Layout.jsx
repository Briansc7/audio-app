import { Outlet } from "react-router-dom";
import FooterContainer from "./footer/FooterContainer";
import NavbarContainer from "./navbar/NavbarContainer";

const Layout = () => {
  return (
    <div>
      <div style={{ height: "60px", backgroundColor: "red" }}>
        <NavbarContainer />
      </div>

      <div
        style={{ minHeight: "calc(100vh - 260px)", backgroundColor: "blue" }}
      >
        <Outlet />
      </div>

      <div style={{ height: "200px", backgroundColor: "brown" }}>
        <FooterContainer />
      </div>
    </div>
  );
};

export default Layout;
