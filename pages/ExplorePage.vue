<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Explore - Trending Topics</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="trend in trends" :key="trend.title">
                <v-list-item-content>
                  <v-list-item-title>{{ trend.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ trend.posts }} posts</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      trends: [
        { title: 'Yoğurtçu Parkı', posts: '9,312' },
        { title: '#Alikocistafa', posts: '2,934' },
      ],
    };
  },
};
</script>
