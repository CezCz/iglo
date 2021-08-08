import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Content from "./Components/Content";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import { Box, createTheme, ThemeProvider, Typography } from "@material-ui/core";
import { atom, RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

let theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
      light: "rgb(64, 131, 183)",
      dark: "rgb(11, 70, 115)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f50057",
      light: "rgb(247, 51, 120)",
      dark: "rgb(171, 0, 60)",
      contrastText: "#fff",
    },
  },
});

export const activeTabState = atom({
  key: "activeTab",
  default: 0,
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <RecoilRoot>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 2,
              gridTemplateRows: "auto",
              gridTemplateAreas: `"header header header header header header"
                                    "sidebar main main main main main"
                                    "footer footer footer footer footer footer"`,
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                gridArea: "header",
                padding: "20px",
                typography: "header",
              }}
            >
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Internetowa Go Liga O!
              </Typography>
            </Box>
            <Box sx={{ gridArea: "sidebar" }}>
              <Navigation />
            </Box>
            <Box sx={{ gridArea: "main" }}>
              <Content />
            </Box>
            <Box sx={{ gridArea: "footer", p: 3 }}>
              <Footer />
            </Box>
          </Box>
        </RecoilRoot>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
