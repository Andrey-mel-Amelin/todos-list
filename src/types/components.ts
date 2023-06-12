import { TaskType } from './types';

type TasksComponent = {
  onToggleDropdown: () => void;
  displayedTasks: TaskType[];
};

type CreateTaskComponent = {
  onToggleDropdown: () => void;
  displayedTasks: TaskType[];
};

type TasksPanelComponent = {
  openTaskList: React.Dispatch<React.SetStateAction<boolean>>;
  activeButton: string;
  onHandleActiveButton: React.Dispatch<React.SetStateAction<string>>;
};

type TaskComponent = {
  task: TaskType;
  title: string;
  completed: boolean;
};

export type { TaskComponent, CreateTaskComponent, TasksPanelComponent, TasksComponent };
