import React from 'react';
import { Box, Typography, Container, Paper, Stack, Chip } from '@mui/material';
import Grid from '@mui/material/Grid';

const skillDomains = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Building responsive, high-performance websites and web applications.',
    techs: ['React.js', 'Next.js', 'Node.js', 'Vercel', 'Supabase', 'Turs o'],
    color: 'cyan'
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    desc: 'Creating cross-platform mobile applications for Android.',
    techs: ['React Native', 'Flutter', 'Dart'],
    color: 'purple'
  },
  {
    icon: '💻',
    title: 'Windows Software Dev',
    desc: 'Developing native desktop applications specifically for the Windows ecosystem.',
    techs: ['Flutter', 'Inno Setup'],
    color: 'amber'
  },
  {
    icon: '🛠️',
    title: 'IoT & Hardware',
    desc: 'Prototyping and programming custom hardware solutions.',
    techs: ['Arduino', 'Espressif', 'Raspberry Pi', 'C++', 'Python'],
    color: 'green'
  },
  {
    icon: '💾',
    title: 'Data Recovery',
    desc: 'Specialized in recovering lost or corrupted data from various storage devices.',
    techs: ['Logical Data Recovery', 'File Systems'],
    color: 'pink'
  },
  {
    icon: '🤖',
    title: 'Prompt Engineering',
    desc: 'Crafting and optimizing advanced prompts to get the best possible output from AI models.',
    techs: ['Gemini API', 'LLMs', 'AI Integration'],
    color: 'purple'
  },
  {
    icon: '📂',
    title: 'Version Control',
    desc: 'Managing codebases and collaborating effectively with teams using version control systems.',
    techs: ['Git', 'GitHub'],
    color: 'amber'
  },
  {
    icon: '🔭',
    title: 'Astrophotography',
    desc: 'Capturing and processing deep-sky and planetary images using specialized equipment and software.',
    techs: ['DSS', 'Siril', 'Telescopes', 'Astro-Cameras'],
    color: 'pink'
  }
];

const DomainCard = ({ domain }) => (
  <Paper
    elevation={0}
    className={`hover-lift hover-glow-${domain.color}`}
    sx={{
      p: 4,
      bgcolor: 'background.paper',
      border: '1px solid',
      borderColor: 'secondary.dark',
      borderRadius: '8px',
      height: '100%',
      transition: 'all 0.3s',
      '&:hover': {
        borderColor: 'primary.main',
        boxShadow: '0 0 25px rgba(0,255,136,0.08)'
      }
    }}
  >
    <Box sx={{ fontSize: '32px', mb: 2.5 }}>{domain.icon}</Box>
    <Typography variant="h6" sx={{ fontSize: '15px', color: 'text.primary', fontWeight: 800, mb: 1.5, fontFamily: 'var(--orb)', letterSpacing: '0.05em' }}>
      {domain.title}
    </Typography>
    <Typography sx={{ fontSize: '13px', color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
      {domain.desc}
    </Typography>

    <Typography sx={{ fontSize: '11px', color: 'secondary.main', textTransform: 'uppercase', letterSpacing: '0.15em', mb: 1.5, fontWeight: 800 }}>
      Technologies:
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {domain.techs.map((tech, i) => (
        <Chip
          key={i}
          label={tech}
          size="small"
          sx={{
            height: 'auto',
            fontSize: '11px',
            fontWeight: 600,
            borderRadius: '4px',
            bgcolor: 'rgba(212, 167, 81, 0.08)',
            color: 'rgba(212, 167, 81, 0.95)',
            border: '1.5px solid rgba(212, 167, 81, 0.25)',
            '& .MuiChip-label': { p: '4px 10px' }
          }}
        />
      ))}
    </Box>
  </Paper>
);

const SkillsBoard = () => {
  return (
    <Box component="section" id="skills" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Box className="section-title-wrap">
          <Box className="section-num">02</Box>
          <Box className="section-line" />
          <Box className="section-label">Skills & Domains</Box>
          <Box className="section-line" sx={{ background: 'linear-gradient(90deg, transparent, var(--copper-dim))' }} />
        </Box>

        <Grid container spacing={3}>
          {skillDomains.map((domain, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <DomainCard domain={domain} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsBoard;
