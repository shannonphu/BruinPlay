import React from 'react';
import {Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AddToLibraryDialog from '../AddToLibraryDialog/AddToLibraryDialog';

export default class AddToLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    const handleClickOpen = () => {
      this.setState({ open: true });
    };

    const handleClose = () => {
      this.setState({ open: false });
    };

    return <>
      <Button color="inherit" onClick={handleClickOpen}>Add to Library</Button>
      <AddToLibraryDialog open={this.state.open} onClose={handleClose} />
    </>;
  }
}
