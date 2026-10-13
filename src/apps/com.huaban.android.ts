import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.huaban.android',
  name: '花瓣',
  groups: [
    {
      key: 0,
      name: '更新提示-版本更新弹窗',
      desc: '点击不再提示',
      enable: false,
      fastQuery: true,
      rules: [
        {
          matches: '[vid="tv_update"] + * > [text="不再提示"]',
          snapshotUrls: 'https://i.gkd.li/import/13832253',
        },
      ],
    },
  ],
});
