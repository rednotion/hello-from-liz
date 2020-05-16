import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { blueGrey } from '@material-ui/core/colors';
import { useStyles } from '@material-ui/core/styles'

import { T } from './styles/text_styles.js';
import { OutlineButton } from './components/OutlineButton.js';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

const defaultBodyStyle = {}

const sidebarStyle = {
  backgroundColor: blueGrey[900],
  color: blueGrey[100],
  boxShadow: "5px 0px 10px 0px #151b1f",
  padding: "2%",
  position: "fixed", 
  top: 0, 
  left: 0,
  height: "100%",
  width: 300,

}

const mainContentStyle = {
  //backgroundColor: "#212b30",
  marginLeft: 400,
  border: "1px solid red",
  padding: "2%",
  //color: blueGrey[50],
}

function App() {
  return (
    <div style={defaultBodyStyle}>

  <div style={sidebarStyle}>
    <div style={{position: "relative", top: "10%"}}>
      <T variant="subtitle">Hello there! My name is</T>
      <T variant="h1">elizabeth lim</T>
      <T variant="highlight">I'm a <u>data scientist</u> trying to do things.</T>
      <T>Previously, I was at Duke, MIT, now at GovTech</T>
      <p/>
      <img src={require("./profile_pic.png")} style={{width: "90%", maxWidth: "200px", boxShadow: "7px 7px 0px 1px #ff5722"}}/>
      <p/>
      <OutlineButton size="small" variant="outlined">Resume</OutlineButton>
      <p/>
    <T variant="subtitle">
      <div style={{display: 'flex', alignItems: 'center', marginBottom: 5}}>
        <LinkedInIcon style={{fontSize:18}}/>&nbsp;LinkedIn
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <GitHubIcon style={{fontSize:18}}/>&nbsp;GitHub<br/>
      </div>
      </T>
      </div>
  </div>

    <div style={mainContentStyle}>
      <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2011 - present"
        icon={<GitHubIcon />}
        contentStyle={{ border: "1px solid yellow"}}
    >
        <h3>Creative Director</h3>
        <h4>Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--plau"
        contentStyle={{ border: "1px solid yellow"}}
        date="2011 - present"
        icon={<GitHubIcon />}
    >
        <h3>Creative Director</h3>
        <h4>Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
    </VerticalTimelineElement>
    </VerticalTimeline>
    </div>

    </div>
  )
}

export default App;
