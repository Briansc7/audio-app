import Checkout from "./Checkout";

import { checkoutInputsInfo } from "./CheckoutInputsInfo";

const CheckoutContainer = () => {
  const formInfo = {
    action: "/",
    method: "POST",
  };
  return (
    <div>
      <Checkout formInfo={formInfo} checkoutInputsInfo={checkoutInputsInfo} />
    </div>
  );
};

export default CheckoutContainer;
