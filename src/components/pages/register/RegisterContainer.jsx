import { register } from "../../../firebaseConfig";
import Register from "./Register";

const RegisterContainer = () => {
  const registerUser = async () => {
    let res = await register({
      email: "newUser@gmail.com",
      password: "123456",
    });
    console.log(res);
  };

  return (
    <div>
      <button onClick={registerUser}>Registrarme</button>
      <Register />
    </div>
  );
};

export default RegisterContainer;
