import {Theme} from '@mui/material/styles';

/**
 * Creates theme-aware gradient values for light/dark modes
 * Light mode: transparent black gradients
 * Dark mode: transparent white gradients
 */
const getCommonGradient = (theme: Theme) => ({
    light: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0)' : 'rgba(0,0,0,0)',
    medium: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
});

/**
 * Standard animation transition for interactive elements
 */
const commonTransition = {
    transition: 'all 0.3s ease',
};

/**
 * Creates a subtle hover background effect that adapts to light/dark theme
 * Light mode: 5% black overlay
 * Dark mode: 10% white overlay
 */
const commonHoverBg = (theme: Theme) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
});

/**
 * Styles for section headers with underline accent
 */
export const sectionHeaderStyle = (theme: Theme) => ({
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(3),
});

/**
 * Responsive grid container spacing configuration
 */
export const gridContainerStyle = {spacing: {xs: 2, md: 3}, pb: 4};

/**
 * Card wrapper with hover lift animation
 */
export const cardWrapperStyle = {
    ...commonTransition,
    '&:hover': {transform: 'translateY(-4px)'},
};

/**
 * Creates a responsive horizontal divider with fade effect
 */
export const sectionDividerStyle = (theme: Theme) => {
    const gradient = getCommonGradient(theme);
    return {
        height: '2px',
        background: `linear-gradient(to right, ${gradient.light}, ${gradient.medium}, ${gradient.light})`,
        marginY: theme.spacing(4),
    };
};

/**
 * Main page layout with adaptive grid background pattern
 */
export const pageStyle = (theme: Theme) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : '#f5f5f5',
    backgroundImage: `linear-gradient(${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.8)'} 1px, transparent 1px), 
                   linear-gradient(90deg, ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.8)'} 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
    minHeight: '100vh',
});

/**
 * Plugins container layout configuration
 */
export const pluginsBoxStyle = {flexGrow: 1, marginBottom: 2};

/**
 * Responsive grid item configuration for different breakpoints
 */
export const gridItemStyle = {
    xs: 12, sm: 6, md: 4, lg: 3, xl: 2,
    sx: cardWrapperStyle,
};

/**
 * Standard vertical padding for containers
 */
export const containerPaddingStyle = (theme: Theme) => ({
    paddingY: theme.spacing(4),
});

/**
 * App bar with gradient background based on theme mode
 */
export const appBarStyle = (theme: Theme) => ({
    background: `linear-gradient(45deg, ${theme.palette.mode === 'dark' ? '#1a237e 30%, #283593' : '#1976d2 30%, #2196f3'} 90%)`,
    elevation: 4,
});

/**
 * Navigation button with hover lift and background effect
 */
export const navButtonStyle = (theme: Theme) => ({
    color: 'inherit',
    marginX: theme.spacing(0.5),
    ...commonTransition,
    '&:hover': {
        transform: 'translateY(-2px)',
        ...commonHoverBg(theme),
    },
});

/**
 * Brand name with gradient text effect and hover scale
 */
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

/**
 * Flexible toolbar layout with customizable alignment
 */
export const toolbarStyle = (theme: Theme, options?: { justifyContent?: string; flexWrap?: string }) => ({
    paddingY: theme.spacing(0.5),
    display: 'flex',
    justifyContent: options?.justifyContent || 'space-between',
    flexWrap: options?.flexWrap || 'wrap',
});

/**
 * Toggle switch container with hover scale effect
 */
export const toggleSwitchBoxStyle = {
    flexGrow: 0,
    ...commonTransition,
    '&:hover': {transform: 'scale(1.1)'},
};

/**
 * Bottom app bar with border and positioning
 */
export const bottomAppBarStyle = (theme: Theme) => ({
    ...appBarStyle(theme),
    top: 'auto',
    bottom: 0,
    borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
});

/**
 * Footer button extending nav button styles
 */
export const footerButtonStyle = (theme: Theme) => ({
    ...navButtonStyle(theme),
    marginX: theme.spacing(1),
});

/**
 * Version number display with monospace font and hover effects
 */
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

/**
 * Flexible container with customizable alignment and spacing
 */
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

/**
 * Blurb section container layout
 */
export const blurbBoxStyle = (theme: Theme) => ({
    flexGrow: 1,
    paddingY: theme.spacing(4),
});

/**
 * Gradient title style for blurb sections
 */
export const blurbTitleStyle = (theme: Theme) => ({
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    WebkitBackgroundClip: 'text',
    textFillColor: 'transparent',
    textAlign: 'center',
});

/**
 * Spacing for blurb grid container
 */
export const blurbGridContainerStyle = (theme: Theme) => ({
    marginTop: theme.spacing(2),
});

/**
 * Info card with centered content and hover lift effect
 */
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

/**
 * Icon styling for info cards
 */
export const infoCardIconStyle = (theme: Theme) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
});

/**
 * Bold title style for info cards
 */
export const infoCardTitleStyle = () => ({
    fontWeight: 'bold',
});

/**
 * Standard icon size for info cards
 */
export const infoCardIconSizeStyle = {
    fontSize: 40,
};

/**
 * Plugin card layout with fixed height
 */
export const pluginCardStyle = {
    height: '18rem',
    display: 'flex',
    flexDirection: 'column',
};

/**
 * Content area for plugin cards
 */
export const pluginCardContentStyle = {
    flexGrow: 1,
};

/**
 * Action buttons container for plugin cards
 */
export const pluginCardActionsStyle = {
    flexGrow: 0,
};

/**
 * Standard button style for plugin cards
 */
export const pluginCardButtonStyle = () => ({
    variant: 'contained',
    size: 'small',
    textTransform: 'none',
});

/**
 * Title configuration for plugin cards
 */
export const pluginCardTitleStyle = {
    gutterBottom: true,
    variant: 'h5',
    component: 'div',
};

/**
 * Description text style for plugin cards
 */
export const pluginCardDescriptionStyle = {
    variant: 'body2',
    color: 'text.secondary',
};

/**
 * Server count text style for plugin cards
 */
export const pluginCardServerCountStyle = {
    variant: 'body2',
    color: 'text.secondary',
};