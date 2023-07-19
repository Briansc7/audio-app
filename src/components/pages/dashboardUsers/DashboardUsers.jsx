import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { db } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import { collection, doc, getDocs, updateDoc } from "@firebase/firestore";

const DashboardUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let refCollection = collection(db, "users");
      let res = await getDocs(refCollection);
      let usersGot = res.docs.map((element) => {
        return {
          id: element.id,
          ...element.data(),
        };
      });
      setUsers(usersGot);
    };

    getData();
  }, []);

  const editUser = (e, id) => {
    const roleToUpdate = e.target.checked === true ? "admin" : "customer";
    updateDoc(doc(db, "users", id), { role: roleToUpdate });
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.displayName}
                </TableCell>
                <TableCell component="th" scope="row">
                  <input
                    type="checkbox"
                    defaultChecked={user.role === "admin"}
                    onChange={(e) => editUser(e, user.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DashboardUsers;
