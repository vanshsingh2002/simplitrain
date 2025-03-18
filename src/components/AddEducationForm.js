import React, { useState } from "react";
import { Box, TextField, MenuItem, styled, InputAdornment, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const FormField = styled(Box)({
  marginBottom: "16px",
  "&:last-child": {
    marginBottom: 0,
  },
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "#F1F5F9",
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "16px",
    fontSize: "14px",
    color: "#0F172A",
    cursor: "pointer", // Ensures cursor changes to pointer
    "&::placeholder": {
      color: "#94A3B8",
      opacity: 1,
    },
  },
  "& .MuiInputLabel-root": {
    color: "#64748B",
    fontSize: "14px",
    "&.Mui-focused": {
      color: "#64748B",
    },
  },
});

const AddEducationForm = () => {
  const [formData, setFormData] = useState({
    degree: "",
    college: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
  });

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to open calendar when clicking anywhere on the field
  const openCalendar = (name) => {
    document.getElementById(name)?.showPicker(); // Uses the native HTML date picker
  };

  return (
    <Box>
      <FormField>
        <StyledTextField
          fullWidth
          select
          label="Degree"
          name="degree"
          value={formData.degree}
          onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
          SelectProps={{
            IconComponent: KeyboardArrowDownIcon,
          }}
        >
          <MenuItem value="bachelors">Bachelor's Degree</MenuItem>
          <MenuItem value="masters">Master's Degree</MenuItem>
          <MenuItem value="phd">Ph.D.</MenuItem>
        </StyledTextField>
      </FormField>

      <FormField>
        <StyledTextField
          fullWidth
          label="College"
          name="college"
          value={formData.college}
          onChange={(e) => setFormData({ ...formData, college: e.target.value })}
          placeholder="Enter college name"
        />
      </FormField>

      <FormField>
        <StyledTextField
          fullWidth
          label="Field of study"
          name="fieldOfStudy"
          value={formData.fieldOfStudy}
          onChange={(e) => setFormData({ ...formData, fieldOfStudy: e.target.value })}
          placeholder="Enter your field of study"
        />
      </FormField>

      {/* Start Date */}
      <FormField>
        <StyledTextField
          fullWidth
          type="text"
          label="Start Date"
          value={formData.startDate}
          onClick={() => openCalendar("startDate")}
          placeholder="Select Start Date"
          InputProps={{
            readOnly: true, // Prevent manual typing
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => openCalendar("startDate")}>
                  <CalendarMonthIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleDateChange}
          style={{
            position: "absolute",
            visibility: "hidden",
            width: 0,
            height: 0,
            overflow: "hidden",
          }}
        />
      </FormField>

      {/* End Date */}
      <FormField>
        <StyledTextField
          fullWidth
          type="text"
          label="End Date"
          value={formData.endDate}
          onClick={() => openCalendar("endDate")}
          placeholder="Select End Date"
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => openCalendar("endDate")}>
                  <CalendarMonthIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleDateChange}
          style={{
            position: "absolute",
            visibility: "hidden",
            width: 0,
            height: 0,
            overflow: "hidden",
          }}
        />
      </FormField>
    </Box>
  );
};

export default AddEducationForm;
