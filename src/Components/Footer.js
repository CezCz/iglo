import React from "react";
import { Box, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import psg from "../assets/psg.png";
import murugandi from "../assets/murugandi.png";
import cezary from "../assets/cezary.png";

const Footer = () => {
  return (
    <>
      <Typography variant="h6" component="div" fontWeight={800}>
        IGLO Ludzie:
      </Typography>
      <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
        <Typography sx={{ p: 2 }}>
          <Link
            href={
              "https://europeangodatabase.eu/EGD/Player_Card.php?&key=14813139"
            }
            target="_blank"
          >
            <img src={cezary} alt="Cezary" width="80px" />
          </Link>
        </Typography>
        <Link sx={{ p: 2 }} href="http://psg.go.art.pl/" target="_blank">
          <img src={psg} alt="PSG" width="50px" />
        </Link>
        <Link
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          href="https://www.murugandi.com/"
          target="_blank"
        >
          <img src={murugandi} alt="Murugandi" width="80px" />
          <Typography variant="caption" display="block" gutterBottom>
            Murugandi
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default Footer;
