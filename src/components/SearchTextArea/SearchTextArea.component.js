// took out { Component } from import and added React. to the class below, just as an example.

import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


  class SearchTextArea extends Component {
    render() { 
      return ( 
          <TextField
          id="Helper text"
          label="Input Info"
          defaultValue="Search Entry"
          helperText="Happy searching!"
          margin="normal"
        />
      );
    }
  }

export default SearchTextArea;
