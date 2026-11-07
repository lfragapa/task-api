import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  try {
    const { completed } = req.query;
    let filter;
    if (completed !== undefined) {
      filter =
        completed === 'true' ||
        completed === '1' ||
        completed === 1 ||
        completed === true;
    }
    const tasks = await taskService.getAllTasks(filter);
    res.json(tasks);
  } catch (error) {
    next(error);
  }
}

export async function createTask(req, res, next) {
  try {
    const { title, completed } = req.body;
    const task = await taskService.createTask({ title, completed });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
}
