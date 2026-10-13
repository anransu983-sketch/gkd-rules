import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.craftvpn.craft',
  name: '小牛加速器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击X',
      enable: true,
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@View < View[childCount=2] < View[childCount=1] < View[childCount=1] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/import/13914788',
        },
      ],
      order: -10,
    },
  ],
});
