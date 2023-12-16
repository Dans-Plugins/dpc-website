import { Box, Typography } from "@mui/material";
import React from 'react';

const Blurb: React.FC = () => (
    <Box sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="body1" gutterBottom>
        Welcome to the Dan&apos;s Plugins Community website! This website is a hub for all of the plugins that are maintained by the community. If you&apos;d like to contribute, please visit the relevant GitHub repository.
        </Typography>
    </Box>
)

export default Blurb;