import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Task.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Task = ({ description, created, onDelete, onCompleted, completed }) => {
  const [editing, setEditing] = useState(false);
  const [newValue, setNewValue] = useState(description);
  const onChange = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  const classNames = [completed ? 'completed' : '', editing ? 'editing' : ''].join(' ');

  return (
    <li className={classNames}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={onCompleted} checked={completed} />
        <label>
          <span className="description">{newValue}</span>
          <span className="created">{formatDistanceToNow(created)}</span>
        </label>
        <button className="icon icon-edit" onClick={() => setEditing(true)}></button>
        <button className="icon icon-destroy" onClick={() => onDelete(created)}></button>
      </div>
      {editing ? (
        <form onSubmit={(e) => onChange(e)}>
          <input
            autoFocus
            className="edit"
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
        </form>
      ) : (
        false
      )}
    </li>
  );
};

Task.defaulprops = {
  description: '',
  created: 0,
  onDelete: () => {},
  onCompleted: () => {},
  completed: false,
};

Task.propTypes = {
  description: PropTypes.string,
  created: PropTypes.number,
  onDelete: PropTypes.func,
  onCompleted: PropTypes.func,
  completed: PropTypes.bool,
};

export default Task;
