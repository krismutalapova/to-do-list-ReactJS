import React, { Component } from 'react';

class AddTask extends Component {

    constructor() {
        super();
        this.state = {
            task: '',
        }
    }

    addTask = (event) => {
       this.setState({task: event.target.value});
    };

    submitTask = (event) => {
        event.preventDefault();
        this.props.addTask(this.state.task);
        document.querySelector('input').value = '';
    };

    render() {
        return (
            <section>
                <form onSubmit={(event) => this.submitTask(event)} className="todo__form">
                    <input onChange={(event) => this.addTask(event)} className="todo__input" id="input" type="text" placeholder="Enter task"></input>
                    <button type="submit">Add</button>
                </form>
            </section> 
        )
    }
}

export default AddTask;