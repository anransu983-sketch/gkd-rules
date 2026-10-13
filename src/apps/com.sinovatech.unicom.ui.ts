import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.sinovatech.unicom.ui',
  name: '中国联通',
  groups: [
    {
      key: 0,
      name: '全屏广告-权限申请',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
      rules:
        '[text="去开启"] - [id="com.sinovatech.unicom.ui:id/custom_dialog_cancel_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13331268',
    },
    {
      key: 1,
      name: '更新提示',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
      rules: '[id="com.sinovatech.unicom.ui:id/custom_dialog_cancel_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13511386',
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '关闭各页面的全屏广告弹窗',
      enable: true,
      rules: [
        {
          key: 0,
          name: '首页弹窗1',
          forcedTime: 10000,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches:
            '[text="首页弹窗"] >2 View > @Image[clickable=true][text!=null] <<n [vid="main_fragment_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/14504242',
        },
        {
          key: 1,
          name: '首页弹窗2',
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches:
            'WebView[text!=null] > View[id="app"] >2 View[childCount>3] > View[childCount=1] > @TextView[childCount=0][visibleToUser=true][text=""][width<150&&height<150] <<n [vid="main_fragment_layout" || vid="main_fragment_layout_haoka"]',
          snapshotUrls: [
            'https://i.gkd.li/i/15971964',
            'https://i.gkd.li/i/18290899',
          ],
        },
        {
          key: 2,
          name: '首页弹窗3',
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches:
            '@Image[text^="close"][childCount=0][width<150 && height<150] <2 View < View <2 View < View < View <2 View < View < WebView < WebView < [vid="homeweb_rootview"]',
          snapshotUrls: 'https://i.gkd.li/i/23764750',
        },
        {
          key: 5,
          name: '全屏广告-剩余话费弹窗广告',
          actionMaximum: 1,
          resetMatch: 'app',
          fastQuery: true,
          activityIds:
            'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          matches:
            '@TextView[index=parent.childCount.minus(1)][width<78 && height<78] <n View[left=0 && top=0] <n View[left=0 && top=0] <<3 WebView - [vid="toutiao_webview_xinxiliu_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/28557416',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-首页右下角卡片悬浮窗',
      desc: '点击X',
      enable: true,
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches: '[id="com.sinovatech.unicom.ui:id/home_xuanfu_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13930543',
        },
      ],
    },
  ],
});
