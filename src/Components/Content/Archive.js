import React from "react";
import Typography from "@material-ui/core/Typography";
import LeagueTable from "./LeagueTable";
import Box from "@material-ui/core/Box";
import leagues from "../../data/leagues";
import { Divider } from "@material-ui/core";

const Archive = () => {
  const dateFormatter = new Intl.DateTimeFormat("pl-PL");
  return (
    <>
      <Typography variant={"h4"} gutterBottom>
        Archiwum IGLO
      </Typography>
      {leagues.map((league) => {
        return (
          <React.Fragment key={league.startDate}>
            <Box py={2}>
              <Typography variant={"h5"} gutterBottom>
                {dateFormatter.format(new Date(league.startDate))} -{" "}
                {dateFormatter.format(new Date(league.endDate))}
              </Typography>
              <Box display="flex" flexWrap="wrap">
                {league.tables.map((table) => {
                  return (
                    <Box
                      px={2}
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
            </Box>
            <Divider />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Archive;
