import Dasboard from "./Dasboard";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const DasboardContainer = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [data, setData] = useState({});
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let refCollection = collection(db, "products");

    const getData = async () => {
      let res = await getDocs(refCollection);
      let finalProducts = res.docs.map((product) => {
        return { id: product.id, ...product.data() };
      });

      setProducts(finalProducts);
    };

    getData();
  }, []);

  const viewProduct = (product) => {
    setData(product);
    setDisabled(true);
    setOpen(true);
  };
  const editProduct = (product) => {
    setData(product);
    setDisabled(false);
    setOpen(true);
  };
  const deleteProduct = (product) => {};

  let props = {
    products,
    viewProduct,
    editProduct,
    deleteProduct,
    open,
    handleClose,
    disabled,
    data,
  };

  return <Dasboard {...props} />;
};

export default DasboardContainer;
