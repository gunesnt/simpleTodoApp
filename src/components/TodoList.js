import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import TodoItem from './TodoItem';
import List from '@material-ui/core/List';

const TodoList = React.memo(({classes, list, onComplete, onDelete}) =>
  list.length ? (
    <List className={classes.root}>
      {list.map((item, index) => (
        <TodoItem
          key={item.id}
          item={item}
          onComplete={() => onComplete(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </List>
  ) : null
);

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto'
  }
});

export default withStyles(styles)(TodoList);
