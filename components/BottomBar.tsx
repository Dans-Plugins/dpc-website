import { AppBar, Box, Button, Toolbar, Typography, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { ColorModeToggleSwitch } from './ColorModeToggleSwitch';
import { ColorModeContext } from '../utils/ColorModeContext';

interface BottomBarProps {
  version: string
}
const BottomBar: React.FC<BottomBarProps> = ({ version }) => {
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
            v{version}
          </Typography>
          <Button color="inherit" href="https://github.com/Dans-Plugins/dpc-website">Source Code</Button>
          <Button color="inherit" href="https://github.com/Dans-Plugins/dpc-website/issues/new/choose">Report a Bug</Button>
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

export default BottomBar