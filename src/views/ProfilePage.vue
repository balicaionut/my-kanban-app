<template>
  <div>
    <h1>Profile</h1>
    <button @click="router.push('/home')">Back to Home</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useRootStore } from '@/stores/storeRoot';

const router = useRouter();
const authStore = useRootStore().authStore;

const logout = () => {
  authStore.logout();
  router.push('/login');
};
</script>
