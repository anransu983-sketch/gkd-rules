import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.vmos.pro',
  name: 'VMOS Pro',
  groups: [
    {
      key: 0,
      name: '全屏广告-广告弹窗',
      enable: true,
      fastQuery: true,
      activityIds: 'com.vmos.pro.activities.main.MainActivity',
      rules: '[id="com.vmos.pro:id/iv_dismiss"] ',
      snapshotUrls: 'https://i.gkd.li/import/13536416',
    },
  ],
});
