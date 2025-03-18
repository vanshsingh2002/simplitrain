import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Button,
  Box,
  styled,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const StyledDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    borderRadius: '24px',
    maxWidth: '600px',
    width: '100%',
    margin: '16px',
    marginLeft: 'auto',
    marginRight: '16px',
    height: 'calc(100vh - 32px)',
    overflowY: 'hidden',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)',
  },
  '& .MuiDialog-container': {
    alignItems: 'flex-start',
  },
});

const DialogHeader = styled(DialogTitle)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '24px 32px',
  paddingBottom: '16px',
});

const CloseButton = styled(IconButton)({
  padding: 8,
  '& .MuiSvgIcon-root': {
    fontSize: '20px',
  },
});

const StyledDialogContent = styled(DialogContent)({
  padding: '0 32px',
  overflowY: 'auto',
  display: 'flex',
  justifyContent: 'center',
  '&.MuiDialogContent-root': {
    paddingTop: 0,
  },
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
});

const ContentWrapper = styled(Box)({
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto',
});

const StyledDialogActions = styled(DialogActions)({
  padding: '24px',
  justifyContent: 'center',
  borderTop: '1px solid #F1F5F9',
});

const SaveButton = styled(Button)({
  backgroundColor: '#0F172A',
  color: '#fff',
  padding: '12px 32px',
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '14px',
  minWidth: '120px',
  '&:hover': {
    backgroundColor: '#1E293B',
  },
});

const EditFormModal = ({ open, onClose, title, children, onSave }) => {
  const handleSave = () => {
    // Find and click the hidden save trigger if it exists
    const hiddenSaveButton = document.querySelector('.hidden-save-trigger');
    if (hiddenSaveButton) {
      console.log('Found hidden save trigger, clicking it');
      hiddenSaveButton.click();
    } else {
      console.log('No hidden save trigger found, calling onSave directly');
      onSave?.();
    }
  };

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      fullWidth
      PaperProps={{
        sx: {
          m: 0,
          position: 'fixed',
          right: '16px',
          top: '16px',
          bottom: '16px',
        }
      }}
    >
      <DialogHeader>
        <Typography sx={{ fontSize: '20px', fontWeight: 600, color: '#0F172A' }}>
          {title}
        </Typography>
        <CloseButton onClick={onClose} sx={{ color: '#0F172A' }}>
          <CloseIcon />
        </CloseButton>
      </DialogHeader>
      
      <StyledDialogContent>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </StyledDialogContent>

      <StyledDialogActions>
        <SaveButton onClick={handleSave}>
          Save
        </SaveButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default EditFormModal; 