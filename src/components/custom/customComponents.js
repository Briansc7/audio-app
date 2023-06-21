import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
export const BotonNaranja = styled(Button)((theme) => ({
  width: "160px",
  padding: "10px",
  backgroundColor: theme.palette.primary.main,
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.primary.second,
  },
}));
