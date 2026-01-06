import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_TableOptions,
  useMaterialReactTable,
  MRT_EditActionButtons,
} from "material-react-table";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  state: string;
};

const usStates = ["California", "Texas", "Florida"];

const initialData: User[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    state: "California",
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@gmail.com",
    state: "Texas",
  },
];

const EmployeeTable = () => {
  const [data, setData] = useState<User[]>(initialData);

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      { accessorKey: "id", header: "ID", enableEditing: false },
      { accessorKey: "firstName", header: "First Name" },
      { accessorKey: "lastName", header: "Last Name" },
      { accessorKey: "email", header: "Email" },
      {
        accessorKey: "state",
        header: "State",
        editVariant: "select",
        editSelectOptions: usStates,
      },
    ],
    []
  );

  const handleCreate: MRT_TableOptions<User>["onCreatingRowSave"] = async ({
    values,
    table,
  }) => {
    setData((prev) => [...prev, { ...values, id: Date.now().toString() }]);
    table.setCreatingRow(null);
  };

  const handleEdit: MRT_TableOptions<User>["onEditingRowSave"] = async ({
    values,
    table,
  }) => {
    setData((prev) =>
      prev.map((u) => (u.id === values.id ? values : u))
    );
    table.setEditingRow(null);
  };

  const handleDelete = (row: MRT_Row<User>) => {
    if (window.confirm("Delete this employee?")) {
      setData((prev) => prev.filter((u) => u.id !== row.original.id));
    }
  };

  const table = useMaterialReactTable({
    columns,
    data,
    enableEditing: true,
    createDisplayMode: "modal",
    editDisplayMode: "modal",
    getRowId: (row) => row.id,
    onCreatingRowSave: handleCreate,
    onEditingRowSave: handleEdit,

    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: 1 }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => handleDelete(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),

    renderTopToolbarCustomActions: ({ table }) => (
      <Button variant="contained" onClick={() => table.setCreatingRow(true)}>
        Add Employee
      </Button>
    ),

    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle>Add Employee</DialogTitle>
        <DialogContent>{internalEditComponents}</DialogContent>
        <DialogActions>
          <MRT_EditActionButtons table={table} row={row} />
        </DialogActions>
      </>
    ),

    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle>Edit Employee</DialogTitle>
        <DialogContent>{internalEditComponents}</DialogContent>
        <DialogActions>
          <MRT_EditActionButtons table={table} row={row} />
        </DialogActions>
      </>
    ),
  });

  return <MaterialReactTable table={table} />;
};

export default EmployeeTable;
