import {Theme} from '@mui/material/styles';

// Common theme-based patterns
const getCommonGradient = (theme: Theme) => ({
    light: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0)' : 'rgba(0,0,0,0)',
    medium: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
});

const commonTransition = {
    transition: 'all 0.3s ease',
};

const commonHoverBg = (theme: Theme) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
});

export const sectionHeaderStyle = (theme: Theme) => ({
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(3),
});

export const gridContainerStyle = {spacing: {xs: 2, md: 3}, pb: 4};

export const cardWrapperStyle = {
    ...commonTransition,
    '&:hover': {transform: 'translateY(-4px)'},
};

export const sectionDividerStyle = (theme: Theme) => {
    const gradient = getCommonGradient(theme);
    return {
        height: '2px',
        background: `linear-gradient(to right, ${gradient.light}, ${gradient.medium}, ${gradient.light})`,
        marginY: theme.spacing(4),
    };
};

export const pageStyle = (theme: Theme) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : '#f5f5f5',
    backgroundImage: `linear-gradient(${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.8)'} 1px, transparent 1px), 
                   linear-gradient(90deg, ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.8)'} 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
    minHeight: '100vh',
});

export const pluginsBoxStyle = {flexGrow: 1, marginBottom: 2};

export const gridItemStyle = {
    xs: 12, sm: 6, md: 4, lg: 3, xl: 2,
    sx: cardWrapperStyle,
};

export const containerPaddingStyle = (theme: Theme) => ({
    paddingY: theme.spacing(4),
});

export const appBarStyle = (theme: Theme) => ({
    background: `linear-gradient(45deg, ${theme.palette.mode === 'dark' ? '#1a237e 30%, #283593' : '#1976d2 30%, #2196f3'} 90%)`,
    elevation: 4,
});

export const navButtonStyle = (theme: Theme) => ({
    color: 'inherit',
    marginX: theme.spacing(0.5),
    ...commonTransition,
    '&:hover': {
        transform: 'translateY(-2px)',
        ...commonHoverBg(theme),
    },
});

export const brandNameStyle = (theme: Theme) => ({
    display: 'inline',
    marginRight: theme.spacing(2),
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #fff 30%, rgba(255,255,255,0.8) 90%)',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    ...commonTransition,
    '&:hover': {transform: 'scale(1.05)'},
});

export const toolbarStyle = (theme: Theme, options?: { justifyContent?: string; flexWrap?: string }) => ({
    paddingY: theme.spacing(0.5),
    display: 'flex',
    justifyContent: options?.justifyContent || 'space-between',
    flexWrap: options?.flexWrap || 'wrap',
});

export const toggleSwitchBoxStyle = {
    flexGrow: 0,
    ...commonTransition,
    '&:hover': {transform: 'scale(1.1)'},
};

export const bottomAppBarStyle = (theme: Theme) => ({
    ...appBarStyle(theme),
    top: 'auto',
    bottom: 0,
    borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
});

export const footerButtonStyle = (theme: Theme) => ({
    ...navButtonStyle(theme),
    marginX: theme.spacing(1),
});

export const versionNumberStyle = (theme: Theme) => ({
    display: 'inline-flex',
    alignItems: 'center',
    padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
    borderRadius: theme.shape.borderRadius,
    ...commonHoverBg(theme),
    fontFamily: 'monospace',
    fontWeight: theme.typography.fontWeightMedium,
    ...commonTransition,
    '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)',
        transform: 'scale(1.05)',
    },
});

export const flexContainerStyle = (theme: Theme, options?: {
    gap?: number;
    alignItems?: string;
    flexWrap?: string;
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
    ...commonTransition,
    '&:hover': {transform: 'translateY(-4px)'},
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
});

export const infoCardIconStyle = (theme: Theme) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
});

export const infoCardTitleStyle = () => ({
    fontWeight: 'bold',
});

export const infoCardIconSizeStyle = {
    fontSize: 40,
};

export const pluginCardStyle = {
    height: '18rem',
    display: 'flex',
    flexDirection: 'column',
};

export const pluginCardContentStyle = {
    flexGrow: 1,
};

export const pluginCardActionsStyle = {
    flexGrow: 0,
};

export const pluginCardButtonStyle = () => ({
    variant: 'contained',
    size: 'small',
    textTransform: 'none',
});

export const pluginCardTitleStyle = {
    gutterBottom: true,
    variant: 'h5',
    component: 'div',
};

export const pluginCardDescriptionStyle = {
    variant: 'body2',
    color: 'text.secondary',
};

export const pluginCardServerCountStyle = {
    variant: 'body2',
    color: 'text.secondary',
};