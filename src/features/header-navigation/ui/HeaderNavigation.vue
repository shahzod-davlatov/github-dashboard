<script setup lang="ts">
import { NavigationButton } from '@ui/navigation-button';

import { AppRoutes } from '@constants/routes';

import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const navigationMap = computed(() => [
  {
    id: 'overview',
    isCurrent: route.name === AppRoutes.Home,
    to: { name: AppRoutes.Home },
    title: 'Overview',
  },
  {
    id: 'repositories',
    isCurrent: route.name === AppRoutes.Repositories,
    to: { name: AppRoutes.Repositories },
    title: 'Repositories',
  },
  {
    id: 'stars',
    isCurrent: route.name === AppRoutes.Stars,
    to: { name: AppRoutes.Stars },
    title: 'Stars',
  },
]);
</script>

<template>
  <nav class="flex gap-6">
    <NavigationButton
      v-for="navigation in navigationMap"
      :key="navigation.id"
      :is-current="navigation.isCurrent"
      :to="navigation.to"
    >
      {{ navigation.title }}
    </NavigationButton>
  </nav>
</template>
