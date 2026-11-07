import prisma from '../config/db.js';

export async function findAll(filter) {
  if (typeof filter === 'boolean') {
    return prisma.task.findMany({ where: { completed: filter } });
  }

  if (filter && typeof filter === 'object') {
    if (typeof filter.completed === 'boolean') {
      return prisma.task.findMany({ where: { completed: filter.completed } });
    }
    if (filter.where) {
      return prisma.task.findMany(filter);
    }
  }

  return prisma.task.findMany();
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
