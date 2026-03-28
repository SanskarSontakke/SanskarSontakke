import React from 'react';
import { Box, Typography, Container, Paper, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';

const achievementData = [
  { year: 'Class 5', title: 'Scholarship', desc: 'Achieved scholarship for outstanding academic performance.', category: 'Academic', color: 'green' },
  { year: 'Class 6', title: 'Homi Bhabha Silver Medal', desc: 'Received Homi Bhabha Silver Medal for excellence in science.', category: 'Science', color: 'cyan' },
  { year: 'Class 7', title: 'MOMS Exam - State Rank 2', desc: 'Secured distinction with State Rank 2 in MOMS examination.', category: 'Competition', color: 'purple' },
  { year: 'Class 7', title: 'IMO & NSO Gold Medal', desc: 'Achieved Gold Medal in both International Mathematics Olympiad (IMO) and National Science Olympiad (NSO).', category: 'Olympiad', color: 'amber' },
  { year: 'Class 8', title: 'Scholarship', desc: 'Achieved scholarship for continued academic excellence.', category: 'Academic', color: 'green' },
  { year: 'Class 9', title: 'IMO Gold Medalist', desc: 'Class 9th IMO Gold Medalist with an International Rank 2.', category: 'Olympiad', color: 'amber' },
  { year: '2024', title: 'Pragya Competition - First Prize', desc: 'Won first prize at the 2024 Pragya competition.', category: 'Competition', color: 'purple' }
];

const getColorValue = (colorName) => {
  switch (colorName) {
    case 'cyan': return { main: '#00e5ff', bg: 'rgba(0, 229, 255, 0.1)', border: 'rgba(0, 229, 255, 0.4)' };
    case 'purple': return { main: '#b533ff', bg: 'rgba(181, 51, 255, 0.1)', border: 'rgba(181, 51, 255, 0.4)' };
    case 'amber': return { main: '#ffaa00', bg: 'rgba(255, 170, 0, 0.1)', border: 'rgba(255, 170, 0, 0.4)' };
    case 'pink': return { main: '#ff3366', bg: 'rgba(255, 51, 102, 0.1)', border: 'rgba(255, 51, 102, 0.4)' };
    default: return { main: '#00ff88', bg: 'rgba(0, 255, 136, 0.1)', border: 'rgba(0, 255, 136, 0.4)' }; // green
  }
};

const AchievementCard = ({ item, index }) => {
  const scheme = getColorValue(item.color);
  return (
    <Paper 
      elevation={0}
      className={`hover-lift hover-glow-${item.color}`}
      sx={{ 
        p: 3.5, 
        bgcolor: 'background.paper', 
        border: '1px solid', 
        borderColor: 'rgba(212, 167, 81, 0.2)',
        borderRadius: '8px',
        position: 'relative',
        height: '100%',
        transition: 'all 0.3s'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Typography sx={{ fontSize: '12px', color: 'secondary.main', letterSpacing: '0.15em', fontWeight: 800 }}>{item.year}</Typography>
        <Box sx={{ 
          bgcolor: scheme.bg, 
          border: '1.5px solid', 
          borderColor: scheme.border,
          px: 1.5, py: 0.4, borderRadius: 1, fontSize: '10px', color: scheme.main,
          textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 800
        }}>
          {item.category}
        </Box>
      </Box>
    <Typography sx={{ fontSize: '16px', color: 'text.primary', fontWeight: 800, mb: 1.5, fontFamily: 'var(--orb)', lineHeight: 1.4 }}>
      {item.title}
    </Typography>
    <Typography sx={{ fontSize: '14px', color: 'text.secondary', lineHeight: 1.7 }}>
      {item.desc}
    </Typography>
    <Box sx={{ position: 'absolute', bottom: 12, right: 12, opacity: 0.15 }}>
      <Box sx={{ width: 18, height: 18, borderRadius: '50%', border: '2px solid #d4a751' }} />
    </Box>
  </Paper>
  );
};

const Achievements = () => {
  return (
    <Box component="section" id="achievements" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Box className="section-title-wrap">
          <Box className="section-num">04</Box>
          <Box className="section-line" />
          <Box className="section-label">Academic Excellence</Box>
          <Box className="section-line" sx={{ background: 'linear-gradient(90deg, transparent, var(--copper-dim))' }} />
        </Box>

        <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 2.5 }}>
          <Box sx={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--glow)', boxShadow: '0 0 15px var(--glow)' }} />
          <Typography sx={{ fontSize: '13px', color: 'primary.main', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 800 }}>
            Current Status: Class 9th
          </Typography>
        </Box>

        <Grid container spacing={3.5}>
          {achievementData.map((item, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <AchievementCard item={item} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Achievements;
