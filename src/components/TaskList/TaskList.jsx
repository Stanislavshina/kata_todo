import React from 'react';
import PropTypes from 'prop-types';

import './TaskList.css';
import Task from '../Task/Task';

const TaskList = ({ tasks, onDelete, onCompleted }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          completed={task.completed}
          onCompleted={() => onCompleted(task.id)}
          onDelete={onDelete}
          description={task.body}
          key={task.id}
          created={task.id}
        />
      ))}
    </ul>
  );
};

TaskList.defaultProps = {
  tasks: [],
  onDelete: () => {},
  onCompleted: () => {},
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func,
  onCompleted: PropTypes.func,
};

export default TaskList;
