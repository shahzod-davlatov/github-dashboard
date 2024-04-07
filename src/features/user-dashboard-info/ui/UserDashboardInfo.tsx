import { defineComponent } from 'vue';

import Button from 'primevue/button';
import Card from 'primevue/card';
import Skeleton from 'primevue/skeleton';

import { useStore } from 'effector-vue/composition';

import { $userOverview } from '@entities/user-overview';

import { InfoText } from '@ui/info-text';

import { useUserInfo } from '../lib';

type Props = {
  isLoading: boolean;
};

export const UserDashboardInfo = defineComponent<Props>(
  (props) => {
    const userOverview = useStore($userOverview);

    const { userInfo } = useUserInfo();

    return () =>
      !userOverview.value || props.isLoading ? (
        <Skeleton class="col-span-3" height="100%" />
      ) : (
        <Card class="col-span-3">
          {{
            title: () => (
              <div class="flex gap-2">
                <span class="mr-auto">Info</span>
                {userOverview.value?.websiteUrl && (
                  <Button severity="warning">
                    <a
                      class="icon-link"
                      href={userOverview.value.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                    />
                  </Button>
                )}
                {userOverview.value?.url && (
                  <Button severity="success">
                    <a
                      class="icon-external-link"
                      href={userOverview.value.url}
                      target="_blank"
                      rel="noreferrer"
                    />
                  </Button>
                )}
              </div>
            ),
            content: () => (
              <div class="flex flex-col gap-2">
                {userInfo.value.map((info) => (
                  <InfoText key={info.key} icon={info.icon} text={info.text!} />
                ))}
              </div>
            ),
          }}
        </Card>
      );
  },
  { props: ['isLoading'] }
);
