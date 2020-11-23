import { createRef } from 'react';

import { IconButton } from '../../../shared/IconButton';
import { Icon } from '../../../shared/Icon';

import "./todoForm.scss";

function TodoForm(props) {
  const { handleCreate } = props;
  const input = createRef(null);

  const handleSubmit = e => {
    e.preventDefault()
    const { value } = input.current;

    if (value.trim().length === 0) {
      // Show error...
      return;
    }
    handleCreate(value);
    e.target.reset()
  }

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="todo"
        ref={input}
        className="todo-form__textfield"
      />

      <IconButton className="todo-form__submit">
        <Icon icon="create" />
      </IconButton>
    </form>
  )
}

export {
  TodoForm
}