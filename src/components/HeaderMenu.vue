<template>
  <div class="left-section">
    <div v-if="isDarkMode" class="logo-container">
      <img src="@/assets/images/my_kanban_app_icon_picture_light_128px.png" alt="Logo" class="logo">
    </div>
    <div v-else class="logo-container">
      <img src="@/assets/images/my_kanban_app_icon_picture_dark_128px.png" alt="Logo" class="logo">
    </div>
    <div class="theme-title">
        <div :class="isDarkMode ? 'white-title' : 'black-title'"></div>
    </div>
  </div>

  <div class="right-section">
      <div @click="toggleTheme" class="theme-toggle">
        <div :class="isDarkMode ? 'light-icon' : 'dark-icon'"></div>
      </div>

      <div @click="openProfile" class="profile-image">
        <div :class="isDarkMode ? 'light-profile' : 'dark-profile'"></div>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle('dark-mode', isDarkMode.value);
  document.body.classList.toggle('light-mode',!isDarkMode.value);
  localStorage.setItem('darkMode', isDarkMode.value);
};

onMounted(() => {
    const storedTheme = localStorage.getItem('darkMode');
    if (storedTheme === 'true') {
        isDarkMode.value = true;
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
})

const openProfile = () => {
    console.log("Profile button clicked")
};
</script>
