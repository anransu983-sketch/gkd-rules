import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.duitang.main',
  name: '堆糖',
  groups: [
    {
      key: 0,
      name: '青少年模式',
      desc: '关闭青少年模式提醒弹窗',
      enable: false,
      actionMaximum: 1,
      activityIds: ['com.duitang.main.business.main.NAMainActivity'],
      rules: [
        {
          matches: '[id="com.duitang.main:id/teenGuideKnown"]',
          snapshotUrls: 'https://i.gkd.li/import/13202230',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-首页-推荐浏览广告',
      desc: '关闭推荐浏览页面广告',
      enable: true,
      activityIds: ['com.duitang.main.business.main.NAMainActivity'],
      fastQuery: true,
      rules: [
        {
          matches: '[id="com.duitang.main:id/adOptionEntry"]',
          snapshotUrls: 'https://i.gkd.li/import/13202725',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-去商店评分',
      desc: '点击[下次再说]',
      enable: true,
      actionMaximum: 1,
      fastQuery: true,
      activityIds: ['com.miui.home.launcher.Launcher'],
      rules: [
        {
          matches: '[id="com.duitang.main:id/scoreDuitangCancel"]',
          snapshotUrls: 'https://i.gkd.li/import/13203217',
        },
      ],
    },
  ],
});
