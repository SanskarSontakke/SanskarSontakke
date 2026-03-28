import React from 'react';
import { Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    icon: '🎓',
    partNum: 'IC/APP-001 & MOBILE',
    title: 'ZPGuruji Shala',
    subtitle: 'Educational Quiz Platform',
    desc: 'An educational quiz platform designed to help students practice Physics, Chemistry, Biology, Mathematics, and General Knowledge.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    ledColor: 'g',
    status: 'Live on Play Store',
    specs: 'Education · Mobile',
    link: 'https://play.google.com/store/apps/details?id=com.zpguruji.shala&hl=en_IN',
    linkText: 'View on Google Play',
    themeColor: 'purple'
  },
  {
    icon: '🤖',
    partNum: 'IC/AI-002 & OPEN-SOURCE',
    title: 'The Forge Gen',
    subtitle: 'AI Generative Tools',
    desc: 'A platform offering a suite of open-source generative AI tools powered by Google AI Studio for storyboarding, food styling, and more.',
    tags: ['React', 'TypeScript', 'Gemini API', 'Tailwind CSS'],
    ledColor: 'b',
    status: 'Live Website',
    specs: 'AI Platform',
    link: '#',
    linkText: 'View Website',
    themeColor: 'cyan'
  }
];

const ProjectGrid = () => {
  return (
    <Box component="section" id="projects">
      <Container maxWidth="lg">
        <Box className="section-title-wrap">
          <Box className="section-num">01</Box>
          <Box className="section-line" />
          <Box className="section-label">Featured Projects</Box>
          <Box className="section-line" sx={{ background: 'linear-gradient(90deg, transparent, var(--copper-dim))' }} />
        </Box>

        <Grid container spacing={3}>
          {projectsData.map((project, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 6 }}>
              <ProjectCard data={project} delay={`${i * 0.07}s`} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectGrid;
