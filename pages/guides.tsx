import {Box, Button, Container, Typography} from '@mui/material';
import type {NextPage} from 'next';
import TopBar from '../components/TopBar';
import React from 'react';
import BottomBar from '../components/BottomBar';

// Import styles
import {pageStyle, sectionHeaderStyle, pluginsBoxStyle, containerPaddingStyle} from '../styles/styles';

// Pull version from package.json
const version = require('../package.json').version;

const Guides: NextPage = () => (
    <Box sx={(theme) => pageStyle(theme)}>
        <TopBar/>
        <Container maxWidth="xl" sx={(theme) => containerPaddingStyle(theme)}>
            <Typography variant="h3" gutterBottom sx={(theme) => sectionHeaderStyle(theme)}>
                Guides
            </Typography>
            <Typography variant="body1" gutterBottom>
                The guides for each plugin are hosted on the wiki for that plugin. You can find the links to the wiki
                pages below.
            </Typography>
            <Box sx={pluginsBoxStyle}>
                <Button
                    variant="contained"
                    color="primary"
                    href="https://github.com/Dans-Plugins/Medieval-Factions/wiki/Guide"
                >
                    Medieval Factions Guide
                </Button>
            </Box>
        </Container>
        <BottomBar version={version}/>
    </Box>
);

export default Guides;