import { useState } from 'react';

import { Button } from '../../../shared/Button';
import { Input as CustomInput } from '../../../shared/Input';

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
      <CustomInput
        className="todo-form__textfield"
        name="todo"
        onInput={handleUpdate}
        onBlur={() => setError(false)}
        errorMessage={hasError && "Your todo should be contain minimum 1 letter 😡"}
      >
        New todo
      </CustomInput>

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