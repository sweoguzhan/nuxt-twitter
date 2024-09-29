import { defineStore } from 'pinia';
import { fetchTwitterUserTimeline } from '@/services/twitterService';
import { useToast } from 'vue-toastification';

export const useTimelineStore = defineStore('timeline', {
    state: () => ({
        timeline: [],
        loading: false,
        error: null,
    }),
    actions: {
        async loadUserTimeline(screenname) {
            const toast = useToast();
            this.loading = true;
            this.error = null; //
            try {
                const data = await fetchTwitterUserTimeline(screenname);
                this.timeline = data;
            } catch (err) {
                this.error = err.message;
                toast.error(this.error);
            } finally {
                this.loading = false;
            }
        }
    }
});
