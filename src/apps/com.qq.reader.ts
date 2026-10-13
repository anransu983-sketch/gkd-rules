import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.qq.reader',
  name: 'QQ阅读',
  groups: [
    {
      key: 0,
      name: '青少年模式',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.qq.reader:id/tv_i_know"]',
      snapshotUrls: 'https://i.gkd.li/import/13194867',
    },
  ],
});
