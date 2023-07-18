import Dasboard from "./Dasboard";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";

const DasboardContainer = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [data, setData] = useState({});
  const [changesProducts, setChangesProducts] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setChangesProducts(false);
    let refCollection = collection(db, "products");

    const getData = async () => {
      let res = await getDocs(refCollection);
      let finalProducts = res.docs.map((product) => {
        return { id: product.id, ...product.data() };
      });

      setProducts(finalProducts);
    };

    getData();
  }, [changesProducts]);

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
  const deleteProduct = (product) => {
    Swal.fire({
      title: `Seguro quieres eliminar el producto ${product.name}?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí, eliminar",
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let refDoc = doc(db, "products", product.id);
        deleteDoc(refDoc);
        Swal.fire("Producto eliminado exitosamente", "", "success");
        setChangesProducts(true);
      } else if (result.isDenied) {
        Swal.fire("Eliminación cancelada", "", "info");
      }
    });
  };

  let props = {
    products,
    viewProduct,
    editProduct,
    deleteProduct,
    open,
    handleClose,
    disabled,
    data,
    setChangesProducts,
  };

  return <Dasboard {...props} />;
};

export default DasboardContainer;
