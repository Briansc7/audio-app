import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { Link } from "react-router-dom";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModalDashboard from "../../common/modalDashboard/ModalDashboard";
import CreateProductModal from "../../common/createProductModal/CreateProductModal";

const Dasboard = ({
  products,
  viewProduct,
  editProduct,
  deleteProduct,
  open,
  handleClose,
  disabled,
  data,
  setChangesProducts,
  openCreate,
  handleCloseCreate,
  setOpenCreate,
}) => {
  return (
    <div>
      <h1>Aca se manipulan los datos desde admin</h1>

      <Link to="/dashboardUsers">Ir al CRUD de usuarios</Link>
      <button onClick={() => setOpenCreate(true)}>Agregar Productos</button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">stock</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={products.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell align="right">{product.name}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.stock}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => viewProduct(product)}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton onClick={() => editProduct(product)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteProduct(product)}>
                    <DeleteForeverIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {open && (
        <ModalDashboard
          open={open}
          handleClose={handleClose}
          data={data}
          disabled={disabled}
          setChangesProducts={setChangesProducts}
        />
      )}
      <CreateProductModal open={openCreate} handleClose={handleCloseCreate} />
    </div>
  );
};

export default Dasboard;
