import { defineStore } from 'pinia';
import { fetchUserReplies } from '@/services/twitterService';
import { useToast } from 'vue-toastification';

export const useRepliesStore = defineStore('replies', {
    state: () => ({
        replies: [],
        loading: false,
        error: null,
    }),
    actions: {
        async loadUserReplies(screenname) {
            const toast = useToast();
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchUserReplies(screenname);
                this.replies = data;
            } catch (err) {
                this.error = err.message;
                toast.error(this.error);
            } finally {
                this.loading = false;
            }
        }
    }
});
