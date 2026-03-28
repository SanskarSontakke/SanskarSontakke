import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      padding: '60px 24px',
      borderTop: '1px solid rgba(212, 167, 81, 0.15)',
      bgcolor: 'background.default'
    }}>
      <Container maxWidth="lg">
        <Typography sx={{
          fontSize: '13px',
          color: 'text.secondary',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          fontWeight: 600
        }}>
          © 2026 <Box component="span" sx={{ color: 'secondary.main', fontWeight: 800 }}>Sanskar Sontakke</Box>. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
