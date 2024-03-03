import { useLocalStorage } from '@vueuse/core';

export const GITHUB_TOKEN = useLocalStorage<string>('github-token', null);
