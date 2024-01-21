import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'
import type { NextPage } from 'next'
import TopBar from '../components/TopBar'
import React from 'react';
import BottomBar from '../components/BottomBar'

// pull version from package.json
const version = require('../package.json').version

const Guides: NextPage = () => (
    <Box sx={{ flexGrow: 1 }}>
      <TopBar />
      <Container maxWidth="xl">
        <Typography variant="body1" gutterBottom>
          The guides for each plugin are hosted on the wiki for that plugin. You can find the links to the wiki pages below.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Button color="inherit" href="https://github.com/Dans-Plugins/Medieval-Factions/wiki/Guide">Medieval Factions Guide</Button>
        </Typography>        
      </Container>
    </Box>
)

export default Guides