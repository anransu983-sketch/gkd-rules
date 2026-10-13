import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.xfani.app',
  name: '稀饭动漫',
  groups: [
    {
      key: 0,
      name: '全屏广告-广告弹窗',
      enable: true,
      activityIds: 'com.xfani.app.MainActivity',
      rules: 'ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13188550',
    },
  ],
});
