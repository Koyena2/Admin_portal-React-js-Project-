import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 240,
        minHeight: "100vh",
        bgcolor: "#1976d2",
        color: "white",
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{ mb: 3 }}>
        Admin Panel
      </Typography>

      <List>
        <ListItemButton onClick={() => navigate("/admin/dashboard")}>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
