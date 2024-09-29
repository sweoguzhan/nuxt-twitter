import { defineStore } from 'pinia';
import { fetchTwitterFollowing } from '@/services/twitterService';
import { useToast } from 'vue-toastification';

export const useFollowingStore = defineStore('following', {
    state: () => ({
        following: [],
        loading: false,
        error: null,
    }),
    actions: {
        async loadFollowing(screenname) {
            const toast = useToast();
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchTwitterFollowing(screenname);
                this.following = data;
            } catch (err) {
                this.error = err.message;
                toast.error(this.error);
            } finally {
                this.loading = false;
            }
        }
    }
});
