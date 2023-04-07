import React, { useState } from 'react';

import './App.css';
import Footer from './components/Footer/Footer';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState([
    { name: 'All', active: true },
    { name: 'Active', active: false },
    { name: 'Completed', active: false },
  ]);
  const [active, setActive] = useState('All');

  const createTask = (value, min, sec) => {
    const newTask = {
      id: Date.now(),
      body: value,
      editing: false,
      completed: false,
      min: min,
      sec: sec,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleFilters = (name) => {
    setActive(name);
    return setFilters(filters.map((f) => (f.name === name ? { ...f, active: true } : { ...f, active: false })));
  };

  const getFilteredTasks = () => {
    if (active === 'All') {
      return tasks;
    }
    if (active === 'Completed') {
      return tasks.filter((task) => task.completed);
    }
    if (active === 'Active') {
      return tasks.filter((task) => !task.completed);
    }
  };

  const toggleCompleted = (arr, id, prop) => {
    const elIndx = arr.findIndex((el) => el.id === id);
    const el = arr[elIndx];
    const newEl = { ...el, [prop]: !el[prop] };
    return [...arr.slice(0, elIndx), newEl, ...arr.slice(elIndx + 1, arr.lenth)];
  };

  const onCompleted = (id) => {
    setTasks(toggleCompleted(tasks, id, 'completed'));
  };

  const onDelete = (idToDelete) => {
    setTasks(tasks.filter((task) => task.id !== idToDelete));
  };

  const clearCompleted = () => {
    return setTasks(tasks.filter((task) => !task.completed));
  };

  const todoLength = tasks.filter((task) => !task.completed).length;
  return (
    <div className="App todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm createTask={createTask} />
      </header>
      <main className="main">
        <TaskList onCompleted={onCompleted} tasks={getFilteredTasks()} onDelete={onDelete} />
      </main>
      <Footer todoLength={todoLength} filters={filters} toggleFilters={toggleFilters} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
