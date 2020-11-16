import { createRef } from 'react';
import "./todoForm.scss";

function TodoForm() {
  const input = createRef(null);

  const handleSubmit = e => {
    e.preventDefault()
    const { value } = input.current;

    if (value.trim().length === 0) {
      // Show error...
      return;
    }

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

      <button className="todo-form__submit" />
    </form>
  )
}

export {
  TodoForm
}