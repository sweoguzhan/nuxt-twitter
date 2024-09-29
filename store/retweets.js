import { defineStore } from 'pinia';
import { fetchTweetRetweets } from '@/services/twitterService';
import { useToast } from 'vue-toastification';

export const useRetweetsStore = defineStore('retweets', {
    state: () => ({
        retweets: [],
        loading: false,
        error: null,
    }),
    actions: {
        async loadTweetRetweets(tweetId) {
            const toast = useToast();
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchTweetRetweets(tweetId);
                this.retweets = data;
            } catch (err) {
                this.error = err.message;
                toast.error(this.error);
            } finally {
                this.loading = false;
            }
        }
    }
});
