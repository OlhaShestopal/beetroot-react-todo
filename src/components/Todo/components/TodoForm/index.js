import { useState } from 'react';

import { Button } from '../../../shared/Button';

import "./style.scss";

function TodoForm(props) {
  const { handleCreate } = props;

  const [hasError, setError] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim().length === 0) {
      setError(true);
      return;
    }

    handleCreate(value);
    e.target.reset();
  }

  const handleUpdate = e => {
    if (hasError) {
      setError(false);
    }
    setValue(e.target.value);
  }

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >
      <div className="todo-form__textfield">
        <label className={`matter-textfield-standard ${hasError && 'matter-error'}`}>
          <input
            placeholder=" "
            name="todo"
            onInput={handleUpdate}
            onBlur={() => setError(false)}
          />
          <span>New todo</span>
        </label>
        {hasError && <span className="error-message matter-error-text">
          Your todo should be contain minimum 1 letter 😡
        </span>}
      </div>

      <Button
        type="outlined"
        className="todo-form__submit"
        nativeType="submit"
      >
        Create
      </Button>
    </form>
  )
}

export {
  TodoForm
}