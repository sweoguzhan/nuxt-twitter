import { defineStore } from 'pinia';
import { fetchTweetInfo } from '@/services/twitterService';
import { useToast } from 'vue-toastification';

export const useTweetStore = defineStore('tweet', {
    state: () => ({
        tweet: null,
        loading: false,
        error: null,
    }),
    actions: {
        async loadTweetInfo(tweetId) {
            const toast = useToast();
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchTweetInfo(tweetId);
                this.tweet = data;
            } catch (err) {
                this.error = err.message;
                toast.error(this.error);
            } finally {
                this.loading = false;
            }
        }
    }
});
