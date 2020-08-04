import React, { Component } from 'react';
import Todo from './Todo.jsx';

class TodoList extends Component {
  render() {
    const { tasks } = this.props;
    const pendingTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);

    return (
      <div className="todo__list"> 
      {
        [...pendingTasks, ...doneTasks].map((task, idx) => {
          return(
          <Todo updateTask={this.updateTask} deleteTask={this.deleteTask} key={idx} task={task} />
          )
        })
      }    
      </div>
    );
  }

  updateTask = task => {
    this.props.updateTask(task);
  }

  deleteTask = task => {
    this.props.deleteTask(task);
  }
}

export default TodoList;