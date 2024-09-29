import { defineStore } from 'pinia';
import { fetchTwitterPosts } from '@/services/twitterService';
import { useToast } from 'vue-toastification';

export const usePostsStore = defineStore('posts', {
    state: () => ({
        posts: [],
        loading: false,
        error: null,
    }),
    actions: {
        async loadPosts(searchTerm, searchType = 'Top') {
            const toast = useToast();
            this.loading = true;
            this.error = null;
            try {
                const data = await fetchTwitterPosts(searchTerm, searchType);
                this.posts = data.timeline;
            } catch (err) {
                this.error = err.message;
                toast.error(this.error);
            } finally {
                this.loading = false;
            }
        }
    }
});
