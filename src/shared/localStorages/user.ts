import { useLocalStorage } from '@vueuse/core';

import { USER_LOGIN } from '@constants/storageKeys';

export const userLogin = useLocalStorage<null | string>(USER_LOGIN, null);
