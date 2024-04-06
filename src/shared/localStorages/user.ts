import { useLocalStorage } from '@vueuse/core';

import { USER_LOGIN } from '@constants/storageKeys';

export const userLogin = useLocalStorage<string | null>(USER_LOGIN, null);
