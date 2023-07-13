import { addDoc, collection } from "firebase/firestore";
import { db, register } from "../../../firebaseConfig";
import Register from "./Register";

const RegisterContainer = () => {
  const registerUser = async () => {
    let res = await register({
      email: "newUser@gmail.com",
      password: "123456",
    });
    let data = {
      email: "pepeperez@gmail.com",
      displayName: "Pepe Perez",
      photoUrl:
        "https://nattivos.com/wp-content/uploads/2017/11/imagen-personal.jpg",
      rol: "customer",
    };

    const usersCollection = collection(db, "users");
    addDoc(usersCollection, data);
  };

  return (
    <div>
      <button onClick={registerUser}>Registrarme</button>
      <Register />
    </div>
  );
};

export default RegisterContainer;
