import { Box, Modal, TextField } from "@mui/material";
import { useFormik } from "formik";
import { db } from "../../../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

const ModalDashboard = ({
  open,
  data,
  disabled,
  handleClose,
  setChangesProducts,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      name: data.name,
      price: data.price,
    },
    onSubmit: (productEdited) => {
      let obj = {
        ...productEdited,
        price: +productEdited.price,
      };
      updateDoc(doc(db, "products", data.id), obj);
      setChangesProducts(true);
      handleClose();
    },
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <TextField
              name="name"
              defaultValue={values.name}
              disabled={disabled}
              onChange={handleChange}
            />
            <TextField
              name="price"
              defaultValue={values.price}
              disabled={disabled}
              onChange={handleChange}
            />
            {!disabled && <button type="submit">Enviar</button>}

            <button type="button" onClick={handleClose}>
              Cerrar
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalDashboard;
