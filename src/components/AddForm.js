import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const AddForm = React.memo(({classes, inputValue, onInputChange, onSubmit}) => (
  <Paper
    component="form"
    className={classes.root}
    elevation={3}
    onSubmit={e => {
      e.preventDefault();
      onSubmit();
    }}
  >
    <InputBase
      className={classes.input}
      placeholder="write something..."
      type="text"
      value={inputValue}
      onChange={onInputChange}
      autoFocus
      required
    />
    <IconButton className={classes.iconButton} aria-label="Add" type="submit">
      <AddIcon />
    </IconButton>
  </Paper>
));

const styles = {
  root: {
    padding: '8px 16px',
    display: 'flex',
    alignItems: 'center',
    margin: '0 -25px',
    zIndex: 1000,
    borderRadius: 40
  },
  input: {
    fontSize: 20,
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
};

export default withStyles(styles)(AddForm);
