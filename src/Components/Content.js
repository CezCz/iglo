import React from "react";
import Tables from "./Tables";
import { activeTabState } from "../index";
import { useRecoilValue } from "recoil";
import TabPanel from "./TabPanel";
import Home from "./Home";
import Archive from "./Archive";

const Content = () => {
  const activeTab = useRecoilValue(activeTabState);
  return (
    <>
      <TabPanel value={activeTab} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <Tables />
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        <Archive />
      </TabPanel>
    </>
  );
};

export default Content;
