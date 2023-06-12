import { TaskType } from './types';

type State = {
  task: {
    tasksItems: TaskType[];
    notCompletedTasks: number;
  };
};

export type { State };
