import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(filter) {
  let completedFilter;

  if (filter !== undefined) {
    if (typeof filter === 'object' && filter !== null) {
      if (filter.completed !== undefined) {
        completedFilter =
          filter.completed === true ||
          filter.completed === 'true' ||
          filter.completed === 1 ||
          filter.completed === '1';
      }
    } else {
      completedFilter =
        filter === true ||
        filter === 'true' ||
        filter === 1 ||
        filter === '1';
    }
  }

  return taskRepository.findAll(
    completedFilter !== undefined ? { completed: completedFilter } : undefined,
  );
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
