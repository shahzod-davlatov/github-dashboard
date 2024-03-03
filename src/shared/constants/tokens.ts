import { useLocalStorage } from '@vueuse/core';

export const authToken = useLocalStorage<string>('github-token', null);
