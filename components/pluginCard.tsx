import { Button, Card, CardActions, CardContent, Link, Typography } from "@mui/material"

interface PluginCardProps {
    title: string
    description: string
    githubLink: string
}

const PluginCard: React.FC<PluginCardProps> = ({ title, description, githubLink }) => (
    <Card>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
        </CardContent>
        <CardActions>
        <Button variant="contained" size="small" component={Link} href={githubLink}>GitHub</Button>
        </CardActions>
    </Card>
)

export default PluginCard;