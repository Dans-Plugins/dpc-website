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

export const gridItemStyle = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 2,
    sx: cardWrapperStyle,
};

export const containerPaddingStyle = (theme: Theme) => ({
    paddingY: theme.spacing(4),
});

export const appBarStyle = (theme: Theme) => ({
    background: theme.palette.mode === 'dark'
        ? 'linear-gradient(45deg, #1a237e 30%, #283593 90%)'
        : 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
    elevation: 4, // Optional: You can remove elevation from the component itself
});

export const navButtonStyle = (theme: Theme) => ({
    color: 'inherit',
    marginX: theme.spacing(0.5),
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-2px)',
        backgroundColor: theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.05)',
    },
});

export const brandNameStyle = (theme: Theme) => ({
    display: 'inline',
    marginRight: theme.spacing(2),
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #fff 30%, rgba(255,255,255,0.8) 90%)',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
    },
});

export const toolbarStyle = (theme: Theme, options?: { justifyContent?: string; flexWrap?: string }) => ({
    paddingY: theme.spacing(0.5),
    display: 'flex',
    justifyContent: options?.justifyContent || 'space-between',
    flexWrap: options?.flexWrap || 'wrap',
});

export const toggleSwitchBoxStyle = {
    flexGrow: 0,
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'scale(1.1)',
    },
};

export const bottomAppBarStyle = (theme: Theme) => ({
    ...appBarStyle(theme), // Reference basic appBar styling
    top: 'auto',
    bottom: 0,
    borderTop: `1px solid ${
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.12)'
            : 'rgba(0, 0, 0, 0.12)'
    }`,
});

export const footerButtonStyle = (theme: Theme) => ({
    ...navButtonStyle(theme),
    marginX: theme.spacing(1),
});

export const versionNumberStyle = (theme: Theme) => ({
    display: 'inline-flex',
    alignItems: 'center',
    paddingX: theme.spacing(2),
    paddingY: theme.spacing(0.5),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(0, 0, 0, 0.05)',
    fontFamily: 'monospace',
    fontWeight: theme.typography.fontWeightMedium,
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.15)'
            : 'rgba(0, 0, 0, 0.08)',
        transform: 'scale(1.05)',
    },
});

export const flexContainerStyle = (theme: Theme, options?: {
    gap?: number;
    alignItems?: string;
    flexWrap?: string
}) => ({
    display: 'flex',
    alignItems: options?.alignItems || 'center',
    gap: theme.spacing(options?.gap || 2),
    flexWrap: options?.flexWrap || 'wrap',
});

export const blurbBoxStyle = (theme: Theme) => ({
    flexGrow: 1,
    paddingY: theme.spacing(4),
});

export const blurbTitleStyle = (theme: Theme) => ({
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    WebkitBackgroundClip: 'text',
    textFillColor: 'transparent',
    textAlign: 'center',
});

export const blurbGridContainerStyle = (theme: Theme) => ({
    marginTop: theme.spacing(2),
});

export const infoCardStyle = (theme: Theme) => ({
    padding: theme.spacing(3),
    height: '100%',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'translateY(-4px)',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
});

export const infoCardIconStyle = (theme: Theme) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
});

export const infoCardTitleStyle = (theme: Theme) => ({
    fontWeight: 'bold',
});

export const infoCardIconSizeStyle = {
    fontSize: 40,
};