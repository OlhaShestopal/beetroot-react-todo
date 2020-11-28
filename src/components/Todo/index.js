import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';

import { Loader } from '../shared/Loader';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';
import { exclude } from './lib/exclude';
import * as api from '../../api/todos';

import "./style.scss";

function Todo() {
  const [todos, setTodos] = useState({})
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, [])

  const fetchTodos = async () => {
    setLoading(true)
    const response = await api.fetchTodos()
    setTodos(response);
    setLoading(false)
  }

  const createTodo = (description) => {
    const todo = {
      description,
      id: nanoid(),
      isCompleted: false,
      timestamp: Date.now()
    };

    setTodos({
      ...todos,
      [todo.id]: todo
    });
  }

  const deleteTodo = (id) => {
    const filteredTodos = exclude({
      key: id,
      source: todos
    });

    setTodos(filteredTodos);
  }

  const updateTodo = (todo) => {
    setTodos({
      ...todos,
      [todo.id]: todo
    });

    if (selectedTodo) {
      setSelectedTodo(null);
    }
  }

  return (
    <div className="todo">
      {isLoading && <Loader className="todo__loader" />}
      <div className="todo__container">
        {
          !isLoading &&
          <>
            {
              Object.values(todos).length > 0 ?
                <ul className="todo__list">
                  {
                    Object.values(todos).map(todo =>
                      <TodoItem
                        handleDelete={deleteTodo}
                        handleUpdate={updateTodo}
                        handleSelect={setSelectedTodo}
                        todo={todo}
                        key={todo.id}
                      />)
                  }
                </ul> :
                <p className="matter-h5 todo__empty-message">You have not any todos 🤔</p>
            }
          </>
        }
      </div>

      <TodoForm
        handleCreate={createTodo}
        handleUpdate={updateTodo}
        selectedTodo={selectedTodo}
      />
    </div>
  )
}

export {
  Todo
}