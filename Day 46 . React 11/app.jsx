import React, { useState } from "react";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box, Paper } from "@mui/material";

import getTheme from "./pages/theme";
import GenderRadio from "./pages/GenderRadio";
import ThemeToggle from "./pages/ThemeToggle";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = getTheme(
    darkMode ? "dark" : "light"
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "background.default",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            padding: 4,
            width: 350,
          }}
        >
          <GenderRadio />

          <ThemeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default App;