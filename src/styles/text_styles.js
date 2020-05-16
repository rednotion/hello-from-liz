import Typography from '@material-ui/core/Typography';

import { blueGrey, pink, deepOrange } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles'

const T = withStyles((theme) => ({
  root: {
    color: blueGrey[50],
    fontFamily: "Open Sans",
    fontWeight: 300,
  },
  h1: {
  	fontFamily: "Rubik Mono One",
    fontSize: 20,
  }, 
  highlight: {
  	fontFamily: "IBM Plex Mono",
  	color: deepOrange[500],
  	fontSize: 12,
  	fontWeight: 600,
  },
  subtitle: {
  	fontFamily: "IBM Plex Mono",
  	color: blueGrey[200],
  	fontSize: 12,
  	fontWeight: 300,
  },
  body1: {
    fontSize: 12,
  },
}))(Typography)

export { T }