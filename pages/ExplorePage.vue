<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div v-if="store.loading" class="loading-container">
          <v-progress-circular color="white" size="50" indeterminate></v-progress-circular>
        </div>

        <!-- Trends list -->
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

        <!-- Error handling -->
        <v-row v-if="store.error">
          <v-col cols="12">
            <v-alert type="error">{{ store.error }}</v-alert>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useTrendsStore } from "~/store/trend.js";
import {onMounted} from "vue";
import Text from "~/components/Text.vue";

// Trends store
const store = useTrendsStore();

onMounted(() => {
  store.loadTrends("UnitedStates"); // Örnek ülke: UnitedStates
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
  @apply justify-between items-start p-0 m-0 ps-0 pe-0 cursor-pointer;
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
  @apply m-0 p-4 bg-black flex flex-col gap-4 rounded;
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
