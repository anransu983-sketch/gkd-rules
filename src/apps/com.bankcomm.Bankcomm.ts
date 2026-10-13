import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.bankcomm.Bankcomm',
  name: '交通银行',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页弹窗广告',
      desc: '点击右上角x',
      enable: true,
      activityIds: [
        'com.bankcomm.module.biz.home.MainActivity',
        'com.hihonor.android.launcher.unihome.UniHomeLauncher',
      ],
      rules:
        '[id="com.bankcomm.Bankcomm:id/popup_ad_image"] - [id="com.bankcomm.Bankcomm:id/popup_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12671987',
        'https://i.gkd.li/import/12745293',
      ],
    },
    {
      key: 1,
      name: '更新提示',
      desc: '点击 暂不更新',
      enable: false,
      activityIds: [
        'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
        'com.bankcomm.module.biz.home.MainActivity',
      ],
      rules: '[id = "com.bankcomm.Bankcomm:id/tvNotNow" && text = "暂不更新"]',
      snapshotUrls: 'https://i.gkd.li/import/12842484',
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.bankcomm.module.biz.home.MainActivity',
          matches: '[vid="popup_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15046998',
        },
      ],
    },
    {
      key: 3,
      name: '通知提示-网络代理提示弹窗',
      desc: '点击[继续使用]',
      enable: false,
      ignoreGlobalGroupMatch: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.bankcomm.module.biz.home.MainActivity',
          matches: '[text="继续使用"]',
          snapshotUrls: 'https://i.gkd.li/i/17556284',
        },
      ],
    },
  ],
});
