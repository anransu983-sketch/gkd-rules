import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.xingye.app',
  name: '星野',
  groups: [
    {
      key: 0,
      name: '青少年模式',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[id="com.xingye.app:id/teenagerDialogConfirmTv"]',
      snapshotUrls: 'https://i.gkd.li/import/13766001',
    },
  ],
});
