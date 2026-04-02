import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  IconButton, 
  SwipeableDrawer, 
  List, 
  ListItem, 
  ListItemText, 
  useMediaQuery,
  useTheme,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  { title: 'About', href: '#about', id: 'about' },
  { title: 'Skills', href: '#skills', id: 'skills' },
  { title: 'Projects', href: '#projects', id: 'projects' },
  { title: 'Achievements', href: '#achievements', id: 'achievements' },
  { title: 'Contact', href: '#contact', id: 'contact' }
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let currentSectionId = '';

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionId = link.id;
          }
        }
      });
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBrand = (
    <Typography 
      variant="h6" 
      sx={{ 
        fontSize: '15px', 
        color: 'primary.main', 
        letterSpacing: '0.15em',
        textShadow: '0 0 15px rgba(0,255,136,0.6)',
        fontWeight: 900,
        fontFamily: 'var(--orb)'
      }}
    >
      SS // PCB-REV-2025
    </Typography>
  );

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: '64px', px: '0 !important' }}>
          {navBrand}

          {isMobile ? (
            <>
              <IconButton
                color="primary"
                onClick={toggleDrawer(true)}
                sx={{ p: 1.5 }}
                aria-label="Open navigation menu"
                aria-expanded={drawerOpen}
                aria-controls="mobile-nav-menu"
              >
                <MenuIcon sx={{ fontSize: '28px' }} />
              </IconButton>
              <SwipeableDrawer
                id="mobile-nav-menu"
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                PaperProps={{
                  sx: { 
                    width: 280, 
                    background: 'rgba(5, 12, 5, 0.95)', 
                    backdropFilter: 'blur(15px)',
                    color: 'text.primary', 
                    borderLeft: '1px solid rgba(0,255,136,0.3)',
                    justifyContent: 'center'
                  }
                }}
              >
                <List sx={{ px: 3 }}>
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <ListItem 
                        button 
                        key={link.title} 
                        component="a" 
                        href={link.href}
                        onClick={toggleDrawer(false)}
                        sx={{ 
                          py: 2.5, 
                          borderRadius: 2, 
                          mb: 2, 
                          bgcolor: isActive ? 'rgba(0, 255, 136, 0.1)' : 'transparent',
                          border: isActive ? '1px solid rgba(0, 255, 136, 0.5)' : '1px solid transparent',
                          '&:hover': { bgcolor: 'rgba(0,255,136,0.15)' } 
                        }}
                      >
                        <ListItemText 
                          primary={link.title} 
                          primaryTypographyProps={{ 
                            sx: { 
                              fontSize: '15px', 
                              letterSpacing: '0.2em', 
                              color: isActive ? 'primary.main' : 'text.secondary',
                              textTransform: 'uppercase', 
                              fontWeight: 800, 
                              textAlign: 'center' 
                            } 
                          }} 
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </SwipeableDrawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Box 
                    key={link.title} 
                    component="a" 
                    href={link.href}
                    sx={{
                      color: isActive ? 'primary.main' : 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '13px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      transition: 'all 0.3s',
                      fontWeight: isActive ? 800 : 700,
                      textShadow: isActive ? '0 0 12px rgba(0,255,136,0.6)' : 'none',
                      position: 'relative',
                      '&::after': {
                        content: "''",
                        position: 'absolute',
                        bottom: -4,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: isActive ? '100%' : '0%',
                        height: '2px',
                        background: 'var(--glow)',
                        transition: 'width 0.3s',
                        boxShadow: '0 0 8px var(--glow)'
                      },
                      '&:hover, &:focus-visible': {
                        color: 'primary.main', 
                        textShadow: '0 0 10px rgba(0,255,136,0.4)',
                        '&::after': { width: '80%' },
                        outline: 'none'
                      }
                    }}
                  >
                    {link.title}
                  </Box>
                )
              })}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, ml: 2 }}>
                <Box className="status-dot" />
                <Typography sx={{ fontSize: '11px', color: 'primary.main', fontWeight: 800, letterSpacing: '0.1em' }}>SYS ONLINE</Typography>
              </Box>
            </Box>
          )}
        </Toolbar>
      </Container>

      <style>{`
        .status-dot {
          width: 9px; height: 9px;
          border-radius: 50%;
          background: var(--glow);
          animation: pulse-led 2s ease-in-out infinite;
        }
        @keyframes pulse-led {
          0%, 100% { opacity: 1; box-shadow: 0 0 10px var(--glow); }
          50% { opacity: 0.4; box-shadow: none; }
        }
      `}</style>
    </AppBar>
  );
};

export default Navbar;
