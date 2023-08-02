import Checkout from "./Checkout";

import { checkoutInputsInfo } from "./CheckoutInputsInfo";

import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

const CheckoutContainer = () => {
  const formInfo = {
    action: "/",
    method: "POST",
  };

  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago(import.meta.env.VITE_PUBLICKEY);

  const createPreference = async () => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_MP_BACKEND_HOST + "/create_preference",
        [
          {
            title: "zapatilla puma",
            unit_price: 5,
            quantity: 3,
          },
          {
            title: "zapatilla nike",
            unit_price: 10,
            quantity: 2,
          },
        ]
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div>
      {/* <Checkout formInfo={formInfo} checkoutInputsInfo={checkoutInputsInfo} /> */}

      <button onClick={handleBuy}>Comprar</button>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </div>
  );
};

export default CheckoutContainer;
