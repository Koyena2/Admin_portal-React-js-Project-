import { Box, Typography } from "@mui/material";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";

const Deshboard = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Employee Dashboard
      </Typography>

      <EmployeeTable />
    </Box>
  );
};

export default Deshboard;
