import { defineStore } from 'pinia';
import { fetchListTimeline } from '@/services/twitterService';
import { useToast } from 'vue-toastification';

export const useListTimelineStore = defineStore('listTimeline', {
    state: () => ({
        timeline: [],
        loading: false,
        error: null,
    }),
    actions: {
        async loadListTimeline(listId) {
            const toast = useToast();
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchListTimeline(listId);
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
