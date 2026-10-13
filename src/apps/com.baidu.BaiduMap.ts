import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    {
      key: 1,
      name: '地图上方黄页横幅',
      fastQuery: true,
      activityIds: [
        'com.baidu.baidumaps.MapsActivity',
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
        'com.lbe.security.ui.CountdownDialogActivity'
      ],
      rules: 'ImageView[id="com.baidu.BaiduMap:id/yellow_banner_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12642301',
        'https://i.gkd.li/import/12801465',
        'https://i.gkd.li/import/12909281'
      ]
    },
    {
      key: 2,
      name: '打车界面-右侧悬浮球',
      fastQuery: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: 'RelativeLayout[id="com.baidu.BaiduMap:id/rl_close_content"]',
      snapshotUrls: 'https://i.gkd.li/import/12642307'
    },
    {
      enable: false,
      key: 3,
      name: '美食大礼包弹窗',
      fastQuery: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: '[text="美食大礼包"] +(6) TextView[id=null][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12642310'
    },
    {
      enable: false,
      key: 4,
      name: '酒店提前订弹窗',
      fastQuery: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: '[id="lottie_box"] + TextView[id=null][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12642319'
    },
    {
      enable: false,
      key: 5,
      name: '请求定位弹窗',
      fastQuery: true,
      activityIds: [
        'com.baidu.mapframework.widget.BMBaseDialog',
        'com.baidu.baidumaps.MapsActivity'
      ],
      rules: [
        {
          matches: '[text^="开启位置服务"] + RelativeLayout > [id="com.baidu.BaiduMap:id/tv_notip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12660884'
        },
        {
          matches: '[text="需开启系统定位服务开关"] +2 [id="com.baidu.BaiduMap:id/ll_dialog_btn"] > [id="com.baidu.BaiduMap:id/tv_dialog_cancel"]',
          snapshotUrls: 'https://i.gkd.li/import/12660883'
        },
        {
          matches: 'ImageView[id="com.baidu.BaiduMap:id/location_dialog_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/import/12909299'
        }
      ]
    },
    {
      enable: false,
      key: 6,
      name: '打车界面-弹窗广告',
      fastQuery: true,
      activityIds: [
        'com.baidu.baidumaps.MapsActivity',
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity'
      ],
      rules: 'ImageView[id="com.baidu.BaiduMap:id/operational_activities_content_close"]',
      snapshotUrls: ['https://i.gkd.li/import/12909300', 'https://i.gkd.li/import/12930699']
    },
    {
      enable: false,
      key: 7,
      name: '升级更新弹窗',
      fastQuery: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: 'ImageView[id="com.baidu.BaiduMap:id/cancel_update"]',
      snapshotUrls: 'https://i.gkd.li/import/12909385'
    },
    {
      enable: false,
      key: 8,
      name: '打开通知权限',
      fastQuery: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: '[text="打开通知权限"] <n LinearLayout + ImageView[id="com.baidu.BaiduMap:id/push_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13258995'
    },
    {
      enable: false,
      key: 9,
      name: '通勤卡-添加至桌面',
      desc: '点击取消',
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: 'TextView[id="com.baidu.BaiduMap:id/tv_dialog_cancel"]',
          snapshotUrls: 'https://i.gkd.li/import/13439258'
        }
      ]
    },
    {
      key: 10,
      name: '局部广告-各类局部广告',
      enable: false,
      rules: [
        {
          key: 1,
          name: '地图上方黄页横幅',
          matches: 'ImageView[id="com.baidu.BaiduMap:id/yellow_banner_close"]',
          activityIds: [
            'com.baidu.baidumaps.MapsActivity',
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
            'com.lbe.security.ui.CountdownDialogActivity'
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/12642301',
            'https://i.gkd.li/i/12801465',
            'https://i.gkd.li/i/12909281',
            'https://i.gkd.li/i/24633179'
          ]
        },
        {
          key: 2,
          name: '局部广告-打车界面右侧悬浮球',
          matches: 'RelativeLayout[id="com.baidu.BaiduMap:id/rl_close_content"]',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/12642307'
        },
        {
          key: 3,
          name: '路线广告-1',
          matches: '[vid="banner_ad_close_icon"][visibleToUser=true]',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22656085'
        },
        {
          key: 4,
          name: '路线广告-2',
          matches: 'ImageView[childCount=0] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] + ViewGroup > [text="广告"]',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22616267'
        }
      ]
    },
    {
      key: 11,
      name: '全屏广告-各类弹窗广告',
      enable: false,
      rules: [
        {
          key: 0,
          name: '美食大礼包弹窗',
          matches: '[text="美食大礼包"] +(6) TextView[id=null][clickable=true]',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/12642310'
        },
        {
          key: 1,
          name: '酒店提前订弹窗',
          matches: '[id="lottie_box"] + TextView[id=null][clickable=true]',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/12642319'
        },
        {
          key: 2,
          name: '打车界面弹窗广告',
          matches: 'ImageView[id="com.baidu.BaiduMap:id/operational_activities_content_close"]',
          activityIds: [
            'com.baidu.baidumaps.MapsActivity',
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity'
          ],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/12909300', 'https://i.gkd.li/i/12930699']
        },
        {
          key: 3,
          matches: '[vid="img_close"][visibleToUser=true]',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22616256'
        }
      ]
    },
    {
      key: 12,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      fastQuery: true,
      rules: [
        {
          matches: '[vid="push_close"]',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          snapshotUrls: 'https://i.gkd.li/i/15284736'
        }
      ],
      ignoreGlobalGroupMatch: true
    },
    {
      key: 13,
      name: '功能类-通勤卡添加至桌面',
      desc: '点击取消',
      enable: false,
      actionMaximum: 1,
      fastQuery: true,
      rules: [
        {
          matches: ['[text="添加至桌面"]', '[text="取消"]'],
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          snapshotUrls: ['https://i.gkd.li/i/13439258', 'https://i.gkd.li/i/16920986']
        }
      ]
    },
    {
      key: 14,
      name: '局部广告-地图上方黄页横幅',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.baidu.baidumaps.MapsActivity',
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
        'com.lbe.security.ui.CountdownDialogActivity'
      ],
      rules: 'ImageView[id="com.baidu.BaiduMap:id/yellow_banner_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12642301',
        'https://i.gkd.li/import/12801465',
        'https://i.gkd.li/import/12909281'
      ]
    },
    {
      key: 15,
      name: '局部广告-打车界面-右侧悬浮球',
      enable: false,
      fastQuery: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: 'RelativeLayout[id="com.baidu.BaiduMap:id/rl_close_content"]',
      snapshotUrls: 'https://i.gkd.li/import/12642307'
    },
    {
      key: 16,
      name: '全屏广告-美食大礼包弹窗',
      enable: false,
      fastQuery: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: '[text="美食大礼包"] +(6) TextView[id=null][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12642310'
    },
    {
      key: 17,
      name: '全屏广告-酒店提前订弹窗',
      enable: false,
      fastQuery: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: '[id="lottie_box"] + TextView[id=null][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12642319'
    },
    {
      key: 18,
      name: '权限提示-请求定位弹窗',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.baidu.mapframework.widget.BMBaseDialog',
        'com.baidu.baidumaps.MapsActivity'
      ],
      rules: [
        {
          matches: '[text^="开启位置服务"] + RelativeLayout > [id="com.baidu.BaiduMap:id/tv_notip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12660884'
        },
        {
          matches: '[text="需开启系统定位服务开关"] +2 [id="com.baidu.BaiduMap:id/ll_dialog_btn"] > [id="com.baidu.BaiduMap:id/tv_dialog_cancel"]',
          snapshotUrls: 'https://i.gkd.li/import/12660883'
        },
        {
          matches: 'ImageView[id="com.baidu.BaiduMap:id/location_dialog_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/import/12909299'
        }
      ]
    },
    {
      key: 19,
      name: '全屏广告-打车界面-弹窗广告',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.baidu.baidumaps.MapsActivity',
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity'
      ],
      rules: 'ImageView[id="com.baidu.BaiduMap:id/operational_activities_content_close"]',
      snapshotUrls: ['https://i.gkd.li/import/12909300', 'https://i.gkd.li/import/12930699']
    },
    {
      key: 20,
      name: '更新提示',
      enable: false,
      fastQuery: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: 'ImageView[id="com.baidu.BaiduMap:id/cancel_update"]',
      snapshotUrls: 'https://i.gkd.li/import/12909385'
    },
    {
      key: 21,
      name: '权限提示-打开通知权限',
      enable: false,
      fastQuery: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: '[text="打开通知权限"] <n LinearLayout + ImageView[id="com.baidu.BaiduMap:id/push_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13258995'
    },
    {
      key: 22,
      name: '全屏广告-通勤卡-添加至桌面',
      desc: '点击取消',
      enable: false,
      actionMaximum: 1,
      fastQuery: true,
      rules: [
        {
          matches: 'TextView[id="com.baidu.BaiduMap:id/tv_dialog_cancel"]',
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          snapshotUrls: 'https://i.gkd.li/import/13439258'
        }
      ]
    }
  ]
});
