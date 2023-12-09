import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Toolbar, Typography } from '@mui/material'
import type { NextPage } from 'next'

const Home: NextPage = () => (
  <>
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

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="body1" gutterBottom>
        The following plugins are maintained by the community. If you&apos;d like to contribute, please visit the relevant GitHub repository.
      </Typography>
    </Box>

    <Typography variant="h3" component="div" gutterBottom>
      Most Popular Plugins
    </Typography>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Medieval Factions
      </Typography>
      <Typography variant="body1" gutterBottom>
        Allows players to organize themselves into feudal, diplomatic, lawful groups akin to nations.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Medieval-Factions">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Medieval Roleplay Engine
      </Typography>
      <Typography variant="body1" gutterBottom>
        Facilitates roleplay between players.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Medieval-Roleplay-Engine">GitHub</Button>
    </Box>
  
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        FoodSpoilage
      </Typography>
      <Typography variant="body1" gutterBottom>
        Makes food items turn into rotten flesh after a certain period of time.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/FoodSpoilage">GitHub</Button>
    </Box>
    
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Wild Pets
      </Typography>
      <Typography variant="body1" gutterBottom>
        Allows players to tame any entity and keep them as a pet.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Wild-Pets">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Currencies
      </Typography>
      <Typography variant="body1" gutterBottom>
        An expansion for Medieval Factions that allows faction owners to create and mint local currencies.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Currencies">GitHub</Button>
    </Box>


    <Typography variant="h3" component="div" gutterBottom>
      All Plugins
    </Typography>
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Activity Tracker
      </Typography>
      <Typography variant="body1" gutterBottom>
        Tracks the activity of players.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Activity-Tracker">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Alternate Account Finder
      </Typography>
      <Typography variant="body1" gutterBottom>
        Identifies accounts that have used the same IP address.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/AlternateAccountFinder">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Conquest Recipes
      </Typography>
      <Typography variant="body1" gutterBottom>
        Adds recipes for the many item textures that the Conquest Resource Pack adds to the game.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Conquest-Recipes">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Currencies
      </Typography>
      <Typography variant="body1" gutterBottom>
        An expansion for Medieval Factions that allows faction owners to create and mint local currencies.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Currencies">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Dan&apos;s Essentials
      </Typography>
      <Typography variant="body1" gutterBottom>
        Provides miscellaneous commands.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Dans-Essentials">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Dan&apos;s Plugin Manager
      </Typography>
      <Typography variant="body1" gutterBottom>
        Allows operators to easily download the community&apos;s plugins in-game or through a server console.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Dans-Essentials">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Dan&apos;s Set Home
      </Typography>
      <Typography variant="body1" gutterBottom>
        Allows players to set and teleport to home locations.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Dans-Set-Home">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Dan&apos;s Spawn System
      </Typography>
      <Typography variant="body1" gutterBottom>
        Allows players to use signs to select a custom spawn in their world.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Dans-Spawn-System">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Democracy
      </Typography>
      <Typography variant="body1" gutterBottom>
        An expansion for MF that aims to allow nations to be democratic.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Democracy">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Easy Links
      </Typography>
      <Typography variant="body1" gutterBottom>
        Allows players to view relevant links with simple commands.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Democracy">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Fiefs
      </Typography>
      <Typography variant="body1" gutterBottom>
        Allows players to create fiefs and manage them.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Fiefs">GitHub</Button>
    </Box>
    
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        FoodSpoilage
      </Typography>
      <Typography variant="body1" gutterBottom>
        Makes food items turn into rotten flesh after a certain period of time.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/FoodSpoilage">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        KDRTracker
      </Typography>
      <Typography variant="body1" gutterBottom>
        Keeps track of players&apos; kill/death ratios.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/FoodSpoilage">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Mailboxes
      </Typography>
      <Typography variant="body1" gutterBottom>
        Allows players and plugins to send persistent messages to players.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Mailboxes">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Medieval Cookery
      </Typography>
      <Typography variant="body1" gutterBottom>
        Allows server owners to add cooking recipes for an enhanced roleplay experience.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Medieval-Cookery">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Medieval Economy
      </Typography>
      <Typography variant="body1" gutterBottom>
        Provides a virtual coinpurse and a physical currency item for the purpose of simulating an economy.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Medieval-Economy">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Medieval Factions
      </Typography>
      <Typography variant="body1" gutterBottom>
        Allows players to organize themselves into feudal, diplomatic, lawful groups akin to nations.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Medieval-Factions">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Medieval Roleplay Engine
      </Typography>
      <Typography variant="body1" gutterBottom>
        Facilitates roleplay between players.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Medieval-Roleplay-Engine">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        MiniFactions
      </Typography>
      <Typography variant="body1" gutterBottom>
        Aims to introduce factions into the game in a simple, easy to use, expandable way.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/MiniFactions">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        More Recipes
      </Typography>
      <Typography variant="body1" gutterBottom>
        Adds static recipes for items that are not craftable in vanilla.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/More-Recipes">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Nether Access Controller
      </Typography>
      <Typography variant="body1" gutterBottom>
        Allows operators to control who has access to the nether.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Nether-Access-Controller">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        NoMoreCreepers
      </Typography>
      <Typography variant="body1" gutterBottom>
        Prevents creepers from spawning.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/NoMoreCreepers">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        PlayerLore
      </Typography>
      <Typography variant="body1" gutterBottom>
        Aims to allow players to add lore to their items in Minecraft.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/PlayerLore">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        SimpleSkills
      </Typography>
      <Typography variant="body1" gutterBottom>
        Introduces skills into the game in a systematic, easy to use, expandable way.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/SimpleSkills">GitHub</Button>
    </Box>

    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Wild Pets
      </Typography>
      <Typography variant="body1" gutterBottom>
        Allows players to tame any entity and keep them as a pet.
      </Typography>
      <Button variant="contained" href="https://github.com/Dans-Plugins/Wild-Pets">GitHub</Button>
    </Box>
  </>
)

export default Home
