import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'org.daimhim.zzzfun',
  name: 'ZzzFun',
  groups: [
    {
      key: 0,
      name: '全屏广告-广告弹窗',
      enable: true,
      activityIds: 'org.daimhim.zzzfun.ui.home.video.VideoDetailsActivity',
      rules: 'ImageView -2 ImageView + FrameLayout > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13402608',
    },
  ],
});
