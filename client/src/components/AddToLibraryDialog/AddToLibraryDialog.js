import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from '@material-ui/core/styles';
import FileUploadButton from '../NavBar/FileUploadButton'

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  }
});

function AddToLibraryDialog({ open, onClose, classes }) {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle>Add a New Song</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="title"
          label="Song Title"
          fullWidth
        />
        <TextField
          margin="dense"
          id="artist"
          label="Artist"
          fullWidth
        />
        <FileUploadButton acceptedType="audio/*" className={classes.button}>
          Upload Song
        </FileUploadButton>
        <FileUploadButton acceptedType="image/*" className={classes.button}>
          Upload Cover Photo
        </FileUploadButton>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>
          Close
        </Button>
        <Button color="primary">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default withStyles(styles)(AddToLibraryDialog);
