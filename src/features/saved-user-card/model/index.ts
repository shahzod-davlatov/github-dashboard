import { createEvent, sample } from 'effector';

import { $userLogin } from '@entities/user';

export const changeUserLogin = createEvent<string>();

sample({
  clock: changeUserLogin,
  target: $userLogin,
});
