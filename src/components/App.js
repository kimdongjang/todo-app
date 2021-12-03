import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: 'active',
      items: [
        {
          id: 1,
          text: 'Learn Javascript',
          completed: false
        },
        {
          id: 2,
          text: 'Learn React',
          completed: false
        },
        {
          id: 3,
          text: 'build a React App',
          completed: false
        }
      ]
    }
  }
  addNew(text) {
    let nextId = this.state.items.length + 1
    let item = {
      id: nextId,
      text: text,
      itmes: updatedList
    };
    let updatedList = this.state.items.concat([item]);

    this.setState({
      items: updatedList
    })
  }
  changeFilter(filter) {
    this.setState({ filter })
  }

  render() {
    let title = 'Things to do';

    return (
      // <h1 className="text-center">hello world</h1>
      // <h1></h1>
      <div className="container">
        <div className="row">
          <TodoList title={title}
            addNew={this.addNew.bind(this)}
            changeFilter={this.changeFilter.bind(this)}
            {...this.state}
          />
        </div>
      </div>
    );
  }
}


export default App;
