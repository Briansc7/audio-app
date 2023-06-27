import CustomFormContainer from "../../common/customForm/CustomFormContainer";

const Checkout = ({ formInfo, checkoutInputsInfo }) => {
  return (
    <div>
      <CustomFormContainer
        formInfo={formInfo}
        inputsInfo={checkoutInputsInfo}
      />
    </div>
  );
};

export default Checkout;
