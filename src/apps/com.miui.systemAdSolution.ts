import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.miui.systemAdSolution',
  name: 'miui系统广告',
  groups: [
    {
      key: 0,
      name: '全屏广告-miui-为什么不希望看到这条推广',
      desc: '点击【不感兴趣】',
      enable: true,
      activityIds: [
        'com.xiaomi.ad.feedback',
        'com.android.thememanager.module.detail.view.ThemeDetailActivity',
        'com.android.thememanager.ThemeResourceProxyTabActivity',
      ],
      rules: '[id="com.miui.systemAdSolution:id/no_interest"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13227328',
        'https://i.gkd.li/import/13255751',
      ],
    },
    {
      key: 1,
      name: '局部广告-miui-为什么不希望看到这条推广',
      desc: '点击推广内容反馈页面的【不感兴趣】选项',
      enable: true,
      fastQuery: true,
      activityIds: [
        'com.xiaomi.ad.feedback',
        'com.android.thememanager.module.detail.view.ThemeDetailActivity',
        'com.android.thememanager.ThemeResourceProxyTabActivity',
      ],
      rules: '[id="com.miui.systemAdSolution:id/no_interest"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13227328',
        'https://i.gkd.li/import/13255751',
      ],
    },
  ],
});
