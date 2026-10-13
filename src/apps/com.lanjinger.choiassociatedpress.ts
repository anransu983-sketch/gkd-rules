import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.lanjinger.choiassociatedpress',
  name: '财联社',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页-弹窗广告',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      activityIds: 'com.lanjinger.choiassociatedpress.main.OperateActivity',
      rules: '@ImageView[id$="iv_back"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13749206',
    },
  ],
});
