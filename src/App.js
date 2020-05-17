import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import { blueGrey, deepOrange } from '@material-ui/core/colors';
import { useStyles } from '@material-ui/core/styles'

import { OutlineButton } from './components/OutlineButton.js';
import InlineLink from './styles/InlineLink.js';
import WorkHistory from './components/WorkHistory.js';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FaceIcon from '@material-ui/icons/Face';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import FlareIcon from '@material-ui/icons/Flare';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';

// css
import "./styles/timeline_style.css";
import './styles/main.css';

// data
import { events } from './data/events.js'
import { links } from './data/links.js'

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
  width: "35%",

}

const mainContentStyle = {
  marginLeft: "40%"
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
  } else if (name == "call") {
    return (<AddIcCallIcon />)
  } else {
    return (<WorkOutlineIcon/>)
  }
  
}

function getEvent(text) {
  if (text == 'get_work') {
    return <WorkHistory/>
  } else {
    return <div class="content" dangerouslySetInnerHTML={{ __html: text}} />
  }
}


function App() {
  return (
    <div>
    <div style={sidebarStyle}>
      <div class="sidebar" style={{position: "relative", top: "5%"}}>
        <code>Hello there! My name is</code>
        <h1>elizabeth lim</h1>
        <code><b>and I'm a data scientist.</b></code>
        <p/>
        I've had the pleasure of living in Durham (NC), Boston and Washington D.C. during the past 4 years. 
        I studied Economics at <InlineLink>Duke</InlineLink> and Business Analytics at <InlineLink>MIT</InlineLink>. 
        I've also worked at <InlineLink>2nd Order Solutions</InlineLink> and <InlineLink>BCG GAMMA</InlineLink>.
        <p/>
        I'm currently back home in Singapore, working with <InlineLink href={links["govtech"]} target="_blank" rel="noopener noreferrer">GovTech</InlineLink>. 
        I focus on <b>end-to-end development of AI products</b>: from problem formulation, to modelling, to deployment and impact evaluation.
        <br/>

        <OutlineButton size="small" variant="outlined" style={{marginTop:50}}>Resume</OutlineButton>

        <p/>

        <div class="sidebar-image-container">
          <img src={require("./profile_pic.png")} />
          <caption><i>"cheers!"</i></caption>
        </div>

        <div class="sidebar-icon">
          <LinkedInIcon style={{fontSize:18}}/>&nbsp;
          <InlineLink href={links["linkedin"]} target="_blank" rel="noopener noreferrer">LinkedIn</InlineLink>
        </div>
        <div class="sidebar-icon">
          <GitHubIcon style={{fontSize:18}}/>&nbsp;
          <InlineLink href={links["github"]} target="_blank" rel="noopener noreferrer">GitHub</InlineLink>
        </div>

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
            <div class="content"><h1>{item.title}</h1></div>
            { getEvent(item.event) }
          </VerticalTimelineElement>
          )
        )}
    </VerticalTimeline>
    </div>
    </div>
  )
}



export default App;
