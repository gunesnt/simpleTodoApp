import React from 'react';
import update from 'immutability-helper';
import ManageLocalStorage from './helpers/ManageLocalStorage';
import {withStyles} from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';

class App extends React.PureComponent {
  state = {
    inputValue: '',
    todoList: ManageLocalStorage.load('todoList', [])
  };

  saveTodoList = () => {
    ManageLocalStorage.save('todoList', this.state.todoList);
  };

  onInputChange = e => {
    this.setState({inputValue: e.target.value});
  };

  onAdd = () => {
    const {inputValue} = this.state;
    const id = inputValue + Math.floor(Math.random() * 10000);
    const newTodo = {id, name: inputValue, completed: false};

    this.setState(
      update(this.state, {
        todoList: {$push: [newTodo]},
        inputValue: {$set: ''}
      }),
      this.saveTodoList
    );
  };

  onDelete = index => {
    this.setState(
      update(this.state, {
        todoList: {$splice: [[index, 1]]}
      }),
      this.saveTodoList
    );
  };

  onComplete = index => {
    this.setState(
      update(this.state, {
        todoList: {[index]: {$toggle: ['completed']}}
      }),
      this.saveTodoList
    );
  };

  render() {
    const {classes} = this.props;
    const {inputValue, todoList} = this.state;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={todoList.length ? 3 : 0}>
          <AddForm
            inputValue={inputValue}
            onInputChange={this.onInputChange}
            onSubmit={this.onAdd}
          />
          <TodoList
            list={todoList}
            onComplete={this.onComplete}
            onDelete={this.onDelete}
          />
        </Paper>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto'
  },
  paper: {
    width: 360,
    maxHeight: '80%',
    display: 'flex',
    flexDirection: 'column'
  }
});

export default withStyles(styles)(App);
