import { defineComponent } from 'vue';

import Button from 'primevue/button';
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import ProgressSpinner from 'primevue/progressspinner';
import Tag from 'primevue/tag';

import { useQuery } from '@tanstack/vue-query';

import { useStore } from 'effector-vue/composition';

import { $user } from '@entities/user';
import { $userOverview } from '@entities/user-overview';
import {
  $userRepositories,
  fetchUserRepositoriesFx,
} from '@entities/user-repositories';

import { USER_REPOSITORIES_KEY } from '@constants/queryKeys';

export const UserRepositories = defineComponent(() => {
  const user = useStore($user);
  const userOverview = useStore($userOverview);
  const userRepositories = useStore($userRepositories);

  const { isLoading } = useQuery({
    queryKey: [USER_REPOSITORIES_KEY, user, userOverview],
    queryFn: () =>
      fetchUserRepositoriesFx({
        login: user.value!.login,
        after: null,
      }),
    enabled: () => Boolean(user.value) && Boolean(userOverview.value),
    refetchOnWindowFocus: false,
  });

  return () =>
    isLoading.value ? (
      <div class="flex size-full items-center justify-center">
        <ProgressSpinner />
      </div>
    ) : (
      <div class="flex flex-col gap-4">
        {userRepositories.value?.map((repository) => (
          <Card key={repository?.id}>
            {{
              header: () => (
                <div class="flex items-center gap-2 p-3">
                  <Chip label={repository?.visibility} />
                  {repository?.primaryLanguage && (
                    <Tag
                      style={{
                        backgroundColor: repository.primaryLanguage.color,
                      }}
                      value={repository.primaryLanguage.name}
                    />
                  )}
                  <Button class="ml-auto" severity="success">
                    <a
                      class="icon-external-link"
                      href={repository?.url}
                      rel="noreferrer"
                      target="_blank"
                    />
                  </Button>
                </div>
              ),
              title: () => repository?.name,
              content: () => repository?.description,
            }}
          </Card>
        ))}
      </div>
    );
});
