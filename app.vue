<template>
  <v-app>
    <div class="main-container">
      <!-- Sol Sidebar -->
      <Sidebar />

      <!-- Orta İçerik -->
      <div class="content">
        <NuxtPage />
      </div>

      <!-- Sağdaki Trends -->
      <Trends />
    </div>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Trends from '~/components/Trends.vue';

export default {
  components: {
    Sidebar,
    Trends,
  },
};
</script>

<style lang="postcss" scoped>
/* Ana layout konteyneri */
.main-container {
  @apply flex min-h-screen font-sans;
}

.sidebar {
  @apply w-1/4 bg-black text-white fixed top-0 left-0 bottom-0;
}

/* İçerik (orta) */
.content {
  @apply ml-[25%] mr-[25%] w-[50%] bg-black h-full overflow-y-auto;
}

/* Trends bileşeni */
.trends-container {
  @apply w-1/4 bg-black text-white fixed top-0 right-0 bottom-0 overflow-y-auto;
}

/* Küçük ekranlar için düzenleme */
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
