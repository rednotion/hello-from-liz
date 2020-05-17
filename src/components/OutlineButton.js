import Button from '@material-ui/core/Button';

import { blueGrey, lime } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles'


const OutlineButton = withStyles((theme) => ({
  root: {
    color: blueGrey[50],
    borderColor: blueGrey[50],
    fontSize: 12,
    fontFamily: "IBM Plex Mono",
    letterSpacing: 2,
    textTransform: "uppercase",
    fontWeight: 300,
    '&:hover': {
    	borderColor: lime["A200"],
        color: lime["A200"],
        backgroundColor: blueGrey[700],
    }
  },
}))(Button)

export { OutlineButton }