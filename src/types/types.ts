type TaskType = {
  id: number;
  task?: TaskType;
  title: string;
  completed: boolean;
};

export type { TaskType };
