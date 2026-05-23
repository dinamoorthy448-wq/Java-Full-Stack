import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ text }) => {
  return (
    <Button variant="contained">
      {text}
    </Button>
  );
};

export default CustomButton;