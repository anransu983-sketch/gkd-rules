import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  groups: [
    {
      key: 0,
      name: '更新提示',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          key: 1,
          name: '更新弹窗-1',
          matches:
            '@[id="com.autonavi.minimap:id/iv_close"] + * > [text^="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/import/13379094',
        },
        {
          key: 2,
          name: '更新弹窗-2',
          matches: '@[text="取消"] + * + [text="去下载"]',
          snapshotUrls: 'https://i.gkd.li/import/13379426',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-截屏分享',
      desc: '关闭截屏时app弹出的分享弹窗',
      enable: false,
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        '[text="分享截图至"] < ViewGroup < ViewGroup + @ViewGroup[clickable=true] > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13473388',
    },
    {
      key: 2,
      name: '局部广告-首页-地图页面上方消息提醒',
      enable: true,
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        'RelativeLayout[desc="弹窗"] > [id="com.autonavi.minimap:id/msgbox_popup_clear"]',
      snapshotUrls: 'https://i.gkd.li/import/12642830',
    },
    {
      key: 3,
      name: '功能类-首页-签到卡片',
      desc: '点击【x】',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        'ImageView[visibleToUser=true][width<90][height<90] < @ViewGroup -(2) ViewGroup > ViewGroup > View[text*="签到"||text*="成长值"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12642842',
        'https://i.gkd.li/import/12642845',
        'https://i.gkd.li/import/12818770',
        'https://i.gkd.li/import/13764540',
      ],
    },
    {
      key: 4,
      name: '全屏广告-加油页面-优惠券弹窗',
      enable: true,
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        '@ImageView < [desc="关闭"][clickable=true] - ViewGroup > ViewGroup > ViewGroup > View[text="立即领取"]',
      snapshotUrls: ['https://i.gkd.li/import/12642857'],
    },
    {
      key: 5,
      name: '通知提示-地图横条广告',
      desc: '关闭地图页面的横条广告和弹窗提示',
      enable: false,
      ignoreGlobalGroupMatch: true,
      fastQuery: true,
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules: [
        {
          key: 0,
          name: '弹窗1',
          matches:
            'RelativeLayout[desc="弹窗"] > [id="com.autonavi.minimap:id/msgbox_popup_clear"]',
          snapshotUrls: 'https://i.gkd.li/import/12642830',
        },
        {
          key: 1,
          name: '弹窗2',
          matches: '@ImageView[text=null] <n [vid="activity_icon_bar"]',
          snapshotUrls: 'https://i.gkd.li/i/17391938',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-广告弹窗',
      desc: '关闭欢迎弹窗、签到弹窗和加油优惠券弹窗',
      enable: true,
      fastQuery: true,
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules: [
        {
          key: 0,
          name: '【欢迎】弹窗',
          matches:
            'ViewGroup[childCount=6] >4 ViewGroup[childCount=5] > @ImageView[clickable=true] + View[text!=null] <<n [vid="fragment_container"]',
          snapshotUrls: ['https://i.gkd.li/i/14800704'],
          excludeSnapshotUrls: 'https://i.gkd.li/i/17079025',
        },
        {
          key: 1,
          name: '签到弹窗',
          matches: '[desc="弹窗"] + [vid="main_map_msg_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14809993',
        },
        {
          key: 2,
          name: '加油页面优惠券弹窗',
          matches:
            'ImageView < @[desc="关闭"][clickable=true] <n * > * >n View[text="立即领取"]',
          snapshotUrls: ['https://i.gkd.li/import/12642857'],
        },
        {
          key: 3,
          fastQuery: true,
          matches:
            '@ViewGroup[clickable=true] > View[text^="关闭"][visibleToUser=true] <<n [vid="mapInteractiveRelativeLayout"]',
          snapshotUrls: 'https://i.gkd.li/i/22287641',
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-卡片广告',
      desc: '关闭地图页面的卡片式广告和购票优惠提示',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          fastQuery: true,
          matches: [
            '[vid="btn_qrscan"][desc="扫一扫"]',
            'ViewGroup[desc.length>0] < ViewGroup + @[desc="关闭"][clickable=true][visibleToUser=true] <<n [vid="quickservice"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14715295',
          excludeSnapshotUrls: 'https://i.gkd.li/i/25660170',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'ViewGroup[desc="图片"][childCount=2] > @ViewGroup[clickable=true] > ImageView[childCount=0] <<n [vid="tab_container_id"]',
          snapshotUrls: 'https://i.gkd.li/i/16960367',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'ImageView < @ViewGroup[clickable=true] -2 * > View[text^="高德购票" && text$="优惠"] <<n [vid="mapInteractiveRelativeLayout"]',
          snapshotUrls: 'https://i.gkd.li/i/16960157',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            '@[clickable=true] > [text="关闭"][visibleToUser=true] <<n [vid="ajx_view_container"]',
          snapshotUrls: 'https://i.gkd.li/i/18627401',
        },
      ],
    },
    {
      key: 8,
      name: '权限提示-授权蓝牙',
      desc: '关闭室内定位蓝牙授权提示',
      enable: false,
      ignoreGlobalGroupMatch: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches: '@ImageView[clickable=true] -2 [text="授权蓝牙"]',
          snapshotUrls: 'https://i.gkd.li/i/17002003',
        },
      ],
    },
  ],
});
