import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.mm.android.lchg',
  name: '乐橙含光',
  groups: [
    {
      key: 0,
      name: '更新提示',
      enable: false,
      activityIds: 'com.lc.mine.view.activity.AboutActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches: '[id="com.mm.android.lchg:id/btn_cancel"][text*="稍后再说"]',
          snapshotUrls: 'https://i.gkd.li/import/13540871',
        },
      ],
    },
  ],
});
