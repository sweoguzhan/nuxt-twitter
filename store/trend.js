import { defineStore } from 'pinia';
import { fetchTwitterTrends } from '@/services/twitterService';
import { useToast } from 'vue-toastification';

export const useTrendsStore = defineStore('trends', {
    state: () => ({
        trends: [],
        loading: false,
        error: null,
    }),
    actions: {
        async loadTrends() {
            const toast = useToast();
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchTwitterTrends();
                this.trends = data;
            } catch (err) {
                this.error = err.message;
                toast.error(this.error);
            } finally {
                this.loading = false;
            }
        }
    }
});
