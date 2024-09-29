<template>
  <v-container class="profile-container">
    <div v-if="store.loading || repliesStore.loading" class="loading-wrapper">
      <v-progress-circular color="white" size="70" indeterminate></v-progress-circular>
    </div>

    <div v-else>
      <div class="cover-photo">
        <img :src="store?.profile?.header_image" class="cover-img" />
      </div>

      <div class="profile-details">
        <v-avatar size="120" class="avatar">
          <v-img :src="store?.profile?.avatar" />
        </v-avatar>

        <div class="profile-info">
          <div class="profile-info-view">
            <Text class="profile-name">{{ store?.profile?.name || 'Unknown Name' }}</Text>
            <v-icon v-if="store?.profile?.blue_verified" color="blue" class="verified-icon">mdi-check-circle</v-icon>
          </div>
          <Text class="username">@{{ store?.profile?.profile || 'Unknown Profile' }}</Text>
        </div>
        <Text class="bio">{{ store?.profile?.desc || 'No description' }}</Text>
        <div class="profile-icons">
          <div class="profile-icon-view">
            <v-icon size="20" class="icon">mdi-map-marker</v-icon>
            <Text class="location">{{ store?.profile?.location || '-' }}</Text>
          </div>
          <div class="profile-icon-view">
            <v-icon size="20" class="icon">mdi-calendar-clock</v-icon>
            <Text class="location">{{ formatDate(store?.profile?.created_at) }}</Text>
          </div>

          <div class="profile-icon-view">
            <v-icon size="20" class="icon">mdi-link</v-icon>
            <a v-if="store?.profile?.website" :href="store?.profile?.website" class="website" target="_blank">
              {{ store?.profile?.website || '-' }}
            </a>
          </div>
        </div>
        <div class="profile-stats">
          <Text><strong>{{ store?.profile?.sub_count || 0 }}</strong> Followers</Text>
          <Text><strong>{{ store?.profile?.friends || 0 }}</strong> Following</Text>
          <Text><strong>{{ store?.profile?.statuses_count || 0 }}</strong> Tweets</Text>
          <Text><strong>{{ store?.profile?.media_count || 0 }}</strong> Media</Text>
        </div>
      </div>
    </div>
    <v-row v-if="!repliesStore.loading && repliesStore.replies?.length">
      <v-col cols="12" class="post-v-col-12" v-for="post in repliesStore.replies" :key="post.tweet_id" >
        <Post :post="post" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <Text>No replies found.</Text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useUserStore } from '~/store/user.js';
import { useRepliesStore } from "~/store/userReplies.js";

const store = useUserStore();
const repliesStore = useRepliesStore();
const route = useRoute();

onMounted(() => {
  const screenname = route.params.screenname;
  store.loadUserInfo(screenname);
  repliesStore.loadUserReplies(screenname);
});
const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};
</script>

<style scoped lang="postcss">
.profile-container {
  @apply w-full flex flex-col bg-black text-white p-0 m-0;
}

.cover-photo {
  @apply w-full h-56 relative;
}

.cover-img {
  @apply w-full h-full object-cover;
}

.avatar {
  @apply border-4 border-black rounded-full;
  left: 20px;
}

.profile-details {
  @apply mt-8 px-4 w-full flex flex-col items-start;
}

.profile-info {
  @apply flex items-start flex-col;
}

.profile-name {
  @apply text-3xl font-bold;
}

.verified-icon {
  @apply text-blue-500 text-xl;
}

.username {
  @apply text-gray-500 text-sm;
}

.bio {
  @apply mt-2 text-lg;
}

.profile-icons {
  @apply flex gap-4 mt-4 items-center;
}

.icon {
  @apply text-gray-400;
}

.location, .website {
  @apply text-gray-500 text-sm;
}

.website {
  @apply underline;
}

.profile-stats {
  @apply flex flex-wrap gap-6 mt-6 mb-6 text-lg;
}
.loading-wrapper {
  @apply h-screen w-full flex justify-center items-center;
}
.profile-info-view {
  @apply flex items-center flex-row gap-2;
}
.profile-icon-view {
  @apply flex items-center gap-1;
}
.post-v-col-12 {
  @apply p-0 m-0;
}
</style>
