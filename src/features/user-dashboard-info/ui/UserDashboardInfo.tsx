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
  (props, { attrs }) => {
    const userOverview = useStore($userOverview);

    const { userInfo } = useUserInfo();

    return () =>
      !userOverview.value || props.isLoading ? (
        <Skeleton {...attrs} height="100%" />
      ) : (
        <Card {...attrs}>
          {{
            content: () => (
              <div class="flex flex-col gap-2">
                {userInfo.value.map((info) => (
                  <InfoText icon={info.icon} key={info.key} text={info.text!} />
                ))}
              </div>
            ),
            title: () => (
              <div class="flex gap-2">
                <span class="mr-auto">Info</span>
                {userOverview.value?.websiteUrl && (
                  <Button severity="warning">
                    <a
                      class="icon-link"
                      href={userOverview.value.websiteUrl}
                      rel="noreferrer"
                      target="_blank"
                    />
                  </Button>
                )}
                {userOverview.value?.url && (
                  <Button severity="success">
                    <a
                      class="icon-external-link"
                      href={userOverview.value.url}
                      rel="noreferrer"
                      target="_blank"
                    />
                  </Button>
                )}
              </div>
            ),
          }}
        </Card>
      );
  },
  { props: ['isLoading'] }
);
