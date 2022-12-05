import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

/**
 * Admin page to add, remove and update movie database. Never used in the app.
 */


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
        >
          <Tab
            label="Manage Movies"
            {...a11yProps(0)}
          />
          <Tab
            label="Manage Showtimes"
            {...a11yProps(1)}
          />
          <Tab
            label="Manage Theatres"
            {...a11yProps(2)}
          />
          <Tab
            label="Manage Registered Users"
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <TabPanel
        value={value}
        index={0}
      >
        Manage Movies
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
      >
        Manage Showtimes
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
      >
        Manage Theatres
      </TabPanel>
      <TabPanel
        value={value}
        index={3}
      >
        Manage Registered Users
        {/* <ManageRU /> */}
      </TabPanel>
    </Box>
  );
}

function Admin() {
  return (
    <div>
      <h1>Admin</h1>
      <BasicTabs />
    </div>
  );
}

export default Admin;
