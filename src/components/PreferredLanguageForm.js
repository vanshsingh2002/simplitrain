import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CheckIcon from '@mui/icons-material/Check';

const StyledTextField = styled(TextField)({
  width: '100%',
  marginBottom: '24px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: '#F1F5F9',
    height: '48px',
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
    padding: '12px 16px',
    fontSize: '14px',
    color: '#0F172A',
    '&::placeholder': {
      color: '#64748B',
      opacity: 1,
    },
  },
});

const LanguageOption = styled(FormControlLabel)({
  width: '100%',
  margin: 0,
  padding: '12px 16px',
  borderRadius: '12px',
  '&:hover': {
    backgroundColor: '#F8FAFC',
  },
  '& .MuiCheckbox-root': {
    padding: 0,
    marginRight: '12px',
  },
  '& .MuiTypography-root': {
    fontSize: '14px',
    color: '#0F172A',
  },
});

const StyledCheckbox = styled(Checkbox)({
  '&.MuiCheckbox-root': {
    width: '20px',
    height: '20px',
    border: '2px solid #CBD5E1',
    borderRadius: '4px',
    backgroundColor: '#fff',
    position: 'relative',
    '&.Mui-checked': {
      backgroundColor: '#0F172A',
      borderColor: '#0F172A',
      '& .MuiSvgIcon-root': {
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '16px',
        color: '#fff',
      },
    },
  },
  '& .MuiSvgIcon-root': {
    display: 'none',
  },
});

const languages = [
  'English',
  'Spanish',
  'French',
  'German',
  'Italian',
  'Portuguese',
  'Russian',
  'Chinese',
  'Japanese',
  'Korean',
  'Arabic',
  'Hindi',
  'Bengali',
  'Turkish',
  'Vietnamese',
  'Thai',
  'Tamil',
  'Telugu',
  'Marathi',
  'Gujarati'
];

const PreferredLanguageForm = ({ onSave, initialLanguages = ['English'] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState(initialLanguages);

  useEffect(() => {
    setSelectedLanguages(initialLanguages);
  }, [initialLanguages]);

  const handleLanguageToggle = (language) => {
    setSelectedLanguages(prev => {
      if (prev.includes(language)) {
        return prev.filter(lang => lang !== language);
      } else {
        return [...prev, language];
      }
    });
  };

  const handleSubmit = () => {
    onSave(selectedLanguages);
  };

  const filteredLanguages = languages.filter(language =>
    language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ width: '100%' }}>
      <StyledTextField
        fullWidth
        placeholder="Search language"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: <SearchIcon sx={{ color: '#64748B', mr: 1 }} />,
        }}
      />
      <Box sx={{ 
        width: '100%',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}>
        {filteredLanguages.map((language) => (
          <LanguageOption
            key={language}
            control={
              <StyledCheckbox
                checked={selectedLanguages.includes(language)}
                onChange={() => handleLanguageToggle(language)}
                checkedIcon={<CheckIcon />}
              />
            }
            label={language}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PreferredLanguageForm; 