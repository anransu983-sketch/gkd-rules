import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.buyanchuantong.buyanshufa',
  name: '不厌书法',
  groups: [
    {
      key: 0,
      name: '全屏广告-功能介绍',
      enable: true,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.buyanchuantong.buyanshufa.SplashActivity',
      rules: [
        {
          matches:
            '[id="com.buyanchuantong.buyanshufa:id/next_page_imageview"][text^="点击跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13425296',
        },
      ],
    },
  ],
});
