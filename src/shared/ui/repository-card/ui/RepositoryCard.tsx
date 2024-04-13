import { defineComponent } from 'vue';

import Button from 'primevue/button';
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import Tag from 'primevue/tag';

type Props = {
  description: null | string;
  forks: number;
  isArchived: boolean;
  isFork: boolean;
  isLocked: boolean;
  name: string;
  primaryLanguage: {
    color: null | string;
    name: string;
  } | null;
  url: string;
};

export const RepositoryCard = defineComponent<Props>(
  (props) => {
    return () => (
      <Card>
        {{
          header: () => (
            <div class="flex items-center gap-2 p-3">
              <Chip
                icon="icon-git-fork"
                label={`Forks: ${String(props.forks)}`}
              />
              {props.primaryLanguage && (
                <>
                  <Tag
                    style={{
                      backgroundColor: props.primaryLanguage.color,
                    }}
                    value={props.primaryLanguage.name}
                  />
                  {props.isFork && <Tag severity="info" value="Fork" />}
                  {props.isArchived && (
                    <Tag severity="warning" value="Archived" />
                  )}
                  {props.isLocked && <Tag severity="danger" value="Locked" />}
                </>
              )}
              <Button class="ml-auto" severity="success">
                <a
                  class="icon-external-link"
                  href={props.url}
                  rel="noreferrer"
                  target="_blank"
                />
              </Button>
            </div>
          ),
          title: () => props.name,
          content: () => props.description,
        }}
      </Card>
    );
  },
  {
    props: [
      'description',
      'forks',
      'isArchived',
      'isFork',
      'isLocked',
      'name',
      'primaryLanguage',
      'url',
    ],
  }
);
