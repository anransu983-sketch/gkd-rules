import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'me.ele',
  name: '饿了么',
  groups: [
    {
      key: 0,
      name: '更新提示',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[text*="更新应用版本"] < ScrollView + [text="取消"][focusable=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/12650280',
        'https://i.gkd.li/import/13206819',
      ],
    },
    {
      key: 1,
      name: '全屏广告-红包弹窗',
      desc: '关闭各类红包弹窗广告',
      enable: true,
      rules: [
        {
          key: 0,
          name: '红包弹窗1',
          fastQuery: true,
          activityIds: [
            'me.ele.component.pops2.Pops2MistDialog',
            'me.ele.component.webcontainer.view.AppUCWebActivity',
            'me.ele.application.ui.Launcher.LauncherActivity',
            'me.ele.application.ui.GeneralSettingsActivity',
            'me.ele.shopdetailv2.ShopDetailV2Activity',
            'me.ele.foodchannel.page.WMChannelNativeActivity',
          ],
          anyMatches: [
            '@ImageView[childCount=0][clickable=true][index=parent.childCount.minus(1)] - ViewGroup[childCount=2] < ViewGroup[childCount=2] < [vid="id_magex_mistview"]',
            '@ImageView[childCount=0][clickable=true][index=parent.childCount.minus(1)] - ViewGroup[childCount=2] < [vid="id_magex_mistview"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12650238',
            'https://i.gkd.li/i/13294893',
            'https://i.gkd.li/i/13331361',
            'https://i.gkd.li/i/13362974',
            'https://i.gkd.li/i/13376008',
            'https://i.gkd.li/i/13710581',
            'https://i.gkd.li/i/15148480',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/17858192',
        },
        {
          key: 1,
          name: '红包弹窗2',
          activityIds: 'me.ele.newretail.pack.ui.activity.PackActivity',
          matches: '[desc$="今日红包"] +n [desc$="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12650713',
        },
        {
          key: 2,
          name: '红包弹窗3',
          fastQuery: true,
          matches:
            '@ViewGroup[index=2][clickable=true][childCount=0][index=parent.childCount.minus(1)] <3 ViewGroup[childCount=3] < ViewGroup[childCount=1] < ViewGroup[vid="id_magex_mist_view"]',
          snapshotUrls: 'https://i.gkd.li/i/14472929',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/16346727',
            'https://i.gkd.li/i/17858192',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-活动弹窗',
      desc: '关闭各类全屏活动弹窗广告',
      enable: true,
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds: [
            'me.ele.component.pops2.Pops2MistDialog',
            'me.ele.newbooking.checkout.entrypoint.WMCheckoutActivity',
            'me.ele.application.ui.Launcher.LauncherActivity',
            'me.ele.android.emagex.container.EMagexActivity',
          ],
          matches:
            '@ImageView[clickable=true] <2 [vid="id_magex_mistview"][childCount=2]',
          snapshotUrls: [
            'https://i.gkd.li/i/12726709',
            'https://i.gkd.li/i/13476719',
            'https://i.gkd.li/i/13523508',
            'https://i.gkd.li/i/13685037',
            'https://i.gkd.li/i/14050401',
          ],
        },
        {
          key: 2,
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
          matches:
            '[id="me.ele:id/fl_render_e_shop"] + FrameLayout >n ViewGroup[childCount=6] > View[index=5]',
          snapshotUrls: [
            'https://i.gkd.li/i/13476611',
            'https://i.gkd.li/i/13523541',
          ],
        },
        {
          key: 3,
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
          matches: 'ViewGroup[clickable=true] - TextView[text="放弃"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13710574',
            'https://i.gkd.li/i/13710591',
          ],
        },
        {
          key: 4,
          activityIds: 'me.ele.pha.shell.ui.ElePhaActivity',
          matches:
            'WebView >4 View[childCount=2] > @View[clickable=true] > Image[childCount=0] <<n [vid="pha_view_pager_root_view"]',
          snapshotUrls: 'https://i.gkd.li/i/15443153',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-付款后广告弹窗',
      enable: true,
      fastQuery: true,
      activityIds: 'me.ele.component.pops2.TransparentAppWebActivity',
      rules: 'bb Button[text="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13205301',
    },
    {
      key: 4,
      name: '全屏广告-吃货卡续费弹窗',
      enable: true,
      fastQuery: true,
      activityIds: 'me.ele.component.webcontainer.view.AppUCWebActivity',
      rules: '@View + View >2 [text="买校园版超级吃货卡"]',
      snapshotUrls: 'https://i.gkd.li/import/13295007',
    },
    {
      key: 5,
      name: '局部广告-首页-底部浮窗广告',
      enable: true,
      activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
      rules:
        'LinearLayout >n FrameLayout >n ViewGroup[childCount=3] + ViewGroup[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13710588',
    },
    {
      key: 6,
      name: '全屏广告-开启定位提醒',
      desc: '自动点击X',
      enable: true,
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
          matches: '[text="去开启"] + [id="me.ele:id/close"]',
          snapshotUrls: 'https://i.gkd.li/import/13710588',
        },
        {
          key: 1,
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
          matches: '[text="去开启"] + [id="me.ele:id/close_tips"]',
          snapshotUrls: 'https://i.gkd.li/import/13710585',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-通知提示-获取订单信息通知',
      desc: '点击X',
      enable: false,
      fastQuery: true,
      rules: [
        {
          activityIds: 'me.ele.message.ui.PushMessageGuideActivity',
          matches:
            '@View[visibleToUser=true] < * <2 [id="me.ele:id/frame_bottom_bg"]',
          snapshotUrls: 'https://i.gkd.li/import/13931205',
        },
      ],
    },
    {
      key: 8,
      name: '全屏广告-付款后弹窗广告',
      desc: '关闭支付完成后的广告弹窗',
      enable: true,
      rules: [
        {
          fastQuery: true,
          activityIds: 'me.ele.component.pops2.TransparentAppWebActivity',
          matches:
            'View[childCount=2] > View[childCount=2] > @Button[text="关闭"][clickable=true] <<n [id="me.ele:id/inside_web_view"]',
          snapshotUrls: 'https://i.gkd.li/i/13205301',
        },
      ],
    },
    {
      key: 9,
      name: '局部广告-首页底部浮窗广告',
      desc: '关闭首页底部的悬浮广告',
      enable: true,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
          matches:
            '@ViewGroup[childCount=0][clickable=true][visibleToUser=true] - ViewGroup[childCount=3] <<n [id="me.ele:id/id_magex_mist_view"]',
          snapshotUrls: 'https://i.gkd.li/i/13710588',
          excludeSnapshotUrls: 'https://i.gkd.li/i/16326917',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.application.ui.Launcher.LauncherActivity',
          matches: '[vid="iv_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17321305',
        },
      ],
    },
  ],
});
