import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

const AdminLayout = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT CONTENT */}
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: "#f4f6f8" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
