import { defineComponent, ref } from 'vue';

import { useIntersectionObserver } from '@vueuse/core';

import ProgressSpinner from 'primevue/progressspinner';

import { useInfiniteQuery } from '@tanstack/vue-query';

import { useStore } from 'effector-vue/composition';

import { $user } from '@entities/user';
import { $userOverview } from '@entities/user-overview';
import {
  $userRepositories,
  $userRepositoriesPageInfo,
  fetchUserRepositoriesFx,
} from '@entities/user-repositories';

import { RepositoryCard } from '@ui/repository-card';

import { USER_REPOSITORIES_KEY } from '@constants/queryKeys';

export const UserRepositories = defineComponent(() => {
  const target = ref();

  const user = useStore($user);
  const userOverview = useStore($userOverview);
  const userRepositories = useStore($userRepositories);
  const userRepositoriesPageInfo = useStore($userRepositoriesPageInfo);

  const { isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: [USER_REPOSITORIES_KEY, user, userOverview],
    queryFn: ({ pageParam }) =>
      fetchUserRepositoriesFx({
        login: user.value!.login,
        after: pageParam.after,
      }),
    initialPageParam: { after: null },
    getNextPageParam: () => {
      if (!userRepositoriesPageInfo.value.hasNextPage) {
        return null;
      }

      return { after: userRepositoriesPageInfo.value.endCursor };
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
        {userRepositories.value?.map((repository, index) => (
          <RepositoryCard
            description={repository!.description}
            forks={repository!.forkCount}
            isArchived={repository!.isArchived}
            isFork={repository!.isFork}
            isLocked={repository!.isLocked}
            key={repository?.id}
            name={repository!.name}
            primaryLanguage={repository!.primaryLanguage}
            ref={
              index === userRepositories.value!.length - 6 ? target : undefined
            }
            url={repository!.url}
          />
        ))}
      </div>
    );
});
