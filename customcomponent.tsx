import { TextField } from "@mui/material";
import React from "react";

interface CustomInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput = ({
  label,
  type = "text",
  value,
  onChange,
}: CustomInputProps) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      label={label}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
