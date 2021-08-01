import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from "./Components/Main";
import Navigation from "./Components/Navigation"
import {Box, createTheme, ThemeProvider, Typography} from "@material-ui/core";
import {atom, RecoilRoot} from "recoil";
import psg from './assets/psg.png';
import Link from "@material-ui/core/Link";

let theme = createTheme({
    palette: {
        primary: {
            main: "#3f51b5",
            light: "rgb(64, 131, 183)",
            dark: "rgb(11, 70, 115)",
            contrastText: "#fff"
        },
        secondary: {
            main: "#f50057",
            light: "rgb(247, 51, 120)",
            dark: "rgb(171, 0, 60)",
            contrastText: "#fff"
        },
    },
});

export const activeTabState = atom({
    key: 'activeTab',
    default: 0,
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RecoilRoot>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 2,
                        gridTemplateRows: 'auto',
                        gridTemplateAreas: `"header header header header"
                                    "sidebar main main main"
                                    "footer footer footer footer"`,
                    }}
                >
                    <Box sx={{textAlign: 'center', gridArea: 'header', padding: '20px', typography: 'header'}}>
                        <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
                            Internetowa Go Liga O!
                        </Typography>
                    </Box>
                    <Box sx={{gridArea: 'sidebar'}}><Navigation/></Box>
                    <Box sx={{gridArea: 'main'}}><Main/></Box>
                    <Box sx={{gridArea: 'footer', p: 3}}>
                        <Typography variant="h6" component="div" fontWeight={800}>
                            IGLO Ludzie:
                        </Typography>
                        <Box sx={{p: 1, display: 'flex', alignItems: 'center'}}>
                            <Typography sx={{p: 2}}>
                                <Link href={'https://europeangodatabase.eu/EGD/Player_Card.php?&key=14813139'}
                                      target="_blank">
                                    Cezary
                                </Link>
                            </Typography>
                            <Link sx={{p: 1}} href="http://psg.go.art.pl/" target="_blank">
                                <img src={psg} alt='PSG' width='50px'/>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </RecoilRoot>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
