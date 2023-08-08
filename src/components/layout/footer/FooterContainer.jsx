import Footer from "./Footer";
import { menu } from "../../../routes/navigation";

const FooterContainer = () => {
  return (
    <div>
      <Footer menu={menu} />
    </div>
  );
};

export default FooterContainer;
