import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Box,
  IconButton,
  styled
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '12px',
    maxWidth: '600px',
    width: '100%'
  }
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: '#F7FAFC',
  padding: '20px 24px',
  color: '#2D3748',
  fontWeight: 600,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

const EditForm = ({ open, onClose, section }) => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    location: '',
    // Experience
    jobTitle: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
    // Education
    degree: '',
    school: '',
    graduationYear: '',
    fieldOfStudy: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    onClose();
  };

  const renderPersonalForm = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );

  const renderExperienceForm = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Job Title"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Start Date"
          name="startDate"
          type="month"
          value={formData.startDate}
          onChange={handleChange}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="End Date"
          name="endDate"
          type="month"
          value={formData.endDate}
          onChange={handleChange}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={4}
        />
      </Grid>
    </Grid>
  );

  const renderEducationForm = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Degree"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="School"
          name="school"
          value={formData.school}
          onChange={handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Graduation Year"
          name="graduationYear"
          type="number"
          value={formData.graduationYear}
          onChange={handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Field of Study"
          name="fieldOfStudy"
          value={formData.fieldOfStudy}
          onChange={handleChange}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );

  const getFormTitle = () => {
    switch (section) {
      case 'personal':
        return 'Edit Personal Information';
      case 'experience':
        return 'Edit Experience';
      case 'education':
        return 'Edit Education';
      default:
        return 'Edit Information';
    }
  };

  const getFormContent = () => {
    switch (section) {
      case 'personal':
        return renderPersonalForm();
      case 'experience':
        return renderExperienceForm();
      case 'education':
        return renderEducationForm();
      default:
        return null;
    }
  };

  return (
    <StyledDialog open={open} onClose={onClose} fullWidth>
      <StyledDialogTitle>
        {getFormTitle()}
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ pt: 3 }}>
          {getFormContent()}
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={onClose} variant="outlined" color="inherit">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </form>
    </StyledDialog>
  );
};

export default EditForm; 