import { AppBar, Box, Button, Toolbar, Typography, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { ColorModeToggleSwitch } from './ColorModeToggleSwitch';
import { ColorModeContext } from '../utils/ColorModeContext';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';

// Enhanced button component with hover effects
const FooterButton: React.FC<{ href: string; icon: React.ReactNode; children: React.ReactNode }> = ({
                                                                                                      href,
                                                                                                      icon,
                                                                                                      children
                                                                                                    }) => (
    <Button
        color="inherit"
        href={href}
        startIcon={icon}
        sx={{
          mx: 1,
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

// Version number component
const VersionNumber: React.FC<{ version: string }> = ({ version }) => (
    <Typography
        variant="body1"
        color="inherit"
        component="div"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          px: 2,
          py: 0.5,
          borderRadius: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          fontFamily: 'monospace',
          fontWeight: 'medium',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            transform: 'scale(1.05)',
          },
        }}
    >
      v{version}
    </Typography>
);

interface BottomBarProps {
  version: string
}

const BottomBar: React.FC<BottomBarProps> = ({ version }) => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
      <AppBar
          position="static"
          elevation={4}
          sx={{
            top: 'auto',
            bottom: 0,
            background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #283593 30%, #1a237e 90%)'
                : 'linear-gradient(45deg, #2196f3 30%, #1976d2 90%)',
            borderTop: `1px solid ${theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.12)'
                : 'rgba(0, 0, 0, 0.12)'}`,
          }}
      >
        <Toolbar sx={{
          py: 0.5,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}>
            <VersionNumber version={version} />

            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <FooterButton
                  href="https://github.com/Dans-Plugins/dpc-website"
                  icon={<CodeIcon />}
              >
                Source Code
              </FooterButton>
              <FooterButton
                  href="https://github.com/Dans-Plugins/dpc-website/issues/new/choose"
                  icon={<BugReportIcon />}
              >
                Report a Bug
              </FooterButton>
            </Box>
          </Box>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
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

export default BottomBar;