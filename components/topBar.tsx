import { AppBar, Button, Toolbar, Typography } from '@mui/material'

// declare react component for top bar
const TopBar: React.FC = () => (
  <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" color="inherit" component="div">
      Dan&apos;s Plugins Community
    </Typography>
    <Button color="inherit" href="https://github.com/Dans-Plugins">(GitHub)</Button>
    <Button color="inherit" href="https://discord.gg/xXtuAQ2">(Discord)</Button>
    <Button color="inherit" href="https://github.com/Dans-Plugins/dpc-website">(Source Code)</Button>
  </Toolbar>
  </AppBar>
)

export default TopBar