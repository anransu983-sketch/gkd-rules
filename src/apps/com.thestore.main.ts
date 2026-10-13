import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.thestore.main',
  name: '1号会员店',
  groups: [
    {
      key: 0,
      name: '全屏广告-促销广告',
      desc: '关闭促销弹窗，也许有用呢',
      enable: true,
      activityIds: 'com.thestore.main.app.home.HomeActivity',
      rules: [
        {
          matches: '[id="com.thestore.main.home.feature:id/ad"] > TextView',
          snapshotUrls: 'https://i.gkd.li/import/13163686',
        },
      ],
    },
  ],
});
