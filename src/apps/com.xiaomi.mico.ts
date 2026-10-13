import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.xiaomi.mico',
  name: '小爱音箱',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页广告弹窗',
      enable: true,
      activityIds: 'com.xiaomi.mico.main.MainActivity',
      rules:
        '[id="com.xiaomi.mico:id/adImage"] + [id="com.xiaomi.mico:id/ivCloseAd"]',
      snapshotUrls: 'https://i.gkd.li/import/12745621',
    },
  ],
});
