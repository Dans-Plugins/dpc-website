import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Toolbar, Typography } from '@mui/material'
import type { NextPage } from 'next'

const Home: NextPage = () => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" component="div">
          Dan&apos;s Plugins Community
        </Typography>
      </Toolbar>
    </AppBar>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/mf-icon.png"
        alt="Medieval Factions icon (it&apos;s a castle)" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Medieval Factions
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Medieval Factions is a system of mechanics that allows for the simulation of sovereign nations. Players can create nations, claim territory, engage in warfare or politics, write laws or hold dueling tournaments, and generally are able to attempt to recreate society somewhat.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://www.spigotmc.org/resources/medieval-factions.79941/">SpigotMC</Button>
      </CardActions>
    </Card>
  </>
)

export default Home
