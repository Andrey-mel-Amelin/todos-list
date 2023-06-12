import './tasks-panel.css';
import { useDispatch, useSelector } from 'react-redux';
import { TasksPanelComponent } from '../../types/components';
import { State } from '../../types/redux';
import { removeTask } from '../../redux/task/taskSlice';

function TasksPanel({ openTaskList, activeButton, onHandleActiveButton }: TasksPanelComponent) {
  const dispatch = useDispatch();

  const itemsLeft = useSelector((state: State) => state.task.notCompletedTasks);

  function clearCompleted() {
    dispatch(removeTask());
  }

  return (
    <div className="tasks-panel">
      {`${itemsLeft} items left`}

      <div className="tasks-panel__button-box">
        <button
          className={`tasks-panel__button ${activeButton === 'all' ? 'tasks-panel__button_active' : ''}`}
          onClick={() => {
            onHandleActiveButton('all');
            openTaskList(true);
          }}
        >
          All
        </button>
        <button
          className={`tasks-panel__button ${activeButton === 'active' ? 'tasks-panel__button_active' : ''}`}
          onClick={() => {
            onHandleActiveButton('active');
            openTaskList(true);
          }}
        >
          Active
        </button>
        <button
          className={`tasks-panel__button ${activeButton === 'completed' ? 'tasks-panel__button_active' : ''}`}
          onClick={() => {
            onHandleActiveButton('completed');
            openTaskList(true);
          }}
        >
          Completed
        </button>
      </div>

      <button className="tasks-panel__button tasks-panel__button_type_clear" onClick={clearCompleted}>
        Clear completed
      </button>
    </div>
  );
}

export default TasksPanel;
