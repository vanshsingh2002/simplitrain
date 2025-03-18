import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  styled,
} from '@mui/material';

const StyledTextField = styled(TextField)({
  width: '100%',
  marginBottom: '16px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: '#F1F5F9',
    height: '56px',
    '& fieldset': {
      borderColor: 'transparent',
      borderWidth: 0,
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
      borderWidth: 0,
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
      borderWidth: 0,
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '16px',
    fontSize: '14px',
    color: '#0F172A',
    '&::placeholder': {
      color: '#64748B',
      opacity: 1,
    },
    '&[type="date"]': {
      opacity: 0,
      cursor: 'pointer',
      '&::-webkit-calendar-picker-indicator': {
        position: 'absolute',
        right: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        filter: 'invert(0.4)',
        cursor: 'pointer',
        width: '24px',
        height: '24px',
        opacity: 1,
      },
      '&:not([value=""])': {
        opacity: 1,
      },
    },
  },
  '& .MuiInputLabel-root': {
    color: '#64748B',
    fontSize: '12px',
    fontWeight: 500,
    textTransform: 'uppercase',
    transform: 'translate(16px, 16px)',
    '&.MuiInputLabel-shrink': {
      transform: 'translate(16px, 2px)',
    },
    '&.Mui-focused': {
      color: '#64748B',
    },
  },
  '& .MuiSelect-select': {
    padding: '16px !important',
  },
  '& .MuiSelect-icon': {
    right: '16px',
  },
});

const EditEducationForm = ({ onSave, initialData }) => {
  const [formData, setFormData] = useState({
    degree: initialData?.degree || '',
    college: initialData?.college || '',
    fieldOfStudy: initialData?.fieldOfStudy || '',
    startDate: initialData?.startDate || '',
    endDate: initialData?.endDate || '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        degree: initialData.degree || '',
        college: initialData.college || '',
        fieldOfStudy: initialData.fieldOfStudy || '',
        startDate: initialData.startDate || '',
        endDate: initialData.endDate || '',
      });
    }
  }, [initialData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <StyledTextField
        select
        fullWidth
        label="Degree"
        name="degree"
        value={formData.degree}
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
      >
        <option value="">Select degree</option>
        <option value="Bachelors">Bachelors</option>
        <option value="Masters">Masters</option>
        <option value="PhD">Ph.D.</option>
      </StyledTextField>

      <StyledTextField
        fullWidth
        label="College"
        name="college"
        value={formData.college}
        onChange={handleChange}
      />

      <StyledTextField
        fullWidth
        label="Field of study"
        name="fieldOfStudy"
        value={formData.fieldOfStudy}
        onChange={handleChange}
      />

      <StyledTextField
        fullWidth
        type="date"
        label="Start Date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          max: formData.endDate || undefined
        }}
      />

      <StyledTextField
        fullWidth
        type="date"
        label="End Date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: formData.startDate || undefined
        }}
      />
    </Box>
  );
};

export default EditEducationForm; 