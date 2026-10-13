import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.mi.health',
  name: '小米运动健康',
  groups: [
    {
      key: 0,
      name: '全屏广告-好评弹窗',
      enable: true,
      activityIds: 'com.xiaomi.fitness.baseui.common.CommonBaseActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[id="com.mi.health:id/nextView"][text="下次再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13258813',
    },
    {
      key: 1,
      name: '全屏广告-权限提醒',
      enable: false,
      activityIds: 'com.xiaomi.fitness.main.MainActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[text="开启后台无限制"] + [id="com.mi.health:id/close_icon"]',
      snapshotUrls: 'https://i.gkd.li/import/13495035',
    },
    {
      key: 2,
      name: '全屏广告-活动弹窗',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          fastQuery: true,
          matches:
            '[id="com.mi.health:id/cardview"] + [id="com.mi.health:id/dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13537836',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          matches: '[text^="发现新版本"] < * + * >n [text="放弃更新"]',
          snapshotUrls: 'https://i.gkd.li/import/13537840',
        },
        {
          activityIds: 'com.mi.health.home.HomeActivity',
          matches:
            '[text="立即更新"] + [id="com.mi.health:id/tv_negative"][text="取消"]',
          snapshotUrls: 'https://i.gkd.li/import/13626328',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告',
      desc: '关闭各页面的局部广告',
      enable: true,
      matchTime: 10000,
      rules: [
        {
          fastQuery: true,
          name: '调研邀请',
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          matches:
            '[vid="bannerAnnouncementView"] [vid="iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24099864',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告',
      desc: '关闭各页面的全屏广告',
      enable: true,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '活动弹窗',
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          matches:
            '[id="com.mi.health:id/cardview"] + [id="com.mi.health:id/dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13537836',
        },
        {
          key: 1,
          name: '表盘广告',
          activityIds: 'com.xiaomi.wearable.yrn.views.WearableRNActivity',
          matches: '@[clickable=true] > [desc="Close"]',
          snapshotUrls: 'https://i.gkd.li/i/23923968',
        },
      ],
    },
  ],
});
