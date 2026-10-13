import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.jc.avatar.mm',
  name: '萌妹',
  groups: [
    {
      key: 0,
      name: '全屏广告-广告弹窗',
      enable: true,
      activityIds: 'com.jc.avatar.mm.MainActivity',
      rules:
        'ImageView -2 FrameLayout > FrameLayout > FrameLayout > FrameLayout > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13188475',
    },
  ],
});
