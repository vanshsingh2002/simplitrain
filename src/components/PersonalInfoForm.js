import React, { useState } from "react";
import { Box, TextField, Typography, MenuItem, styled, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FormField = styled(Box)({
  marginBottom: "16px",
  "&:last-child": {
    marginBottom: 0,
  },
});

const InputLabel = styled(Typography)({
  color: "#64748B",
  fontSize: "12px",
  fontWeight: 500,
  marginBottom: "4px",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "#F8FAFC",
    height: "44px",
    "& fieldset": { borderColor: "transparent" },
    "&:hover fieldset": { borderColor: "transparent" },
    "&.Mui-focused fieldset": { borderColor: "transparent" },
  },
  "& .MuiOutlinedInput-input": {
    padding: "12px 16px",
    fontSize: "14px",
    color: "#0F172A",
    "&::placeholder": { color: "#94A3B8", opacity: 1 },
  },
  "& .MuiSelect-select": {
    padding: "12px 16px",
    fontSize: "14px",
    color: "#0F172A",
  },
  "& .MuiSelect-icon": {
    color: "#0F172A",
    right: "12px",
  },
});

const PersonalInfoForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    firstName: "Rohan",
    lastName: "Roshan",
    email: "rohan.roshan@gmail.com",
    gender: "Male",
    age: "35",
    address1: "No 10, Office no 1",
    address2: "Koramangala",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560095",
    country: "India",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Save
  const handleSubmit = () => {
    console.log("✅ Saving Personal Info:", formData);
    onSave?.(formData); // Update the parent component
  };

  return (
    <Box>
      <FormField>
        <InputLabel>First Name</InputLabel>
        <StyledTextField fullWidth name="firstName" value={formData.firstName} onChange={handleChange} />
      </FormField>

      <FormField>
        <InputLabel>Last Name</InputLabel>
        <StyledTextField fullWidth name="lastName" value={formData.lastName} onChange={handleChange} />
      </FormField>

      <FormField>
        <InputLabel>Email</InputLabel>
        <StyledTextField fullWidth name="email" value={formData.email} onChange={handleChange} />
      </FormField>

      <FormField>
        <InputLabel>Gender</InputLabel>
        <StyledTextField select fullWidth name="gender" value={formData.gender} onChange={handleChange}>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </StyledTextField>
      </FormField>

      <FormField>
        <InputLabel>Age</InputLabel>
        <StyledTextField fullWidth name="age" value={formData.age} onChange={handleChange} />
      </FormField>

      <FormField>
        <InputLabel>Address line 1</InputLabel>
        <StyledTextField fullWidth name="address1" value={formData.address1} onChange={handleChange} />
      </FormField>

      <FormField>
        <InputLabel>Address line 2</InputLabel>
        <StyledTextField fullWidth name="address2" value={formData.address2} onChange={handleChange} />
      </FormField>

      <Box sx={{ display: "flex", gap: 2 }}>
        <FormField sx={{ flex: 1 }}>
          <InputLabel>City</InputLabel>
          <StyledTextField fullWidth name="city" value={formData.city} onChange={handleChange} />
        </FormField>

        <FormField sx={{ flex: 1 }}>
          <InputLabel>State</InputLabel>
          <StyledTextField select fullWidth name="state" value={formData.state} onChange={handleChange}>
            <MenuItem value="Karnataka">Karnataka</MenuItem>
          </StyledTextField>
        </FormField>
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <FormField sx={{ flex: 1 }}>
          <InputLabel>Pincode</InputLabel>
          <StyledTextField fullWidth name="pincode" value={formData.pincode} onChange={handleChange} />
        </FormField>

        <FormField sx={{ flex: 1 }}>
          <InputLabel>Country</InputLabel>
          <StyledTextField select fullWidth name="country" value={formData.country} onChange={handleChange}>
            <MenuItem value="India">India</MenuItem>
          </StyledTextField>
        </FormField>
      </Box>

      {/* Hidden Save Trigger */}
      <button className="hidden-save-trigger" onClick={handleSubmit} style={{ display: "none" }}>
        Hidden Save
      </button>

    </Box>
  );
};

export default PersonalInfoForm;
