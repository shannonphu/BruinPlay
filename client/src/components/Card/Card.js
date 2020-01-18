import React, { Component } from 'react';
import MUICard from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import DeleteButton from '../DeleteButton/DeleteButton';

const styles = {
    card: {
        width: 200,
    },
    thumbnail: {
        width: '100%',
        height: 200
    },
    overlayContainer: {
        position: 'relative',
        '& :hover': {
            filter: 'brightness(50%)'
        }
    },
    overlay: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.25s',
        color: '#007bff',
    },
    overlayHidden: {
        opacity: 0,
    }
}

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false,
        };
    }

    toggleHover = () => {
        this.setState((oldState) => {
            return {
                hover: !oldState.hover,
            }
        });
    }

    render() {
        const { classes } = this.props;

        let overlayClassName = classes.overlay;
        if (!this.state.hover) {
            overlayClassName += ` ${classes.overlayHidden}`
        }

        return (
            <MUICard className={classes.card}>
                <div className={classes.overlayContainer} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                    <div className={overlayClassName}>▶</div>
                    <CardMedia className={classes.thumbnail} image="https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/29744876_2440318372661037_5050247441176524648_o.png?_nc_cat=1&_nc_ohc=ml2RGlGbqacAX9AfQAK&_nc_ht=scontent-lax3-1.xx&oh=117474cbfebdd7327e279ea9fc1e29fc&oe=5E976E39"/>
                </div>
                <CardContent>
                    <Typography variant="body2" align="left"><b>Versace on the Floor</b></Typography>
                    <Typography variant="body2" align="left">Bruno Mars</Typography>
                </CardContent>
                <div align="right" style={{padding: 20}}>
                    <DeleteButton/>
                </div>
            </MUICard>
        );
    }
}

export default withStyles(styles)(Card);
