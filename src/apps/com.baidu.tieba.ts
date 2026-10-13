import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          anyMatches: [
            'TextView[text^="跳过" || text="关闭"]',
            'View[id="com.byted.pangle:id/tt_splash_skip_btn"]',
            '@View <3 FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < RelativeLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12775906',
            'https://i.gkd.li/import/12566191',
            'https://i.gkd.li/import/12870916',
            'https://i.gkd.li/import/13233500',
            'https://i.gkd.li/import/13168386',
            'https://i.gkd.li/import/13322227',
            'https://i.gkd.li/i/18730575',
          ],
        },
      ],
      order: -10,
    },
    {
      key: 1,
      name: '全屏广告-申请消息提醒弹窗',
      enable: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
          matches:
            '@ImageView[clickable=true] -2 LinearLayout > [text^="打开通知"]',
          snapshotUrls: 'https://i.gkd.li/import/13536170',
        },
        {
          key: 1,
          activityIds:
            'com.baidu.tieba.immessagecenter.mention.reply.ReplyMeActivity',
          matches: 'TextView[text="开启消息推送"] +2 TextView[text="不开启"]',
          snapshotUrls: 'https://i.gkd.li/import/13675694',
        },
        {
          key: 2,
          activityIds: 'com.baidu.tbadk.browser.TBWebContainerActivity',
          matches: '[text="开启通知"] - [text="暂不开启"]',
          snapshotUrls: 'https://i.gkd.li/import/13804455',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-信息流广告',
      desc: '推荐帖子列表,评论区列表:像正常内容的广告,关闭时弹窗选原因',
      enable: true,
      activityIds: [
        'com.baidu.tieba.pb.pb.main.PbActivity',
        'com.baidu.tieba.frs.FrsActivity',
        'com.baidu.tieba.tblauncher.MainTabActivity',
        'com.baidu.tieba.forum.ForumActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击广告【x】',
          matches: [
            'RelativeLayout > TextView[text$="广告"][clickable=true]',
            'LinearLayout[clickable=true][childCount=1] > @FrameLayout[clickable=true][childCount=1][desc=null] > ImageView',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12775913',
            'https://i.gkd.li/import/13043133',
            'https://i.gkd.li/import/13054256',
            'https://i.gkd.li/import/12775930',
            'https://i.gkd.li/import/12840951',
            'https://i.gkd.li/import/12775916',
            'https://i.gkd.li/import/12775892',
            'https://i.gkd.li/import/13328300',
            'https://i.gkd.li/import/13402610',
            'https://i.gkd.li/import/13459289',
          ],
        },
        {
          preKeys: 0,
          name: '关闭原因-【不感兴趣】',
          matches:
            '@View[text=null] - TextView[text="选择不喜欢理由"][index=0]',
          snapshotUrls: 'https://i.gkd.li/import/12775914',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-首页-推荐-列表顶部卡片式广告',
      enable: true,
      activityIds: [
        'com.baidu.tieba.tblauncher.MainTabActivity',
        'com.baidu.tieba.frs.FrsActivity',
      ],
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 1,
          matches:
            'RelativeLayout[childCount=2] > @RelativeLayout[childCount=1][clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13060892',
        },
      ],
    },
    {
      key: 4,
      name: '更新提示',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.baidu.tieba.UpdateDialog',
      rules: '[text="稍后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/12496934',
    },
    {
      key: 5,
      name: '局部广告-帖子底部内容推荐卡片',
      desc: '关闭时弹窗选原因',
      enable: true,
      activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
      rules: [
        {
          key: 0,
          matches:
            'LinearLayout > RelativeLayout[id!=null][clickable=false] > ImageView[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12775882',
        },
        {
          preKeys: 0,
          name: '关闭原因-不感兴趣',
          matches:
            '@View[text=null] - TextView[text="选择不喜欢理由"][index=0]',
          snapshotUrls: 'https://i.gkd.li/import/12775914',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-广告弹窗',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          name: '点击右上角x关闭',
          activityIds: 'com.baidu.tbadk.browser.TBWebContainerActivity',
          matches:
            'View[childCount=3] > @View[clickable=true][childCount=1] > Image',
          snapshotUrls: [
            'https://i.gkd.li/import/13060891',
            'https://i.gkd.li/import/13222361',
          ],
        },
        {
          key: 1,
          name: '点击正下方x关闭',
          activityIds: [
            'com.baidu.tieba.frs.FrsActivity',
            'com.baidu.tieba.tblauncher.MainTabActivity',
            'com.baidu.tieba.LogoActivity',
          ],
          matches:
            '@TextView[clickable=true && text=null] - FrameLayout TextView[text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13168383',
            'https://i.gkd.li/import/13322120',
            'https://i.gkd.li/import/13328246',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-悬浮小广告',
      enable: true,
      matchDelay: 500,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          name: '首页右侧悬浮广告',
          activityIds: 'com.baidu.tieba.tblauncher.MainTabActivity',
          matches:
            '@ImageView[clickable=true] - TextView[text="广告"] < RelativeLayout + ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/13115167',
            'https://i.gkd.li/import/13327933',
          ],
        },
        {
          key: 1,
          name: '评论区左侧悬浮广告',
          fastQuery: true,
          activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
          matches: 'LinearLayout[childCount=2] > @ImageView + [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13296280',
        },
        {
          key: 2,
          activityIds: [
            'com.baidu.tieba.pb.pb.main.PbActivity',
            'com.baidu.tieba.tblauncher.MainTabActivity',
          ],
          matches:
            'RelativeLayout[childCount=2] > RelativeLayout[childCount=1] > ImageView[childCount=0][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13625336',
            'https://i.gkd.li/import/13627881',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '局部广告-吧内-悬浮卡通-进吧逛逛',
      enable: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules:
        'TextView[text!=null] < LinearLayout + LinearLayout > View + ImageView[clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/13322337',
        'https://i.gkd.li/import/13328738',
      ],
    },
    {
      key: 9,
      name: '功能类-贴吧内签到并关闭弹窗',
      enable: false,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          name: '贴吧页签到',
          activityIds: ['com.baidu.tieba.forum.ForumActivity'],
          matches:
            'WebView[text="frs"] > View > View > View > View > TextView[text="签到"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/13776801'],
        },
        {
          key: 1,
          name: '签到成功-弹窗',
          activityIds: ['com.baidu.tbadk.browser.TBWebContainerActivity'],
          matches:
            'WebView[text="签到弹窗"] > View > View > TextView[text=""][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/13776424'],
        },
      ],
    },
    {
      key: 10,
      name: '通知提示-申请消息提醒弹窗',
      desc: '关闭消息通知开启提示弹窗',
      enable: false,
      ignoreGlobalGroupMatch: true,
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          activityIds: '.pb.pb.main.PbActivity',
          matches:
            '@ImageView[clickable=true] -2 LinearLayout > [text^="打开通知"]',
          snapshotUrls: 'https://i.gkd.li/i/13536170',
        },
        {
          key: 1,
          activityIds: '.immessagecenter.mention.reply.ReplyMeActivity',
          matches: 'TextView[text="开启消息推送"] +2 TextView[text="不开启"]',
          snapshotUrls: 'https://i.gkd.li/i/13675694',
        },
        {
          key: 2,
          activityIds: 'com.baidu.tbadk.browser.TBWebContainerActivity',
          matches: '[text="开启通知"] <n * > [text="暂不开启"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13804455',
            'https://i.gkd.li/i/20918198',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '分段广告-信息流广告',
      desc: '关闭首页、帖子内的广告和直播推广',
      enable: true,
      fastQuery: true,
      forcedTime: 10000,
      activityIds: [
        '.tblauncher.MainTabActivity',
        '.pb.pb.main.PbActivity',
        '.forum.ForumActivity',
      ],
      rules: [
        {
          key: 0,
          activityIds: ['.tblauncher.MainTabActivity', '.forum.ForumActivity'],
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <(1,2) LinearLayout <4 RelativeLayout +2 RelativeLayout >2 [text="直播中"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595137',
            'https://i.gkd.li/i/16596473',
          ],
        },
        {
          key: 1,
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < RelativeLayout <3 LinearLayout < RelativeLayout + LinearLayout >2 [text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595127',
            'https://i.gkd.li/i/16595515',
            'https://i.gkd.li/i/16596130',
          ],
        },
        {
          key: 2,
          activityIds: '.pb.pb.main.PbActivity',
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < FrameLayout -(1,2) [text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595120',
            'https://i.gkd.li/i/16595133',
          ],
        },
        {
          key: 3,
          activityIds: '.pb.pb.main.PbActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] -3 [text="直播中"]',
          snapshotUrls: 'https://i.gkd.li/i/16596210',
        },
        {
          key: 4,
          matches:
            'ImageView[index=parent.childCount.minus(1)] < @[vid="obfuscated"][clickable=true] -n * < RelativeLayout + FrameLayout >n [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595301',
            'https://i.gkd.li/i/16596195',
            'https://i.gkd.li/i/16596775',
            'https://i.gkd.li/i/21524232',
            'https://i.gkd.li/i/21529443',
            'https://i.gkd.li/i/21556758',
            'https://i.gkd.li/i/24520138',
            'https://i.gkd.li/i/25710401',
            'https://i.gkd.li/i/29640762',
          ],
        },
        {
          key: 5,
          activityIds: '.pb.pb.main.PbActivity',
          matches:
            '@[clickable=true][visibleToUser=true] <(1,2) RelativeLayout <(1,4) RelativeLayout[childCount>1] >(3,4) [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595124',
            'https://i.gkd.li/i/16596297',
            'https://i.gkd.li/i/24541094',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/16632851',
        },
        {
          key: 6,
          activityIds: '.tblauncher.MainTabActivity',
          matches:
            '@ImageView[childCount=0][clickable=true][visibleToUser=true] < LinearLayout[childCount=1] <4 RelativeLayout +3 LinearLayout >4 [text="小游戏"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17943902',
            'https://i.gkd.li/i/18217417',
          ],
        },
        {
          key: 7,
          activityIds: '.tblauncher.MainTabActivity',
          matches:
            'ImageView < @[clickable=true] <2 FrameLayout[childCount=2] -n ViewGroup > [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/28345921',
            'https://i.gkd.li/i/28432320',
          ],
        },
        {
          key: 8,
          activityIds: '.pb.pb.main.PbActivity',
          matches:
            'ImageView < @[clickable=true][width<82 && height<82] <5 [childCount=5] + [childCount=1] >4 [text="权限" || text="隐私" || text="功能"] -(1,2,3) [text$="有限公司"]',
          snapshotUrls: [
            'https://i.gkd.li/i/28389197',
            'https://i.gkd.li/i/29578950',
          ],
        },
        {
          key: 9,
          activityIds: '.tblauncher.MainTabActivity',
          matches:
            '@ImageView[clickable=true][width<78] <2 [childCount=2] >4 [text="语音中"]',
          snapshotUrls: 'https://i.gkd.li/i/28432229',
        },
        {
          key: 50,
          preKeys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          name: '②点击[不感兴趣]',
          matches:
            '@View[clickable=true][visibleToUser=true] - [text^="选择不喜欢"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595134',
            'https://i.gkd.li/i/16595511',
            'https://i.gkd.li/i/16595113',
          ],
        },
        {
          key: 51,
          preKeys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          name: '②选一个[理由]',
          matches:
            '[text="已经看过" || text="内容质量差" || text="不感兴趣" || text="广告重复"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/26634661',
            'https://i.gkd.li/i/28432358',
          ],
        },
        {
          key: 52,
          preKeys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          name: '②选[不喜欢]该直播',
          matches: '@[clickable=true] >3 [text="不喜欢"]',
          snapshotUrls: [
            'https://i.gkd.li/i/27052244',
            'https://i.gkd.li/i/28432247',
          ],
        },
        {
          key: 100,
          preKeys: [51, 52],
          name: '③点击[确定]',
          matches: '@[clickable=true] - [text^="已选"][text$="理由"]',
          snapshotUrls: 'https://i.gkd.li/i/26934788',
        },
      ],
    },
    {
      key: 12,
      name: '局部广告-首页、推荐列表顶部卡片式广告',
      desc: '关闭首页顶部的卡片广告和小游戏推广',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: ['.tblauncher.MainTabActivity', '.frs.FrsActivity'],
      rules: [
        {
          key: 1,
          matches:
            'RelativeLayout[childCount=2] > @RelativeLayout[childCount=1][clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13060892',
        },
      ],
    },
    {
      key: 13,
      name: '局部广告-游戏类推广',
      desc: '首页,游戏公测/上线等推广,点击x掉',
      enable: true,
      fastQuery: true,
      activityIds: '.tblauncher.MainTabActivity',
      rules: [
        {
          key: 0,
          matches:
            '@ImageView <2 [childCount=2] <4 [index=0][childCount=4] +(1,2) FrameLayout > [text*="定档" || text*="预约" || text*="测试"][text*="《"]',
          snapshotUrls: [
            'https://i.gkd.li/i/30164473',
            'https://i.gkd.li/i/30164474',
            'https://i.gkd.li/i/30164475',
            'https://i.gkd.li/i/30165036',
            'https://i.gkd.li/i/30346796',
          ],
        },
        {
          key: 1,
          matches:
            '@ImageView <2 [childCount=2] <4 [index=0][childCount=4] +n [childCount>3] > [text="权限" || text="隐私" || text="功能"] -(1,2,3) [text*="有限公司"]',
          snapshotUrls: 'https://i.gkd.li/i/30164269',
        },
      ],
    },
    {
      key: 14,
      name: '局部广告-[帖子内/吧内]底部悬浮窗',
      desc: '关闭帖子内和吧内底部的推荐悬浮窗',
      enable: true,
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          activityIds: '.pb.pb.main.PbActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <2 LinearLayout - * > [text$="热议中" || text^="猜你喜欢" || text*="进吧逛逛"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595234',
            'https://i.gkd.li/i/16619736',
            'https://i.gkd.li/i/16647874',
          ],
        },
        {
          key: 1,
          activityIds: '.forum.ForumActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <2 LinearLayout - * > [text^="关注本吧"]',
          snapshotUrls: 'https://i.gkd.li/i/17992981',
        },
      ],
    },
    {
      key: 15,
      name: '局部广告-帖子底部话题卡片',
      desc: '点击关闭',
      enable: true,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: '.pb.pb.main.PbActivity',
          matches: '@ImageView[clickable=true] -2 [text="进入话题查看更多"]',
          snapshotUrls: 'https://i.gkd.li/i/14586847',
        },
      ],
    },
    {
      key: 16,
      name: '全屏广告-会员弹窗',
      desc: '点击关闭',
      enable: true,
      rules: [
        {
          forcedTime: 10000,
          activityIds: [
            '.tblauncher.MainTabActivity',
            'com.baidu.tbadk.browser.TBWebContainerActivity',
          ],
          matches:
            'WebView[text="会员弹窗" || text="一键签到"] >(3,4) TextView + Image[text!=null][childCount=0][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14630806',
            'https://i.gkd.li/i/15119439',
            'https://i.gkd.li/i/15119451',
            'https://i.gkd.li/i/16426630',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '局部广告-感兴趣的吧推广',
      desc: '关闭首页、吧内其他贴吧的推广',
      enable: true,
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: ['.tblauncher.MainTabActivity', '.forum.ForumActivity'],
          matches:
            '@ImageView[childCount=0][clickable=true][visibleToUser=true] - [text="你可能感兴趣的吧" || text^="本吧的人都在逛"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16914357',
            'https://i.gkd.li/i/17944680',
            'https://i.gkd.li/i/18218517',
          ],
        },
      ],
    },
  ],
});
