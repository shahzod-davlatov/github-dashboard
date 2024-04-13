export type GroupItem = {
  avatarUrl: string;
  login: string;
  name: string;
};

export type Group = {
  items: GroupItem[];
  label: string;
};
