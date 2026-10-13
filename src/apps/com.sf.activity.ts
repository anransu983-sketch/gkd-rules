import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.sf.activity',
  name: '顺丰速运',
  groups: [
    {
      key: 0,
      name: '更新提示',
      enable: false,
      activityIds: 'com.sf.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '@[text="取消"] < ViewGroup - ScrollView >(2) [text*="新版本"]',
          snapshotUrls: 'https://i.gkd.li/import/12642445',
        },
        {
          key: 1,
          matches: '@[desc="取消"] - ViewGroup >n [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/import/13291144',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-专属月报弹窗',
      enable: true,
      activityIds: 'com.sf.activity.MainActivity',
      rules: ['[id="MonthReportDialogCloseBtn"] > ImageView'],
      snapshotUrls: 'https://i.gkd.li/import/12642441',
    },
  ],
});
