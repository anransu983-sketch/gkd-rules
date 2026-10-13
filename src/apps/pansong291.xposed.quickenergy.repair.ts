import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'pansong291.xposed.quickenergy.repair',
  name: '芝麻粒',
  groups: [
    {
      key: 0,
      name: '全屏广告-开屏弹窗跳过',
      desc: '打开app点击知道了',
      enable: true,
      rules: [
        {
          activityIds: ['pansong291.xposed.quickenergy.ui.MainActivity'],
          matches: ["[id='android:id/button2']"],
          snapshotUrls: ['https://i.gkd.li/import/13445477'],
        },
      ],
    },
  ],
});
