import { addDoc, collection } from "firebase/firestore";
import { db, register } from "../../../firebaseConfig";
import Register from "./Register";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";

const RegisterContainer = () => {
  const [image, setImage] = useState("");

  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    try {
      if (!image) return;

      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "ske7ajpn"); // Replace with your upload preset

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/di9tla2mu/image/upload", // Replace with your cloud name
        formData
      );

      setImageUrl(response.data.secure_url);

      console.log(response.data.secure_url);
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

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

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
      photoUrl: "",
    },
    onSubmit: (registerForm) => {
      console.log(registerForm);
    },
  });

  return (
    <div>
      {/* <button onClick={registerUser}>Registrarme</button> */}
      <Register
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        values={values}
        handleImageChange={handleImageChange}
        handleImageUpload={handleImageUpload}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default RegisterContainer;
