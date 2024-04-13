import { defineComponent } from 'vue';

import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Panel from 'primevue/panel';

import { useStore } from 'effector-vue/composition';

import { $user } from '@entities/user';
import { $viewer } from '@entities/viewer';

import { savedUsers } from '@localStorages/user';

import { changeUserLogin } from '../model';

import type { SavedUser } from '@entities/saved-user';

type Props = {
  avatar: Exclude<SavedUser, null>['avatarUrl'];
  login: Exclude<SavedUser, null>['login'];
  name: Exclude<SavedUser, null>['name'];
};

export const SavedUserCard = defineComponent<Props>(
  (props) => {
    const viewer = useStore($viewer);
    const user = useStore($user);

    const handleDelete = () => {
      if (props.login === user.value?.login) {
        changeUserLogin(viewer.value!.login);
      }

      savedUsers.value.delete(props.login);
    };

    return () => (
      <Panel>
        {{
          header: () => (
            <div class="flex items-center gap-2">
              <Avatar
                image={props.avatar}
                label={props.avatar ? undefined : props.login}
                shape="circle"
                size="large"
              />
              <span class="font-bold">{props.name}</span>
            </div>
          ),
          icons: () => (
            <Button
              icon="icon-delete"
              onClick={handleDelete}
              severity="danger"
            />
          ),
        }}
      </Panel>
    );
  },
  { props: ['name', 'login', 'avatar'] }
);
