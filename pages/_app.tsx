import type {AppProps} from 'next/app'
import React, {useMemo, useState} from 'react';
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from '@mui/material';
import {ColorModeContext} from '../utils/ColorModeContext';

function MyApp({Component, pageProps}: AppProps) {
    const prefersDarkMode = true;

    const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            }
        }),
        [],
    );

    const theme = useMemo(
        () => createTheme({
            palette: {
                mode
            },
            typography: {
                button: {
                    textTransform: 'none'
                }
            }
        }),
        [mode]
    );

    return (
        <>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Component {...pageProps} />
                </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    )
}

export default MyApp
