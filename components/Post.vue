<template>
  <div v-if="!post" class="loading-container">
    <v-progress-circular color="white" size="70" indeterminate></v-progress-circular>
  </div>

  <!-- Post content -->
  <v-card v-else @click="goToPost(post.tweet_id)" class="custom-card-spacing">
    <v-card-title class="card-title-view">
      <!-- Avatar -->
      <v-avatar v-if="postAuthorAvatar" class="custom-avatar-margin">
        <v-img :src="postAuthorAvatar" />
      </v-avatar>

      <div class="post-header">
        <div class="post-header-view">
          <div>
            <Text bold fontSize="18px">{{ postAuthorName }}</Text>
            <v-icon v-if="isUserVerified" color="blue" class="custom-icon-margin">mdi-check-circle</v-icon>
          </div>
          <Text>@{{ postAuthorScreenName }}</Text>
        </div>
        <div>
          <Text class="custom-text-secondary">{{ formattedTime }}</Text>
        </div>
      </div>
    </v-card-title>

    <!-- Tweet Content -->
    <v-card-text class="custom-post-text">
      {{ post?.text || 'No text available' }}
    </v-card-text>

    <!-- Media (if available) -->
    <v-img
        v-if="post?.media?.photo && post.media.photo.length"
        :src="post.media.photo[0].media_url_https"
        height="400px"
        class="custom-full-width-img"
        aspect-ratio="16/9"
    ></v-img>

    <!-- Tweet Stats -->
    <v-card-subtitle class="post-stats">
      <div class="icon-text-view">
        <v-icon class="custom-icon" size="20">mdi-chat-outline</v-icon> <Text>{{ post?.replies || 0 }}</Text>
      </div>
      <div class="icon-text-view">
        <v-icon class="custom-icon" size="24">mdi-repeat</v-icon> <Text>{{ post?.retweets || 0 }}</Text>
      </div>
      <div class="icon-text-view">
        <v-icon class="custom-icon" size="24">mdi-heart-outline</v-icon> <Text>{{ post?.favorites || 0 }}</Text>
      </div>
      <div class="icon-text-view">
        <v-icon class="custom-icon" size="24">mdi-eye-outline</v-icon> <Text bold fontSize="15px">{{ post?.views || 0 }}</Text>
      </div>
    </v-card-subtitle>
  </v-card>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  post: {
    type: Object,
    required: false,
  }
});

const router = useRouter();

const goToPost = (id) => {
  if (id) {
    router.push(`/post/${id}`);
  }
};

const postAuthorName = computed(() => props.post?.author?.name || props.post?.user_info?.name || 'Unknown User');
const postAuthorScreenName = computed(() => props.post?.author?.screen_name || props.post?.user_info?.screen_name || 'unknown');
const postAuthorAvatar = computed(() => props.post?.author?.avatar || props.post?.user_info?.avatar || '');
const isUserVerified = computed(() => props.post?.author?.blue_verified || props.post?.user_info?.verified || false);

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};

const formattedTime = computed(() => formatDate(props?.post?.created_at || new Date()));
</script>

<style scoped lang="postcss">
.custom-card-spacing {
  @apply bg-black text-white p-4 border border-slate-500;
}

.custom-full-width-img {
  @apply w-full rounded-none;
}

.custom-bold {
  @apply font-bold text-lg;
}

.custom-text-secondary {
  @apply text-gray-400 text-sm;
}

.custom-avatar-margin {
  @apply mr-4 w-12 h-12;
}

.custom-icon-margin {
  @apply ml-1 text-base;
}

.card-title-view {
  @apply flex flex-row items-start;
}

.custom-post-text {
  @apply mt-2 text-lg text-gray-200;
}

.post-header {
  @apply flex items-start justify-between w-full;
}

.post-stats {
  @apply flex items-center justify-between text-sm text-gray-400 mt-2;
}

.custom-icon {
  @apply text-gray-400 text-base mr-1 cursor-pointer items-center;
}

.post-header-view {
  @apply flex flex-col;
}

.icon-text-view {
  @apply flex items-center gap-1;
}
.loading-container {
  @apply h-screen w-full flex justify-center items-center;
}
</style>
