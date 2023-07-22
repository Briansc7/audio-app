import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";

import { CloudinaryContext } from "cloudinary-react";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <CloudinaryContext cloudName="di9tla2mu">
          <AppRouter />
        </CloudinaryContext>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
