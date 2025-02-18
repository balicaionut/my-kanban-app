import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('storeAuth', () => {
  const isLoggedIn = ref(false);
  const loggedInUsername = ref('');

  // Initialize isLoggedIn from sessionStorage
  if (sessionStorage.getItem('isUserLoggedIn') === 'true') {
    isLoggedIn.value = true;
  }

  function login(username) {
    isLoggedIn.value = true;
    loggedInUsername.value = username;
    sessionStorage.setItem('isUserLoggedIn', 'true'); // Update sessionStorage
  }

  function logout() {
    isLoggedIn.value = false;
    loggedInUsername.value = '';
    sessionStorage.removeItem('isUserLoggedIn'); // Update sessionStorage
  }

  return { isLoggedIn, login, logout };
});
