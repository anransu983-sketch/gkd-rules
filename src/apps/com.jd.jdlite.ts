import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.jd.jdlite',
  name: '京喜特价',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页广告弹窗',
      enable: true,
      activityIds: 'com.jd.jdlite.MainFrameActivity',
      rules: '@[desc="关闭页面"] - FrameLayout >n [text="极速版弹窗"]',
      snapshotUrls: 'https://i.gkd.li/import/12727396',
    },
    {
      key: 1,
      name: '全屏广告-请求通知权限弹窗',
      enable: false,
      activityIds: 'com.jd.jdlite.MainFrameActivity',
      rules:
        '@ImageView[clickable=true] - LinearLayout > [text="开启消息通知"]',
      snapshotUrls: 'https://i.gkd.li/import/13062969',
    },
  ],
});
