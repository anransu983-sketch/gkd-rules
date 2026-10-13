import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.pywm.fund',
  name: '普益基金',
  groups: [
    {
      key: 0,
      name: '更新提示',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: 'TextView[text="立即更新"]',
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/import/13327271',
        },
      ],
    },
  ],
});
