import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
  groups: [
    {
      key: 0,
      name: '青少年模式',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: '[id="com.kuaishou.nebula:id/positive"][text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13196316',
    },
  ],
});
