import React, { Component } from 'react';

class Todo extends Component {
    render() {
        const { task } = this.props;
        const className = 'todo__task' + (task.done ? " done" : " pending");

        return (
        <div className={className} onClick={this.updateTask}>
            <p>{task.text}
                <span aria-label="delete" role="img" onClick={this.deleteTask}>❌</span>
            </p>
        </div>
        );
    }

    updateTask = () => {
        this.props.updateTask(this.props.task);
    }

    deleteTask = () => {
        this.props.deleteTask(this.props.task);
    }
}

export default Todo;