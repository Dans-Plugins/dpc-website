import { Box, Typography, Paper, Grid } from "@mui/material";
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import GamesIcon from '@mui/icons-material/Games';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; content: string }> = ({ icon, title, content }) => (
    <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{
            p: 3,
            height: '100%',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
                transform: 'translateY(-4px)',
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }}>
            <Box sx={{ mb: 2, color: 'primary.main' }}>
                {icon}
            </Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                {title}
            </Typography>
            <Typography variant="body1">
                {content}
            </Typography>
        </Paper>
    </Grid>
);

const Blurb: React.FC = () => (
    <Box sx={{ flexGrow: 1, py: 4 }}>
        <Typography variant="h2"
                    align="center"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                    }}>
            Welcome to Dan&apos;s Plugins Community
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
            <InfoCard
                icon={<GitHubIcon sx={{ fontSize: 40 }} />}
                title="Contribute"
                content="Join our open-source community on GitHub. Check out the CONTRIBUTING.md in each project to get started."
            />
            <InfoCard
                icon={<DownloadIcon sx={{ fontSize: 40 }} />}
                title="Download"
                content="Get our plugins from SpigotMC. Each plugin page contains detailed installation instructions and documentation."
            />
            <InfoCard
                icon={<GamesIcon sx={{ fontSize: 40 }} />}
                title="Try it Out"
                content="Join our playtest server at dansplugins.com to experience our plugins in action!"
            />
        </Grid>
    </Box>
);

export default Blurb;