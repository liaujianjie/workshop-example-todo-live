import React, { Component } from 'react'
import Center from 'react-center'
import { Card, Elevation, Checkbox, EditableText } from '@blueprintjs/core'
import './App.css'
import TodoItem from './TodoItem'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newTodoString: '',
      todos: [
        {
          checked: false,
          text: 'Buy milk'
        },
        {
          checked: true,
          text: 'Buy cookies'
        }
      ]
    }
  }

  onTextChange = event => {
    this.setState({ newTodoString: event.target.value })
  }

  onTodoChange = (index, newTodo) => {
    const newTodos = Object.assign(this.state.todos, {
      [index]: newTodo
    })
    this.setState({ todos: newTodos });
  }

  onTodoCheckboxChange = (index, newChecked) => {
    const originalTodo = this.state.todos[index];
    this.onTodoChange(index, {
      ...originalTodo,
      checked: newChecked
    })
  }

  onTodoTextChange = (index, newText) => {
    const originalTodo = this.state.todos[index];
    this.onTodoChange(index, {
      ...originalTodo,
      text: newText
    })
  }

  onCreateNewTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [
        {
          checked: false,
          text: this.state.newTodoString
        },
        ...this.state.todos,
      ]
    })
  }

  render () {
    const todoItemComponents = this.state.todos.map((todo, index) => {
      return <TodoItem
        {...todo}
        key={index}
        onChecked={checked => this.onTodoCheckboxChange(index, checked)} />
    })
    return (
      <div className='App'>
        <Center>
          <Card className='Panel' elevation={Elevation.TWO}>
            {/* BIG TEXT FIELD */}
            <form onSubmit={this.onCreateNewTodo}>
              <input
                className='NewField pt-input pt-large'
                placeholder='Hit enter to add new todo...'
                value={this.state.newTodoString}
                onChange={this.onTextChange} />
            </form>

            {/* CHECKBOXES */}
            {todoItemComponents}
          </Card>
        </Center>
      </div>
    )
  }
}

export default App
