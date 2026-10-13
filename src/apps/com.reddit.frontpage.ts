import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.reddit.frontpage',
  name: 'Reddit',
  groups: [
    {
      key: 0,
      name: '全屏广告-社区消息-更新提示',
      enable: false,
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.reddit.launch.main.MainActivity',
          matches: '[id="com.reddit.frontpage:id/cancel_button"]',
          snapshotUrls: 'https://i.gkd.li/import/13649914',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-NSFW 内容提示',
      desc: '自动点击 continue',
      enable: true,
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.reddit.launch.main.MainActivity',
          matches: 'Button[text="Cancel"] + Button[text="Continue"]',
          snapshotUrls: 'https://i.gkd.li/import/13649992',
        },
      ],
    },
  ],
});
