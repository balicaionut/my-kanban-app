import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCardsStore = defineStore('storeCards', () => {
  const columns = ref([
    { id: 1, name: 'Todo', tasks: []},
    { id: 2, name: 'Active', tasks: []},
    { id: 3, name: 'Done', tasks: []},
  ]);

  function addTasks(tasks) {
    tasks.forEach(task => {
      const { status, position } = task;
      const column = columns.value.find(column => column.id === status);
      if (column) {
        // Make sure the position is within the bounds of the tasks array
        const actualPosition = Math.max(0, Math.min(position, column.tasks.length));
        column.tasks.splice(actualPosition, 0, task);
      }
    });
  }

  function moveTask(fromColumnId, toColumnId, task, newPosition) {
    // Remove the task from its current position
    const fromColumn = columns.value.find(column => column.id === fromColumnId);
    if (fromColumn) {
      fromColumn.tasks = fromColumn.tasks.filter(t => t.id!== task.id);
    }

    // Add the task to the new position in the target column
    const toColumn = columns.value.find(column => column.id === toColumnId);
    if (toColumn) {
      // Ensure the new position is within the bounds of the tasks array
      const actualNewPosition = Math.max(0, Math.min(newPosition, toColumn.tasks.length));
      toColumn.tasks.splice(actualNewPosition, 0, {...task, columnId: toColumnId });
    }
  }

  return { columns, addTasks, moveTask };
});
