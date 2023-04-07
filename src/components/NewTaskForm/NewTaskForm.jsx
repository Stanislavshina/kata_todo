import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

const NewTaskForm = ({ createTask }) => {
  const [value, setValue] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');
  const submitHendler = (e) => {
    e.preventDefault();
    createTask(value, min, sec);
    setValue('');
    setMin('');
    setSec('');
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
        value={min}
        onChange={(e) => setMin(e.target.value)}
        type="number"
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        value={sec}
        onChange={(e) => setSec(e.target.value)}
        type="number"
      />
      <button type="submit" className="button__form" />
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
