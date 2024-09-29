<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Current Trends</h1>
        <v-row v-if="store.loading">
          <v-col cols="12">
            <v-progress-circular indeterminate></v-progress-circular>
          </v-col>
        </v-row>

        <v-row v-if="!store.loading && store.trends.length">
          <v-col cols="12" v-for="trend in store.trends" :key="trend.name">
            <v-card>
              <v-card-title>{{ trend.name }}</v-card-title>
              <v-card-subtitle>{{ trend.tweet_volume }} Tweets</v-card-subtitle>
            </v-card>
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
import {useTrendsStore} from "~/store/trend.js";

const store = useTrendsStore();

onMounted(() => {
  store.loadTrends('UnitedStates'); // Örnek ülke adı
});
</script>
