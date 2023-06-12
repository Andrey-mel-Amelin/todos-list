import './tasks.css';
import { TasksComponent } from '../../types/components';
import CreateTask from '../CreateTask/CreateTask';
import Task from '../Task/Task';

function Tasks({ onToggleDropdown, displayedTasks }: TasksComponent) {
  return (
    <div className="tasks">
      <CreateTask onToggleDropdown={onToggleDropdown} displayedTasks={displayedTasks} />
      {displayedTasks!.map((task) => (
        <Task key={task.id} task={task} title={task.title} completed={task.completed} />
      ))}
    </div>
  );
}

export default Tasks;
