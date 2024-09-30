<template>
  <v-app>
    <div class="main-container">
      <Sidebar />

      <div class="content">
        <NuxtPage />
      </div>

      <Trends v-if="!isExplorePage" />
    </div>
  </v-app>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
import Trends from '~/components/Trends.vue';

const route = useRoute();

const isExplorePage = computed(() => route.path === '/ExplorePage');
</script>

<style lang="postcss" scoped>
.main-container {
  @apply flex min-h-screen font-sans bg-black;
}

.sidebar {
  @apply w-1/4 bg-black text-white fixed top-0 left-0 bottom-0;
}

.content {
  @apply ml-[25%] mr-[25%] w-[50%] bg-black h-full overflow-y-auto;
}

.trends-container {
  @apply w-1/4 bg-black text-white fixed top-0 right-0 bottom-0 overflow-y-auto;
}

@media (max-width: 960px) {
  .main-container {
    @apply flex-col;
  }

  .sidebar {
    @apply w-full relative h-auto;
  }

  .content {
    @apply ml-0 mr-0 w-full;
  }

  .trends-container {
    @apply w-full relative;
  }
}
</style>
