import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  styled,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#fff',
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
});

const SearchBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#F7FAFC',
  borderRadius: '100px',
  padding: '8px 16px',
  flex: 1,
  maxWidth: '400px',
  marginLeft: '24px',
  border: '1px solid #E2E8F0',
});

const NavItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 16px',
  cursor: 'pointer',
  '& .MuiTypography-root': {
    fontSize: '12px',
    color: '#718096',
    marginTop: '4px',
  },
  '& .MuiSvgIcon-root': {
    color: '#718096',
    fontSize: '20px',
  },
});

const ProfileImage = styled('img')({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  marginLeft: '16px',
});

const Navbar = () => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar sx={{ minHeight: '64px !important' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600, 
            color: '#1A202C',
            fontSize: '20px',
          }}
        >
          SimpliTrain
        </Typography>
        <SearchBox>
          <SearchIcon sx={{ color: '#718096', mr: 1 }} />
          <input
            type="text"
            placeholder="What would you like to learn?"
            style={{
              border: 'none',
              background: 'none',
              outline: 'none',
              width: '100%',
              fontSize: '14px',
              color: '#2D3748',
            }}
          />
        </SearchBox>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NavItem>
            <HomeIcon />
            <Typography>Home</Typography>
          </NavItem>
          <NavItem>
            <GridViewIcon />
            <Typography>Categories</Typography>
          </NavItem>
          <NavItem>
            <ChatIcon />
            <Typography>Chat</Typography>
          </NavItem>
          <NavItem>
            <GroupsIcon />
            <Typography>Forum</Typography>
          </NavItem>
          <NavItem>
            <NotificationsIcon />
            <Typography>Notification</Typography>
          </NavItem>
          <IconButton sx={{ ml: 1 }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar; 