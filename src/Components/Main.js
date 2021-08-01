import React from "react";
import iglo from "../assets/iglo.png";
import patronite from "../assets/patronite.png";
import patreon from "../assets/patreon.png";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Tables from "./Tables";
import {activeTabState} from "../index";
import {useRecoilValue} from "recoil";
import TabPanel from "./TabPanel";


const Main = () => {
    const activeTab = useRecoilValue(activeTabState);
    return <>
        <TabPanel value={activeTab} index={0}>
            <Typography variant={'h4'} gutterBottom>Co to iglo?</Typography>
            <Box sx={{typography: 'body1'}}>
                IGLO jest koleżeńską ligą dla entuzjastów Go. Ma na celu budowanie relacji z innymi graczami i
                zwiększeniu
                poziomu gry. To okazja do regularnego grania dłuższych gier oraz do uzyskania komentarza od silnych
                graczy.
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <img src={iglo} width={"300px"} alt="IGLO!"/>
            </Box>
            <Box sx={{typography: 'body1'}}>
                <Typography component="div" variant={'h4'}>Zasady</Typography>
                <ul>
                    <li>Jedna gra tygodniowo z domyślnym terminem gry. Każda grupa gra o określonej godzinie w
                        dedykowany
                        dzień.
                        Gracz, któremu wyznaczony termin nie odpowiada, musi grę przełożyć!
                    </li>
                    <li>Minimum czas gry to 30m+3x30. Zalecany 40m+3x30. Zachęcamy do przedłużenia czasu!</li>
                    <li>Gramy na KGS w Polskim Pokoju</li>
                </ul>
                <Typography variant={'h4'} gutterBottom>Zapisy</Typography>
                <Typography component="div" gutterBottom>
                    <Box>
                        Należy wysłać, na&nbsp;
                        <Typography sx={{display: 'inline-block', color: 'primary.main'}}>
                            internetowagoligao[]gmail[]com
                        </Typography>
                        &nbsp;następujące informacje:
                    </Box>
                    <ul>
                        <li>Imię i nazwisko</li>
                        <li>Nick na kgs</li>
                        <li>Oficjalną lub szacunkową siłę gry</li>
                    </ul>
                    <Box>Gracze, dołączają do grupy, która "mniej więcej" w odpowiada
                        ich sile gry. Nie
                        trzeba się piąć od najniższej grupy. Do ostatniej grupy można dopisać się nawet w trakcie
                        trwającego
                        sezonu!
                    </Box>
                </Typography>
                <Typography variant={'h4'} gutterBottom>Wykłady i komentarze</Typography>
                <Box>
                    Do każdej gry można dostać komentarz gracza ze stopniem mistrzowskim. W dniach domyślnych, dwie
                    godziny
                    po
                    standardowej godzinie gry odbywają się komentarze.
                </Box>
                <Box style={{display: 'block'}}>
                    Grupy A i B komentują Stanisław Frejlak 7 dan oraz Lukáš Podpěra 7 dan.
                </Box>
                <Box style={{display: 'block'}}>
                    Grupy alfabetycznie później komentują Cezary Czernecki 4 dan oraz gracze z grupy A i B.
                </Box>
                <Box>
                    W każdym sezonie odbywają się conajmniej dwa wykłady tematyczne.
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qXTiUHnjgow"
                            title="Aji dojrzewające, podpuszczkowe i inne" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </Box>
                <Typography variant={'h4'} gutterBottom>Wsparcie</Typography>
                <Box>
                    IGLO jest darmowe, aby opłacić wykłady i komentarze korzystamy ze wsparcia naszych patronów.
                    Zachęcamy
                    do
                    dołączenia!
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Link href="https://patronite.pl/iglo" target="_blank" sx={{display: 'flex', alignItems: 'center'}}>
                        <img src={patronite}
                             width="200px"
                             alt={"Patronite"}/>
                        do wpłat w PLN
                    </Link>
                    <Link href="https://patreon.com/igloooo" target="_blank" sx={{display: 'flex', alignItems: 'center'}}>
                        <img src={patreon}
                             width="200px"
                             alt={"Patronite"}/>
                        do wpłat w EUR</Link>
                </Box>
            </Box>
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
            <Tables/>
        </TabPanel>
    </>
}

export default Main
