// store/user.js
import { defineStore } from 'pinia';
import { fetchUserInfo } from '@/services/twitterService';
import { useToast } from 'vue-toastification';

export const useUserStore = defineStore('user', {
  state: () => ({
    profile: null,
    loading: false,
    error: null,
  }),
  actions: {
    async loadUserInfo(screenname) {
      const toast = useToast();
      this.loading = true;
      this.error = null;
      try {
        const data = await fetchUserInfo(screenname);
        this.profile = data;
      } catch (err) {
        this.error = err.message;
        toast.error(this.error);
      } finally {
        this.loading = false;
      }
    }
  }
});
