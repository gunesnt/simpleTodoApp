import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Collapse from '@material-ui/core/Collapse';

class TodoItem extends React.PureComponent {
  state = {
    collapsed: false
  };

  componentDidMount() {
    this.setState({collapsed: true});
  }

  onDelete = () => {
    this.setState({collapsed: false}, () =>
      setTimeout(() => this.props.onDelete(), 500)
    );
  };

  render() {
    const {collapsed} = this.state;
    const {classes, item, onComplete} = this.props;

    return (
      <Collapse in={collapsed} timeout={500}>
        <ListItem role={undefined} dense button onClick={onComplete}>
          <Checkbox
            checked={item.completed}
            tabIndex={-1}
            disableRipple
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
          />
          <Typography variant="subtitle1" style={{marginRight: 16}}>
            {item.name}
          </Typography>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={this.onDelete}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Collapse>
    );
  }
}

const styles = {
  root: {
    '&$checked': {
      color: green[500]
    }
  },
  checked: {}
};

export default withStyles(styles)(TodoItem);
