import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.zuoyebang.knowledge',
  name: '作业帮家长版',
  groups: [
    {
      key: 0,
      name: '更新提示',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.zuoyebang.knowledge:id/cancel_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13695522',
    },
    {
      key: 1,
      name: '全屏广告-赏好评弹窗',
      enable: true,
      fastQuery: true,
      activityIds: 'com.baidu.homework.activity.init.InitActivity',
      rules: 'TextView[id="com.zuoyebang.knowledge:id/btn_cancle"]',
      snapshotUrls: 'https://i.gkd.li/import/13043228',
    },
  ],
});
