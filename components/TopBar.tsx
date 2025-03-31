import { AppBar, Box, Button, Toolbar, Typography, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { ColorModeToggleSwitch } from './ColorModeToggleSwitch';
import { ColorModeContext } from '../utils/ColorModeContext';

// Enhanced button component with hover effects
const NavButton: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <Button
        color="inherit"
        href={href}
        sx={{
          mx: 0.5,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
    >
      {children}
    </Button>
);

// Component for the brand name
const BrandName: React.FC = () => (
    <Typography
        variant="h6"
        color="inherit"
        component="div"
        sx={{
          display: 'inline',
          mr: 2,
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #fff 30%, rgba(255,255,255,0.8) 90%)',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
    >
      Dan&apos;s Plugins Community
    </Typography>
);

const TopBar: React.FC = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
      <AppBar
          position="static"
          elevation={4}
          sx={{
            background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #1a237e 30%, #283593 90%)'
                : 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
          }}
      >
        <Toolbar sx={{ py: 1 }}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <BrandName />

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <NavButton href="/">Home</NavButton>
              <NavButton href="/guides">Guides</NavButton>
              <NavButton href="https://github.com/Dans-Plugins">GitHub</NavButton>
              <NavButton href="https://discord.gg/xXtuAQ2">Discord</NavButton>
              <NavButton href="https://www.planetminecraft.com/server/dan-s-plugins-community-playtest-server/">
                Playtest Server
              </NavButton>
              <NavButton href="https://www.patreon.com/danthetechman">Patreon</NavButton>
              <NavButton href="https://www.linkedin.com/company/dansplugins">LinkedIn</NavButton>
              <NavButton href="https://github.com/RP-Kit/RPKit">RPKit</NavButton>
            </Box>
          </Box>

          <Box sx={{
            flexGrow: 0,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
            }
          }}>
            <ColorModeToggleSwitch
                checked={theme.palette.mode === 'dark'}
                onChange={colorMode.toggleColorMode}
            />
          </Box>
        </Toolbar>
      </AppBar>
  );
}

export default TopBar;