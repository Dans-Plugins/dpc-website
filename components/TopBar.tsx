import { AppBar, Box, Button, Toolbar, Typography, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { ColorModeToggleSwitch } from './ColorModeToggleSwitch';
import { ColorModeContext } from '../utils/ColorModeContext';

// declare each button
const HomeButton = () => <Button color="inherit" href="/">Home</Button>
const GuidesButton = () => <Button color="inherit" href="/guides">Guides</Button>
const GitHubButton = () => <Button color="inherit" href="https://github.com/Dans-Plugins">GitHub</Button>
const DiscordButton = () => <Button color="inherit" href="https://discord.gg/xXtuAQ2">Discord</Button>
const PlaytestServerButton = () => <Button color="inherit" href="https://www.planetminecraft.com/server/dan-s-plugins-community-playtest-server/">Playtest Server</Button>
const PatreonButton = () => <Button color="inherit" href="https://www.patreon.com/danspluginscommunity">Patreon</Button>
const LinkedInButton = () => <Button color="inherit" href="https://www.linkedin.com/company/dansplugins">LinkedIn</Button>
const RPKitButton = () => <Button color="inherit" href="https://github.com/RP-Kit/RPKit">RPKit</Button>

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