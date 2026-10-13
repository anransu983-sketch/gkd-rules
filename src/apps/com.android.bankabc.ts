import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.bankabc',
  name: '中国农业银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      priorityTime: 10000,
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches: '[id="com.android.bankabc:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/14179162'
        },
        {
          key: 1,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17879768'
        }
      ],
      actionMaximumKey: 0,
      order: -10
    },
    {
      key: 1,
      name: '更新提示',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      fastQuery: true,
      activityIds: '.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="upgrade_checkbox"][checked=false]',
          snapshotUrls: ['https://i.gkd.li/i/14208545', 'https://i.gkd.li/i/16410094']
        },
        {
          key: 1,
          preKeys: [0],
          matches: '[vid="negativeTextView"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14208545'
        },
        {
          key: 2,
          preKeys: [0],
          matches: '[vid="iv_negative"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16410094'
        }
      ]
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      fastQuery: true,
      rules: [
        {
          matches: '[vid="iv_notification_reminder_dialog_close"]',
          activityIds: '.MainActivity',
          snapshotUrls: 'https://i.gkd.li/i/14208621'
        }
      ],
      ignoreGlobalGroupMatch: true
    }
  ]
});
