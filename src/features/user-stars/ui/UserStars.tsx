import { defineComponent, ref } from 'vue';

import { useIntersectionObserver } from '@vueuse/core';

import ProgressSpinner from 'primevue/progressspinner';

import { useInfiniteQuery } from '@tanstack/vue-query';

import { useStore } from 'effector-vue/composition';

import { $user } from '@entities/user';
import { $userOverview } from '@entities/user-overview';
import {
  $userStars,
  $userStarsPageInfo,
  fetchUserStarsFx,
} from '@entities/user-stars';

import { RepositoryCard } from '@ui/repository-card';

import { USER_STARS_KEY } from '@constants/queryKeys';

export const UserStars = defineComponent(() => {
  const target = ref();

  const user = useStore($user);
  const userOverview = useStore($userOverview);
  const userStars = useStore($userStars);
  const userStarsPageInfo = useStore($userStarsPageInfo);

  const { isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: [USER_STARS_KEY, user, userOverview],
    queryFn: ({ pageParam }) =>
      fetchUserStarsFx({
        login: user.value!.login,
        after: pageParam.after,
      }),
    initialPageParam: { after: null },
    getNextPageParam: () => {
      if (!userStarsPageInfo.value.hasNextPage) {
        return null;
      }

      return { after: userStarsPageInfo.value.endCursor };
    },
    enabled: () => Boolean(user.value) && Boolean(userOverview.value),
    refetchOnWindowFocus: false,
  });

  useIntersectionObserver(target, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      void fetchNextPage();
    }
  });

  return () =>
    isLoading.value ? (
      <div class="flex size-full items-center justify-center">
        <ProgressSpinner />
      </div>
    ) : (
      <div class="flex flex-col gap-4">
        {userStars.value?.map((star, index) => (
          <RepositoryCard
            description={star!.description}
            forks={star!.forkCount}
            isArchived={star!.isArchived}
            isFork={star!.isFork}
            isLocked={star!.isLocked}
            key={star?.id}
            name={star!.name}
            primaryLanguage={star!.primaryLanguage}
            ref={index === userStars.value!.length - 6 ? target : undefined}
            url={star!.url}
          />
        ))}
      </div>
    );
});
