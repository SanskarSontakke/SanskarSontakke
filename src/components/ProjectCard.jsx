import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Stack, Chip, Button } from '@mui/material';

const MUI_COLORS = { cyan: 'info', purple: 'accent', amber: 'warning', pink: 'error', green: 'primary' };

const ProjectCard = ({ data, delay }) => {
  const [glitch, setGlitch] = useState(false);
  const themeMuiColor = MUI_COLORS[data.themeColor] || 'primary';
  const rawColor = data.themeColor === 'cyan' ? '#00e5ff' : data.themeColor === 'purple' ? '#b533ff' : '#00ff88';

  useEffect(() => {
    const triggerGlitch = () => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 180);
      setTimeout(triggerGlitch, 1800 + Math.random() * 3000);
    };
    const timer = setTimeout(triggerGlitch, 2000 + Math.random() * 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card 
      className={`project-card hover-lift hover-glow-${data.themeColor || 'green'}`} 
      sx={{ 
        animationDelay: delay,
        bgcolor: 'background.paper',
        border: '1.5px solid',
        borderColor: glitch ? `${themeMuiColor}.main` : 'secondary.dark',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'all 0.3s',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: glitch ? `0 0 25px ${rawColor}4d, 0 0 0 1px ${rawColor}80` : 'none',
        '&:hover': {
          borderColor: 'secondary.main',
          transform: 'translateY(-6px)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,167,81,0.2)',
          '&::before': { opacity: 1 }
        },
        '&::before': {
          content: "''",
          position: 'absolute',
          top: 0, left: 0, right: 0, height: '5px',
          background: 'repeating-linear-gradient(90deg, transparent, transparent 8px, #8b6b2a 8px, #8b6b2a 14px, transparent 14px, transparent 22px)',
          transition: 'opacity 0.3s',
          opacity: 0.6,
        }
      }}
    >
      <Box sx={{ p: '24px 24px 18px', borderBottom: '1px solid rgba(212, 167, 81, 0.15)', display: 'flex', alignItems: 'flex-start', gap: 2.2 }}>
        <Box sx={{
          width: 52, height: 52,
          bgcolor: 'rgba(8, 20, 8, 0.9)',
          border: '1.5px solid',
          borderColor: 'secondary.dark',
          borderRadius: 1.5,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '24px', flexShrink: 0, position: 'relative', overflow: 'hidden',
          '&::after': { content: "''", position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 30%, rgba(212, 167, 81, 0.2), transparent 70%)' }
        }}>
          {data.icon}
        </Box>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography sx={{ fontSize: '11px', color: 'secondary.main', letterSpacing: '0.15em', mb: 0.6, fontWeight: 800 }}>
            {data.partNum}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '17px', fontWeight: 800, color: 'text.primary', lineHeight: 1.2, mb: 0.8, fontFamily: 'var(--orb)' }}>
            {data.title}
          </Typography>
          <Typography sx={{ fontSize: '12px', color: `${themeMuiColor}.main`, letterSpacing: '0.1em', fontWeight: 700 }}>
            {data.subtitle}
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{ p: '20px 24px !important', flexGrow: 1 }}>
        <Typography variant="body1" sx={{ fontSize: '14px', lineHeight: 1.8, color: 'text.secondary', mb: 3 }}>
          {data.desc}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
          {data.tags.map((tag, i) => (
            <Chip 
              key={i} 
              label={tag} 
              size="small"
              sx={{ 
                height: 'auto',
                fontSize: '11px',
                fontWeight: 700,
                borderRadius: '4px',
                bgcolor: `${rawColor}15`,
                color: `${rawColor}e6`,
                border: `1.5px solid ${rawColor}4d`,
                '& .MuiChip-label': { p: '4px 10px' }
              }} 
            />
          ))}
        </Stack>
        
        {data.link && (
          <Button 
            href={data.link} 
            target="_blank" 
            variant="outlined" 
            color={themeMuiColor}
            size="medium"
            aria-label={`${data.linkText || 'View Project'} for ${data.title} (opens in new tab)`}
            sx={{ 
              fontSize: '11px', 
              fontWeight: 800,
              borderWidth: '2px',
              '&:hover': { borderWidth: '2px', boxShadow: `0 0 10px ${rawColor}4d` }
            }}
          >
            {data.linkText || 'View Project'}
          </Button>
        )}
      </CardContent>

      <Box sx={{ p: '14px 24px', borderTop: '1px solid rgba(212, 167, 81, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
          <Box className={`led led-${data.ledColor}`} sx={{
            width: 10, height: 10, borderRadius: '50%',
            bgcolor: data.ledColor === 'y' ? '#ffcc00' : data.ledColor === 'g' ? '#00ff88' : data.ledColor === 'b' ? '#3399ff' : '#ff3333',
            boxShadow: `0 0 10px ${data.ledColor === 'y' ? '#ffcc00' : data.ledColor === 'g' ? '#00ff88' : data.ledColor === 'b' ? '#3399ff' : '#ff3333'}`,
            animation: 'led-blink 3s ease-in-out infinite'
          }} />
          <Typography sx={{ fontSize: '11px', color: 'text.primary', letterSpacing: '0.1em', fontWeight: 600 }}>
            {data.status}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: '11px', color: 'secondary.main', fontWeight: 700 }}>{data.specs}</Typography>
      </Box>

      <style>{`
        @keyframes led-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
    </Card>
  );
};

export default ProjectCard;
