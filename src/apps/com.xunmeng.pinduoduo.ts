import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '[text*="新版本"] - ImageView < LinearLayout < LinearLayout + ImageButton[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12642017',
        },
        {
          key: 1,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: '@Image + Image +n [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/import/13195645',
        },
      ],
    },
    {
      key: 2,
      name: '首页优惠弹窗',
      rules: [
        {
          key: 0,
          name: '首页优惠弹窗1',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            'FrameLayout > FrameLayout > RelativeLayout[childCount=2] > @ImageView[id!=null][clickable=true][visibleToUser=true] + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12642015',
        },
        {
          key: 1,
          name: '首页优惠弹窗2',
          activityIds: [],
          matches:
            'View[id=null] > TextView + View > View +(4) View[clickable=true] > Image[id=null]',
          snapshotUrls: 'https://i.gkd.li/import/12642019',
        },
        {
          key: 2,
          name: '首页优惠弹窗3',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '@ImageView < ViewGroup[clickable=true][visibleToUser=true] < ViewGroup + ViewGroup >n [text="开心收下"]',
          snapshotUrls: 'https://i.gkd.li/import/13761182',
        },
      ],
    },
    {
      key: 3,
      name: '活动弹窗',
      rules: [
        {
          key: 0,
          name: '抽免单活动1',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'TextView[text="免单特权"] < View < View +(5) View[clickable=true] > Image[id=null]',
          snapshotUrls: 'https://i.gkd.li/import/12642032',
        },
        {
          key: 1,
          name: '抽免单活动2',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'TextView[text$="抽免单"] -(2) Image[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12642038',
        },
        {
          key: 2,
          name: '下单后追加订单',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: '@[text="关闭弹窗"][clickable=true] + [text$="下单成功"]',
          snapshotUrls: 'https://i.gkd.li/import/13308175',
        },
      ],
    },
    {
      key: 4,
      name: '红包弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup > ImageView + ViewGroup > ImageView +(2) FrameLayout > TextView[text="专属现金红包"]',
          snapshotUrls: 'https://i.gkd.li/import/12642023',
        },
        {
          key: 1,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          fastQuery: true,
          matches:
            '@ImageView[clickable=true] < ViewGroup + ViewGroup >n [text="送你大额现金"]',
          snapshotUrls: 'https://i.gkd.li/import/13625441',
        },
        {
          key: 2,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '[text="百亿补贴"] > View > View > @View[clickable=true] +n [text^="立即领取"]',
          snapshotUrls: 'https://i.gkd.li/import/13669963',
        },
      ],
    },
    {
      enable: true,
      key: 5,
      name: '全屏广告-多多买菜抽奖弹窗',
      activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
      rules: [
        'View[childCount=1] > Button[id=null][text="关闭弹窗"][clickable=true]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12642053'],
    },
    {
      key: 6,
      name: '多多视频悬浮窗广告',
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        '@TextView[id=null][clickable=true] + Image[id=null][text="webp"]',
        '@TextView[id=null][clickable=true] + View > Image[text="webp"]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12642058'],
    },
    {
      enable: false,
      key: 7,
      name: '多多视频每日签到弹窗',
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        '@ImageView[id=null] < ViewGroup < ViewGroup +(2) ViewGroup >(n) [text^="每日签到"]',
        'ViewGroup[childCount=5] > @ViewGroup[index=0][clickable=true] +3 ViewGroup >2 [text="分享现金红包至拼小圈"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/12700615',
        'https://i.gkd.li/import/13804657',
      ],
    },
    {
      enable: false,
      key: 8,
      name: '商品详情页视频讲解窗口',
      activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
      rules: '[id="com.xunmeng.pinduoduo:id/iv_float_window_close"] > TextView',
      snapshotUrls: 'https://i.gkd.li/import/13178326',
    },
    {
      enable: false,
      key: 9,
      name: '多多视频每日自动签到',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        {
          key: 0,
          name: '自动签到',
          action: 'clickCenter',
          matches: ['FrameLayout > TextView[text="领取今日现金"]'],
          snapshotUrls: [
            'https://i.gkd.li/import/13201422',
            'https://i.gkd.li/import/13372677',
          ],
        },
        {
          key: 1,
          preKeys: [0],
          name: '在签到后关闭弹窗',
          action: 'clickCenter',
          matches: ['FrameLayout > TextView[text="明日继续来领"]'],
          snapshotUrls: 'https://i.gkd.li/import/13205634',
        },
      ],
    },
    {
      enable: true,
      key: 10,
      name: '多多视频-划到广告自动跳过',
      desc: '点击返回自动刷新，从而跳过广告',
      fastQuery: true,
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      rules: [
        {
          matches: [
            'TextView[text="正在直播"]',
            '@ImageView[desc="返回"] <4 ViewGroup <<3 FrameLayout[id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13446291',
        },
        {
          matches: [
            'TextView[text="查看更多低价商品"]',
            '@ImageView[desc="返回"] <4 ViewGroup <<3 FrameLayout[id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13791119',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-自动点击原图',
      activityIds:
        'com.xunmeng.pinduoduo.app_album.album.MultiImageSelectorActivity',
      fastQuery: true,
      rules: '@[text="原图"][checked=false] + [text="发送"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13925378',
        'https://i.gkd.li/import/13925380',
      ],
    },
    {
      key: 12,
      fastQuery: true,
      name: '全屏广告-下单成功邀请好友弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageMaskActivity',
          matches: '[id="com.xunmeng.pinduoduo:id/pdd"] >7 [text="关闭弹窗"]',
          snapshotUrls: 'https://i.gkd.li/import/13927594',
        },
      ],
    },
    {
      key: 13,
      name: '更新提示',
      desc: '点击【X】',
      enable: false,
      fastQuery: true,
      rules: [
        {
          matches: '@ImageButton - LinearLayout > [text="立即升级"]',
          activityIds: '.activity.NewPageActivity',
          snapshotUrls: 'https://i.gkd.li/import/12642017',
        },
        {
          matches: '@Image + Image +n [text="立即升级"]',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          snapshotUrls: 'https://i.gkd.li/import/13195645',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告',
      desc: '关闭活动、红包及下单后出现的各类全屏弹窗广告',
      enable: true,
      rules: [
        {
          key: 3,
          action: 'back',
          matches:
            '[text="开心收下" || text="去抢购" || text="立即抽免单" || text="去刮奖" || text="立即领取" || text="去领大额金币" || text="送你大额现金" || text*="红包助手" || text="刮刮卡发来的消息通知" || text="立即充值" || text="打款金额"][top>600][visibleToUser=true]',
          excludeMatches:
            '[text="我的订单" || text="聊天"][bottom<500][visibleToUser=true]',
          activityIds: [
            '.ui.activity.HomeActivity',
            '.ui.activity.MainFrameActivity',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/13625441',
            'https://i.gkd.li/i/13761182',
            'https://i.gkd.li/i/13944165',
            'https://i.gkd.li/i/14456101',
            'https://i.gkd.li/i/14596990',
            'https://i.gkd.li/i/14614135',
            'https://i.gkd.li/i/15360330',
            'https://i.gkd.li/i/15032649',
            'https://i.gkd.li/i/15076322',
            'https://i.gkd.li/i/17564786',
            'https://i.gkd.li/i/17585645',
            'https://i.gkd.li/i/17625608',
            'https://i.gkd.li/i/18481318',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23352586',
            'https://i.gkd.li/i/23607429',
          ],
        },
        {
          key: 4,
          matches:
            '@ViewGroup[clickable=true] - ViewGroup[childCount=3] >2 [text="其他"]',
          activityIds: '.ui.activity.HomeActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/15103543',
        },
        {
          key: 5,
          matches: [
            '[text="继续拼单"]',
            '@[clickable=true] > [text="先去逛逛"]',
          ],
          activityIds: '.activity.NewPageMaskActivity',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/15197527',
            'https://i.gkd.li/i/15211473',
          ],
        },
        {
          key: 7,
          matches:
            'ImageView[childCount=0][width<130&&height<130] < ViewGroup[childCount=1] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] <(1,2) ViewGroup <(1,2) ViewGroup < ViewGroup < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout <(1,2,3) [parent=null]',
          activityIds: [
            '.ui.activity.HomeActivity',
            '.ui.activity.MainFrameActivity',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/17528782',
            'https://i.gkd.li/i/17655498',
            'https://i.gkd.li/i/17893977',
            'https://i.gkd.li/i/22741566',
          ],
          exampleUrls: 'https://e.gkd.li/f74b5f58-e518-4e33-bbb4-0bf28e2b79d8',
        },
        {
          key: 8,
          matches:
            '@ViewGroup[childCount=1][clickable=true] < ViewGroup[childCount=2] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] <2 FrameLayout <2 [parent=null]',
          activityIds: '.ui.activity.HomeActivity',
          actionMaximum: 1,
          resetMatch: 'app',
          matchTime: 10000,
          snapshotUrls: 'https://i.gkd.li/i/17773799',
        },
        {
          key: 9,
          matches:
            '@ImageView[index=0][vid="pdd"][childCount=0][visibleToUser=true][width<120&&height<120] < RelativeLayout[childCount=2] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < [parent=null]',
          activityIds: '.ui.activity.HomeActivity',
          actionMaximum: 1,
          resetMatch: 'app',
          matchTime: 10000,
          snapshotUrls: 'https://i.gkd.li/i/18375615',
        },
        {
          key: 10,
          matches: '[desc="关闭按钮"]',
          activityIds: '.activity.NewPageActivity',
          snapshotUrls: 'https://i.gkd.li/i/23383792',
        },
        {
          key: 11,
          matches:
            '@ViewGroup[width<86 && height<86][clickable=true][focusable=true][clickable=true] + ViewGroup [text="元"]',
          activityIds: '.ui.activity.HomeActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/25572172',
        },
        {
          key: 12,
          name: '下单后出现的弹窗',
          action: 'clickCenter',
          matches: 'Button[text="关闭弹窗" || desc="关闭弹窗"][clickable=true]',
          activityIds: [
            '.activity.NewPageMaskActivity',
            '.ui.activity.HomeActivity',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13927594',
            'https://i.gkd.li/i/14434154',
            'https://i.gkd.li/i/14456017',
            'https://i.gkd.li/i/13308175',
            'https://i.gkd.li/i/23256823',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '局部广告-悬浮广告',
      desc: '关闭各种悬浮广告',
      enable: true,
      activityIds: '.ui.activity.HomeActivity',
      rules: [
        {
          key: 0,
          matches:
            '@TextView[id=null][clickable=true] + Image[id=null][text="webp"]',
          snapshotUrls: 'https://i.gkd.li/i/12642058',
        },
        {
          key: 1,
          matches:
            '[id="unactive_watch_video_pendant"] > TextView[clickable=true][text=""][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/12642058',
        },
        {
          key: 2,
          matches:
            'RelativeLayout[childCount=2] > RelativeLayout[vid="pdd"] + @FrameLayout[childCount=1][clickable=true][visibleToUser=true][text=null][vid="pdd"] > ImageView[childCount=0][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15140800',
        },
        {
          key: 3,
          name: '多多视频金币提示',
          matches: '[text^="看5分钟视频"] -2 Image',
          snapshotUrls: 'https://i.gkd.li/i/25088623',
        },
      ],
    },
    {
      key: 16,
      name: '局部广告-商品详情页视频讲解窗口',
      enable: true,
      fastQuery: true,
      activityIds: '.activity.NewPageActivity',
      rules:
        '@TextView < [id="com.xunmeng.pinduoduo:id/iv_float_window_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13178326',
    },
    {
      key: 17,
      name: '功能类-多多视频每日自动签到',
      desc: '自动点击签到按钮并关闭签到后的弹窗',
      enable: false,
      actionMaximum: 1,
      matchTime: 10000,
      fastQuery: true,
      activityIds: '.ui.activity.HomeActivity',
      rules: [
        {
          key: 0,
          name: '自动签到',
          matches:
            '@[clickable=true] >2 [text="领取今日现金"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13201422',
            'https://i.gkd.li/i/13372677',
          ],
        },
        {
          key: 1,
          name: '在签到后关闭弹窗',
          preKeys: [0],
          matches:
            '@[clickable=true] >2 [text="明日继续来领"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13205634',
        },
      ],
    },
    {
      key: 18,
      name: '全屏广告-多多视频划到广告自动跳过',
      desc: '点击返回自动刷新，从而跳过广告',
      enable: true,
      fastQuery: true,
      activityIds: '.ui.activity.HomeActivity',
      rules: [
        {
          key: 0,
          matches: [
            'TextView[text="正在直播"]',
            '@ImageView[desc="返回"] <4 ViewGroup < * < * < [id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13446291',
        },
        {
          key: 1,
          matches: [
            'TextView[text="查看更多低价商品"]',
            '@ImageView[desc="返回"] <4 ViewGroup < * < * < [id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13791119',
        },
      ],
    },
    {
      key: 19,
      name: '功能类-发送图片时自动勾选原图',
      desc: '发送图片时自动勾选原图选项',
      enable: false,
      fastQuery: true,
      rules: [
        {
          matches: '@[text="原图"][checked=false] + [text="发送"]',
          activityIds: '.app_album.album.MultiImageSelectorActivity',
          snapshotUrls: [
            'https://i.gkd.li/i/13925378',
            'https://i.gkd.li/i/13925380',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '权限提示-通知权限',
      desc: '关闭通知权限申请弹窗',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > ViewGroup[vid="pdd"] > ViewGroup > ViewGroup[childCount<3] > ViewGroup[childCount=3 || childCount=2] >(1,2) ImageView[clickable=true][visibleToUser=true]',
          activityIds: '.ui.activity.HomeActivity',
          snapshotUrls: [
            'https://i.gkd.li/i/14109435',
            'https://i.gkd.li/i/14549423',
            'https://i.gkd.li/i/14662202',
          ],
        },
        {
          key: 1,
          action: 'back',
          matches:
            '[text="及时获取物流消息" || text="开启通知" || text="允许通知"]',
          activityIds: [
            '.ui.activity.HomeActivity',
            '.activity.NewPageActivity',
            '.ui.activity.MainFrameActivity',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/15004580',
            'https://i.gkd.li/i/15048085',
            'https://i.gkd.li/i/16643295',
            'https://i.gkd.li/i/18371979',
          ],
        },
      ],
      ignoreGlobalGroupMatch: true,
    },
    {
      key: 21,
      name: '全屏广告-[个性化推荐]弹窗',
      desc: '点击[取消]',
      enable: true,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches: ['[text="个性化推荐未开启"]', '[text="取消"]'],
          activityIds: '.ui.activity.HomeActivity',
          snapshotUrls: 'https://i.gkd.li/i/14964851',
        },
      ],
    },
    {
      key: 22,
      name: '全屏广告-登录提现页面点击[跳过]',
      desc: '自动点击登录提现页面的跳过按钮',
      enable: false,
      rules: [
        {
          matches: ['[text="已获得现金"]', '[text="跳过"]'],
          activityIds: '.login.LoginActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/17450614',
        },
      ],
    },
    {
      key: 23,
      name: '局部广告-多多视频',
      desc: '点击【X】',
      enable: true,
      fastQuery: true,
      activityIds: '.ui.activity.HomeActivity',
      rules: [
        {
          name: '左侧',
          matches:
            '@TextView[id=null][clickable=true] + Image[text="webp"][id=null]',
          snapshotUrls: 'https://i.gkd.li/import/12642058',
        },
        {
          name: '右侧',
          matches:
            '@TextView[id=null][clickable=true] + View > Image[text="webp"]',
          snapshotUrls: 'https://i.gkd.li/import/12642058',
        },
      ],
    },
    {
      key: 24,
      name: '全屏广告-优惠卷弹窗',
      desc: '点击【X】',
      enable: true,
      fastQuery: true,
      rules: [
        {
          matches:
            'ImageView - @ImageView < RelativeLayout[childCount=2] < FrameLayout < FrameLayout <2 FrameLayout[parent=null] ',
          activityIds: 'com.miui.home.launcher.Launcher',
          snapshotUrls: 'https://i.gkd.li/import/12642015',
        },
        {
          matches:
            '@ImageView < ViewGroup[clickable=true][visibleToUser=true] < ViewGroup + ViewGroup >n [text="开心收下"]',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          snapshotUrls: 'https://i.gkd.li/import/13761182',
        },
        {
          matches:
            '[text="百亿补贴"] > View > View > @View[clickable=true] +n [text^="立即领取"]',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          snapshotUrls: 'https://i.gkd.li/import/13669963',
        },
        {
          matches:
            'View[childCount=1] > Button[text="关闭弹窗"][id=null][clickable=true]',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          snapshotUrls: 'https://i.gkd.li/import/12642053',
        },
      ],
    },
    {
      key: 25,
      name: '全屏广告-免单活动',
      desc: '点击【X】',
      enable: true,
      fastQuery: true,
      activityIds: '.activity.NewPageActivity',
      rules: [
        {
          name: '免单特权',
          matches: [
            'TextView[text="免单特权"]',
            '@Image[text="webp"] < View <7 View <2 View < View + View[id="portal-main-content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/12642032',
        },
        {
          name: '抽免单',
          matches:
            'TextView[text="再拼一单，抽免单"] -2 @Image[text="webp"] < View < View + View[id="portal-main-content"]',
          snapshotUrls: 'https://i.gkd.li/import/12642038',
        },
      ],
    },
    {
      key: 26,
      name: '全屏广告-红包',
      desc: '点击【X】',
      enable: true,
      fastQuery: true,
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      rules: [
        {
          matches:
            '@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup > ImageView + ViewGroup > ImageView +(2) FrameLayout > TextView[text="专属现金红包"]',
          snapshotUrls: 'https://i.gkd.li/import/12642023',
        },
        {
          matches:
            '@ImageView[clickable=true] < ViewGroup + ViewGroup >n [text="送你大额现金"||text="现金"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13625441',
            'https://i.gkd.li/import/14879427',
          ],
        },
      ],
    },
    {
      key: 27,
      name: '全屏广告-下单成功',
      desc: '点击【X】',
      enable: true,
      fastQuery: true,
      rules: [
        {
          matches: '@[text="关闭弹窗"][clickable=true] + [text$="下单成功"]',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          snapshotUrls: 'https://i.gkd.li/import/13308175',
        },
        {
          matches: '[id="com.xunmeng.pinduoduo:id/pdd"] >7 [text="关闭弹窗"]',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageMaskActivity',
          snapshotUrls: 'https://i.gkd.li/import/13927594',
        },
      ],
    },
    {
      key: 28,
      name: '全屏广告-多多视频-每日签到',
      desc: '点击【X】',
      enable: false,
      fastQuery: true,
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      rules: [
        {
          matches:
            '@ImageView[id=null] < ViewGroup < ViewGroup +(2) ViewGroup >(n) [text^="每日签到"]',
          snapshotUrls: 'https://i.gkd.li/import/12700615',
        },
        {
          matches:
            'ViewGroup[childCount=5] > @ViewGroup[index=0][clickable=true] +3 ViewGroup >2 [text="分享现金红包至拼小圈"]',
          snapshotUrls: 'https://i.gkd.li/import/13804657',
        },
      ],
    },
    {
      key: 29,
      name: '全屏广告-爆款限时直降',
      desc: '点击【X】',
      enable: true,
      fastQuery: true,
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      rules: [
        {
          matches:
            '@ImageView < ViewGroup < ViewGroup + ViewGroup >n TextView[text="去抢购"]',
          snapshotUrls: 'https://i.gkd.li/import/15212017',
        },
      ],
    },
    {
      key: 30,
      name: '功能类-多多视频-划到广告自动跳过',
      desc: '点击返回自动刷新，从而跳过广告',
      enable: false,
      fastQuery: true,
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      rules: [
        {
          matches: [
            'TextView[text="正在直播"]',
            '@ImageView[desc="返回"] <4 ViewGroup <<3 FrameLayout[id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13446291',
        },
        {
          matches: [
            'TextView[text="查看更多低价商品"]',
            '@ImageView[desc="返回"] <4 ViewGroup <<3 FrameLayout[id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13791119',
        },
      ],
    },
    {
      key: 31,
      name: '功能类-多多视频-每日自动签到',
      desc: '',
      enable: false,
      actionMaximum: 1,
      matchTime: 10000,
      fastQuery: true,
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        {
          key: 0,
          name: '自动签到',
          action: 'clickCenter',
          matches: ['FrameLayout > TextView[text="领取今日现金"]'],
          snapshotUrls: [
            'https://i.gkd.li/import/13201422',
            'https://i.gkd.li/import/13372677',
          ],
        },
        {
          key: 1,
          name: '在签到后关闭弹窗',
          action: 'clickCenter',
          preKeys: 0,
          matches: 'FrameLayout > TextView[text="明日继续来领"]',
          snapshotUrls: 'https://i.gkd.li/import/13205634',
        },
      ],
    },
  ],
});
