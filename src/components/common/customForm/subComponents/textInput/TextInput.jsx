import { TextField } from "@mui/material";

const TextInput = ({ inputData }) => {
  return (
    <div>
      <TextField
        name={inputData.name}
        label={inputData.label}
        variant="outlined"
        /* onChange={inputData.handleChange}
        error={inputData.errors ? true : false}
        helperText={inputData.errors} */
      ></TextField>
    </div>
  );
};
export default TextInput;
