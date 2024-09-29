<template>
  <v-container class="v-container-class">
    <v-row>
      <v-col cols="12">

        <div v-if="store.loading" class="loading-wrapper">
          <v-progress-circular color="white" size="70" indeterminate></v-progress-circular>
        </div>
        <v-card v-else-if="store.tweet" class="tweet-card">
          <v-card-title @click="goToUser(store.tweet.author.screen_name)" class="cursor-pointer tweet-header">
            <div class="avatar-title-view">
              <v-avatar size="64" class="custom-avatar-margin">
                <v-img :src="store.tweet.author.image" />
              </v-avatar>
              <div class="ml-3">
                <div class="info-view">
                  <Text fontSize="18px">{{ store.tweet.author.name }}</Text>
                  <v-icon v-if="store.tweet.author.blue_verified" color="blue" size="18px" class="ml-1">mdi-check-circle</v-icon>
                </div>
                  <Text fontSize="16px" class="text-secondary">@{{ store.tweet.author.screen_name }}</Text>
              </div>
            </div>


          </v-card-title>
          <v-card-text class="tweet-text">
            {{ store.tweet.display_text }}
          </v-card-text>
          <v-img
              v-if="store.tweet.media && store.tweet.media.photo && store.tweet.media.photo.length"
              :src="store.tweet.media.photo[0].media_url_https"
              height="400px"
              class="tweet-media"
              aspect-ratio="16/9"
          ></v-img>
          <v-card-subtitle class="tweet-stats">
            <div class="icon-text-view">
              <v-icon class="custom-icon" size="20">mdi-chat-outline</v-icon> <span>{{ store.tweet.replies }}</span>
            </div>
            <div class="icon-text-view">
              <v-icon class="custom-icon" size="24">mdi-repeat</v-icon> <span>{{ store.tweet.retweets }}</span>
            </div>
            <div class="icon-text-view">
              <v-icon class="custom-icon" size="24">mdi-heart-outline</v-icon> <span>{{ store.tweet.likes }}</span>
            </div>
            <div class="icon-text-view">
              <v-icon class="custom-icon" size="24">mdi-eye-outline</v-icon> <span>{{ store.tweet.views }}</span>
            </div>
          </v-card-subtitle>
        </v-card>

        <v-progress-circular v-if="store.loading" indeterminate></v-progress-circular>
        <v-alert v-if="store.error" type="error">{{ store.error }}</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { useTweetStore } from '~/store/tweet.js';

const store = useTweetStore();
const route = useRoute();
const router = useRouter();

onMounted(() => {
  store.loadTweetInfo(route.params._id);
});

const goToUser = (screenname) => {
  router.push(`/user/${screenname}`);
};

onBeforeRouteLeave(() => {
  store.tweet=null
});
</script>

<style scoped lang="postcss">
.tweet-card {
  @apply bg-black text-white p-4 border border-slate-500;
}

.tweet-header {
  @apply flex items-center mb-4 flex-row;
}

.tweet-text {
  @apply text-lg text-gray-200 mb-4;
}

.tweet-media {
  @apply w-full rounded-none my-4;
}

.tweet-stats {
  @apply flex items-center justify-between text-sm text-gray-400 mt-4;
}

.custom-icon {
  @apply text-gray-400 text-base mr-1 cursor-pointer;
}

.ml-3 {
  @apply ml-4 flex flex-col gap-0;
}

.v-container-class{
  @apply p-0 m-0;
}
.text-secondary {
  @apply text-gray-400 text-sm;
}
.avatar-title-view{
  @apply flex items-center;
}
.info-view{
  @apply flex items-center justify-center;
}
.loading-wrapper {
  @apply h-screen w-full flex justify-center items-center;
}
</style>
