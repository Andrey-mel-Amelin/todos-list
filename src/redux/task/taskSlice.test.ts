import taskSlice, { addTask, removeTask, completeTask, unfinishedTask } from './taskSlice';

describe('taskSlice', () => {
  test('empty state', () => {
    const result = taskSlice(undefined, { type: '' });

    expect(result).toEqual({ notCompletedTasks: 0, tasksItems: [] });
  });

  test('add new task', () => {
    const action = { type: addTask.type, payload: 'Text' };

    const result = taskSlice({ notCompletedTasks: 0, tasksItems: [] }, action);

    expect(result.notCompletedTasks).toBe(1);
    expect(result.tasksItems[0].title).toBe('Text');
    expect(result.tasksItems[0].completed).toBe(false);
  });

  test('remove task', () => {
    const state = [
      {
        id: 1,
        title: '1',
        completed: false,
      },
      {
        id: 2,
        title: '2',
        completed: true,
      },
      {
        id: 3,
        title: '3',
        completed: false,
      },
    ];

    const result = taskSlice({ notCompletedTasks: 0, tasksItems: state }, { type: removeTask.type, payload: '' });

    expect(result.tasksItems).toEqual([
      {
        id: 1,
        title: '1',
        completed: false,
      },
      {
        id: 3,
        title: '3',
        completed: false,
      },
    ]);
  });

  test('complete tasks', () => {
    const action = {
      type: completeTask.type,
      payload: {
        id: 1,
        title: '1',
        completed: false,
      },
    };

    const result = taskSlice(
      {
        notCompletedTasks: 1,
        tasksItems: [
          {
            id: 1,
            title: '1',
            completed: false,
          },
          {
            id: 2,
            title: '2',
            completed: true,
          },
        ],
      },
      action
    );

    expect(result.tasksItems).toEqual([
      {
        id: 1,
        title: '1',
        completed: true,
      },
      {
        id: 2,
        title: '2',
        completed: true,
      },
    ]);
    expect(result.notCompletedTasks).toBe(0);
  });

  test('remove a task from completed state', () => {
    const action = {
      type: unfinishedTask.type,
      payload: {
        id: 2,
        title: '2',
        completed: true,
      },
    };

    const result = taskSlice(
      {
        notCompletedTasks: 1,
        tasksItems: [
          {
            id: 1,
            title: '1',
            completed: false,
          },
          {
            id: 2,
            title: '2',
            completed: true,
          },
        ],
      },
      action
    );

    expect(result.tasksItems).toEqual([
      {
        id: 1,
        title: '1',
        completed: false,
      },
      {
        id: 2,
        title: '2',
        completed: false,
      },
    ]);
    expect(result.notCompletedTasks).toBe(2);
  });
});
