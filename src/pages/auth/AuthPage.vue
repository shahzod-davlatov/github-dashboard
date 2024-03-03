<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { whenever } from '@vueuse/core';

import { Github } from 'lucide-vue-next';

import { Button } from '@shadcn';

const url = new URL('https://github.com/login/oauth/authorize');
url.searchParams.set('client_id', '26e22c1022e4e4fb9e01');
url.searchParams.set('redirect_uri', 'http://localhost:5173/auth');
url.searchParams.set('allow_signup', 'false');

const route = useRoute();

const code = computed(() => {
  if (typeof route.query.code === 'string') {
    return route.query.code;
  }

  return null;
});

whenever(
  code,
  (codeValue) => {
    const test = new URL('https://github.com/login/oauth/access_token');
    test.searchParams.set('client_id', '26e22c1022e4e4fb9e01');
    test.searchParams.set(
      'client_secret',
      '8c8bed610aec1fb33584b7f37340376e008bfe99'
    );
    test.searchParams.set('code', codeValue);

    void fetch(test, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.info(data);
      });
  },
  { immediate: true }
);
</script>

<template>
  <div class="h-dvh w-dvw flex justify-center items-center">
    <Button size="lg" as-child>
      <a :href="url.toString()" target="_self">
        <Github class="w-4 h-4 mr-2" />Continue with GitHub
      </a>
    </Button>
  </div>
</template>
