import { defineStore } from 'pinia';
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('token') || 'null'),
  }),
  actions: {
    login(userData: string) {
      this.user = userData;
      localStorage.setItem('token', JSON.stringify(userData));
    },
    logout() {
      this.user = null;
      localStorage.removeItem('token');
    },
  },
});
