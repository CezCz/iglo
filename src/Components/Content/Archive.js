import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const data = {
    leagues: [
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
            win: ["cezary"],
            loss: ["KaC", "Sztygrys"],
        },
    ],
};

const Archive = () => {
    return (
      <>
        <TableContainer sx={{ width: "520px" }} component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell width={"20%"}>&nbsp;</TableCell>
                {data.leagues[0].players.map((player) => {
                  return (
                    <TableCell
                      width={80 / data.leagues[0].players.length + "%"}
                      key={player}
                    >
                      {player}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.leagues[0].results.map((playersResult, index) => {
                const player = data.leagues[0].players[index];
                return (
                  <TableRow key={player}>
                    <TableCell>{player}</TableCell>
                    {playersResult.map((result, index) => {
                      const oponnent = data.leagues[0].players[index];
                      const sx = {};
                      if (result === "") {
                        sx["backgroundColor"] = "rgb(255, 212, 80)";
                      }
                      return <TableCell key={player+oponnent} align="center" sx={sx}>{result}</TableCell>;
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
};

export default Archive;
