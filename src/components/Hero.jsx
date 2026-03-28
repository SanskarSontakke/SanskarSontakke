import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';

const Hero = () => {
  return (
    <Box component="section" id="hero" sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      pt: '64px',
      position: 'relative'
    }}>
      <Container maxWidth="lg">
        <Box className="hero-inner" sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
          <Box className="via-row" sx={{ mb: 1.5, display: 'flex', alignItems: 'center', gap: 1.5, width: '100%', opacity: 0.6 }}>
            <Box className="via" />
            <Box className="via-line" sx={{ flex: 1, height: '1px', bgcolor: 'secondary.dark', opacity: 0.4 }} />
            <Box className="via" />
            <Box className="via-line" sx={{ width: '30px', height: '1px', bgcolor: 'secondary.dark', opacity: 0.4 }} />
            <Typography sx={{ fontSize: '11px', color: 'secondary.main', letterSpacing: '0.15em', fontWeight: 600 }}>U1 — MAIN IC</Typography>
          </Box>

          <Box className="hero-chip" sx={{
            position: 'relative',
            bgcolor: 'background.paper',
            border: '2px solid',
            borderColor: 'secondary.main',
            borderRadius: '8px',
            p: { xs: '32px 24px', md: '48px 60px' },
            my: { xs: 2, md: 4 },
            maxWidth: '750px',
            width: '100%',
            boxShadow: '0 0 50px rgba(0,0,0,0.5), 0 0 30px rgba(212,167,81,0.05)',
            '&::before, &::after': {
              content: "''",
              position: 'absolute',
              left: '40px', right: '40px',
              height: '11px',
              background: 'repeating-linear-gradient(90deg, transparent, transparent 12px, #d4a751 12px, #d4a751 20px, transparent 20px, transparent 32px)',
            },
            '&::before': { top: '-12px' },
            '&::after': { bottom: '-12px' },
          }}>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Stack className="pins-left" sx={{ position: 'absolute', top: '40px', bottom: '40px', left: '-12px', justifyContent: 'space-around' }}>
                {[...Array(6)].map((_, i) => <Box key={i} sx={{ width: '10px', height: '8px', bgcolor: 'secondary.main', borderRadius: '1.5px' }} />)}
              </Stack>
              <Stack className="pins-right" sx={{ position: 'absolute', top: '40px', bottom: '40px', right: '-12px', justifyContent: 'space-around' }}>
                {[...Array(6)].map((_, i) => <Box key={i} sx={{ width: '10px', height: '8px', bgcolor: 'secondary.main', borderRadius: '1.5px' }} />)}
              </Stack>
            </Box>

            <Typography sx={{ fontSize: '11px', color: 'secondary.main', mb: 1.5, letterSpacing: '0.18em', fontWeight: 800 }}>
              IC/SS-01 &nbsp; ◈ &nbsp; TECH ENTHUSIAST &nbsp; ◈ &nbsp; CLASS 9
            </Typography>
            
            <Typography variant="h1" sx={{ 
              fontSize: { xs: '32px', md: 'clamp(32px, 6vw, 56px)' },
              mb: 1, 
              color: 'text.primary',
              textShadow: '0 0 40px rgba(0,255,136,0.2)',
              letterSpacing: '0.04em',
              lineHeight: 1.1,
              fontWeight: 900
            }}>
              Hi, I'm <br />
              SANSKAR SONTAKKE
            </Typography>

            <Typography variant="subtitle1" sx={{ 
              fontSize: '16px', 
              color: 'primary.main', 
              letterSpacing: '0.25em', 
              textTransform: 'uppercase', 
              mb: 3,
              textShadow: '0 0 15px rgba(0,255,136,0.5)',
              fontWeight: 700
            }}>
              Tech Enthusiast |
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 3.5 }}>
              <Box component="span" className="meta-badge badge-glow">Full-stack</Box>
              <Box component="span" className="meta-badge badge-cu">Android/iOS</Box>
              <Box component="span" className="meta-badge badge-silk">IoT/Hardware</Box>
              <Box component="span" className="meta-badge badge-glow">AI/OS Dev</Box>
            </Box>

            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '520px', mb: 5, fontSize: '16px' }}>
              Building exceptional web and mobile experiences with modern technologies.
            </Typography>

            <Stack direction="row" spacing={2.5} flexWrap="wrap">
              <Button href="#projects" variant="contained" color="primary">
                ⬡ Projects
              </Button>
              <Button href="#achievements" variant="outlined" color="secondary" sx={{ borderWidth: '2px', '&:hover': { borderWidth: '2px' } }}>
                ▷ Achievements
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
      <style>{`
        .via { width: 12px; height: 12px; border-radius: 50%; border: 2px solid #8b6b2a; background: #081408; position: relative; }
        .via::after { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 5px; height: 5px; border-radius: 50%; background: #8b6b2a; }
        .meta-badge { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; padding: 6px 14px; border-radius: 4px; border: 1.5px solid; text-transform: uppercase; }
        .badge-glow { border-color: rgba(0, 255, 136, 0.5); color: #00ff88; background: rgba(0, 255, 136, 0.08); }
        .badge-cu { border-color: rgba(212, 167, 81, 0.5); color: #d4a751; background: rgba(212, 167, 81, 0.08); }
        .badge-silk { border-color: rgba(210, 255, 210, 0.3); color: rgba(210, 255, 210, 0.85); background: rgba(210, 255, 210, 0.06); }
      `}</style>
    </Box>
  );
};

export default Hero;
