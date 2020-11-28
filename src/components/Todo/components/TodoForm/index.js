import { createRef } from 'react';

import { Button } from '../../../shared/Button';

import "./style.scss";

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
      <label className="matter-textfield-standard todo-form__textfield">
        <input placeholder="" name="todo" ref={input} />
        <span>New todo</span>
      </label>

      <Button
        type="outlined"
        className="todo-form__submit"
        native-type="submit"
      >
        Create
      </Button>
    </form>
  )
}

export {
  TodoForm
}