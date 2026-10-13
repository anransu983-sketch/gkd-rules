import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 0,
      name: '更新提示',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      activityIds: ['com.unionpay.base.UPDialog'],
      rules: [
        {
          matches: '@[text="稍候再说"] + [text="立即更新"]',
          snapshotUrls: 'https://i.gkd.li/import/12727278',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-支付完成界面广告卡片',
      enable: false,
      fastQuery: true,
      activityIds: 'com.unionpay.activity.react.UPActivityReactNative',
      rules: [
        {
          key: 0,
          matches: '[id="bannerBox"] > @View[clickable=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13070564',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[text="关闭广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13070974',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-右侧悬浮广告',
      enable: true,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      activityIds: ['com.unionpay.activity.UPActivityMain'],
      rules: [
        {
          matches:
            '[id="com.unionpay:id/frog_float"] >2 [id="com.unionpay:id/close_view"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12695699',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-定位权限悬浮弹窗',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      activityIds: 'com.unionpay.activity.UPActivityMain',
      rules: '[id="com.unionpay:id/view_locate_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13634882',
    },
    {
      key: 4,
      name: '全屏广告-访问位置请求弹窗',
      desc: '自动点击【不允许】。默认关闭，请手动开启',
      enable: true,
      fastQuery: true,
      activityIds: ['com.unionpay.base.UPDialog'],
      rules: [
        {
          matches:
            '[text$="想访问您的位置信息"] < * +2 LinearLayout > [id="com.unionpay:id/btn_cancel"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12695773',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-开启消息通知弹窗',
      desc: '默认关闭，请手动开启',
      enable: false,
      fastQuery: true,
      activityIds: ['com.unionpay.base.UPDialog'],
      rules: [
        {
          matches:
            '[text="开启消息通知"] < * + [id="com.unionpay:id/view_alert_cancel"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12695736',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-天天签到-获得新勋章提示',
      desc: '点击左上角返回',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
          matches:
            'WebView[text="天天签到"] TextView[text="炫耀一下"] + TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13440341',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-我的页面-广告弹窗',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.unionpay.activity.UPActivityMain',
      rules:
        '[id="com.unionpay:id/container"] + [id="com.unionpay:id/image"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13440341',
    },
    {
      key: 8,
      name: '全屏广告-领取优惠弹窗',
      desc: '点击X',
      enable: true,
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
          matches:
            '[id="com.unionpay:id/view_content_container"] View[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13848688',
        },
      ],
    },
    {
      key: 9,
      name: '分段广告-支付完成界面广告卡片',
      desc: '关闭支付完成页面底部的广告卡片',
      enable: false,
      activityIds: 'com.unionpay.activity.react.UPActivityReactNative',
      rules: [
        {
          key: 0,
          matches: '[id="bannerBox"] > @View[clickable=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13070564',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[text="关闭广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13070974',
        },
      ],
    },
    {
      key: 10,
      name: '局部广告-浮窗广告',
      desc: '点击关闭浮窗广告',
      enable: true,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.unionpay.activity.UPActivityMain',
          matches: '[vid="close_view"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20239453',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.activity.UPActivityMain',
          matches: '[vid="frog_float"] >2 [vid="close_view"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14586427',
            'https://i.gkd.li/i/31259720',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-各类全屏弹窗广告',
      desc: '点击关闭各类全屏弹窗广告，例如获得新勋章提示、我的页面广告弹窗、领取优惠弹窗',
      enable: true,
      rules: [
        {
          key: 0,
          name: '天天签到-获得新勋章提示',
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
          matches:
            'WebView[text="天天签到"] TextView[text="炫耀一下"] + TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13440341',
        },
        {
          key: 1,
          name: '我的页面-广告弹窗',
          matchTime: 10000,
          actionMaximum: 1,
          activityIds: 'com.unionpay.activity.UPActivityMain',
          matches:
            '[id="com.unionpay:id/container"] + [id="com.unionpay:id/image"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13440341',
        },
        {
          key: 2,
          name: '领取优惠弹窗',
          activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
          matches:
            '[id="com.unionpay:id/view_content_container"] View[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13848688',
        },
      ],
    },
  ],
});
