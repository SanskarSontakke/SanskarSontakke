import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff88', // Glow green
      light: '#33ffaa',
      dark: '#00cc66',
    },
    secondary: {
      main: '#d4a751', // Brighter Copper gold for contrast
      light: '#e8ffe8',
      dark: '#8b6b2a',
    },
    background: {
      default: '#081408', // Darker PCB green
      paper: '#0d0d12', // Darker IC background for contrast
    },
    text: {
      primary: '#f0fff0', // Warmer, brighter Silk white
      secondary: 'rgba(210, 255, 210, 0.75)', // Increased opacity for readability
    },
    info: { main: '#00e5ff' }, // Cyber Blue
    error: { main: '#ff3366' }, // Neon Pink
    warning: { main: '#ffaa00' }, // Alert Amber
    accent: { main: '#b533ff' }, // Neon Purple

  },
  typography: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: 14, // Base font size increased from 14 (default)
    h1: { fontFamily: "'Orbitron', sans-serif", fontWeight: 900, lineHeight: 1.2 },
    h2: { fontFamily: "'Orbitron', sans-serif", fontWeight: 800, lineHeight: 1.2 },
    h3: { fontFamily: "'Orbitron', sans-serif", fontWeight: 700, lineHeight: 1.3 },
    h4: { fontFamily: "'Orbitron', sans-serif", fontWeight: 600, lineHeight: 1.4 },
    h5: { fontFamily: "'Orbitron', sans-serif", fontWeight: 600, lineHeight: 1.4 },
    h6: { fontFamily: "'Orbitron', sans-serif", fontWeight: 600, lineHeight: 1.5 },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
    body2: { fontSize: '0.875rem', lineHeight: 1.6 },
    button: { textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700 },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(8, 20, 8, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0, 255, 136, 0.2)',
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '12px 28px',
          fontSize: '0.85rem',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Remove the default MUI gradient
        },
      },
    },
  },
});

export default theme;
