import { createSlice } from '@reduxjs/toolkit';
import { TaskType } from '../../types/types';

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasksItems: [] as TaskType[],
    notCompletedTasks: 0,
  },
  reducers: {
    addTask(state, action) {
      const newTask = { id: Date.now(), title: action.payload, completed: false };

      state.notCompletedTasks += 1;

      state.tasksItems.push(newTask);
    },

    removeTask(state) {
      const newTasksList = state.tasksItems.filter((taskItem: TaskType) => taskItem.completed === false);

      state.tasksItems = newTasksList;
    },

    completeTask(state, action) {
      const task = state.tasksItems.find((taskItem: TaskType) => taskItem.id === action.payload.id);

      if (state.notCompletedTasks !== 0) {
        state.notCompletedTasks -= 1;
      }

      state.tasksItems[state.tasksItems.indexOf(task!)].completed = true;
    },

    unfinishedTask(state, action) {
      const task = state.tasksItems.find((taskItem: TaskType) => taskItem.id === action.payload.id);

      state.notCompletedTasks += 1;
      
      state.tasksItems[state.tasksItems.indexOf(task!)].completed = false;
    },
  },
});

export const { addTask, removeTask, completeTask, unfinishedTask } = taskSlice.actions;
export default taskSlice.reducer;
