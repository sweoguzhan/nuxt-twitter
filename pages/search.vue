<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- Custom Styled Search Field -->
        <div class="search-container">
          <input
              v-model="searchTerm"
              type="text"
              placeholder="Search Twitter"
              class="search-input"
              @keyup.enter="searchPosts"
          />
          <v-icon class="search-icon">mdi-magnify</v-icon>
        </div>
      </v-col>
    </v-row>

    <!-- Loading spinner centered -->
    <v-row v-if="store.loading" class="loading-wrapper">
      <v-col cols="12" class="loading-container">
        <v-progress-circular color="white" size="70" indeterminate></v-progress-circular>
      </v-col>
    </v-row>

    <!-- Search results -->
    <v-row v-if="!store.loading && store.posts.length">
      <v-col cols="12" class="post-v-col-12" v-for="post in store.posts" :key="post.tweet_id">
        <Post :post="post" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import {usePostsStore} from "~/store/post.js";

const store = usePostsStore();
const searchTerm = ref('');

const searchPosts = () => {
  store.loadPosts(searchTerm.value);
};


onBeforeRouteLeave(() => {
  store.posts = [];
});

</script>

<style lang="postcss" scoped>
/* Search input container */
.search-container {
  @apply flex items-center bg-white rounded-full px-4 py-2;
  border: 1px solid #ccc;
  margin: 10px 0;
}

/* Search input styling */
.search-input {
  @apply bg-transparent text-black placeholder-gray-500 w-full outline-none;
  border: none;
  padding: 0;
  margin-right: 8px;
  font-size: 1rem;
  height: 40px;
}

/* Search icon styling */
.search-icon {
  @apply text-gray-500 cursor-pointer;
}

/* Centering the spinner in the middle of the screen */
.loading-wrapper {
  @apply h-screen w-full flex justify-center items-center;
}

/* Ensure the spinner is centered */
.loading-container {
  @apply flex justify-center items-center;
}
</style>
