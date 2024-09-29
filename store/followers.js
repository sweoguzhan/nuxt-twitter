import { defineStore } from 'pinia';
import { fetchTwitterFollowers } from '@/services/twitterService';
import { useToast } from 'vue-toastification';

export const useFollowersStore = defineStore('followers', {
    state: () => ({
        followers: [],
        loading: false,
        error: null,
    }),
    actions: {
        async loadFollowers(screenname) {
            const toast = useToast();
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchTwitterFollowers(screenname);
                this.followers = data;
            } catch (err) {
                this.error = err.message;
                toast.error(this.error);
            } finally {
                this.loading = false;
            }
        }
    }
});
