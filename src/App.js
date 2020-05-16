import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { blueGrey, deepOrange } from '@material-ui/core/colors';
import { useStyles } from '@material-ui/core/styles'

import { T } from './styles/text_styles.js';
import { OutlineButton } from './components/OutlineButton.js';
import InlineLink from './styles/InlineLink.js';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FaceIcon from '@material-ui/icons/Face';
import WorkIcon from '@material-ui/icons/Work';
import FlareIcon from '@material-ui/icons/Flare';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
//import "react-vertical-timeline-component/style.min.css";
import "./styles/timeline_style.css";

import { events } from './data/events.js'

const defaultBackground = "#212b30"

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
  marginLeft: 360,
}

const timelineContentStyle = {
  background: blueGrey[800],
  fontFamily: "IBM Plex Mono",
  color: blueGrey[300],
  fontSize: 12,
}

function getIcon(name) {
  if (name == "flare") {
    return (<FlareIcon />)
  } else if (name == "face") {
    return (<FaceIcon />)
  } else if (name == "AddIcCall") {
    return (<AddIcCallIcon />)
  } else {
    return (<WorkIcon/>)
  }
  
}


function App() {
  return (
    <div>
    <div style={sidebarStyle}>
      <div style={{position: "relative", top: "5%"}}>
        <T variant="subtitle">Hello there! My name is</T>
        <T variant="h1">elizabeth lim</T>
        <T variant="highlight">I'm a data scientist trying to do things. </T>
        <p/>
        <T variant="subtitle">
          I've had the pleasure of living in Durham (NC), Boston and Washington D.C. during the past 4 years. I studied Economics at <InlineLink>Duke</InlineLink> and Business Analytics at <InlineLink>MIT</InlineLink>. I've also worked at <InlineLink>2nd Order Solutions</InlineLink> and <InlineLink>BCG GAMMA</InlineLink>.
          <p/>
          I'm currently back home in Singapore, working with <InlineLink>GovTech</InlineLink>. I focus on <b>end-to-end development of AI products</b>: from problem formulation, to modelling, to deployment and impact evaluation.
        </T>
        <OutlineButton size="small" variant="outlined" style={{marginTop:50}}>Resume</OutlineButton>
        <p/>
        <div style={{position: "relative", marginTop: 20, marginBottom: 50}}>
          <img 
            src={require("./profile_pic.png")} 
            style={{width: "90%", maxWidth: "200px", boxShadow: "7px 7px 0px 1px #ff5722"}}
          />
          <div style={{position: "absolute", top: "30%", left: "40%", backgroundColor: deepOrange[500], fontFamily: "IBM Plex Mono", fontSize: 11, color: "#000"}}><i><b>"cheers!"</b></i></div>
        </div>
        <T variant="subtitle" st>
          <div style={{display: 'flex', alignItems: 'center', marginBottom: 5}}>
            <LinkedInIcon style={{fontSize:18}}/>&nbsp;<InlineLink>LinkedIn</InlineLink>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <GitHubIcon style={{fontSize:18}}/>&nbsp;
            <InlineLink>GitHub</InlineLink>
          </div>
        </T>
        </div>
    </div>

  <div style={mainContentStyle}>
    <VerticalTimeline layout="1-column">
        { events.map(item => (
          <VerticalTimelineElement
            contentStyle={timelineContentStyle}
            onTimelineElementClick={() => console.log("hello")}
            //date="2011 - present"
            iconStyle={{ background: defaultBackground , color: "#fff"}}
            icon={getIcon(item.icon)}
          >
            <T variant="h1">{item.title}</T>
            <b>{item.location}</b>
            <p>
            <T variant="body1" dangerouslySetInnerHTML={{ __html: item.event}} />
            </p>
          </VerticalTimelineElement>
          )
        )}
    </VerticalTimeline>
    </div>
    </div>
  )
}

export default App;
