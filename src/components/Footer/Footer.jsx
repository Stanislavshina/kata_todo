import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';
import TaskFilter from '../TaskFilter/TaskFilter';

const Footer = ({ filters, toggleFilters, clearCompleted, todoLength }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{todoLength} items left</span>
      <TaskFilter filters={filters} toggleFilters={toggleFilters} />
      <button className="clear-completed" onClick={() => clearCompleted()}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  filters: [],
  toggleFilters: () => {},
  clearCompleted: () => {},
  todoLength: 0,
};

Footer.propTypes = {
  filters: PropTypes.array,
  toggleFilters: PropTypes.func,
  clearCompleted: PropTypes.func,
  todoLength: PropTypes.number,
};

export default Footer;
