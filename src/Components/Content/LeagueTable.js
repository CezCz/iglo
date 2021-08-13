import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from "@material-ui/core/Tooltip";
import TableBody from "@material-ui/core/TableBody";
import CloseIcon from "@material-ui/icons/Close";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import TableContainer from "@material-ui/core/TableContainer";
import { makeStyles } from "@material-ui/styles";

const LeagueTable = ({ league }) => {
  const useStyles = makeStyles(() => {
    return {
      tableContainer: {
        "table-layout": "fixed",
        width: "440px",
        borderRadius: 0,
      },
      head: {
        width: "13.33%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        borderRightStyle: "solid",
        borderBottomStyle: "solid",
        borderRightColor: "gray",
        borderBottomColor: "gray",
        borderWidth: 1,
        textAlign: "center",
        padding: "2px 2px",
      },
      "head-firstCell": {
        width: "20%",
      },
      table: {
        "table-layout": "fixed",
      },
      cell: {
        width: "13.33%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        borderRightStyle: "solid",
        borderBottomStyle: "solid",
        borderRightColor: "gray",
        borderBottomColor: "gray",
        borderWidth: 1,
        textAlign: "center",
        padding: "2px 2px",
        lineHeight: 1,
      },
      "cell-firstCell": {
        width: "20%",
      },
      "row-Winner": {
        background: "#d9ead3",
      },
      "row-Loser": {
        background: "#f4cccc",
      },
    };
  });
  const classes = useStyles();
  if (!league) {
    return null;
  }
  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table size="small" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell
              className={classes["head-firstCell"] + " " + classes.head}
            >
              &nbsp;
            </TableCell>
            {league.players.map((player) => {
              return (
                <TableCell key={player} className={classes.head}>
                  <Tooltip title={player} placement="top" arrow>
                    <span>{player}</span>
                  </Tooltip>
                </TableCell>
              );
            })}
            {league.summaryColumns.map((col, index) => {
              let styles = {};
              if (index === 0) {
                styles = {
                  borderLeft: "solid",
                  borderLeftColor: "black",
                  borderLeftWidth: "2px",
                };
              }
              return (
                <TableCell key={col} className={classes.head} style={styles}>
                  <Tooltip title={col} placement="top" arrow>
                    <span>{col}</span>
                  </Tooltip>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {league.results.map((playersResult, index) => {
            const player = league.players[index];
            let rowStyle = "";
            if (league.win.includes(player)) {
              rowStyle = classes["row-Winner"];
            } else if (league.loss.includes(player)) {
              rowStyle = classes["row-Loser"];
            }

            return (
              <TableRow key={player} className={rowStyle}>
                <TableCell
                  className={classes["cell-firstCell"] + " " + classes.cell}
                >
                  <Tooltip title={player} placement="top" arrow>
                    <span>{player}</span>
                  </Tooltip>
                </TableCell>
                {playersResult.map((result, index) => {
                  const opponent = league.players[index];
                  const sx = {};
                  if (result === "") {
                    sx["backgroundColor"] = "rgb(255, 212, 80)";
                  }
                  return (
                    <TableCell
                      key={player + opponent}
                      className={classes.cell}
                      sx={sx}
                    >
                      {result === 0 ? (
                        <CloseIcon fontSize="medium" color={"error"} />
                      ) : result === 1 ? (
                        <RadioButtonUncheckedIcon
                          fontSize="medium"
                          color={"primary"}
                        />
                      ) : (
                        ""
                      )}
                    </TableCell>
                  );
                })}
                {league.summary[index].map((summary, summaryIndex) => {
                  let styles = {};
                  if (summaryIndex === 0) {
                    styles = {
                      borderLeft: "solid",
                      borderLeftColor: "black",
                      borderLeftWidth: "2px",
                    };
                  }
                  return (
                    <TableCell
                      key={"" + summary + summaryIndex}
                      className={classes.cell}
                      style={styles}
                    >
                      {summary}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeagueTable;
