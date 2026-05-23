import React from "react";

import {
  FormControlLabel,
  Switch,
  Typography,
  Box,
} from "@mui/material";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <Box mt={4}>
      <Typography variant="h6">
        Theme Mode
      </Typography>

      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onChange={() =>
              setDarkMode(!darkMode)
            }
          />
        }
        label={darkMode ? "Dark Mode" : "Light Mode"}
      />
    </Box>
  );
};

export default ThemeToggle;