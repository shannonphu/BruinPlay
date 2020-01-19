import React from 'react';
import {Button, Typography} from '@material-ui/core';

// https://html.spec.whatwg.org/C/#file-upload-state-(type=file)
function extractFilename(path) {
  if (path.substr(0, 12) == "C:\\fakepath\\")
    return path.substr(12); // modern browser
  var x;
  x = path.lastIndexOf('/');
  if (x >= 0) // Unix-based path
    return path.substr(x + 1);
  x = path.lastIndexOf('\\');
  if (x >= 0) // Windows-based path
    return path.substr(x + 1);
  return path; // just the file name
}

export default class FileUploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filename: ''
    };
  }

  render() {
    return <>
      <label className={this.props.className}>
        <input
          accept={this.props.acceptedType}
          style={{ display: 'none' }}
          type="file"
          onChange={e => this.setState({ filename: extractFilename(e.target.value) })}
        />
        <Button variant="contained" component="span" color="primary">
          {this.props.children}
        </Button>
        <Typography component="span" style={{
          marginLeft: '6px'
        }}>{this.state.filename}</Typography>
      </label>
    </>
  }
}
