import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { lime } from '@material-ui/core/colors';
import { T } from '../styles/text_styles.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} style={{paddingTop: 0}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 10,
    height: 'auto',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    indicator: {
      backgroundColor: "#fff", 
    }
  },
  tab: {
    fontFamily: "IBM Plex Mono",
    minWidth: "50px"
  },
  description: {
    fontFamily: "Open Sans",
    fontSize: 20,
  }
}));


export default function WorkHistory() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div style={{width: "15%", minWidth: "50px", maxWidth: "150px", height: "100%"}}>
        <Tabs
          orientation="vertical"
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          TabIndicatorProps={{style: {backgroundColor: lime["A200"]}}}
        >
          <Tab className={classes.tab} label="GovTech" {...a11yProps(0)} />
          <Tab className={classes.tab} label="BCG GAMMA" {...a11yProps(1)} />
          <Tab className={classes.tab} label="2OS" {...a11yProps(2)} />
        </Tabs>
      </div>

      <div style={{height: "100%", flexGrow:1}}>
        <TabPanel value={value} index={0}>
          <T variant="jobtitle">GovTech</T>
          <T>Some text</T>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <T variant="jobtitle">BCG Gamma</T>
          <T>Some text</T>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <T variant="jobtitle">2nd Order Solutions</T>
          <T>Some text</T>
        </TabPanel>
      </div>
    </div>
  );
}