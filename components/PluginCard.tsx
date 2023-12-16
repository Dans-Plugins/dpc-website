import { Button, Card, CardActions, CardContent, Link, Typography } from "@mui/material"
import React from 'react';

interface PluginCardProps {
    title: string
    description: string
    githubLink: string
    spigotmcLink?: string
}

const PluginCard: React.FC<PluginCardProps> = ({ title, description, githubLink, spigotmcLink }) => (
  <Card
    sx={{
      height: '15rem',
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
    </CardContent>
    <CardActions
      sx={{
        flexGrow: 0
      }}
    >
      <Button variant="contained" size="small" component={Link} href={githubLink}>GitHub</Button>
      {
        spigotmcLink ? <Button variant="contained" size="small" component={Link} href={spigotmcLink}>SpigotMC</Button> : null
      }
    </CardActions>
  </Card>
)

export default PluginCard;