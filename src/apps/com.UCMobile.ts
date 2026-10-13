import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.UCMobile',
  name: 'UC浏览器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13188653',
        },
        {
          fastQuery: true,
          matches:
            '@View[clickable=true] < RelativeLayout <2 FrameLayout < FrameLayout < FrameLayout <4 FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/import/13197655',
        },
      ],
      order: -10,
    },
    {
      key: 1,
      name: '全屏广告-信息流广告',
      enable: true,
      activityIds: 'com.uc.browser.InnerUCMobile',
      rules: [
        {
          key: 0,
          matches:
            'TextView[text="广告"] +n ImageView[desc="不感兴趣"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12880737',
            'https://i.gkd.li/import/12881751',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text^="屏蔽"][text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12880772',
            'https://i.gkd.li/import/12881307',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-请求通知权限弹窗',
      enable: false,
      activityIds: 'com.uc.browser.InnerUCMobile',
      rules: '@ImageView - LinearLayout >n [text="开启消息通知"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12880812',
        'https://i.gkd.li/import/12880802',
      ],
    },
    {
      key: 3,
      name: '全屏广告-请求添加桌面快捷方式权限弹窗',
      enable: false,
      activityIds: 'com.uc.browser.InnerUCMobile',
      rules: '@ImageView + [text^="添加"][text$="到桌面"]',
      snapshotUrls: 'https://i.gkd.li/import/12880983',
    },
  ],
});
