import { AppBar, Box, Button, Toolbar, Typography, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { ColorModeToggleSwitch } from './ColorModeToggleSwitch';
import { ColorModeContext } from '../utils/ColorModeContext';

// function to get environment variable
function getEnvVar(name: string): string {
  const returnVar = process.env[name];
  if (returnVar === '') {
    console.error(`Environment variable ${name} not found!`);
  }
  return process.env[name] || '';
}

// declare each button
const HomeButton = () => <Button color="inherit" href="/">Home</Button>
const GuidesButton = () => <Button color="inherit" href="/guides">Guides</Button>
const GitHubButton = () => <Button color="inherit" href={getEnvVar('TOPBAR_DANSPLUGINS_GITHUB_ORGANIZATION_URL')}>GitHub</Button>
const DiscordButton = () => <Button color="inherit" href={getEnvVar('TOPBAR_DISCORD_SERVER_URL')}>Discord</Button>
const PlaytestServerButton = () => <Button color="inherit" href={getEnvVar('TOPBAR_PLAYTEST_SERVER_PMC_URL')}>Playtest Server</Button>
const PatreonButton = () => <Button color="inherit" href={getEnvVar('TOPBAR_PATREON_PAGE_URL')}>Patreon</Button>
const LinkedInButton = () => <Button color="inherit" href={getEnvVar('TOPBAR_LINKEDIN_PAGE_URL')}>LinkedIn</Button>
const RPKitButton = () => <Button color="inherit" href={getEnvVar('TOPBAR_RPKIT_GITHUB_ORGANIZATION_URL')}>RPKit</Button>

// declare react component for top bar
const TopBar: React.FC = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            display="inline"
            mr={2}
          >
            Dan&apos;s Plugins Community
          </Typography>
          
          <HomeButton />
          <GuidesButton />
          <GitHubButton />
          <DiscordButton />
          <PlaytestServerButton />
          <PatreonButton />
          <LinkedInButton />
          <RPKitButton />
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <ColorModeToggleSwitch
            checked={theme.palette.mode === 'dark'}
            onChange={colorMode.toggleColorMode}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar