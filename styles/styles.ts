import {Theme} from '@mui/material/styles';

export const sectionHeaderStyle = (theme: Theme) => ({
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    borderBottom: '2px solid',
    borderColor: theme.palette.primary.main,
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(3),
});

export const gridContainerStyle = {spacing: {xs: 2, md: 3}, pb: 4};

export const cardWrapperStyle = {
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'translateY(-4px)',
    },
};

export const sectionDividerStyle = (theme: Theme) => ({
    height: '2px',
    background: `linear-gradient(to right, 
      ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0)' : 'rgba(0,0,0,0)'}, 
      ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}, 
      ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0)' : 'rgba(0,0,0,0)'}
    )`,
    marginY: theme.spacing(4), // Use theme spacing for consistency
});

export const pageStyle = (theme: Theme) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : '#f5f5f5',
    backgroundImage:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)'
            : 'linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    minHeight: '100vh',
});

export const pluginsBoxStyle = {
    flexGrow: 1,
    marginBottom: 2,
};