import { Checkbox } from "../../../shared/Checkbox";
import { Icon } from "../../../shared/Icon";
import { IconButton } from "../../../shared/IconButton";
import "./todoItem.scss";

function TodoItem(props) {
  const { todo } = props;

  return (
    <li className="todo-item">
      <Checkbox checked={todo.isCompleted} />

      <p className="todo-item__descr">
        {todo.description}
      </p>

      <IconButton>
        <Icon icon="delete" />
      </IconButton>
    </li>
  )
}

export {
  TodoItem
}