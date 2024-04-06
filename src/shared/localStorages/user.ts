import { useLocalStorage } from '@vueuse/core';

import { CURRENT_USER_ID } from '@constants/storageKeys';

export const currentUserId = useLocalStorage<string>(CURRENT_USER_ID, null);
