import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Introduction from "../Tabs/TabComponents/Introduction.js";
import How_we_work from "../Tabs/TabComponents/How_we_work.js";
import Capabilities from "../Tabs/TabComponents/Capabilities.js";
import { useLayoutEffect } from "react";
import { useIsSmall } from "../Hooks/Small.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      sx={value === index ? { color: "#808080" } : { color: "#FFA500" }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({ tabValue }) {
  const [value, setValue] = React.useState(0);
  const [width, setWidth] = useState(false);
  const isSmall = useIsSmall();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   console.log("tabvalue", tabValue);
  //   if (window.innerWidth > 648) {
  //     setWidth(true);
  //   }
  // }, []);

  useLayoutEffect(() => {
    console.log("tabvalue", tabValue);
    if (window.outerWidth > 648) {
      setWidth(true);
    }
  }, [width]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",

        display: isSmall ? "flex" : "block",
        width: "100%",
        padding: 5,
      }}
    >
      <Tabs
        orientation={isSmall ? "vertical" : "horizontal"}
        variant="scrollable"
        TabIndicatorProps={{ style: { background: "#FFA500" } }}
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          ".Mui-selected": {
            color: `#FFA500`,
          },
        }}
      >
        {tabValue.map((item, index) => (
          <Tab
            label={item.title}
            {...a11yProps(item.index)}
            // sx={
            //   value === item.index ? { color: "#808080" } : { color: "#FFA500" }
            // }
          />
        ))}
      </Tabs>
      {tabValue.map((item, index) => (
        <TabPanel value={value} index={item.index}>
          {item.component}
        </TabPanel>
      ))}
    </Box>
  );
}
