import React from 'react';
import {
  Box,
  styled,
  IconButton,
  Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';

const StyledSidebar = styled(Box)({
  width: '72px',
  backgroundColor: '#fff',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRight: '1px solid #E2E8F0',
  padding: '16px 0',
});

const NavIconButton = styled(IconButton)({
  color: '#718096',
  margin: '8px 0',
  padding: '12px',
  '&:hover': {
    backgroundColor: '#F7FAFC',
  },
  '&.active': {
    color: '#4299E1',
    backgroundColor: '#EBF8FF',
  },
});

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <NavIconButton className="active">
          <HomeIcon />
        </NavIconButton>
        <NavIconButton>
          <PersonIcon />
        </NavIconButton>
        <NavIconButton>
          <StarIcon />
        </NavIconButton>
        <NavIconButton>
          <FavoriteIcon />
        </NavIconButton>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 'auto' }}>
        <NavIconButton>
          <SettingsIcon />
        </NavIconButton>
        <NavIconButton>
          <LogoutIcon />
        </NavIconButton>
      </Box>
    </StyledSidebar>
  );
};

export default Sidebar; 