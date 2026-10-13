import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.byd.aeri.caranywhere',
  name: '比亚迪王朝',
  groups: [
    {
      key: 0,
      name: '更新提示',
      enable: false,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: ['com.byd.aeri.splash.module_splash.activity.TabManager'],
      rules: [
        {
          fastQuery: true,
          matches: [
            '[id="com.byd.aeri.caranywhere:id/tv_determine"][text="立即安装"]',
            '[id="com.byd.aeri.caranywhere:id/tv_cancel"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13348383',
        },
      ],
    },
  ],
});
