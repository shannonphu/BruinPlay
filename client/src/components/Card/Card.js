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
    },
    overlay: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.35s',
        color: '#007bff',
        cursor: 'pointer',
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
                    <CardMedia className={classes.thumbnail} image={this.props.audioImageSrc}/>
                </div>
                <CardContent>
                    <Typography variant="body2" align="left"><b>{this.props.title}</b></Typography>
                    <Typography variant="body2" align="left">{this.props.artistName}</Typography>
                </CardContent>
                <div align="right" style={{padding: 20}}>
                    <DeleteButton/>
                </div>
            </MUICard>
        );
    }
}

export default withStyles(styles)(Card);
