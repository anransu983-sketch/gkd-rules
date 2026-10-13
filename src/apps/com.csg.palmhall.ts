import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.csg.palmhall',
  name: '南网在线',
  groups: [
    {
      key: 0,
      name: '更新提示',
      enable: false,
      activityIds: ['com.csg.palmhall.MainActivity'],
      rules: '@[text="关闭"] + [text="升级"]',
      snapshotUrls: ['https://i.gkd.li/import/12700060'],
    },
    {
      key: 1,
      name: '全屏广告-首页广告弹窗',
      enable: true,
      activityIds: ['com.csg.palmhall.MainActivity'],
      rules: 'View > Image +(3) [text="不再显示"][clickable=true]',
      snapshotUrls: ['https://i.gkd.li/import/12700075'],
    },
  ],
});
