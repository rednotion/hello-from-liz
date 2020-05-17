import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { lime, blueGrey } from '@material-ui/core/colors';
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
    //display: 'flex',
    marginTop: 10,
    height: 'auto',
  },
  tabs: {
    borderBottom: `2px solid ${theme.palette.divider}`,
    indicator: {
      backgroundColor: "#fff", 
    },
    height: "100%",
    minHeight: "10px",
    padding: 0,
  },
  tab: {
    fontFamily: "IBM Plex Mono",
    minheight: "10px",
    height: "100%",
    padding: 0
  },
  description: {
    fontFamily: "Open Sans",
    fontSize: 20,
  },
  tabpanel: {
    '& .MuiBox-root': {
        paddingLeft: '20px',
    },
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
      <div style={{width: "100%", height: "50px"}}>
        <Tabs
          // orientation="vertical"
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

      <div style={{height: "100%", flexGrow: 1, width: "100%"}}>
        <TabPanel className={classes.tabpanel} value={value} index={0}>
          <T variant="jobtitle">GovTech</T>
        </TabPanel>

        <TabPanel className={classes.tabpanel} value={value} index={1}>
          <T variant="jobtitle">BCG Gamma</T>
          <T><ul>
          <li>Project focused on customer churn and retention for a large direct selling firm</li>
          <li>Scoped two different customer retention models and built tree-based predictors of customer progression and development</li>
          <li>Built large-scale database for the client with over 600 variables using SQL. Ensured that database was compatible for use with model development and use</li>
          </ul></T>
        </TabPanel>

        <TabPanel className={classes.tabpanel} value={value} index={2}>
          <T variant="jobtitle">2nd Order Solutions</T>
          <T><ul style={{marginBottom: 0, paddingBottom: 0}}>
          <li>Analyzed consumer loan performance metrics by location to recommend expanding bank’s direct mailing footprint for estimated >10% increase revenue; presented to Head of Credit Policy</li>
          <li>Formulated metrics evaluating customers’ ability to repay loans to assess and ensure compliance with state requirements</li>
          <li>Calculated alternative estimates of a customer’s lifetime value by restructuring long-term account data (57K accounts, 5 years) into forecast revenue streams</li>
          </ul></T>
        </TabPanel>
      </div>
    </div>
  );
}