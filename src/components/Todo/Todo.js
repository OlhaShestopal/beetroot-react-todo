import { useState } from "react";
import { nanoid } from 'nanoid';

import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';

import "./todo.scss";

function Todo() {
  const [todos, updateTodos] = useState([])

  const createTodo = (description) => {
    const todo = {
      description,
      id: nanoid(),
      isCompleted: false,
      timestamp: Date.now()
    }
    updateTodos([todo, ...todos])
  }

  return (
    <div className="todo">
      <ul className="todo__list">
        {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
      </ul>
      <TodoForm handleCreate={createTodo} />
    </div>
  )
}

export {
  Todo
}