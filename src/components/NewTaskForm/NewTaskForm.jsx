import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

const NewTaskForm = ({ createTask }) => {
  const [value, setValue] = useState('');
  const [min, setMin] = useState();
  const [sec, setSec] = useState();
  const submitHendler = (e) => {
    e.preventDefault();
    createTask(value, min, sec);
    setValue('');
    console.log(11);
  };
  return (
    <form className="new-todo-form" onSubmit={(e) => submitHendler(e)}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        type="number"
        value={min}
        onChange={(e) => setMin(e.target.value)}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        type="number"
        value={sec}
        onChange={(e) => setSec(e.target.value)}
      />
    </form>
  );
};

NewTaskForm.defaultProps = {
  createTask: () => {},
};

NewTaskForm.propTypes = {
  createTask: PropTypes.func,
};

export default NewTaskForm;
