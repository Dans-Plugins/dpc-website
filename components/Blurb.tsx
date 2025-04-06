import React from 'react';
import {Box, Typography, Paper, Grid} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import GamesIcon from '@mui/icons-material/Games';

import {
    blurbBoxStyle,
    blurbTitleStyle,
    blurbGridContainerStyle,
    infoCardStyle,
    infoCardIconStyle,
    infoCardTitleStyle,
    infoCardIconSizeStyle
} from '../styles/styles';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; content: string }> = ({icon, title, content}) => (
    <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={(theme) => infoCardStyle(theme)}>
            <Box sx={(theme) => infoCardIconStyle(theme)}>
                {icon}
            </Box>
            <Typography variant="h6" gutterBottom sx={(theme) => infoCardTitleStyle(theme)}>
                {title}
            </Typography>
            <Typography variant="body1">{content}</Typography>
        </Paper>
    </Grid>
);

const Blurb: React.FC = () => (
    <Box sx={(theme) => blurbBoxStyle(theme)}>
        <Typography
            variant="h2"
            gutterBottom
            sx={(theme) => blurbTitleStyle(theme)}
        >
            Welcome to Dan&apos;s Plugins Community
        </Typography>

        <Grid container spacing={4} sx={(theme) => blurbGridContainerStyle(theme)}>
            <InfoCard
                icon={<GitHubIcon sx={infoCardIconSizeStyle}/>}
                title="Contribute"
                content="Join our open-source community on GitHub. Check out the CONTRIBUTING.md in each project to get started."
            />
            <InfoCard
                icon={<DownloadIcon sx={infoCardIconSizeStyle}/>}
                title="Download"
                content="Get our plugins from SpigotMC. Each plugin page contains detailed installation instructions and documentation."
            />
            <InfoCard
                icon={<GamesIcon sx={infoCardIconSizeStyle}/>}
                title="Try it Out"
                content="Join our playtest server at dansplugins.com to experience our plugins in action!"
            />
        </Grid>
    </Box>
);

export default Blurb;