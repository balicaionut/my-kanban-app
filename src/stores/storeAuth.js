import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('storeAuth', () => {
    const isLoggedIn = ref(false);
    const loggedInUsername = ref('');

    function login(username) {
        isLoggedIn.value = true;
        loggedInUsername.value = username;
    }

    function logout() {
        isLoggedIn.value = false;
        loggedInUsername.value = '';
    }

    return { isLoggedIn, login, logout };
});
