import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

const LoginForm = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 350,
        p: 4,
        mx: "auto",
        mt: 5,
      }}
    >
      <Typography variant="h5" mb={3} textAlign="center">
        Login Form
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
        />

        <Button variant="contained" size="large">
          Login
        </Button>
      </Box>
    </Paper>
  );
};

export default LoginForm;