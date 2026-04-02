import React from 'react';
import { Box, Typography, Container, Paper, Stack } from '@mui/material';

const ContactLink = ({ icon, label, value, href }) => {
  const handlePulse = () => {
    window.dispatchEvent(new CustomEvent('sys-pulse'));
  };
  
  return (
    <Box 
      component="a" 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      onMouseEnter={handlePulse}
      onClick={handlePulse}
      sx={{ 
        display: 'flex', alignItems: 'center', gap: 2.2, p: '16px 20px', 
        bgcolor: 'rgba(8, 20, 8, 0.6)', border: '1.5px solid rgba(212, 167, 81, 0.2)', 
        borderRadius: 1.5, textDecoration: 'none', transition: 'all 0.2s',
        '&:hover, &:focus-visible': { borderColor: 'secondary.main', bgcolor: 'rgba(212, 167, 81, 0.08)', transform: 'translateX(6px)', outline: 'none' }
      }}
    >
    <Box sx={{ fontSize: '24px', width: 32, textAlign: 'center' }}>{icon}</Box>
    <Box>
      <Typography sx={{ fontSize: '12px', color: 'text.secondary', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>{label}</Typography>
      <Typography sx={{ fontSize: '15px', color: 'text.primary', mt: 0.3, fontWeight: 500 }}>{value}</Typography>
    </Box>
    <Typography sx={{ ml: 'auto', fontSize: '14px', color: 'secondary.main', fontWeight: 800 }}>↗</Typography>
    </Box>
  );
};

const ContactSection = () => {
  return (
    <Box component="section" id="contact" sx={{ pb: 12 }}>
      <Container maxWidth="lg">
        <Box className="section-title-wrap">
          <Box className="section-num">05</Box>
          <Box className="section-line" />
          <Box className="section-label">I/O Interface</Box>
          <Box className="section-line" sx={{ background: 'linear-gradient(90deg, transparent, var(--copper-dim))' }} />
        </Box>

        <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
          <Paper sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'secondary.dark', borderRadius: '8px', p: { xs: 3, md: 5 }, position: 'relative' }}>
            <Typography sx={{ position: 'absolute', top: -11, left: 24, bgcolor: 'background.paper', px: 1.5, fontSize: '11px', color: 'secondary.main', letterSpacing: '0.18em', fontWeight: 800 }}>
              U5 — CONTACT MODULE
            </Typography>
            <Stack spacing={2} sx={{ mt: 1.5 }}>
              <ContactLink icon="⬡" label="GitHub" value="github.com/SanskarSontakke" href="https://github.com/SanskarSontakke" />
              <ContactLink icon="✉" label="Email" value="sanskarsontakke@gmail.com" href="mailto:sanskarsontakke@gmail.com" />
            </Stack>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
