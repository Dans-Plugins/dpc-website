import { Box, Container, Grid, Typography, Theme } from '@mui/material'
import type { NextPage } from 'next'
import TopBar from '../components/TopBar'
import Blurb from '../components/Blurb'
import PluginCard from '../components/PluginCard'
import React from 'react';
import BottomBar from '../components/BottomBar'

const sectionHeaderStyle = {
  fontWeight: 'bold',
  color: 'primary.main',
  borderBottom: '2px solid',
  borderColor: 'primary.main',
  paddingBottom: 1,
  marginBottom: 3
}

const gridContainerStyle = {
  spacing: { xs: 2, md: 3 },
  pb: 4
}

const cardWrapperStyle = {
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)'
  }
}

const SectionDivider: React.FC = () => (
    <Box
        sx={{
          height: '2px',
          background: (theme: Theme) => `linear-gradient(to right, 
        ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0)' : 'rgba(0,0,0,0)'}, 
        ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}, 
        ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0)' : 'rgba(0,0,0,0)'}
      )`,
          my: 4
        }}
    />
)

// pull version from package.json
const version = require('../package.json').version

// declare react component for each plugin A-Z
const ActivityTracker: React.FC = () => (
  <PluginCard
    title="Activity Tracker"
    description="Tracks the activity of players."
    githubLink="https://github.com/Dans-Plugins/Activity-Tracker"
    spigotmcLink="https://www.spigotmc.org/resources/activity-tracker.96724/"
    bStatsId="12983"
  />
)

const AlternateAccountFinder: React.FC = () => (
  <PluginCard
    title="Alternate Account Finder"
    description="Identifies accounts that have used the same IP address."
    githubLink="https://github.com/Dans-Plugins/AlternateAccountFinder"
    spigotmcLink="https://www.spigotmc.org/resources/alternate-account-finder.83290/"
    bStatsId="9834"
  />
)

const Currencies: React.FC = () => (
  <PluginCard
    title="Currencies"
    description="An expansion for Medieval Factions that allows faction owners to create and mint local currencies."
    githubLink="https://github.com/Dans-Plugins/Currencies"
    spigotmcLink="https://www.spigotmc.org/resources/currencies.96381/"
    bStatsId="12810"
  />
)

const DansEssentials: React.FC = () => (
  <PluginCard
    title="Dan's Essentials"
    description="Provides miscellaneous commands."
    githubLink="https://github.com/Dans-Plugins/Dans-Essentials"
    spigotmcLink="https://www.spigotmc.org/resources/dans-essentials.80513/"
    bStatsId="9527"
  />
)

const DansSetHome: React.FC = () => (
  <PluginCard
    title="Dan's Set Home"
    description="Allows players to set and teleport to home locations."
    githubLink="https://github.com/Dans-Plugins/Dans-Set-Home"
    spigotmcLink="https://www.spigotmc.org/resources/dans-set-home.79986/"
    bStatsId="12126"
  />
)

const DansSpawnSystem: React.FC = () => (
  <PluginCard
    title="Dan's Spawn System"
    description="Allows players to use signs to select a custom spawn in their world."
    githubLink="https://github.com/Dans-Plugins/Dans-Spawn-System"
    spigotmcLink="https://www.spigotmc.org/resources/dans-spawn-system.82697/"
    bStatsId="12161"
  />
)

const Democracy: React.FC = () => (
  <PluginCard
    title="Democracy"
    description="An expansion for MF that aims to allow nations to be democratic."
    githubLink="https://github.com/Dans-Plugins/Democracy"
    // no spigotmc link yet
    // no bStats ID yet
  />
)

const Fiefs: React.FC = () => (
  <PluginCard
    title="Fiefs"
    description="Allows players to create fiefs and manage them."
    githubLink="https://github.com/Dans-Plugins/Fiefs"
    spigotmcLink="https://www.spigotmc.org/resources/fiefs-early-access.98559/"
    bStatsId="12743"
  />
)

const FoodSpoilage: React.FC = () => (
  <PluginCard
    title="FoodSpoilage"
    description="Makes food items turn into rotten flesh after a certain period of time."
    githubLink="https://github.com/Dans-Plugins/FoodSpoilage"
    spigotmcLink="https://www.spigotmc.org/resources/food-spoilage.81507/"
    bStatsId="8992"
  />
)

const KDRTracker: React.FC = () => (
  <PluginCard
    title="KDRTracker"
    description="Keeps track of players' kill/death ratios."
    githubLink="https://github.com/Dans-Plugins/KDRTracker"
    // no spigotmc link yet
    // no bStats ID yet
  />
)

const Mailboxes: React.FC = () => (
  <PluginCard
    title="Mailboxes"
    description="Allows players and plugins to send persistent messages to players."
    githubLink="https://github.com/Dans-Plugins/Mailboxes"
    spigotmcLink="https://www.spigotmc.org/resources/mailboxes.96611/"
    bStatsId="12902"
  />
)

const MedievalCookery: React.FC = () => (
  <PluginCard
    title="Medieval Cookery"
    description="Allows server owners to add cooking recipes for an enhanced roleplay experience."
    githubLink="https://github.com/Dans-Plugins/Medieval-Cookery"
    // no spigotmc link yet
    // no bStats ID yet
  />
)

const MedievalEconomy: React.FC = () => (
  <PluginCard
    title="Medieval Economy"
    description="Provides a virtual coinpurse and a physical currency item for the purpose of simulating an economy."
    githubLink="https://github.com/Dans-Plugins/Medieval-Economy"
    spigotmcLink="https://www.spigotmc.org/resources/medieval-economy.81836/"
    bStatsId="8998"
  />
)

const MedievalFactions: React.FC = () => (
  <PluginCard
    title="Medieval Factions"
    description="Allows players to organize themselves into feudal, diplomatic, lawful groups akin to nations."
    githubLink="https://github.com/Dans-Plugins/Medieval-Factions"
    spigotmcLink="https://www.spigotmc.org/resources/medieval-factions.79941/"
    bStatsId="8929"
  />
)

const MedievalRoleplayEngine: React.FC = () => (
  <PluginCard
    title="Medieval Roleplay Engine"
    description="Facilitates roleplay between players."
    githubLink="https://github.com/Dans-Plugins/Medieval-Roleplay-Engine"
    spigotmcLink="https://www.spigotmc.org/resources/medieval-roleplay-engine.79993/"
    bStatsId="8996"
  />
)

const MoreRecipes: React.FC = () => (
  <PluginCard
    title="More Recipes"
    description="Adds static recipes for items that are not craftable in vanilla."
    githubLink="https://github.com/Dans-Plugins/More-Recipes"
    spigotmcLink="https://www.spigotmc.org/resources/more-recipes.81832/"
    bStatsId="12140"
  />
)

const NetherAccessController: React.FC = () => (
  <PluginCard
    title="Nether Access Controller"
    description="Allows operators to control who has access to the nether."
    githubLink="https://github.com/Dans-Plugins/Nether-Access-Controller"
    spigotmcLink="https://www.spigotmc.org/resources/nether-access-controller.95905/"
    bStatsId="12673"
  />
)

const NoMoreCreepers: React.FC = () => (
  <PluginCard
    title="NoMoreCreepers"
    description="Prevents creepers from spawning."
    githubLink="https://github.com/Dans-Plugins/NoMoreCreepers"
    spigotmcLink="https://www.spigotmc.org/resources/nomorecreepers.97946/"
    bStatsId="13432"
  />
)

const PlayerLore: React.FC = () => (
  <PluginCard
    title="PlayerLore"
    description="Aims to allow players to add lore to their items in Minecraft."
    githubLink="https://github.com/Dans-Plugins/PlayerLore"
    spigotmcLink="https://www.spigotmc.org/resources/playerlore.98602/"
    bStatsId="17025"
  />
)

const SimpleSkills: React.FC = () => (
  <PluginCard
    title="SimpleSkills"
    description="Introduces skills into the game in a systematic, easy to use, expandable way."
    githubLink="https://github.com/Dans-Plugins/SimpleSkills"
    spigotmcLink="https://www.spigotmc.org/resources/simpleskills.98039/"
    bStatsId="13470"
  />
)

const WildPets: React.FC = () => (
  <PluginCard
    title="Wild Pets"
    description="Allows players to tame any entity and keep them as a pet."
    githubLink="https://github.com/Dans-Plugins/Wild-Pets"
    spigotmcLink="https://www.spigotmc.org/resources/wild-pets.95800/"
    bStatsId="12332"
  />
)

// declare react component for Most Popular Plugins section
const MostPopularPlugins: React.FC = () => (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <Typography variant="h3" component="div" gutterBottom sx={sectionHeaderStyle}>
        Most Popular Plugins
      </Typography>
      <Grid container {...gridContainerStyle}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <MedievalFactions />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <MedievalRoleplayEngine />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <FoodSpoilage />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <WildPets />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <Currencies />
        </Grid>
      </Grid>
    </Box>
)

// declare react component for All Plugins section
const AllPlugins: React.FC = () => (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <Typography variant="h3" component="div" gutterBottom sx={sectionHeaderStyle}>
        All Plugins
      </Typography>
      <Grid container {...gridContainerStyle}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <ActivityTracker />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <AlternateAccountFinder />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <Currencies />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <DansEssentials />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <DansSetHome />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <DansSpawnSystem />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <Democracy />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <Fiefs />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <FoodSpoilage />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <KDRTracker />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <Mailboxes />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <MedievalCookery />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <MedievalEconomy />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <MedievalFactions />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <MedievalRoleplayEngine />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <MoreRecipes />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <NetherAccessController />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <NoMoreCreepers />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <PlayerLore />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <SimpleSkills />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={cardWrapperStyle}>
          <WildPets />
        </Grid>
      </Grid>
    </Box>
)

const Home: NextPage = () => {
  const pageStyle = {
    backgroundColor: (theme: Theme) =>
        theme.palette.mode === 'dark' ? 'background.default' : '#f5f5f5',
    backgroundImage: (theme: Theme) =>
        theme.palette.mode === 'dark'
            ? 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)'
            : 'linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    minHeight: '100vh'
  }

  return (
      <Box sx={{ flexGrow: 1, ...pageStyle }}>
        <TopBar />
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Blurb />
          <SectionDivider />
          <MostPopularPlugins />
          <SectionDivider />
          <AllPlugins />
        </Container>
        <BottomBar version={version}/>
      </Box>
  )
}

export default Home