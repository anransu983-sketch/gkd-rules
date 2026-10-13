import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'cn.com.langeasy.LangEasyLexis',
  name: '不背单词',
  groups: [
    {
      key: 0,
      name: '功能类-自动签到',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'cn.com.langeasy.LangEasyLexis.activity.MainActivity',
          matches: '[id="cn.com.langeasy.LangEasyLexis:id/bb_checkin"]',
          snapshotUrls: 'https://i.gkd.li/import/13610321',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-右下角弹窗',
      enable: true,
      fastQuery: true,
      matchTime: 10000,
      rules: [
        {
          activityIds: 'cn.com.langeasy.LangEasyLexis.activity.MainActivity',
          matches: '[id="cn.com.langeasy.LangEasyLexis:id/close_float_button"]',
          snapshotUrls: 'https://i.gkd.li/import/13759025',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-新功能上线',
      enable: true,
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 200000,
      activityIds: '.activity.MainActivity',
      rules: [
        {
          matches: 'ImageView[id="cn.com.langeasy.LangEasyLexis:id/close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/18867092',
        },
      ],
    },
  ],
});
