import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 1,
      name: '关闭更新弹窗',
      activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
      snapshotUrls: 'https://i.gkd.li/import/12534264',
      rules:
        'Button[text="以后再说"][id^="com.greenpoint.android.mc10086.activity:id/dialog_btn"]',
    },
    {
      key: 2,
      name: '首页广告弹窗',
      activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
      rules: [
        {
          matches:
            '[id="com.greenpoint.android.mc10086.activity:id/ad_image"] < RelativeLayout + [id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
          snapshotUrls: ['https://i.gkd.li/import/12662361'],
        },
      ],
    },
    {
      key: 10,
      name: '请求推送通知弹窗',
      desc: '请求推送通知弹窗，点击取消',
      activityIds: 'com.mc10086.cmcc.base.StartPageActivity',
      rules: [
        {
          matches: '[text*="开启推送通知"] +(2) LinearLayout > [text="取消"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12662213',
            'https://i.gkd.li/import/13327880',
          ],
        },
        {
          fastQuery: true,
          matches: '[text="授权提醒"] +3 [text="拒绝"]',
          snapshotUrls: ['https://i.gkd.li/import/13775652'],
        },
      ],
    },
    {
      key: 11,
      name: '请求获取剪贴板权限弹窗',
      desc: '请求获取剪贴板权限弹窗，点击不允许',
      activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
      rules: [
        {
          matches:
            '[text*="获取您的"] < LinearLayout +(2) LinearLayout >(2) [text="不允许"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12662251',
            'https://i.gkd.li/import/13775651',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '右侧悬浮小图标',
      activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
      rules: [
        {
          matches:
            '[id="com.greenpoint.android.mc10086.activity:id/drag_img"] + [id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
          snapshotUrls: ['https://i.gkd.li/import/12662265'],
        },
      ],
    },
    {
      key: 13,
      name: '请求好评弹窗',
      activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
      rules: [
        {
          matches:
            '@[id="com.greenpoint.android.mc10086.activity:id/close_img"][desc="关闭"] - RelativeLayout >(2) [text$="好评"]',
          snapshotUrls: ['https://i.gkd.li/import/12662345'],
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-首页弹窗广告',
      enable: true,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      fastQuery: true,
      rules: [
        {
          matches:
            '[id="com.greenpoint.android.mc10086.activity:id/ad_image"] < RelativeLayout + [id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          snapshotUrls: 'https://i.gkd.li/i/12662361',
        },
      ],
    },
    {
      key: 15,
      name: '局部广告-右侧悬浮小图标',
      enable: true,
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches:
            '[vid="close_btn" || vid="close_btn_bottom" || vid="cmcc_digital_delete_float_icon_ll"]',
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          actionCd: 300,
          snapshotUrls: [
            'https://i.gkd.li/i/12662265',
            'https://i.gkd.li/i/14570369',
            'https://i.gkd.li/i/25768816',
          ],
        },
        {
          key: 1,
          matches:
            '[vid="tab_ai_tag"] >2 [vid="ai_floatingBar_close"][clickable=true]',
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          snapshotUrls: 'https://i.gkd.li/i/25768547',
        },
        {
          key: 2,
          matches:
            '@Image[clickable=true][text!=null] <<3 WebView[text="余量查询"] <<2 [vid="patmentwebview"]',
          activityIds: 'com.cmccit.webview.ac.CommonHtml5Activity',
          snapshotUrls: 'https://i.gkd.li/i/14738550',
        },
      ],
    },
    {
      key: 16,
      name: '全屏广告-关闭更新弹窗',
      enable: false,
      activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
      rules:
        'Button[text="以后再说"][id^="com.greenpoint.android.mc10086.activity:id/dialog_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/12534264',
    },
    {
      key: 17,
      name: '全屏广告-首页广告弹窗',
      enable: true,
      activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
      rules: [
        {
          matches:
            '[id="com.greenpoint.android.mc10086.activity:id/ad_image"] < RelativeLayout + [id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
          snapshotUrls: ['https://i.gkd.li/import/12662361'],
        },
      ],
    },
    {
      key: 18,
      name: '全屏广告-请求推送通知弹窗',
      desc: '请求推送通知弹窗，点击取消',
      enable: false,
      activityIds: 'com.mc10086.cmcc.base.StartPageActivity',
      rules: [
        {
          matches: '[text*="开启推送通知"] +(2) LinearLayout > [text="取消"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12662213',
            'https://i.gkd.li/import/13327880',
          ],
        },
        {
          matches: '[text="授权提醒"] +3 [text="拒绝"]',
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/import/13775652'],
        },
      ],
    },
    {
      key: 19,
      name: '全屏广告-请求获取剪贴板权限弹窗',
      desc: '请求获取剪贴板权限弹窗，点击不允许',
      enable: false,
      activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
      rules: [
        {
          matches:
            '[text*="获取您的"] < LinearLayout +(2) LinearLayout >(2) [text="不允许"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12662251',
            'https://i.gkd.li/import/13775651',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '全屏广告-请求好评弹窗',
      enable: true,
      activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
      rules: [
        {
          matches:
            '@[id="com.greenpoint.android.mc10086.activity:id/close_img"][desc="关闭"] - RelativeLayout >(2) [text$="好评"]',
          snapshotUrls: ['https://i.gkd.li/import/12662345'],
        },
      ],
    },
    {
      key: 21,
      name: '开屏广告-跳过按钮',
      desc: '开屏广告右上角倒计时跳过按钮(vid=video_time_skip)',
      enable: true,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      fastQuery: true,
      rules: [
        {
          matches: '[vid="video_time_skip"]',
        },
      ],
    },
  ],
});
