<template>
  <div class="not-found-container">
    <div class="content">
      <div class="error-code">404</div>
      <div class="error-message">
        <p>Oops, This Page Not Found!</p>
        <p class="small-text">The link might be corrupted.</p>
        <p class="small-text">or the page may have been removed.</p>
      </div>
      <RouterLink to="/home" class="go-back-button">GO BACK HOME</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f8f8;
  flex-direction: column; /* Align items vertically */
  gap: 20px; /* Spacing between elements */
}
.content {
  text-align: center;
}
.error-code {
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.error-message {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
.small-text {
  font-size: 1rem;
}
.go-back-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.go-back-button:hover {
  background-color: #0056b3;
}
</style>
