import { Checkbox } from "../../../shared/Checkbox";
import { Button } from "../../../shared/Button";
import "./style.scss";

function TodoItem(props) {
  const { todo, handleDelete, handleUpdate } = props;

  return (
    <li className="todo-item">
      <Checkbox
        checked={todo.isCompleted}
        onChange={() => handleUpdate({
          ...todo,
          isCompleted: !todo.isCompleted
        })}
      />

      <p className={`matter-body1 todo-item__descr ${todo.isCompleted && 'todo-item__descr--completed'}`}>
        {todo.description}
      </p>

      <Button
        type="text"
        color="error"
        onClick={() => handleDelete(todo.id)}
      >
        Delete
      </Button>
    </li>
  )
}

export {
  TodoItem
}