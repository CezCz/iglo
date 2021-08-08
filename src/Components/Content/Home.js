import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import iglo from "../../assets/iglo.png";
import Link from "@material-ui/core/Link";
import patronite from "../../assets/patronite.png";
import patreon from "../../assets/patreon.png";

const Home = () => {
  return (
    <>
      <Typography variant={"h4"} gutterBottom>
        Czym jest iglo?
      </Typography>
      <Box sx={{ typography: "body1" }}>
        IGLO jest koleżeńską ligą dla entuzjastów Go. Ma na celu budowanie
        relacji z innymi graczami i zwiększeniu poziomu gry. To okazja do
        regularnego grania dłuższych gier oraz do uzyskania komentarza od
        silnych graczy.
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img src={iglo} width={"300px"} alt="IGLO!" />
        <Typography
          sx={{ fontSize: "8px" }}
          variant="caption"
          display="block"
          gutterBottom
        >
          Logo made by Kim Ouweleen aka&nbsp;
          <Link href="https://www.murugandi.com/" target="_blank">
            Murugandi
          </Link>
        </Typography>
      </Box>
      <Box sx={{ typography: "body1" }}>
        <Typography component="div" variant={"h4"}>
          Zasady
        </Typography>
        <ul>
          <li>
            Jedna gra tygodniowo z domyślnym terminem gry. Każda grupa gra o
            określonej godzinie w dedykowany dzień. Gracz, któremu wyznaczony
            termin nie odpowiada, musi grę przełożyć!
          </li>
          <li>
            Minimalny czas gry to 30m+3x30. Zalecany 40m+3x30. Zachęcamy do
            przedłużenia czasu!
          </li>
          <li>
            Gramy na <Link href="https://www.gokgs.com/">KGS</Link> w Polskim
            Pokoju
          </li>
        </ul>
        <Typography variant={"h4"} gutterBottom>
          Zapisy
        </Typography>
        <Typography component="div" gutterBottom>
          <Box>
            Należy wysłać, na&nbsp;
            <Typography sx={{ display: "inline-block", color: "primary.main" }}>
              internetowagoligao[]gmail[]com
            </Typography>
            &nbsp;następujące informacje:
          </Box>
          <ul>
            <li>Imię i nazwisko</li>
            <li>Nick na kgs</li>
            <li>Oficjalną lub szacunkową siłę gry</li>
          </ul>
          <Box>
            Gracze, dołączają do grupy, która "mniej więcej" w odpowiada ich
            sile gry. Nie trzeba się piąć od najniższej grupy. Do ostatniej
            grupy można dopisać się nawet w trakcie trwającego sezonu!
          </Box>
        </Typography>
        <Typography variant={"h4"} gutterBottom>
          Wykłady i komentarze
        </Typography>
        <Box>
          Do każdej gry można dostać komentarz gracza ze stopniem mistrzowskim.
          W dniach domyślnych, dwie godziny po standardowej godzinie gry
          odbywają się komentarze.
        </Box>
        <Box style={{ display: "block" }}>
          Grupy A i B komentują Stanisław Frejlak 7 dan oraz Lukáš Podpěra 7
          dan.
        </Box>
        <Box style={{ display: "block" }}>
          Grupy alfabetycznie później komentują Cezary Czernecki 4 dan oraz
          gracze z grupy A i B.
        </Box>
        <Box>
          W każdym sezonie odbywają się co najmniej dwa wykłady tematyczne.
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qXTiUHnjgow"
            title="Aji dojrzewające, podpuszczkowe i inne"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
        <Typography variant={"h4"} gutterBottom>
          Wsparcie
        </Typography>
        <Box>
          IGLO jest darmowe, aby opłacić wykłady i komentarze korzystamy ze
          wsparcia naszych patronów. Zachęcamy do dołączenia!
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link
            href="https://patronite.pl/iglo"
            target="_blank"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img src={patronite} width="200px" alt={"Patronite"} />
            do wpłat w PLN
          </Link>
          <Link
            href="https://patreon.com/igloooo"
            target="_blank"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img src={patreon} width="200px" alt={"Patronite"} />
            do wpłat w EUR
          </Link>
        </Box>
        <Box>
          <Typography variant={"h4"} gutterBottom>
            Ważne linki:
          </Typography>
          <ul>
            <li>
              <Link
                href={
                  "https://www.youtube.com/channel/UCXsGC1hVUqZ-JUjzfdSHYDQ"
                }
              >
                IGLO
              </Link>{" "}
              - Wykłady i komentarze Stasia i Lukana. Komentarze dla grup A i B
            </li>
            <li>
              <Link
                href={
                  "https://www.youtube.com/channel/UCMgifrUqkfO58qVdvfs4xkg"
                }
              >
                IGLO Plus
              </Link>{" "}
              - Wykłady Cezarego i innych. Komentarze dla grup C i dalszych
              alfabetycznie :)
            </li>
            <li>
              <Link
                href={
                  "https://docs.google.com/spreadsheets/d/1Be7XNZ9BaCTK_uxmuyh32yrcYhMbHDT9YaWBCz8tW94/edit#gid=411784956"
                }
              >
                Arkusz IGLO
              </Link>
            </li>
          </ul>
        </Box>
      </Box>
    </>
  );
};

export default Home;
