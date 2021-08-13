import React from "react";
import Tables from "./Content/Tables";
import Home from "./Content/Home";
import Rules from "./Content/Rules";
import { Route, Switch } from "react-router-dom";
import Archive from "./Content/Archive";

const Content = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/tables"} component={Tables} />
        <Route path={"/rules"} component={Rules} />
        <Route path={"/archives"} component={Archive} />
      </Switch>
    </>
  );
};

export default Content;
