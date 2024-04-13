import { useLocalStorage } from '@vueuse/core';

import { SAVED_USERS, USER_LOGIN } from '@constants/storageKeys';

export const userLogin = useLocalStorage<null | string>(USER_LOGIN, null);

export const savedUsers = useLocalStorage(SAVED_USERS, new Set<string>());
