import React from 'react';
import { Box, Typography, Container, Paper, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';

const InfoRow = ({ label, value, colorClass }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', py: 1.2, borderBottom: '1px solid rgba(210, 255, 210, 0.08)', '&:last-child': { borderBottom: 'none' } }}>
    <Typography component="span" sx={{ color: 'text.secondary', letterSpacing: '0.08em', fontSize: '13px', fontWeight: 600 }}>{label}</Typography>
    <Typography component="span" sx={{ 
      color: colorClass === 'green' ? 'primary.main' : colorClass === 'cu' ? 'secondary.main' : 'text.primary', 
      textAlign: 'right', letterSpacing: '0.05em', fontSize: '14px', fontWeight: 700 
    }}>
      {value}
    </Typography>
  </Box>
);

const AboutSection = () => {
  return (
    <Box component="section" id="about" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Box className="section-title-wrap">
          <Box className="section-num">03</Box>
          <Box className="section-line" />
          <Box className="section-label">About Me</Box>
          <Box className="section-line" sx={{ background: 'linear-gradient(90deg, transparent, var(--copper-dim))' }} />
        </Box>

        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper elevation={0} sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'secondary.dark', borderRadius: '8px', p: { xs: 3, md: 5 }, height: '100%' }}>
              <Typography variant="h6" sx={{ color: 'secondary.main', fontSize: '14px', letterSpacing: '0.18em', textTransform: 'uppercase', mb: 3, pb: 1.5, borderBottom: '1px solid rgba(212, 167, 81, 0.2)', fontWeight: 800 }}>
                ⬡ Background.exe
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, fontWeight: 500, fontSize: '15px', color: 'text.secondary', lineHeight: 1.8 }}>
                I architect and deploy high-performance software systems across web, mobile, desktop, and embedded platforms. My focus is on writing precise, optimized, and scalable code that transforms complex problems into seamless digital experiences.
              </Typography>
              
              <Box sx={{ mt: 5, pl: 2, borderLeft: '2px solid', borderColor: 'primary.main' }}>
                <Typography sx={{ color: 'secondary.main', fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', mb: 1.5, fontWeight: 800 }}>
                  ⬡ Core Approach
                </Typography>
                <Typography sx={{ fontSize: '14px', color: 'text.secondary', lineHeight: 1.7 }}>
                  Bridging low-level system understanding with modern full-stack tools to build robust, native-feeling applications with minimal overhead.
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Paper elevation={0} sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'secondary.dark', borderRadius: '8px', p: { xs: 3, md: 4 }, height: '100%' }}>
              <Typography variant="h6" sx={{ color: 'secondary.main', fontSize: '14px', letterSpacing: '0.18em', textTransform: 'uppercase', mb: 2.5, pb: 1.5, borderBottom: '1px solid rgba(212, 167, 81, 0.2)', fontWeight: 800 }}>
                ⬡ Specifications
              </Typography>
              <InfoRow label="Experience" value="1 Year Professional" colorClass="green" />
              <InfoRow label="Started Coding" value="Age 9" colorClass="cu" />
              <InfoRow label="Stacks" value="Full-Stack" />
              <InfoRow label="OS" value="Ubuntu / Windows" colorClass="green" />
              <InfoRow label="Projects" value="Web / Mobile / IoT" />
              <InfoRow label="Status" value="Class 9th Student" colorClass="green" />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
