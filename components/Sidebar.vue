<template>
  <div class="sidebar">
    <v-list class="list-wrapper" dense>
      <v-list-item class="icon-wrapper">


        <NuxtLink class="menu-item" to="/" exact>
          <svg viewBox="0 0 24 24" aria-hidden="true" class="custom-svg-icon" width="50" height="50">
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>

        </NuxtLink>


      </v-list-item>

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
  @apply fixed top-0 left-0 bottom-0 w-[25%] h-screen bg-white p-5 text-white border border-slate-500 ;
}
.list-wrapper {
  @apply w-full bg-black flex flex-col items-center justify-center h-1/3 gap-5;
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

.custom-svg-icon {
  fill: white; /* İkonun rengini beyaz yap */
  width: 50px; /* Genişlik */
  height: 50px; /* Yükseklik */
}

.icon-wrapper {
  @apply flex justify-center items-center;
}


</style>
<script setup lang="ts">
import Text from "~/components/Text.vue";
</script>
