import { useLocalStorage } from '@vueuse/core';

import { GITHUB_TOKEN } from '@constants/storageKeys';

export const authToken = useLocalStorage<string>(GITHUB_TOKEN, null);
