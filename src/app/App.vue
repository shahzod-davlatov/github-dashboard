<script setup lang="ts">
import { PageLayout } from '@pages/layout';

import { RouterView, useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <PageLayout v-if="route.path !== '/auth'">
    <RouterView />
  </PageLayout>
  <RouterView v-else />
</template>
