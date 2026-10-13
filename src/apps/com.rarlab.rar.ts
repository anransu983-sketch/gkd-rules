import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.rarlab.rar',
  name: 'RAR',
  groups: [
    {
      key: 0,
      name: '全屏广告-订购 RAR 弹窗',
      desc: '自动点击【放弃】',
      enable: true,
      activityIds: 'com.rarlab.rar.MainActivity',
      rules: '[text="订购"] + [text="放弃"]',
      snapshotUrls: 'https://i.gkd.li/import/12781596',
    },
  ],
});
