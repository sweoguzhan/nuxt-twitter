<template>
  <div class="trends-container">
    <div class="trends-header">
      <Text bold fontSize="18px">Trends for you</Text>
    </div>

    <div v-if="store.loading" class="loading-container">
      <v-progress-circular color="white" size="50" indeterminate></v-progress-circular>
    </div>

    <v-list dense class="v-list-style" v-else>
      <v-list-item v-for="trend in store.trends" :key="trend.rest_id" class="trend-item">
        <div class="trend-info">
          <div class="trend-header">
            <Text class="category-text" fontSize="14px">{{ trend.name }}</Text>
          </div>
          <Text bold fontSize="14px" class="profile-text">@{{ trend.context }}</Text>
          <Text fontSize="12px" class="sub-count">{{ trend.description }}</Text>
        </div>
      </v-list-item>
    </v-list>

    <div class="show-more">
      <Text bold fontSize="16px" class="show-more-text">Show more</Text>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useTrendsStore } from '~/store/trend.js';
import Text from '~/components/Text.vue';

const store = useTrendsStore();

onMounted(() => {
  store.loadTrends();
});
</script>

<style scoped lang="postcss">
.trends-container {
  @apply fixed top-0 right-0 h-screen bg-black text-white m-0 p-0 border border-slate-500;
}

.trends-header {
  @apply m-4;
}
.trend-item {
  @apply justify-between items-start p-0 m-0 ps-0 pe-0;
}

.trend-info {
  @apply flex flex-col border border-slate-500 w-full p-2.5;
}
.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {
  @apply p-0 m-0;
}

.trend-header {
  @apply flex justify-between items-center;
}

.category-text {
  @apply text-gray-400;
}

.profile-text {
  @apply text-gray-200 mt-1;
}

.sub-count {
  @apply text-gray-500;
}

.v-list-style {
  @apply m-0 p-0 bg-black;
}
.loading-container {
  @apply flex justify-center items-center h-screen;
}
.show-more {
  @apply flex justify-start m-4;
}

.show-more-text {
  @apply text-blue-400 cursor-pointer;
}

@media (max-width: 960px) {
  .trends-container {
    display: none;
  }
}
</style>
