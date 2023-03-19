import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

const NewTaskForm = ({ createTask }) => {
  const [value, setValue] = useState('');
  const submitHendler = (e) => {
    e.preventDefault();
    createTask(value);
    setValue('');
  };
  return (
    <form onSubmit={(e) => submitHendler(e)}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
