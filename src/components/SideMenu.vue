<template>
  <div class="project-list">
    <div
      v-for="project in projects"
      :key="project.id" class="project-item"
      @click="goToProject(project.id)"
      @mouseover="isHovering = project.id"
      @mouseleave="isHovering = null"
      :class="{
        'hovered': isHovering === project.id,
        'active': selectedProjectId === project.id
        }"
    >
      {{ project.name }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const projects = ref([
  { id: 1, name: 'Project 1' },
  { id: 2, name: 'Project 2' },
  { id: 3, name: 'Project 3' },
]);

const isHovering = ref(null);
const selectedProjectId = ref(null);

const goToProject = (projectId) => {
  selectedProjectId.value = projectId; // Update selected project
  console.log('Going to project:', projectId);
  // In the future, load the board for the respective project here
};

onMounted(() => {
  // Set the initial selection to the first project when the component mounts
  if (projects.value.length > 0) {
    selectedProjectId.value = 1;
  }
});
</script>
