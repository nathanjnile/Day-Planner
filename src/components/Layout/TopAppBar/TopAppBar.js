import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    textAlign: "right"
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
  button: {
      padding:"20px"
  },
}));

const TopAppBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Day Planner
          </Typography>
          <Button color="inherit" className={classes.button}>STARTER</Button>
          <Button color="inherit" className={classes.button}>SCHEDULE</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopAppBar;