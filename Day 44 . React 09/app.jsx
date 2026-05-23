import React from "react";
import { Box } from "@mui/material";

import LoginForm from "./pages/loginform";
import ProductCard from "./pages/productcard";

const App = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        flexWrap: "wrap",
        p: 3,
      }}
    >
      <LoginForm />
      <ProductCard />
    </Box>
  );
};

export default App;