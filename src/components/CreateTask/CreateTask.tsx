import './create-task.css';
import { useDispatch } from 'react-redux';
import { BaseSyntheticEvent, ChangeEvent, useState } from 'react';
import { addTask } from '../../redux/task/taskSlice';
import { CreateTaskComponent } from '../../types/components';

function CreateTask({ onToggleDropdown, displayedTasks }: CreateTaskComponent) {
  const [taskTitle, setTaskTitle] = useState('');

  const dispatch = useDispatch();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value);
  }

  function handleSubmit(e: Event | BaseSyntheticEvent) {
    e.preventDefault();

    setTaskTitle('');
    if (taskTitle === '') return;
    dispatch(addTask(taskTitle));
  }

  return (
    <div className="create-task">
      <button
        onClick={onToggleDropdown}
        className={`create-task__dropdown-button ${
          displayedTasks.length > 0 ? 'create-task__dropdown-button_active' : ''
        }`}
      />
      <form className='create-task__form' onSubmit={handleSubmit}>
        <div className="create-task__input-box">
          <input
            className="create-task__input"
            placeholder="What needs to be done?"
            value={taskTitle}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
