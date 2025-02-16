<template>
  <div class="kanban-board">
    <draggable
      v-for="column in columns"
      :key="column.id"
      class="kanban-column"
      :list="column.tasks"
      group="tasks"
      @change="onTaskMove"
      item-key="id"
    >
      <template #header>
        <h3>{{ column.name }}</h3>
      </template>
      <template #item="{ element: task }">
        <div class="kanban-task">
          {{ task.name }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup>
import { useRootStore } from '@/stores/storeRoot';
import draggable from 'vuedraggable';
import { onMounted, computed } from 'vue';

const cardsStore = useRootStore().cardsStore;

onMounted(async () => {
  // Fetch tasks from API or any other source
  const tasks = await fetchTasks(); // Replace with your actual fetch logic

  // Add tasks to the board
  cardsStore.addTasks(tasks);
});

const columns = computed(() => cardsStore.columns);

const onTaskMove = (event) => {
  const { moved, added, from, to } = event;

  if (moved && from) { // Check if moved and from are defined
    const fromColumnId = parseInt(from.dataset.id, 10);
    cardsStore.moveTask(fromColumnId, fromColumnId, moved.element, moved.newIndex);
  } else if (added && from && to) { // Check if added, from, and to are defined
    const fromColumnId = parseInt(from.dataset.id, 10);
    const toColumnId = parseInt(to.dataset.id, 10);
    cardsStore.moveTask(fromColumnId, toColumnId, added.element, added.newIndex);
  }
};

// Placeholder for fetching tasks
async function fetchTasks() {
  return [
    { id: 1, name: 'Task 1', status: 1, position: 0 },
    { id: 2, name: 'Task 2', status: 1, position: 1 },
    { id: 3, name: 'Task 3', status: 2, position: 0 },
    { id: 4, name: 'Task 4', status: 3, position: 0 },
    { id: 5, name: 'Task 5', status: 3, position: 1 },
  ];
}
</script>
