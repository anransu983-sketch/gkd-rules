import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.android.quicksearchbox',
  name: '搜索',
  groups: [
    {
      key: 0,
      name: '局部广告-广告卡片',
      enable: true,
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[vid="ad_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13897834',
    },
  ],
});
