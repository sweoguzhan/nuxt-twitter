<template>
  <v-container class="v-container-class">
    <v-row class="v-row-style">
      <v-col class="cols-12-style" cols="12">
        <v-row v-if="store.loading" class="loading-wrapper">
          <v-col cols="12" class="loading-container">
            <v-progress-circular color="white" size="70" indeterminate></v-progress-circular>

          </v-col>
        </v-row>

        <v-row v-if="!store.loading && store.timeline.length">
          <v-col cols="12" class="post-v-col-12" v-for="post in store.timeline" :key="post.tweet_id">
            <Post :post="post" />
          </v-col>
        </v-row>

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
import { onMounted } from 'vue';
import { useListTimelineStore } from '~/store/listTimeLine.js';
import Post from '~/components/Post.vue';
import {useTrendsStore} from "~/store/trend.js";

const store = useListTimelineStore();
const trendingStore = useTrendsStore();

onMounted(() => {
  store.loadListTimeline('1343798673386434560');
  trendingStore.loadTrends('UnitedStates');
});
</script>

<style lang="postcss" scoped>
.v-container-class {
  @apply p-0 m-0 w-full;
}

.post-v-col-12 {
  @apply p-0 m-0;
}

.v-row-style {
  @apply p-0 m-0 w-full;
}

.cols-12-style {
  @apply p-0 m-0;
}

.loading-wrapper {
  @apply h-screen w-full flex justify-center items-center;
}

.loading-container {
  @apply flex justify-center items-center;
}
</style>
