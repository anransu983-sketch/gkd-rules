import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.superrhino.rarering',
  name: 'Nico',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击跳过',
      enable: true,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@View[clickable=true] <3 * <2 * < FrameLayout[id="com.superrhino.rarering:id/fl_container"]',
          snapshotUrls: 'https://i.gkd.li/import/13853858',
        },
      ],
      order: -10,
    },
  ],
});
