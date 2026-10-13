import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.fenbi.android.servant',
  name: '粉笔',
  groups: [
    {
      key: 0,
      name: '更新提示',
      enable: false,
      activityIds: 'com.fenbi.android.module.home.HomeActivity',
      rules: [
        {
          matches: '[id="com.fenbi.android.servant:id/close"]',
          snapshotUrls: 'https://i.gkd.li/import/12999725',
        },
      ],
    },
  ],
});
