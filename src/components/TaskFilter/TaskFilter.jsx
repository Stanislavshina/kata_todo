import React from 'react';
import PropTypes from 'prop-types';
import './TaskFilter.css';

const TaskFilter = ({ filters, toggleFilters }) => {
  return (
    <ul className="filters">
      {filters.map((f, index) => (
        <li key={index}>
          <button onClick={() => toggleFilters(f.name)} className={f.active ? 'selected' : ''}>
            {f.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

TaskFilter.defaultProps = {
  filters: [],
  toggleFilters: () => {},
};

TaskFilter.propTypes = {
  filters: PropTypes.array,
  toggleFilters: PropTypes.func,
};

export default TaskFilter;
