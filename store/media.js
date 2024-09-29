import { defineStore } from 'pinia';
import { fetchTwitterUserMedia } from '@/services/twitterService';
import { useToast } from 'vue-toastification';

export const useMediaStore = defineStore('media', {
    state: () => ({
        media: [],
        loading: false,
        error: null,
    }),
    actions: {
        async loadUserMedia(screenname) {
            const toast = useToast();
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchTwitterUserMedia(screenname);
                this.media = data;
            } catch (err) {
                this.error = err.message;
                toast.error(this.error);
            } finally {
                this.loading = false;
            }
        }
    }
});
