import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { activeTabState } from "../index";
import { useRecoilState } from "recoil";

const Navigation = () => {
  const [activeTab, setValue] = useRecoilState(activeTabState);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={activeTab}
      onChange={handleChange}
      aria-label="Menu"
    >
      <Tab label="Strona główna" />
      <Tab label="Tabele" />
      <Tab label="Archiwum" />
    </Tabs>
  );
};

export default Navigation;
