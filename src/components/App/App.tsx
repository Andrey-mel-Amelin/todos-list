import './app.css';
import Tasks from '../Tasks/Tasks';
import { useSelector } from 'react-redux';
import { State } from '../../types/redux';
import { useState } from 'react';
import TasksPanel from '../TasksPanel/TasksPanel';

function App() {
  const [activeButton, setActiveButton] = useState('all');
  const [dropdownActive, setDropdownActive] = useState(false);

  const tasks = useSelector((state: State) => state.task.tasksItems);

  const displayedTasks =
    activeButton === 'all' && dropdownActive === true
      ? tasks
      : activeButton === 'active' && dropdownActive === true
      ? tasks.filter((task) => task.completed === false)
      : activeButton === 'completed' && dropdownActive === true
      ? tasks.filter((task) => task.completed === true)
      : [];

  function toggleDropdown() {
    setDropdownActive((active) => !active);
  }

  return (
    <div className="app">
      <h1 className="app__title">todos</h1>
      <Tasks onToggleDropdown={toggleDropdown} displayedTasks={displayedTasks} />
      <TasksPanel openTaskList={setDropdownActive} activeButton={activeButton} onHandleActiveButton={setActiveButton} />
    </div>
  );
}

export default App;
