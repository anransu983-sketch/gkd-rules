import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.baidu.newapp',
  name: '文心一言',
  groups: [
    {
      key: 0,
      name: '更新提示',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches: '[text="立即更新"] + [text="暂不升级"]',
          snapshotUrls: 'https://i.gkd.li/import/13360280',
        },
      ],
    },
  ],
});
