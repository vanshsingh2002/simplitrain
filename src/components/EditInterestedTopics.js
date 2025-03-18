import React, { useState, useEffect } from "react";
import { Box, Typography, Chip, styled, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const TopicsContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginBottom: "24px",
});

const StyledChip = styled(Chip)({
  backgroundColor: "#E2E8F0",
  color: "#0F172A",
  borderRadius: "20px",
  height: "32px",
  fontSize: "14px",
  fontWeight: 500,
  "& .MuiChip-label": {
    padding: "0 8px",
  },
  "& .MuiChip-deleteIcon": {
    fontSize: "18px",
    color: "#0F172A",
    marginRight: "8px",
    marginLeft: "4px",
    "&:hover": {
      color: "#64748B",
    },
  },
  "&:hover": {
    backgroundColor: "#E2E8F0",
  },
});

const SuggestedSection = styled(Box)({
  marginTop: "24px",
});

const SuggestedTitle = styled(Typography)({
  color: "#64748B",
  fontSize: "14px",
  fontWeight: 400,
  marginBottom: "16px",
});

const AddChip = styled(Chip)({
  backgroundColor: "#F1F5F9",
  color: "#64748B",
  borderRadius: "20px",
  height: "32px",
  fontSize: "14px",
  fontWeight: 400,
  "& .MuiChip-label": {
    paddingLeft: "4px",
  },
  "& .MuiChip-icon": {
    fontSize: "18px",
    color: "#64748B",
    marginLeft: "8px",
  },
  "&:hover": {
    backgroundColor: "#E2E8F0",
  },
  "&.Mui-disabled": {
    opacity: 0.5,
    backgroundColor: "#F1F5F9",
  },
});

const EditInterestedTopics = ({ initialTopics = [], onSave }) => {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [availableTopics, setAvailableTopics] = useState([
    "Design",
    "Marketing",
    "Sales",
    "Finance",
    "Dance",
    "Business"
  ]);
  const maxTopics = 20;

  useEffect(() => {
    setSelectedTopics(initialTopics);
    // Initialize available topics by removing initial topics
    setAvailableTopics(prev => prev.filter(topic => !initialTopics.includes(topic)));
  }, [initialTopics]);

  const handleDelete = (topicToDelete) => {
    console.log('Deleting topic:', topicToDelete);
    // Remove from selected topics
    const newSelectedTopics = selectedTopics.filter(topic => topic !== topicToDelete);
    setSelectedTopics(newSelectedTopics);
    
    // Add to available topics if it's not a default topic
    if (!defaultTopics.includes(topicToDelete)) {
      setAvailableTopics(prev => [...prev, topicToDelete]);
    }
  };

  const handleAdd = (topicToAdd) => {
    if (selectedTopics.length < maxTopics && !selectedTopics.includes(topicToAdd)) {
      // Add to selected topics
      setSelectedTopics(prev => [...prev, topicToAdd]);
      // Remove from available topics
      setAvailableTopics(prev => prev.filter(topic => topic !== topicToAdd));
    }
  };

  const defaultTopics = [
    "IT",
    "Web Development",
    "Mobile Development",
    "Programming Languages",
    "Leadership",
    "Career Development",
    "Digital Marketing"
  ];

  const handleSave = () => {
    console.log('Saving topics:', selectedTopics);
    onSave?.(selectedTopics);
  };

  return (
    <Box>
      <Typography sx={{ fontSize: "14px", color: "#64748B", mb: 2, fontWeight: 400 }}>
        Tag (maximum {maxTopics})
      </Typography>

      <TopicsContainer>
        {/* Show both default topics and selected topics */}
        {[...new Set([...defaultTopics, ...selectedTopics])].map((topic) => (
          <StyledChip
            key={topic}
            label={topic}
            onDelete={() => handleDelete(topic)}
            deleteIcon={<CloseIcon />}
            sx={{
              backgroundColor: selectedTopics.includes(topic) ? "#E2E8F0" : "#F1F5F9",
              fontWeight: selectedTopics.includes(topic) ? 500 : 400,
            }}
          />
        ))}
      </TopicsContainer>

      <SuggestedSection>
        <SuggestedTitle>Suggested</SuggestedTitle>
        <TopicsContainer>
          {availableTopics.map((topic) => (
            <AddChip
              key={topic}
              label={topic}
              onClick={() => handleAdd(topic)}
              icon={<AddIcon />}
              disabled={selectedTopics.length >= maxTopics || selectedTopics.includes(topic)}
            />
          ))}
        </TopicsContainer>
      </SuggestedSection>

      <Box sx={{ display: 'none' }}>
        <Button className="hidden-save-trigger" onClick={handleSave}>
          Hidden Save Trigger
        </Button>
      </Box>
    </Box>
  );
};

export default EditInterestedTopics; 