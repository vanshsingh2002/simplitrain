import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  styled,
} from '@mui/material';

const StyledTextField = styled(TextField)({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: '#F1F5F9',
    minHeight: '160px',
    width: '100%',
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
  },
});

const EditBioForm = ({ onClose, onSave, initialBio = '' }) => {
  const [bio, setBio] = useState('');

  useEffect(() => {
    // Get the current bio text when the form opens
    const bioElement = document.getElementById('bioText');
    if (bioElement) {
      setBio(bioElement.textContent);
    }
  }, []);

  const handleChange = (event) => {
    setBio(event.target.value);
  };

  const handleSubmit = () => {
    onSave(bio);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <StyledTextField
        fullWidth
        multiline
        rows={6}
        value={bio}
        onChange={handleChange}
        InputProps={{
          placeholder: "Write something about yourself..."
        }}
      />
    </Box>
  );
};

export default EditBioForm; 