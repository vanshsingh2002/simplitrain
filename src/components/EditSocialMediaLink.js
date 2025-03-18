import React, { useState, useEffect } from "react";
import { Box, TextField, IconButton, styled, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PublicIcon from "@mui/icons-material/Public";

const FormField = styled(Box)({
  marginBottom: "16px",
  position: "relative",
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

const AddNewButton = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: "12px",
  backgroundColor: "#F1F5F9",
  borderRadius: "12px",
  color: "#64748B",
  cursor: "pointer",
  marginTop: "16px",
  "&:hover": {
    backgroundColor: "#E2E8F0",
  },
});

const DeleteButton = styled(IconButton)({
  position: "absolute",
  right: "8px",
  top: "50%",
  transform: "translateY(-50%)",
  color: "#94A3B8",
  "&:hover": {
    backgroundColor: "#E2E8F0",
  },
});

const SocialIcon = styled(Box)({
  position: "absolute",
  left: "16px",
  top: "50%",
  transform: "translateY(-50%)",
  color: "#64748B",
  display: "flex",
  alignItems: "center",
});

const EditSocialMediaLink = ({ initialLinks = [], onSave }) => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(initialLinks.map(link => ({
      id: Math.random().toString(),
      url: link,
      type: detectLinkType(link)
    })));
  }, [initialLinks]);

  const detectLinkType = (url) => {
    const lowerUrl = url.toLowerCase();
    if (lowerUrl.includes('linkedin.com')) return 'linkedin';
    if (lowerUrl.includes('twitter.com') || lowerUrl.includes('x.com')) return 'twitter';
    if (lowerUrl.includes('github.com')) return 'github';
    if (lowerUrl.includes('instagram.com')) return 'instagram';
    if (lowerUrl.includes('youtube.com')) return 'youtube';
    if (lowerUrl.includes('dribbble.com')) return 'dribbble';
    return 'other';
  };

  const getSocialIcon = (type) => {
    switch (type) {
      case 'linkedin':
        return <LinkedInIcon sx={{ color: '#0077B5' }} />;
      case 'twitter':
        return <TwitterIcon sx={{ color: '#1DA1F2' }} />;
      case 'github':
        return <GitHubIcon sx={{ color: '#333' }} />;
      case 'instagram':
        return <InstagramIcon sx={{ color: '#E4405F' }} />;
      case 'youtube':
        return <YouTubeIcon sx={{ color: '#FF0000' }} />;
      default:
        return <PublicIcon />;
    }
  };

  const handleAddLink = () => {
    setLinks([...links, { id: Math.random().toString(), url: '', type: 'other' }]);
  };

  const handleLinkChange = (id, value) => {
    setLinks(links.map(link => {
      if (link.id === id) {
        return {
          ...link,
          url: value,
          type: detectLinkType(value)
        };
      }
      return link;
    }));
  };

  const handleDeleteLink = (id) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const handleSave = () => {
    // Only save non-empty links
    const validLinks = links.filter(link => link.url.trim() !== '').map(link => link.url);
    onSave?.(validLinks);
  };

  return (
    <Box>
      {links.map((link) => (
        <FormField key={link.id}>
          <SocialIcon>
            {getSocialIcon(link.type)}
          </SocialIcon>
          <StyledTextField
            fullWidth
            value={link.url}
            onChange={(e) => handleLinkChange(link.id, e.target.value)}
            placeholder="Enter social media link"
            InputProps={{
              sx: { paddingLeft: "48px" }
            }}
          />
          <DeleteButton onClick={() => handleDeleteLink(link.id)}>
            <DeleteOutlineIcon />
          </DeleteButton>
        </FormField>
      ))}
      <AddNewButton onClick={handleAddLink}>
        <AddIcon sx={{ mr: 1 }} />
        Add New Link
      </AddNewButton>
      <Box sx={{ display: 'none' }}>
        <Button className="hidden-save-trigger" onClick={handleSave}>
          Hidden Save Trigger
        </Button>
      </Box>
    </Box>
  );
};

export default EditSocialMediaLink; 