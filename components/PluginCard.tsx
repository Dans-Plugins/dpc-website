import {Button, Card, CardActions, CardContent, Link, Typography} from "@mui/material"
import React from 'react';

interface PluginCardProps {
    title: string
    description: string
    githubLink: string
    spigotmcLink?: string
    bStatsId?: string
}

async function getServerCount(bStatsId: string) {
    const functionName = 'getServerCount()';
    const response = await fetch('https://bstats.org/api/v1/plugins/' + bStatsId + '/charts/servers/data?maxElements=1');
    const data = await response.json();
    // verify we have a list
    if (!Array.isArray(data)) {
        console.log(functionName + ' returned data that is not an array')

        return
    }
    // verify that the list has at least one element
    if (data.length < 1) {
        console.log(functionName + ' returned data that has less than one element')
        return
    }
    const firstElement = data[0];
    // verify that the first element is an array
    if (!Array.isArray(firstElement)) {
        console.log(functionName + ' returned data that has a first element that is not an array')
        return
    }
    // verify that the first element has at least 2 element
    if (firstElement.length < 2) {
        console.log(functionName + ' returned data that has a first element that has less than 2 elements')
        return
    }
    const secondElementOfFirstElement = firstElement[1];
    // verify that the second element of the first element is a number
    if (typeof secondElementOfFirstElement !== 'number') {
        console.log(functionName + ' returned data that has a first element that has a second element that is not a number')
        return
    }
    return secondElementOfFirstElement
}

const PluginCard: React.FC<PluginCardProps> = ({title, description, githubLink, spigotmcLink, bStatsId}) => {
    const [serverCount, setServerCount] = React.useState<number | undefined>(undefined);

    React.useEffect(() => {
        if (!bStatsId) {
            return
        }
        const fetchServerCount = async () => {
            const serverCount = await getServerCount(bStatsId);
            setServerCount(serverCount)
        };

        fetchServerCount();
    }, []);
    return (
        <Card
            sx={{
                height: '18rem',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardContent
                sx={{
                    flexGrow: 1
                }}
            >
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                {
                    // if serverCount is defined and greater than 0, display it
                    serverCount && serverCount > 0 ? <Typography variant="body2" color="text.secondary">
                        <br/>
                        {serverCount} servers running
                    </Typography> : null
                }
            </CardContent>
            <CardActions
                sx={{
                    flexGrow: 0
                }}
            >
                <Button variant="contained" size="small" component={Link} href={githubLink}>GitHub</Button>
                {
                    spigotmcLink ? <Button variant="contained" size="small" component={Link}
                                           href={spigotmcLink}>SpigotMC</Button> : null
                }
            </CardActions>
        </Card>
    )
}

export default PluginCard;