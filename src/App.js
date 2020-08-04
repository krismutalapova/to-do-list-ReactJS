import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks:[],
    }
  }

  componentDidMount = () => {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      const storedTasks = JSON.parse(tasks);
      this.setState({ 
        tasks: storedTasks,
       });
    };
  };

  addTask = async task => {
    await this.setState({tasks: [...this.state.tasks, {
      id: Date.now(),
      text: task,
      done: false,
      }]
    });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  };

  updateTask = async task => {
    const newTasks = this.state.tasks.map(done => {
      if (task === done)
        return {
          text: task.text,
          done: !task.done,
        }
      return done; 
    });
    await this.setState({ tasks: newTasks });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  };

  deleteTask = async id => {
    const idx = this.state.tasks.map(task => task.id).indexOf(id);
    const leftTasks = this.state.tasks.splice(idx, 1);
    await this.setState({ tasks: leftTasks });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  };
 
  render(){
    return (
      <div className="todo__container">
        <header className="todo__header">
          <h1>Welcome to To-Do App</h1>
          <p className="todo_count"> 
            Pending tasks: {this.state.tasks.filter(task => !task.done).length}
          </p>
        </header>
        <AddTask addTask={this.addTask}/>
        <TodoList updateTask={this.updateTask} 
          tasks={this.state.tasks} 
          deleteTask={this.deleteTask}/>
      </div>
    );
  }
}

export default App;