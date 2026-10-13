import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.netease.yanxuan',
  name: '网易严选',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页-弹窗广告',
      enable: true,
      activityIds:
        'com.netease.yanxuan.module.mainpage.activity.MainPageActivity',
      rules: '[id="com.netease.yanxuan:id/trans_cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/12840641',
    },
  ],
});
