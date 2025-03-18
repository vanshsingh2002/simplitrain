import React, { useState } from "react";
import { Box, TextField, MenuItem, styled, InputAdornment, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const FormField = styled(Box)({
  marginBottom: "16px",
  marginTop: "10px",
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
    cursor: "pointer",
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

const AddWorkExperienceForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    employmentType: "",
    industry: "",
    location: "",
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
    document.getElementById(name)?.showPicker();
  };

  return (
    <Box>
      <FormField>
        <StyledTextField
          fullWidth
          label="Job Title"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
          placeholder="Enter job title"
        />
      </FormField>

      <FormField>
        <StyledTextField
          fullWidth
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          placeholder="Enter company name"
        />
      </FormField>

      <FormField>
        <StyledTextField
          fullWidth
          select
          label="Employment Type"
          name="employmentType"
          value={formData.employmentType}
          onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
          SelectProps={{
            IconComponent: KeyboardArrowDownIcon,
          }}
          placeholder="Select employment type"
        >
          <MenuItem value="Full Time">Full Time</MenuItem>
          <MenuItem value="Part Time">Part Time</MenuItem>
          <MenuItem value="Contract">Contract</MenuItem>
          <MenuItem value="Internship">Internship</MenuItem>
          <MenuItem value="Freelance">Freelance</MenuItem>
        </StyledTextField>
      </FormField>

      <FormField>
        <StyledTextField
          fullWidth
          select
          label="Industry"
          name="industry"
          value={formData.industry}
          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
          SelectProps={{
            IconComponent: KeyboardArrowDownIcon,
          }}
          placeholder="Select industry"
        >
          <MenuItem value="Information Technology">Information Technology</MenuItem>
          <MenuItem value="Healthcare">Healthcare</MenuItem>
          <MenuItem value="Finance">Finance</MenuItem>
          <MenuItem value="Education">Education</MenuItem>
          <MenuItem value="Manufacturing">Manufacturing</MenuItem>
          <MenuItem value="Retail">Retail</MenuItem>
        </StyledTextField>
      </FormField>

      <FormField>
        <StyledTextField
          fullWidth
          label="Location/City"
          name="location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          placeholder="Enter location"
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
            readOnly: true,
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

export default AddWorkExperienceForm;
