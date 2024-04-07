import { computed } from 'vue';

import { useStore } from 'effector-vue/composition';

import { $userOverview } from '@entities/user-overview';

export const useContributionsData = () => {
  const userOverview = useStore($userOverview);

  const contributionsData = computed(() => {
    if (!userOverview.value?.contributionsCollection) {
      return [];
    }

    const { contributionsCollection } = userOverview.value;

    return [
      {
        name: 'Issue',
        total: contributionsCollection.totalIssueContributions,
      },
      {
        name: 'Commit',
        total: contributionsCollection.totalCommitContributions,
      },
      {
        name: 'Repository',
        total: contributionsCollection.totalRepositoryContributions,
      },
      {
        name: 'Pull Request',
        total: contributionsCollection.totalPullRequestContributions,
      },
      {
        name: 'Review',
        total: contributionsCollection.totalPullRequestReviewContributions,
      },
    ];
  });

  return { contributionsData };
};
