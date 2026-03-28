import React from 'react';
import { Box, Typography, Container, Paper, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';

const techGroups = [
  {
    icon: '💻',
    title: 'Languages',
    items: ['C / C++', 'Python', 'Dart', 'JavaScript', 'TypeScript'],
    color: 'green'
  },
  {
    icon: '🌐',
    title: 'Frontend / UI',
    items: ['React.js', 'Next.js', 'Flutter', 'HTML Canvas', 'Tailwind / MUI'],
    color: 'cyan'
  },
  {
    icon: '⚙️',
    title: 'Backend / Core',
    items: ['Node.js', 'Firebase', 'Vercel', 'Supabase', 'C# / .NET MAUI'],
    color: 'amber'
  },
  {
    icon: '🔧',
    title: 'Tools / OS',
    items: ['Linux (Ubuntu)', 'Git / GitHub', 'Inno Setup', 'Gemini API'],
    color: 'purple'
  }
];

const TechStack = () => {
  return (
    <Box component="section" id="tech-stack" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ 
          fontSize: '24px', 
          fontFamily: 'var(--orb)', 
          color: 'text.primary', 
          textAlign: 'center', 
          mb: 1.5,
          letterSpacing: '0.08em',
          fontWeight: 800
        }}>
          Languages & Tools
        </Typography>
        <Typography sx={{ 
          fontSize: '13px', 
          color: 'text.secondary', 
          textAlign: 'center', 
          mb: 6,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontWeight: 700
        }}>
          Primary technologies used to bring ideas to life
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {techGroups.map((group, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={0} className={`hover-lift hover-glow-${group.color}`} sx={{ 
                p: { xs: 3, md: 5 }, 
                bgcolor: 'background.paper', 
                border: '1px solid rgba(212, 167, 81, 0.15)', 
                borderRadius: '8px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'border-color 0.3s'
              }}>
                <Box sx={{ fontSize: '36px', mb: 2.5 }}>{group.icon}</Box>
                <Typography sx={{ fontSize: '14px', color: 'secondary.main', fontWeight: 800, mb: 3, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  {group.title}
                </Typography>
                <Stack spacing={1.5}>
                  {group.items.map((item, j) => (
                    <Typography key={j} sx={{ fontSize: '16px', color: 'text.primary', fontWeight: 500 }}>
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TechStack;
