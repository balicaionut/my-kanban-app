import { defineStore } from 'pinia';
import { useCardsStore } from './storeCards.js';
import { useAuthStore } from './storeAuth.js';

export const useRootStore = defineStore('storeRoot', () => {
  const cardsStore = useCardsStore();
  const authStore = useAuthStore();

  return { cardsStore, authStore };
})
