import { useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../customcomponent/customcomponent";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f4f6f8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ width: 360, p: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Admin Login
        </Typography>

        <CustomInput
          label="Username"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        />

        <CustomInput
          label="Password"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
