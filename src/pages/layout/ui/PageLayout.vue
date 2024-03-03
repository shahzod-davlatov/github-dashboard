<script setup lang="ts">
import { HeaderNavigation } from '@features/header-navigation';

import { GithubButton } from '@entities/github-button';
import { ThemeButton } from '@entities/theme-button';
</script>

<template>
  <div class="flex h-dvh flex-col">
    <header class="flex max-h-16 min-h-16 items-center gap-6 border-b px-4">
      <HeaderNavigation />
      <div class="ml-auto flex gap-2">
        <GithubButton />
        <ThemeButton />
      </div>
    </header>
    <main class="grow">
      <slot />
    </main>
  </div>
</template>
