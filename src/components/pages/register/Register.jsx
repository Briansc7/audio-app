import { TextField } from "@mui/material";
import { Image } from "cloudinary-react";

const Register = ({
  handleSubmit,
  handleChange,
  values,
  handleImageChange,
  handleImageUpload,
  imageUrl,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="nombre y apellido"
          name="displayName"
          onChange={handleChange}
        />
        <TextField label="email" name="email" onChange={handleChange} />
        <TextField label="password" name="password" onChange={handleChange} />

        {/* <input type="file" name="photoUrl" onChange={handleChange} /> */}
        <div>
          <input type="file" onChange={handleImageChange} />
          <button onClick={handleImageUpload} type="button">
            Upload Image
          </button>
          {imageUrl && <Image cloudName="di9tla2mu" publicId={imageUrl} />}
        </div>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
