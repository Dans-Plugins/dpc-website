import { Box, Typography } from "@mui/material";
import React from 'react';

const Blurb: React.FC = () => (
    <Box sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="body1" gutterBottom>
            Welcome to the Dan&apos;s Plugins Community website!
        </Typography>
        <Typography variant="body1" gutterBottom>
            This website is a hub for all of the plugins that are maintained by or related to the community.
        </Typography>
        <Typography>
            To contribute to a project, click on the relevant `GitHub` link below. If there is a CONTRIBUTING.md for the project, be sure to read it.
        </Typography>
        <Typography>
            To download a plugin, click on the relevant `SpigotMC` link below. The Spigot page will have a download button.
        </Typography>
        <Typography variant="body1" gutterBottom>
            To join the playtest server, open a Minecraft client and enter `dansplugins.com` as the IP address for the server you want to connect to.
        </Typography>
    </Box>
)

export default Blurb;