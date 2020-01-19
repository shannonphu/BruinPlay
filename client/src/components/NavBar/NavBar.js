import React from 'react';
import {AppBar, Button, Toolbar, IconButton, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
});

function NavBar({ classes }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          BruinPlay
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Add to Library</Button>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(NavBar);
