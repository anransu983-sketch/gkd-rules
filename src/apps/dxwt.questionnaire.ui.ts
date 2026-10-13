import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'dxwt.questionnaire.ui',
  name: '10000社区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc^="关闭"][desc.length<=10][visibleToUser=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/13255491',
        'https://i.gkd.li/import/13259475',
      ],
      order: -10,
    },
  ],
});
