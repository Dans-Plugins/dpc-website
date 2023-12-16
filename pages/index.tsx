import { Box, Container, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import TopBar from '../components/TopBar'
import Blurb from '../components/Blurb'
import PluginCard from '../components/PluginCard'
import React from 'react';

// declare react component for each plugin A-Z
const ActivityTracker: React.FC = () => (
  <PluginCard
    title="Activity Tracker"
    description="Tracks the activity of players."
    githubLink="https://github.com/Dans-Plugins/Activity-Tracker"
  />
)

const AlternateAccountFinder: React.FC = () => (
  <PluginCard
    title="Alternate Account Finder"
    description="Identifies accounts that have used the same IP address."
    githubLink="https://github.com/Dans-Plugins/AlternateAccountFinder"
  />
)

const ConquestRecipes: React.FC = () => (
  <PluginCard
    title="Conquest Recipes"
    description="Adds recipes for the many item textures that the Conquest Resource Pack adds to the game."
    githubLink="https://github.com/Dans-Plugins/Conquest-Recipes"
  />
)

const Currencies: React.FC = () => (
  <PluginCard
    title="Currencies"
    description="An expansion for Medieval Factions that allows faction owners to create and mint local currencies."
    githubLink="https://github.com/Dans-Plugins/Currencies"
  />
)

const DansEssentials: React.FC = () => (
  <PluginCard
    title="Dan's Essentials"
    description="Provides miscellaneous commands."
    githubLink="https://github.com/Dans-Plugins/Dans-Essentials"
  />
)

const DansPluginManager: React.FC = () => (
  <PluginCard
    title="Dan's Plugin Manager"
    description="Allows operators to easily download the community's plugins in-game or through a server console."
    githubLink="https://github.com/Dans-Plugins/Dans-Plugin-Manager"
  />
)

const DansSetHome: React.FC = () => (
  <PluginCard
    title="Dan's Set Home"
    description="Allows players to set and teleport to home locations."
    githubLink="https://github.com/Dans-Plugins/Dans-Set-Home"
  />
)

const DansSpawnSystem: React.FC = () => (
  <PluginCard
    title="Dan's Spawn System"
    description="Allows players to use signs to select a custom spawn in their world."
    githubLink="https://github.com/Dans-Plugins/Dans-Spawn-System"
  />
)

const Democracy: React.FC = () => (
  <PluginCard
    title="Democracy"
    description="An expansion for MF that aims to allow nations to be democratic."
    githubLink="https://github.com/Dans-Plugins/Democracy"
  />
)

const EasyLinks: React.FC = () => (
  <PluginCard
    title="Easy Links"
    description="Allows players to view relevant links with simple commands."
    githubLink="https://github.com/Dans-Plugins/Easy-Links"
  />
)

const Fiefs: React.FC = () => (
  <PluginCard
    title="Fiefs"
    description="Allows players to create fiefs and manage them."
    githubLink="https://github.com/Dans-Plugins/Fiefs"
  />
)

const FoodSpoilage: React.FC = () => (
  <PluginCard
    title="FoodSpoilage"
    description="Makes food items turn into rotten flesh after a certain period of time."
    githubLink="https://github.com/Dans-Plugins/FoodSpoilage"
  />
)

const KDRTracker: React.FC = () => (
  <PluginCard
    title="KDRTracker"
    description="Keeps track of players' kill/death ratios."
    githubLink="https://github.com/Dans-Plugins/KDRTracker"
  />
)

const Mailboxes: React.FC = () => (
  <PluginCard
    title="Mailboxes"
    description="Allows players and plugins to send persistent messages to players."
    githubLink="https://github.com/Dans-Plugins/Mailboxes"
  />
)

const MedievalCookery: React.FC = () => (
  <PluginCard
    title="Medieval Cookery"
    description="Allows server owners to add cooking recipes for an enhanced roleplay experience."
    githubLink="https://github.com/Dans-Plugins/Medieval-Cookery"
  />
)

const MedievalEconomy: React.FC = () => (
  <PluginCard
    title="Medieval Economy"
    description="Provides a virtual coinpurse and a physical currency item for the purpose of simulating an economy."
    githubLink="https://github.com/Dans-Plugins/Medieval-Economy"
  />
)

const MedievalFactions: React.FC = () => (
  <PluginCard
    title="Medieval Factions"
    description="Allows players to organize themselves into feudal, diplomatic, lawful groups akin to nations."
    githubLink="https://github.com/Dans-Plugins/Medieval-Factions"
  />
)

const MedievalRoleplayEngine: React.FC = () => (
  <PluginCard
    title="Medieval Roleplay Engine"
    description="Facilitates roleplay between players."
    githubLink="https://github.com/Dans-Plugins/Medieval-Roleplay-Engine"
  />
)

const MiniFactions: React.FC = () => (
  <PluginCard
    title="MiniFactions"
    description="Aims to introduce factions into the game in a simple, easy to use, expandable way."
    githubLink="https://github.com/Dans-Plugins/MiniFactions"
  />
)

const MoreRecipes: React.FC = () => (
  <PluginCard
    title="More Recipes"
    description="Adds static recipes for items that are not craftable in vanilla."
    githubLink="https://github.com/Dans-Plugins/More-Recipes"
  />
)

const NetherAccessController: React.FC = () => (
  <PluginCard
    title="Nether Access Controller"
    description="Allows operators to control who has access to the nether."
    githubLink="https://github.com/Dans-Plugins/Nether-Access-Controller"
  />
)

const NoMoreCreepers: React.FC = () => (
  <PluginCard
    title="NoMoreCreepers"
    description="Prevents creepers from spawning."
    githubLink="https://github.com/Dans-Plugins/NoMoreCreepers"
  />
)

const PlayerLore: React.FC = () => (
  <PluginCard
    title="PlayerLore"
    description="Aims to allow players to add lore to their items in Minecraft."
    githubLink="https://github.com/Dans-Plugins/PlayerLore"
  />
)

const SimpleSkills: React.FC = () => (
  <PluginCard
    title="SimpleSkills"
    description="Introduces skills into the game in a systematic, easy to use, expandable way."
    githubLink="https://github.com/Dans-Plugins/SimpleSkills"
  />
)

const WildPets: React.FC = () => (
  <PluginCard
    title="Wild Pets"
    description="Allows players to tame any entity and keep them as a pet."
    githubLink="https://github.com/Dans-Plugins/Wild-Pets"
  />
)

// declare react component for Most Popular Plugins section
const MostPopularPlugins: React.FC = () => (
  <Box sx={{
    flexGrow: 1,
    marginBottom: 2
  }}>
    <Typography variant="h3" component="div" gutterBottom>
      Most Popular Plugins
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <MedievalFactions />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <MedievalRoleplayEngine />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <FoodSpoilage />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <WildPets />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Currencies />
      </Grid>
    </Grid>
  </Box>
)

// declare react component for All Plugins section
const AllPlugins: React.FC = () => (
  <Box sx={{
    flexGrow: 1,
    marginBottom: 2
  }}>
    <Typography variant="h3" component="div" gutterBottom>
      All Plugins
    </Typography>

    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}> 
        <ActivityTracker />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <AlternateAccountFinder />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <ConquestRecipes />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Currencies />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <DansEssentials />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <DansPluginManager />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <DansSetHome />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <DansSpawnSystem />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Democracy />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <EasyLinks />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Fiefs />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <FoodSpoilage />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <KDRTracker />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Mailboxes />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <MedievalCookery />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <MedievalEconomy />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <MedievalFactions />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <MedievalRoleplayEngine />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <MiniFactions />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <MoreRecipes />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <NetherAccessController />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <NoMoreCreepers />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <PlayerLore />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <SimpleSkills />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <WildPets />
      </Grid>
    </Grid>
  </Box>
)

const Home: NextPage = () => (
    <Box sx={{ flexGrow: 1 }}>
      <TopBar />
      <Container maxWidth="xl">
        <Blurb />
        <br />
        <MostPopularPlugins />
        <br />
        <AllPlugins />
      </Container>
    </Box>
)

export default Home