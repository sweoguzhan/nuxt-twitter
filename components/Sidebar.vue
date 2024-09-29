<template>
  <div class="sidebar">
    <v-list class="list-wrapper" dense>
      <v-list-item class="icon-wrapper">
        <v-icon  size="200" class="d-flex align-center justify-center">mdi-alpha-x</v-icon>      </v-list-item>

      <v-list-item-group class="list-group">
        <v-list-item class="v-list-item-style">
          <NuxtLink class="menu-item" to="/" exact>
            <v-list-item-icon><v-icon size="50">mdi-home</v-icon></v-list-item-icon>
            <Text class="text" bold fontSize="30px">Home</Text>
          </NuxtLink>
        </v-list-item>
        <v-list-item class="v-list-item-style">
          <NuxtLink class="menu-item" to="/ExplorePage" exact>
            <v-list-item-icon><v-icon size="50">mdi-trending-up</v-icon></v-list-item-icon>
            <Text class="text" bold fontSize="30px">Trends</Text>
          </NuxtLink>
        </v-list-item>


        <v-list-item class="v-list-item-style">
          <NuxtLink class="menu-item" to="/search">
            <v-list-item-icon><v-icon size="50">mdi-magnify</v-icon></v-list-item-icon>
            <Text class="text" bold fontSize="30px">Search</Text>
          </NuxtLink>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<style lang="postcss">
.sidebar {
  @apply fixed top-0 left-0 bottom-0 w-[25%] h-screen bg-black p-5 text-white border border-slate-500;
}
.list-wrapper {
  @apply w-full bg-black flex flex-col items-center justify-center;
}
.icon-wrapper {
  @apply flex justify-center gap-10;
}
.icon {
  @apply flex items-center justify-center;
}
.list-group {
  @apply bg-black flex flex-col;
}
.menu-item {
  @apply flex w-full justify-between items-center text-center text-white no-underline gap-5;
}
.text {
  @apply no-underline;
}
.v-list-item-style {
  @apply min-w-[200] flex;
}
@media (max-width: 960px) {
  .sidebar {
    @apply w-full h-auto relative;
  }
}

</style>
<script setup lang="ts">
import Text from "~/components/Text.vue";
</script>
