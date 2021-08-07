import React from "react";
import { CardMedia } from "@material-ui/core";
import Link from "@material-ui/core/Link";

const Tables = () => {
  return (
    <>
      <Link href="https://docs.google.com/spreadsheets/d/1Be7XNZ9BaCTK_uxmuyh32yrcYhMbHDT9YaWBCz8tW94/edit?usp=sharing">
        Link do arkusza (edycja)
      </Link>
      <CardMedia
        title="tabele iglo"
        component="iframe"
        height="600px"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vShuBJzJ3A1QUp--MWWjdWTMsg1U2Ngbv8dJcm5i2R00861AVgnnYZvD_4qKJFxRe3tsz3lgP0ZIChu/pubhtml?widget=true&amp;headers=false"
      />
    </>
  );
};

export default Tables;
