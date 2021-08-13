import React from "react";
import Typography from "@material-ui/core/Typography";
import LeagueTable from "./LeagueTable";
import Box from "@material-ui/core/Box";

const data = {
  leagues: [
    {
      startDate: 1619827200000,
      endDate: 1623110400000,
      tables: [
        {
          name: "Grupa A",
          players: ["KaC", "Deejay", "Higaki", "cezary", "gisel", "Sztygrys"],
          results: [
            ["", 0, 1, 0, 0, 0],
            [1, "", 1, 0, 0, 1],
            [0, 0, "", 0, 1, 1],
            [1, 1, 1, "", 1, 1],
            [1, 1, 0, 0, "", 0],
            [1, 0, 0, 0, 1, ""],
          ],
          summaryColumns: ["SOS", "SODOS"],
          summary: [
            [1, 2],
            [3, 5],
            [2, 4],
            [5, 10],
            [2, 4],
            [2, 3],
          ],
          win: ["cezary"],
          loss: ["KaC", "Sztygrys"],
        },
        {
          name: "Grupa B",
          players: [
            "Myszcz",
            "Nantoka",
            "shin0e",
            "Ashitaka",
            "lukaszlew",
            "alvar",
          ],
          results: [
            ["", 1, 0, 0, 0, 0],
            [0, "", 1, 1, 1, 1],
            [1, 0, "", 1, 1, 1],
            [1, 0, 0, "", 1, 0],
            [1, 0, 0, 0, "", 1],
            [1, 0, 0, 1, 0, ""],
          ],
          summaryColumns: ["SOS", "SODOS"],
          summary: [
            [1, 4],
            [4, 11],
            [4, 7],
            [2, 3],
            [2, 3],
            [2, 3],
          ],
          win: ["Nantoka", "shin0e"],
          loss: ["Myszcz", "alvar"],
        },
        {
          name: "Grupa C",
          players: [
            "olesia",
            "woodpecker",
            "leping",
            "Zdzieli",
            "leszczyn",
            "andy92",
          ],
          results: [
            ["", 0, 1, 1, 1, 0],
            [1, "", 1, 0, 1, 0],
            [0, 0, "", 1, 0, 0],
            [0, 1, 0, "", 0, 0],
            [0, 0, 1, 1, "", 1],
            [1, 1, 1, 1, 0, ""],
          ],
          summaryColumns: ["SOS", "SODOS"],
          summary: [
            [3, 5],
            [3, 7],
            [1, 1],
            [1, 3],
            [3, 6],
            [4, 8],
          ],
          win: ["andy92", "woodpecker"],
          loss: ["leping", "Zdzieli"],
        },
        {
          name: "Grupa D",
          players: [
            "wysek",
            "Mariannna",
            "bodziu",
            "woj",
            "bartosz",
            "SiroWirdo",
          ],
          results: [
            ["", 1, 0, 1, 0, 0],
            [0, "", 0, 1, 1, 0],
            [1, 1, "", 0, 0, 1],
            [0, 0, 1, "", 0, 0],
            [1, 0, 1, 1, "", 1],
            [1, 1, 0, 1, 0, ""],
          ],
          summaryColumns: ["SOS", "SODOS"],
          summary: [
            [1, 2],
            [3, 5],
            [2, 4],
            [5, 10],
            [2, 4],
            [2, 3],
          ],
          win: ["bartosz", "bodziu"],
          loss: ["woj", "wysek"],
        },
        {
          name: "Grupa E",
          players: [
            "boolboh",
            "szkielet",
            "ssokolow",
            "yapee",
            "Bogdan13x",
            "Aaali",
          ],
          results: [
            ["", 1, 1, 1, 1, 1],
            [0, "", 1, 1, 1, 1],
            [0, 0, "", 0, "", 0],
            [0, 0, 1, "", 1, 0],
            [0, 0, "", 0, "", 0],
            [0, 0, 1, 1, 1],
          ],
          summaryColumns: ["SOS", "SODOS"],
          summary: [
            [5, 9],
            [4, 5],
            [0, 0],
            [2, 0],
            [0, 0],
            [3, 2],
          ],
          win: ["boolboh", "szkielet"],
          loss: ["ssokolow", "Bogdan13x"],
        },
        {
          name: "Grupa F",
          players: [
            "Fern",
            "Blazej",
            "pmilian",
            "gfdhfff",
            "ishimur",
            "Przemo",
          ],
          results: [
            ["", 1, 1, 0, 1, 1],
            [0, "", 1, 0, 1, 1],
            [0, 0, "", 0, 0, 1],
            [1, 1, 1, "", 1, 1],
            [0, 0, 1, 0, "", 1],
            [0, 0, 0, 0, 0, ""],
          ],
          summaryColumns: ["SOS", "SODOS"],
          summary: [
            [4, 6],
            [3, 3],
            [1, 0],
            [5, 10],
            [2, 1],
            [0, 0],
          ],
          win: ["gfdhfff", "Fern"],
          loss: ["pmilian", "Przemo"],
        },
      ],
    },
  ],
};

const Archive = () => {
  const dateFormatter = new Intl.DateTimeFormat("pl-PL");
  return (
    <>
      <Typography variant={"h4"} gutterBottom>
        Archiwum IGLO
      </Typography>
      {data.leagues.map((league) => {
        return (
          <React.Fragment key={league.startDate}>
            <Typography gutterBottom>
              {dateFormatter.format(new Date(league.startDate))} -{" "}
              {dateFormatter.format(new Date(league.endDate))}
            </Typography>
            <Box display="flex" flexWrap="wrap">
              {league.tables.map((table) => {
                return (
                  <Box
                    px={4}
                    py={1}
                    display={"block"}
                    key={league.startDate + table.name}
                  >
                    <Typography gutterBottom>{table.name}</Typography>
                    <LeagueTable league={table} />
                  </Box>
                );
              })}
            </Box>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Archive;
