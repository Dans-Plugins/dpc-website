import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Toolbar, Typography } from '@mui/material'
import type { NextPage } from 'next'

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

// declare react component for blurb
const Blurb: React.FC = () => (
  <Box sx={{ flexGrow: 1, p: 2 }}>
    <Typography variant="body1" gutterBottom>
      Welcome to the Dan&apos;s Plugins Community website! This website is a hub for all of the plugins that are maintained by the community. If you&apos;d like to contribute, please visit the relevant GitHub repository.
    </Typography>
  </Box>
)

// declare react component for generic plugin box with title, description, and github link props
interface PluginBoxProps {
  title: string
  description: string
  githubLink: string
}
const PluginBox: React.FC<PluginBoxProps> = ({ title, description, githubLink }) => (
  <Box sx={{ flexGrow: 1, p: 2 }}>
    <Typography variant="h5" component="div" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1" gutterBottom>
      {description}
    </Typography>
    <Button variant="contained" href={githubLink}>GitHub</Button>
  </Box>
)

// declare react component for each plugin A-Z
const ActivityTracker: React.FC = () => (
  <PluginBox
    title="Activity Tracker"
    description="Tracks the activity of players."
    githubLink="https://github.com/Dans-Plugins/Activity-Tracker"
  />
)

const AlternateAccountFinder: React.FC = () => (
  <PluginBox
    title="Alternate Account Finder"
    description="Identifies accounts that have used the same IP address."
    githubLink="https://github.com/Dans-Plugins/AlternateAccountFinder"
  />
)

const ConquestRecipes: React.FC = () => (
  <PluginBox
    title="Conquest Recipes"
    description="Adds recipes for the many item textures that the Conquest Resource Pack adds to the game."
    githubLink="https://github.com/Dans-Plugins/Conquest-Recipes"
  />
)

const Currencies: React.FC = () => (
  <PluginBox
    title="Currencies"
    description="An expansion for Medieval Factions that allows faction owners to create and mint local currencies."
    githubLink="https://github.com/Dans-Plugins/Currencies"
  />
)

const DansEssentials: React.FC = () => (
  <PluginBox
    title="Dan's Essentials"
    description="Provides miscellaneous commands."
    githubLink="https://github.com/Dans-Plugins/Dans-Essentials"
  />
)

const DansPluginManager: React.FC = () => (
  <PluginBox
    title="Dan's Plugin Manager"
    description="Allows operators to easily download the community's plugins in-game or through a server console."
    githubLink="https://github.com/Dans-Plugins/Dans-Plugin-Manager"
  />
)

const DansSetHome: React.FC = () => (
  <PluginBox
    title="Dan's Set Home"
    description="Allows players to set and teleport to home locations."
    githubLink="https://github.com/Dans-Plugins/Dans-Set-Home"
  />
)

const DansSpawnSystem: React.FC = () => (
  <PluginBox
    title="Dan's Spawn System"
    description="Allows players to use signs to select a custom spawn in their world."
    githubLink="https://github.com/Dans-Plugins/Dans-Spawn-System"
  />
)

const Democracy: React.FC = () => (
  <PluginBox
    title="Democracy"
    description="An expansion for MF that aims to allow nations to be democratic."
    githubLink="https://github.com/Dans-Plugins/Democracy"
  />
)

const EasyLinks: React.FC = () => (
  <PluginBox
    title="Easy Links"
    description="Allows players to view relevant links with simple commands."
    githubLink="https://github.com/Dans-Plugins/Easy-Links"
  />
)

const Fiefs: React.FC = () => (
  <PluginBox
    title="Fiefs"
    description="Allows players to create fiefs and manage them."
    githubLink="https://github.com/Dans-Plugins/Fiefs"
  />
)

const FoodSpoilage: React.FC = () => (
  <PluginBox
    title="FoodSpoilage"
    description="Makes food items turn into rotten flesh after a certain period of time."
    githubLink="https://github.com/Dans-Plugins/FoodSpoilage"
  />
)

const KDRTracker: React.FC = () => (
  <PluginBox
    title="KDRTracker"
    description="Keeps track of players' kill/death ratios."
    githubLink="https://github.com/Dans-Plugins/KDRTracker"
  />
)

const Mailboxes: React.FC = () => (
  <PluginBox
    title="Mailboxes"
    description="Allows players and plugins to send persistent messages to players."
    githubLink="https://github.com/Dans-Plugins/Mailboxes"
  />
)

const MedievalCookery: React.FC = () => (
  <PluginBox
    title="Medieval Cookery"
    description="Allows server owners to add cooking recipes for an enhanced roleplay experience."
    githubLink="https://github.com/Dans-Plugins/Medieval-Cookery"
  />
)

const MedievalEconomy: React.FC = () => (
  <PluginBox
    title="Medieval Economy"
    description="Provides a virtual coinpurse and a physical currency item for the purpose of simulating an economy."
    githubLink="https://github.com/Dans-Plugins/Medieval-Economy"
  />
)

const MedievalFactions: React.FC = () => (
  <PluginBox
    title="Medieval Factions"
    description="Allows players to organize themselves into feudal, diplomatic, lawful groups akin to nations."
    githubLink="https://github.com/Dans-Plugins/Medieval-Factions"
  />
)

const MedievalRoleplayEngine: React.FC = () => (
  <PluginBox
    title="Medieval Roleplay Engine"
    description="Facilitates roleplay between players."
    githubLink="https://github.com/Dans-Plugins/Medieval-Roleplay-Engine"
  />
)

const MiniFactions: React.FC = () => (
  <PluginBox
    title="MiniFactions"
    description="Aims to introduce factions into the game in a simple, easy to use, expandable way."
    githubLink="https://github.com/Dans-Plugins/MiniFactions"
  />
)

const MoreRecipes: React.FC = () => (
  <PluginBox
    title="More Recipes"
    description="Adds static recipes for items that are not craftable in vanilla."
    githubLink="https://github.com/Dans-Plugins/More-Recipes"
  />
)

const NetherAccessController: React.FC = () => (
  <PluginBox
    title="Nether Access Controller"
    description="Allows operators to control who has access to the nether."
    githubLink="https://github.com/Dans-Plugins/Nether-Access-Controller"
  />
)

const NoMoreCreepers: React.FC = () => (
  <PluginBox
    title="NoMoreCreepers"
    description="Prevents creepers from spawning."
    githubLink="https://github.com/Dans-Plugins/NoMoreCreepers"
  />
)

const PlayerLore: React.FC = () => (
  <PluginBox
    title="PlayerLore"
    description="Aims to allow players to add lore to their items in Minecraft."
    githubLink="https://github.com/Dans-Plugins/PlayerLore"
  />
)

const SimpleSkills: React.FC = () => (
  <PluginBox
    title="SimpleSkills"
    description="Introduces skills into the game in a systematic, easy to use, expandable way."
    githubLink="https://github.com/Dans-Plugins/SimpleSkills"
  />
)

const WildPets: React.FC = () => (
  <PluginBox
    title="Wild Pets"
    description="Allows players to tame any entity and keep them as a pet."
    githubLink="https://github.com/Dans-Plugins/Wild-Pets"
  />
)

// declare react component for Most Popular Plugins section
const MostPopularPlugins: React.FC = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Typography variant="h3" component="div" gutterBottom>
      Most Popular Plugins
    </Typography>

    <MedievalFactions />
    <MedievalRoleplayEngine />
    <FoodSpoilage />
    <WildPets />
    <Currencies />
  </Box>
)

// declare react component for All Plugins section
const AllPlugins: React.FC = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Typography variant="h3" component="div" gutterBottom>
      All Plugins
    </Typography>

    <ActivityTracker />
    <AlternateAccountFinder />
    <ConquestRecipes />
    <Currencies />
    <DansEssentials />
    <DansPluginManager />
    <DansSetHome />
    <DansSpawnSystem />
    <Democracy />
    <EasyLinks />
    <Fiefs />
    <FoodSpoilage />
    <KDRTracker />
    <Mailboxes />
    <MedievalCookery />
    <MedievalEconomy />
    <MedievalFactions />
    <MedievalRoleplayEngine />
    <MiniFactions />
    <MoreRecipes />
    <NetherAccessController />
    <NoMoreCreepers />
    <PlayerLore />
    <SimpleSkills />
    <WildPets />
  </Box>
)

const Home: NextPage = () => (
  <Box sx={{ flexGrow: 1 }}>
    
    <TopBar />
    <Blurb />
    <br />
    <MostPopularPlugins />
    <br />
    <AllPlugins />
  </Box>
)

export default Home