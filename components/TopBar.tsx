import {AppBar, Box, Button, Toolbar, Typography, useTheme} from '@mui/material';
import React, {useContext} from 'react';
import {ColorModeToggleSwitch} from './ColorModeToggleSwitch';
import {ColorModeContext} from '../utils/ColorModeContext';

// Import styles
import {appBarStyle, navButtonStyle, brandNameStyle, toolbarStyle, toggleSwitchBoxStyle} from '../styles/styles';

// Enhanced button component with hover effects
const NavButton: React.FC<{ href: string; children: React.ReactNode }> = ({href, children}) => (
    <Button
        color="inherit"
        href={href}
        sx={(theme) => navButtonStyle(theme)}
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
        sx={(theme) => brandNameStyle(theme)}
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
            sx={(theme) => appBarStyle(theme)}
        >
            <Toolbar sx={(theme) => toolbarStyle(theme)}>
                <Box sx={{flexGrow: 1, display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                    <BrandName/>

                    <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}>
                        <NavButton href="/">Home</NavButton>
                        <NavButton href="/guides">Guides</NavButton>
                        <NavButton href="https://github.com/Dans-Plugins">GitHub</NavButton>
                        <NavButton href="https://discord.gg/xXtuAQ2">Discord</NavButton>
                        <NavButton
                            href="https://www.planetminecraft.com/server/dan-s-plugins-community-playtest-server/">
                            Playtest Server
                        </NavButton>
                        <NavButton href="https://www.patreon.com/danspluginscommunity">Patreon</NavButton>
                        <NavButton href="https://www.linkedin.com/company/dansplugins">LinkedIn</NavButton>
                        <NavButton href="https://github.com/RP-Kit/RPKit">RPKit</NavButton>
                    </Box>
                </Box>

                <Box sx={toggleSwitchBoxStyle}>
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