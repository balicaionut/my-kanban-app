<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRootStore } from '@/stores/storeRoot';

const router = useRouter();
const authStore = useRootStore().authStore;
const username = ref('');
const password = ref('');

const login = () => {
  // TODO - Replace with your actual authentication logic
  if (username.value === 'user' && password.value === 'password') {
    authStore.login(username.value);
    router.push('/home');
  } else {
    alert('Invalid username or password');
  }
};
</script>
