import { useDispatch } from 'react-redux';
import './task.css';
import { BaseSyntheticEvent } from 'react';
import { completeTask, unfinishedTask } from '../../redux/task/taskSlice';
import { TaskComponent } from '../../types/components';

function Task({ task, title, completed }: TaskComponent) {
  const dispatch = useDispatch();

  function handleToggleTask(e: Event | BaseSyntheticEvent) {
    e.stopPropagation();
    if (!completed) {
      dispatch(completeTask(task));
    } else {
      dispatch(unfinishedTask(task));
    }
  }

  return (
    <div className="task">
      <label className='task__checkbox-box'>
        <input className="task__checkbox" type="checkbox" checked={completed} onChange={handleToggleTask} />
        <span className='task__checkbox-icon'>&#10003;</span>
      </label>
      <h3 className={`task__title ${completed ? 'task__title_unactive' : ''}`}>{title}</h3>
    </div>
  );
}

export default Task;
