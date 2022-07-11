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
        image="/mf-icon.png"
        alt="Medieval Factions icon"
        height="250"
        width="250"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Medieval Factions
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Medieval Factions is a system of mechanics that allows for the simulation of sovereign nations. Players can create nations, claim territory, engage in warfare or politics, write laws or hold dueling tournaments, and generally are able to attempt to recreate society somewhat.
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" href="https://github.com/Dans-Plugins/Medieval-Factions">GitHub</Button>
        <Button size="small" href="https://www.spigotmc.org/resources/medieval-factions.79941/">SpigotMC</Button>
        <Button size="small" href="https://github.com/Dans-Plugins/Medieval-Factions/releases/latest">Download</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image="/mre-icon.png"
        alt="Medieval Roleplay Engine icon"
        height="250"
        width="250"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Medieval Roleplay Engine
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This Minecraft plugin facilitates roleplay between players.
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" href="https://github.com/Dans-Plugins/Medieval-Roleplay-Engine">GitHub</Button>
        <Button size="small" href="https://www.spigotmc.org/resources/medieval-roleplay-engine.79993/">SpigotMC</Button>
        <Button size="small" href="https://github.com/Dans-Plugins/Medieval-Roleplay-Engine/releases/latest">Download</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image="/fs-icon.png"
        alt="Food Spoilage icon"
        height="250"
        width="250"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Food Spoilage
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This Minecraft plugin makes food items turn into rotten flesh after a certain period of time. 
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" href="https://github.com/Dans-Plugins/FoodSpoilage">GitHub</Button>
        <Button size="small" href="https://www.spigotmc.org/resources/food-spoilage.81507/">SpigotMC</Button>
        <Button size="small" href="https://github.com/Dans-Plugins/FoodSpoilage/releases/latest">Download</Button>
      </CardActions>
    </Card>
  </>
)

export default Home
