import React, { Component } from 'react';
import trashCanImage from './trash-can.png';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: 24,
        height: 24,
        backgroundImage: `url(${trashCanImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        border: 'none'
    }
}

class DeleteButton extends Component {
    render() {
        const { classes } = this.props
        return <button className={classes.root} {...this.props}></button>
    }
}

export default withStyles(styles)(DeleteButton);