import {Box, Container, Grid, Typography} from '@mui/material'
import type {NextPage} from 'next'
import TopBar from '../components/TopBar'
import Blurb from '../components/Blurb'
import PluginCard from '../components/PluginCard'
import React from 'react';
import BottomBar from '../components/BottomBar'

interface PluginData {
    mostPopular: string[];
    plugins: Plugin[];
}

// Add type assertion for your imported data
const pluginData = require('./data/plugins.json') as PluginData;

// Import styles
import {
    sectionHeaderStyle,
    gridContainerStyle,
    sectionDividerStyle,
    pageStyle,
    pluginsBoxStyle,
    gridItemStyle
} from '../styles/styles';

const SectionDivider: React.FC = () => (
    <Box sx={(theme) => sectionDividerStyle(theme)}/>
);

// pull version from package.json
const version = require('../package.json').version

interface Plugin {
    id: string;
    title: string;
    description: string;
    githubLink: string;
    spigotmcLink?: string;
    bStatsId?: string;
}

const PluginSection: React.FC<{ plugins: Plugin[] }> = ({ plugins }) => (
    <Grid container {...gridContainerStyle}>
        {plugins.map((plugin) => (
            <Grid item {...gridItemStyle} key={plugin.id}>
                <PluginCard
                    title={plugin.title}
                    description={plugin.description}
                    githubLink={plugin.githubLink}
                    spigotmcLink={plugin.spigotmcLink}
                    bStatsId={plugin.bStatsId}
                />
            </Grid>
        ))}
    </Grid>
)

const MostPopularPlugins: React.FC = () => {
    const popularPlugins = pluginData.mostPopular
        .map((id: string) => pluginData.plugins.find(p => p.id === id))
        .filter((plugin): plugin is NonNullable<typeof plugin> => plugin !== undefined);

    return (
        <Box sx={pluginsBoxStyle}>
            <Typography variant="h3" component="div" gutterBottom sx={sectionHeaderStyle}>
                Most Popular Plugins
            </Typography>
            <PluginSection plugins={popularPlugins} />
        </Box>
    )
}

const AllPlugins: React.FC = () => (
    <Box sx={pluginsBoxStyle}>
        <Typography variant="h3" component="div" gutterBottom sx={sectionHeaderStyle}>
            All Plugins
        </Typography>
        <PluginSection plugins={pluginData.plugins} />
    </Box>
)

const Home: NextPage = () => {
    return (
        <Box sx={pageStyle}>
            <TopBar/>
            <Container maxWidth="xl" sx={{py: 4}}>
                <Blurb/>
                <SectionDivider/>
                <MostPopularPlugins/>
                <SectionDivider/>
                <AllPlugins/>
            </Container>
            <BottomBar version={version}/>
        </Box>
    );
};

export default Home