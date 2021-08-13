import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, useRouteMatch } from "react-router-dom";

const Navigation = () => {
  const routeMatch = useRouteMatch(["/archives", "/tables", "/rules", "/"]);
  const currentTab = routeMatch?.path;
  return (
    <Tabs
      orientation="vertical"
      value={currentTab}
      variant="scrollable"
      aria-label="Menu"
    >
      <Tab label="Strona główna" value={"/"} component={Link} to={"/"} />
      <Tab label="Tabele" value={"/tables"} component={Link} to={"/tables"} />
      <Tab label="Regulamin" value={"/rules"} component={Link} to={"/rules"} />
      <Tab label="Archiwum" value={"/archives"} component={Link} to={"/archives"} />
    </Tabs>
  );
};

export default Navigation;
