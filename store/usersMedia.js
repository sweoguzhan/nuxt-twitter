import { defineStore } from 'pinia';
import { fetchTwitterUserMedia } from '@/services/twitterService';
import { useToast } from 'vue-toastification';

export const useUserMediaStore = defineStore('userMedia', {
    state: () => ({
        medias: [],
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
                this.medias = data;
            } catch (err) {
                this.error = err.message;
                toast.error(this.error);
            } finally {
                this.loading = false;
            }
        }
    }
});
