import React, { useRef, useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  IconButton,
  styled,
  Button,
  Avatar,
  Chip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PublicIcon from '@mui/icons-material/Public';
import Sidebar from './Sidebar';
import EditFormModal from './EditFormModal';
import PersonalInfoForm from './PersonalInfoForm';
import AddEducationForm from './AddEducationForm';
import EditBioForm from './EditBioForm';
import PreferredLanguageForm from './PreferredLanguageForm';
import EditEducationForm from './EditEducationForm';
import EditWorkExperienceForm from './EditWorkExperienceForm';
import AddWorkExperienceForm from './AddWorkExperienceForm';
import EditSocialMediaLink from './EditSocialMediaLink';
import EditInterestedTopics from './EditInterestedTopics';

const MainContent = styled(Box)({
  marginLeft: '440px', // Width of main sidebar (200px) + profile nav (240px)
  padding: '24px',
  backgroundColor: '#F8FAFC',
  minHeight: '100vh',
});

const ProfileNavSidebar = styled(Box)({
  position: 'fixed',
  left: '200px',
  top: 0,
  width: '240px',
  height: 'auto',
  backgroundColor: '#fff',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '24px',
  marginTop: '100px',
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
});

const PageHeader = styled(Box)({
  position: 'fixed',
  top: 0,
  left: '272px',
  right: 0,
  backgroundColor: '#0F172A',
  padding: '16px 24px',
  zIndex: 10,
});

const ProfileContainer = styled(Paper)({
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '32px',
  boxShadow: 'none',
});

const SectionBox = styled(Paper)({
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '24px',
  boxShadow: 'none',
  marginBottom: '16px',
  border: '1px solid #E2E8F0',
  '&:last-child': {
    marginBottom: 0,
  },
});

const SectionHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px',
});

const FormField = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  padding: '16px 0',
  borderBottom: '1px solid #E2E8F0',
  '&:last-child': {
    borderBottom: 'none',
  },
});

const Label = styled(Typography)({
  color: '#64748B',
  fontSize: '14px',
  fontWeight: 500,
  width: '180px',
  textTransform: 'uppercase',
});

const Value = styled(Typography)({
  color: '#0F172A',
  fontSize: '14px',
  fontWeight: 400,
  flex: 1,
});

const EditButton = styled(Button)({
  padding: '8px 16px',
  backgroundColor: '#F8FAFC',
  borderRadius: '8px',
  color: '#64748B',
  textTransform: 'none',
  fontSize: '14px',
  '&:hover': {
    backgroundColor: '#F1F5F9',
  },
  '& .MuiSvgIcon-root': {
    fontSize: 16,
    marginLeft: '8px',
  },
});

const StyledChip = styled(Box)({
  display: 'inline-flex',
  backgroundColor: '#F8FAFC',
  color: '#64748B',
  fontSize: '14px',
  padding: '8px 16px',
  borderRadius: '8px',
  marginRight: '8px',
  marginBottom: '8px',
  fontWeight: 400,
});

const EducationCard = styled(Box)({
  backgroundColor: '#F8FAFC',
  borderRadius: '12px',
  padding: '16px',
  marginBottom: '16px',
  '&:last-child': {
    marginBottom: 0,
  },
});

const AddButton = styled(Button)({
  backgroundColor: '#0F172A',
  color: '#fff',
  borderRadius: '8px',
  padding: '8px 16px',
  fontSize: '14px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#1E293B',
  },
});

const ProfileNavContainer = styled(Box)({
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '8px',
});

const ProfileNavItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
  borderRadius: '12px',
  cursor: 'pointer',
  backgroundColor: '#fff',
  marginBottom: '8px',
  transition: 'all 0.2s ease',
  '&:last-child': {
    marginBottom: 0,
  },
  '&:hover': {
    backgroundColor: '#F1F5F9',
  },
});

const EditIconButton = styled(IconButton)({
  position: 'absolute',
  right: '8px',
  bottom: '8px',
  backgroundColor: '#fff',
  padding: '6px',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
  '&:hover': {
    backgroundColor: '#F8FAFC',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '14px',
  },
});

const Dashboard = () => {
  const profileRef = useRef(null);
  const educationRef = useRef(null);
  const workRef = useRef(null);
  const [personalInfoModalOpen, setPersonalInfoModalOpen] = useState(false);
  const [addEducationModalOpen, setAddEducationModalOpen] = useState(false);
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [preferredLanguages, setPreferredLanguages] = useState(['English', 'Hindi']);
  const [editEducationModalOpen, setEditEducationModalOpen] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [editWorkExpModalOpen, setEditWorkExpModalOpen] = useState(false);
  const [selectedWorkExp, setSelectedWorkExp] = useState(null);
  const [addWorkExpModalOpen, setAddWorkExpModalOpen] = useState(false);
  const [socialMediaModalOpen, setSocialMediaModalOpen] = useState(false);
  const [socialMediaLinks, setSocialMediaLinks] = useState([
    'https://www.linkedin.com/in/raushan',
    'https://twitter.com/raushan07',
    'https://github.com/raushan07',
    'https://instagram.com/raushan',
    'https://youtube.com/@raushan'
  ]);
  const [interestedTopicsModalOpen, setInterestedTopicsModalOpen] = useState(false);
  const [interestedTopics, setInterestedTopics] = useState([
    "IT",
    "Web Development",
    "Mobile Development",
    "Programming Languages",
    "Leadership",
    "Career Development",
    "Digital Marketing"
  ]);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Rohan",
    lastName: "Roshan",
    email: "rohan.roshan@gmail.com",
    gender: "Male",
    age: "35",
    phone: "+91 9876543210",
    address1: "No 10, Office no 1",
    address2: "Koramangala",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560095",
    country: "India",
  });

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePersonalInfoEdit = () => {
    setPersonalInfoModalOpen(true);
  };

  const handleAddEducation = () => {
    setAddEducationModalOpen(true);
  };

  const handleBioSave = (newBio) => {
    setIsBioModalOpen(false);
  };

  const handleLanguageSave = (languages) => {
    setPreferredLanguages(languages);
    setIsLanguageModalOpen(false);
  };

  const handleEditEducation = (education) => {
    setSelectedEducation(education);
    setEditEducationModalOpen(true);
  };

  const handleEducationSave = (updatedEducation) => {
    console.log('Updated education:', updatedEducation);
    setEditEducationModalOpen(false);
    setSelectedEducation(null);
  };

  const handleEditWorkExp = (workExp) => {
    setSelectedWorkExp(workExp);
    setEditWorkExpModalOpen(true);
  };

  const handleWorkExpSave = (updatedWorkExp) => {
    console.log('Updated work experience:', updatedWorkExp);
    setEditWorkExpModalOpen(false);
    setSelectedWorkExp(null);
  };

  const handleAddWorkExp = () => {
    setAddWorkExpModalOpen(true);
  };

  const handleWorkExpAdd = (workExp) => {
    console.log('New work experience:', workExp);
    setAddWorkExpModalOpen(false);
  };

  const handleSocialMediaSave = (links) => {
    console.log('Saving social media links:', links);
    setSocialMediaLinks(links);
    setSocialMediaModalOpen(false);
  };

  const handleInterestedTopicsSave = (topics) => {
    setInterestedTopics(topics);
    setInterestedTopicsModalOpen(false);
  };

  return (
    <>
      <Sidebar />

      <ProfileNavSidebar>
        <Box 
          sx={{ 
            width: '160px',
            height: '160px',
            bgcolor: '#F1F5F9',
            borderRadius: '50%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2
          }}
        >
          <EditIconButton 
            sx={{ 
              position: 'absolute',
              right: '8px',
              bottom: '8px',
              backgroundColor: '#fff',
              padding: '6px',
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
              '&:hover': {
                backgroundColor: '#F8FAFC'
              }
            }}
          >
            <EditIcon sx={{ fontSize: '14px' }} />
          </EditIconButton>
        </Box>
        <Typography 
          align="center" 
          sx={{ 
            color: '#0F172A', 
            fontWeight: 600,
            fontSize: '16px',
            mb: 3
          }}
        >
          Rakesh Raushan
        </Typography>
        <ProfileNavContainer>
          <ProfileNavItem onClick={() => scrollToSection(profileRef)}>
            <Typography sx={{ color: '#0F172A', fontSize: '15px', fontWeight: 500 }}>
              Profile
            </Typography>
          </ProfileNavItem>
          <ProfileNavItem onClick={() => scrollToSection(educationRef)}>
            <Typography sx={{ color: '#64748B', fontSize: '15px', fontWeight: 500 }}>
              Education
            </Typography>
          </ProfileNavItem>
          <ProfileNavItem onClick={() => scrollToSection(workRef)}>
            <Typography sx={{ color: '#64748B', fontSize: '15px', fontWeight: 500 }}>
              Work Experience
            </Typography>
          </ProfileNavItem>
        </ProfileNavContainer>
      </ProfileNavSidebar>

      <PageHeader>
        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 500, fontSize: '18px' }}>
          Profile
        </Typography>
      </PageHeader>

      <MainContent>
        <Box sx={{ mt: 2 }}>
          {/* Profile Section */}
          <Box ref={profileRef}>
            <Typography variant="h6" sx={{ color: '#0F172A', fontWeight: 500, fontSize: '18px', mb: 3 }}>
              Profile
            </Typography>
            <ProfileContainer>
              {/* Personal Information */}
              <SectionBox>
                <SectionHeader>
                  <Typography variant="subtitle1" sx={{ color: '#0F172A', fontWeight: 500, fontSize: '16px' }}>
                    Personal Information
                  </Typography>
                  <EditButton endIcon={<EditIcon />} onClick={handlePersonalInfoEdit}>
                    Edit
                  </EditButton>
                </SectionHeader>

                <FormField>
                  <Label>First Name</Label>
                  <Value>Rohan</Value>
                </FormField>
                <FormField>
                  <Label>Last Name</Label>
                  <Value>Raushan</Value>
                </FormField>
                <FormField>
                  <Label>Age</Label>
                  <Value>35</Value>
                </FormField>
                <FormField>
                  <Label>Gender</Label>
                  <Value>Male</Value>
                </FormField>
                <FormField>
                  <Label>Address</Label>
                  <Value>2nd Floor, 99, 5th Cross Rd, 6th Block, Koramangala, Bengaluru, Karnataka 560095</Value>
                </FormField>
              </SectionBox>

              {/* Contact Information */}
              <SectionBox>
                <SectionHeader>
                  <Typography variant="subtitle1" sx={{ color: '#0F172A', fontWeight: 500, fontSize: '16px' }}>
                    Contact Information
                  </Typography>
                  <EditButton onClick={handlePersonalInfoEdit} endIcon={<EditIcon />}>
                    Edit
                  </EditButton>
                </SectionHeader>

                <FormField>
                  <Label>Email</Label>
                  <Value>Rakeshraushan@Gmail.Com</Value>
                </FormField>
                <FormField>
                  <Label>Phone Number</Label>
                  <Value>+91 9922004856</Value>
                </FormField>
              </SectionBox>

              {/* Bio */}
              <SectionBox>
                <SectionHeader>
                  <Typography variant="h6">Bio</Typography>
                  <EditButton endIcon={<EditIcon />} onClick={() => setIsBioModalOpen(true)}>
                    Edit
                  </EditButton>
                </SectionHeader>
                <Typography 
                  variant="body1" 
                  sx={{ color: '#64748B', mt: 2 }}
                  id="bioText"
                >
                  I'm a recent graduate with a passion for data. I'm eager to learn data analysis techniques and build a strong foundation in the exciting field. I've decided to explore the courses offered on SimpleTrain and gain the necessary skills to kickstart my data analyst career.
                </Typography>
              </SectionBox>

              {/* Preferred Language */}
              <SectionBox>
                <SectionHeader>
                  <Typography variant="subtitle1" sx={{ color: '#0F172A', fontWeight: 500, fontSize: '16px' }}>
                    Preferred Language
                  </Typography>
                  <EditButton endIcon={<EditIcon />} onClick={() => setIsLanguageModalOpen(true)}>
                    Edit
                  </EditButton>
                </SectionHeader>

                <Box>
                  {preferredLanguages.map((language) => (
                    <StyledChip key={language}>{language}</StyledChip>
                  ))}
                </Box>
              </SectionBox>

              {/* Interested Topics */}
              <SectionBox>
                <SectionHeader>
                  <Typography variant="subtitle1" sx={{ color: '#0F172A', fontWeight: 500, fontSize: '16px' }}>
                    Interested Topics
                  </Typography>
                  <EditButton 
                    endIcon={<EditIcon />} 
                    onClick={() => {
                      console.log('Opening interested topics modal');
                      setInterestedTopicsModalOpen(true);
                    }}
                  >
                    Edit
                  </EditButton>
                </SectionHeader>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {interestedTopics.map((topic, index) => (
                    <Chip
                      key={index}
                      label={topic}
                      sx={{
                        backgroundColor: '#0F172A',
                        color: '#FFFFFF',
                        borderRadius: '8px',
                        height: '32px',
                        fontSize: '14px',
                        '&:hover': {
                          backgroundColor: '#1E293B',
                        },
                      }}
                    />
                  ))}
                </Box>
              </SectionBox>

              {/* Social Media */}
              <SectionBox>
                <SectionHeader>
                  <Typography variant="subtitle1" sx={{ color: '#0F172A', fontWeight: 500, fontSize: '16px' }}>
                    Social Media
                  </Typography>
                  <EditButton 
                    endIcon={<EditIcon />} 
                    onClick={() => {
                      console.log('Opening social media modal');
                      setSocialMediaModalOpen(true);
                    }}
                  >
                    Edit
                  </EditButton>
                </SectionHeader>

                <Box sx={{ display: 'flex', gap: 3 }}>
                  {socialMediaLinks.map((link, index) => {
                    const type = link.toLowerCase();
                    return (
                      <IconButton key={index} sx={{ 
                        color: type.includes('linkedin') ? '#0077B5' : 
                               type.includes('twitter') ? '#1DA1F2' :
                               type.includes('github') ? '#333' :
                               type.includes('instagram') ? '#E4405F' :
                               type.includes('youtube') ? '#FF0000' : '#64748B',
                        p: 0 
                      }}>
                        {type.includes('linkedin') ? <LinkedInIcon /> :
                         type.includes('twitter') ? <TwitterIcon /> :
                         type.includes('github') ? <GitHubIcon /> :
                         type.includes('instagram') ? <InstagramIcon /> :
                         type.includes('youtube') ? <YouTubeIcon /> :
                         <PublicIcon />}
                      </IconButton>
                    );
                  })}
                </Box>
              </SectionBox>
            </ProfileContainer>
          </Box>

          {/* Education Section */}
          <Box ref={educationRef} sx={{ mt: 3 }}>
            <ProfileContainer>
              <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1" sx={{ color: '#0F172A', fontWeight: 500, fontSize: '16px' }}>
                  Education
                </Typography>
                <AddButton onClick={handleAddEducation}>
                  ADD
                </AddButton>
              </Box>

              <EducationCard>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Box>
                    <Typography sx={{ color: '#0F172A', fontWeight: 500, fontSize: '16px', mb: 1 }}>
                      Imperial College London
                    </Typography>
                    <Typography sx={{ color: '#64748B', fontSize: '14px', mb: 1 }}>
                      Masters in Marketing, graduated on march 2020
                    </Typography>
                    <Typography sx={{ color: '#64748B', fontSize: '14px' }}>
                      March 2016 - June 2018
                    </Typography>
                  </Box>
                  <EditButton 
                    endIcon={<EditIcon />}
                    onClick={() => handleEditEducation({
                      degree: 'Masters',
                      college: 'Imperial College London',
                      fieldOfStudy: 'Marketing',
                      startDate: '2016-03-01',
                      endDate: '2018-06-01'
                    })}
                  >
                    Edit
                  </EditButton>
                </Box>
              </EducationCard>

              <EducationCard>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Box>
                    <Typography sx={{ color: '#0F172A', fontWeight: 500, fontSize: '16px', mb: 1 }}>
                      MIT University
                    </Typography>
                    <Typography sx={{ color: '#64748B', fontSize: '14px', mb: 1 }}>
                      Bachelor's degree in Engineering and Technology, graduated on march 2020
                    </Typography>
                    <Typography sx={{ color: '#64748B', fontSize: '14px' }}>
                      March 2012 - June 2016
                    </Typography>
                  </Box>
                  <EditButton 
                    onClick={() => handleEditEducation({
                      degree: 'Bachelors',
                      college: 'MIT University',
                      fieldOfStudy: 'Engineering and Technology',
                      startDate: '2012-03-01',
                      endDate: '2016-06-01'
                    })}
                  >
                    <EditIcon />
                    Edit
                  </EditButton>
                </Box>
              </EducationCard>
            </ProfileContainer>
          </Box>

          {/* Work Experience Section */}
          <Box ref={workRef} sx={{ mt: 3 }}>
            <ProfileContainer>
              <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1" sx={{ color: '#0F172A', fontWeight: 500, fontSize: '16px' }}>
                  Work Experience
                </Typography>
                <AddButton onClick={handleAddWorkExp}>
                  ADD
                </AddButton>
              </Box>

              <EducationCard>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Box>
                    <Typography sx={{ color: '#0F172A', fontWeight: 500, fontSize: '16px', mb: 1 }}>
                      Software Engineer
                    </Typography>
                    <Typography sx={{ color: '#64748B', fontSize: '14px', mb: 1 }}>
                      Amazon
                    </Typography>
                    <Typography sx={{ color: '#64748B', fontSize: '14px' }}>
                      July 2018 - Present
                    </Typography>
                  </Box>
                  <EditButton 
                    onClick={() => handleEditWorkExp({
                      jobTitle: 'Software Engineer',
                      companyName: 'Amazon',
                      employmentType: 'Full Time',
                      industry: 'Information Technology',
                      location: 'Bengaluru',
                      startDate: '2018-07-01',
                      endDate: '2024-01-05'
                    })}
                  >
                    <EditIcon />
                    Edit
                  </EditButton>
                </Box>
              </EducationCard>
            </ProfileContainer>
          </Box>
        </Box>
      </MainContent>

      {/* Personal Info Modal */}
      <EditFormModal
        open={personalInfoModalOpen}
        onClose={() => setPersonalInfoModalOpen(false)}
        title="Edit Personal Information"
      >
        <PersonalInfoForm />
      </EditFormModal>

      {/* Add Education Modal */}
      <EditFormModal
        open={addEducationModalOpen}
        onClose={() => setAddEducationModalOpen(false)}
        title="Add Education"
      >
        <AddEducationForm />
      </EditFormModal>

      <EditFormModal
        open={isBioModalOpen}
        onClose={() => setIsBioModalOpen(false)}
        title="Edit Bio"
        onSave={handleBioSave}
      >
        <EditBioForm 
          initialBio={document.getElementById('bioText')?.textContent || ''} 
          onSave={(newBio) => {
            if (document.getElementById('bioText')) {
              document.getElementById('bioText').textContent = newBio;
            }
            handleBioSave(newBio);
          }}
        />
      </EditFormModal>

      {/* Language Modal */}
      <EditFormModal
        open={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
        title="Preferred Language"
        onSave={() => setIsLanguageModalOpen(false)}
      >
        <PreferredLanguageForm 
          onSave={handleLanguageSave}
          initialLanguages={preferredLanguages}
        />
      </EditFormModal>

      {/* Edit Education Modal */}
      <EditFormModal
        open={editEducationModalOpen}
        onClose={() => {
          setEditEducationModalOpen(false);
          setSelectedEducation(null);
        }}
        title="Edit Education"
        onSave={() => handleEducationSave(selectedEducation)}
      >
        <EditEducationForm 
          initialData={selectedEducation}
          onSave={handleEducationSave}
        />
      </EditFormModal>

      {/* Edit Work Experience Modal */}
      <EditFormModal
        open={editWorkExpModalOpen}
        onClose={() => {
          setEditWorkExpModalOpen(false);
          setSelectedWorkExp(null);
        }}
        title="Edit Work Experience"
        onSave={() => handleWorkExpSave(selectedWorkExp)}
      >
        <EditWorkExperienceForm 
          initialData={selectedWorkExp}
          onSave={handleWorkExpSave}
        />
      </EditFormModal>

      {/* Add Work Experience Modal */}
      <EditFormModal
        open={addWorkExpModalOpen}
        onClose={() => setAddWorkExpModalOpen(false)}
        title="Add Work Experience"
        onSave={handleWorkExpAdd}
      >
        <AddWorkExperienceForm />
      </EditFormModal>

      {/* Add Social Media Modal */}
      <EditFormModal
        open={socialMediaModalOpen}
        onClose={() => {
          console.log('Closing social media modal');
          setSocialMediaModalOpen(false);
        }}
        title="Edit Social Media Links"
        onSave={handleSocialMediaSave}
      >
        <EditSocialMediaLink 
          initialLinks={socialMediaLinks}
          onSave={handleSocialMediaSave}
        />
      </EditFormModal>

      {/* Interested Topics Modal */}
      <EditFormModal
        open={interestedTopicsModalOpen}
        onClose={() => setInterestedTopicsModalOpen(false)}
        title="Interested Topic"
        onSave={handleInterestedTopicsSave}
      >
        <EditInterestedTopics 
          initialTopics={interestedTopics}
          onSave={handleInterestedTopicsSave}
        />
      </EditFormModal>
    </>
  );
};

export default Dashboard; 