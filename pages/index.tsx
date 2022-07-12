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

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/at.png" alt="activity tracker icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Activity Tracker</Typography>
        <Typography variant="body2" color="text.secondary">Tracks the activity of players.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/Activity-Tracker">GitHub</Button>
      </CardActions>
    </Card>
    
    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/aaf.png" alt="alternate account finder icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Alternate Account Finder</Typography>
        <Typography variant="body2" color="text.secondary">Identifies accounts that have used the same IP address.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/AlternateAccountFinder">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/cr.png" alt="conquest recipes icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Conquest Recipes</Typography>
        <Typography variant="body2" color="text.secondary">Adds recipes for the many item textures that the Conquest Resource Pack adds to the game.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/Conquest-Recipes">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/c.png" alt="currencies icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Currencies</Typography>
        <Typography variant="body2" color="text.secondary">An expansion for Medieval Factions that allows faction owners to create and mint local currencies.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/Currencies">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/de.png" alt="dan's essentials icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Dan's Essentials</Typography>
        <Typography variant="body2" color="text.secondary">Provides miscellaneous commands.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/Dans-Essentials">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/dpm.png" alt="dan's plugin manager icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Dan's Plugin Manager</Typography>
        <Typography variant="body2" color="text.secondary">Allows operators to easily download the community's plugins in-game or through a server console.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/Dans-Plugin-Manager">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/dsh.png" alt="dan's set home icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Dan's Set Home</Typography>
        <Typography variant="body2" color="text.secondary">Allows players to set and teleport to home locations.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/Dans-Set-Home">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/dss.png" alt="dan's spawn system icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Dan's Spawn System</Typography>
        <Typography variant="body2" color="text.secondary">Allows players to use signs to select a custom spawn in their world.</Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Democracy</Typography>
        <Typography variant="body2" color="text.secondary">An expansion for MF that aims to allow nations to be democratic.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/Democracy">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/el.png" alt="easy links icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Easy Links</Typography>
        <Typography variant="body2" color="text.secondary">Allows players to view relevant links with simple commands.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/Easy-Links">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/f.png" alt="fiefs icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Fiefs</Typography>
        <Typography variant="body2" color="text.secondary">An expansion for MF that allows faction members to create fiefs. Fiefs function as sub-factions, essentially.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/Fiefs">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/fs.png" alt="food spoilage icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">FoodSpoilage</Typography>
        <Typography variant="body2" color="text.secondary">Makes food items turn into rotten flesh after a certain period of time.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/FoodSpoilage">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardContent>
      <Typography>(image coming soon)</Typography>
        <Typography gutterBottom variant="h5" component="div">KDRTracker</Typography>
        <Typography variant="body2" color="text.secondary">Intended to keep track of players' kill/death ratios. </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/KDRTracker">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardContent>
      <CardMedia component="img" image="/icons/m.png" alt="mailboxes icon" height="250" width="250"/>
        <Typography gutterBottom variant="h5" component="div">Mailboxes</Typography>
        <Typography variant="body2" color="text.secondary">Allows players and plugins to send persistent messages to players.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/Mailboxes">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardContent>
      <Typography>(image coming soon)</Typography>
        <Typography gutterBottom variant="h5" component="div">Medieval Cookery</Typography>
        <Typography variant="body2" color="text.secondary">Allows server owners to add cooking recipes for an enhanced roleplay experience. </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/Medieval-Cookery">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/me.png" alt="medieval economy icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Medieval Economy</Typography>
        <Typography variant="body2" color="text.secondary">Provides a virtual coinpurse and a physical currency item for the purpose of simulating an economy.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/Medieval-Economy">GitHub</Button>
      </CardActions>
    </Card>
    
    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/mf.png" alt="medieval factions icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Medieval Factions</Typography>
        <Typography variant="body2" color="text.secondary">Allows players to organize themselves into feudal, diplomatic, lawful groups akin to nations.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/Medieval-Factions">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/mre.png" alt="medieval roleplay engine icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Medieval Roleplay Engine</Typography>
        <Typography variant="body2" color="text.secondary">Facilitates roleplay between players.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/Medieval-Roleplay-Engine">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardContent>
      <Typography>(image coming soon)</Typography>
        <Typography gutterBottom variant="h5" component="div">MiniFactions</Typography>
        <Typography variant="body2" color="text.secondary">Aims to introduce factions into the game in a simple, easy to use, expandable way.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/MiniFactions">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/mr.png" alt="more recipes icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">More Recipes</Typography>
        <Typography variant="body2" color="text.secondary">Adds static recipes for items that are not craftable in vanilla.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/More-Recipes">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/nac.png" alt="nether access controller icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Nether Access Controller</Typography>
        <Typography variant="body2" color="text.secondary">Allows operators to control who has access to the nether.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/Nether-Access-Controller">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/nmc.png" alt="no more creepers icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">NoMoreCreepers</Typography>
        <Typography variant="body2" color="text.secondary">Prevents creepers from spawning.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/NoMoreCreepers">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/pl.png" alt="player lore icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">PlayerLore</Typography>
        <Typography variant="body2" color="text.secondary">Aims to allow players to add lore to their items in Minecraft.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/PlayerLore">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/ss.png" alt="simple skills icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">SimpleSkills</Typography>
        <Typography variant="body2" color="text.secondary">Introduces skills into the game in a systematic, easy to use, expandable way.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/SimpleSkills">GitHub</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250, m: 5 }}>
      <CardMedia component="img" image="/icons/wp.png" alt="wild pets icon" height="250" width="250"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Wild Pets</Typography>
        <Typography variant="body2" color="text.secondary">Allows players to tame any entity and keep them as a pet.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/Dans-Plugins/Wild-Pets">GitHub</Button>
      </CardActions>
    </Card>
  </>
)

export default Home
