import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 0,
      name: '更新提示',
      desc: '关闭应用更新提示弹窗',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.bytedance.ies.outertest.cn.OuterTestGuideDialogActivity',
            'com.ss.android.article.base.feature.ugc.story.StoryVideoActivity',
          ],
          matches:
            '@[desc="关闭"] -(2,3) [text*="版本更新" || text*="升级版本"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13316081',
            'https://i.gkd.li/i/17681710',
          ],
        },
        {
          key: 1,
          activityIds: '.activity.MainActivity',
          matches: '[text="以后再说"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18194356',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-浮窗广告',
      enable: true,
      rules: [
        {
          key: 0,
          name: '首页-浮窗广告',
          activityIds: 'com.ss.android.article.news.activity.MainActivity',
          matches:
            'FrameLayout > FrameLayout > FrameLayout[childCount=2] > @ImageView + ImageView[clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13762123',
        },
        {
          key: 1,
          name: '视频页-浮窗广告',
          activityIds: 'com.ss.android.ugc.detail.activity.TikTokActivity',
          matches:
            'FrameLayout > FrameLayout > FrameLayout[childCount=2] > ImageView + ImageView[clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13761236',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-请求通知权限弹窗',
      enable: false,
      activityIds: ['com.ss.android.article.news.activity.MainActivity'],
      rules: [
        {
          matches: '[text^="开启通知"] + LinearLayout > [text="暂不开启"]',
          snapshotUrls: ['https://i.gkd.li/import/12706699'],
        },
        {
          matches:
            '[text^="开启通知"] < LinearLayout +2 ImageView[desc="关闭"]',
          snapshotUrls: ['https://i.gkd.li/import/12840217'],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-竖屏视频广告',
      desc: '检测到广告时,点击右上角[更多]图标按钮,出现菜单,点击不感兴趣',
      enable: true,
      activityIds: 'com.ss.android.ugc.detail.activity.TikTokActivity',
      rules: [
        {
          key: -1,
          preKeys: [0, 1, 2, 3],
          actionCd: 35000,
          name: '点击不感兴趣',
          matches:
            '@LinearLayout[clickable=true] > RelativeLayout + TextView[text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/12679277',
        },
        {
          key: 0,
          name: '点击右上角[更多]图标按钮',
          matches:
            '@ImageView[clickable=true][desc="更多"] <n RelativeLayout -2 RelativeLayout >4 LynxFlattenUI[text="头条优惠券无门槛全平台通用"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12679280',
            'https://i.gkd.li/import/12733282',
            'https://i.gkd.li/import/12763251',
            'https://i.gkd.li/import/12763252',
          ],
        },
        {
          key: 1,
          name: '点击右上角[更多]图标按钮-抖音直播',
          matches:
            '@ImageView[clickable=true][desc="更多"] <4 RelativeLayout -2 RelativeLayout >4 LinearLayout[childCount=3] > ScrollView[childCount=1] > TextView[text$="广告"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/12733281'],
        },
        {
          key: 2,
          name: '第二种广告界面；点击右上角[更多]图标按钮',
          matches:
            '@ImageView[clickable=true][desc="更多"] <n RelativeLayout -2 RelativeLayout >n TextView[text$="广告"]',
          snapshotUrls: ['https://i.gkd.li/import/13185633'],
        },
        {
          key: 3,
          name: '第三种广告界面；点击右上角[更多]图标按钮',
          matches:
            '@ImageView[clickable=true][desc="更多"] <n RelativeLayout +2 LinearLayout > TextView[text$="广告"]',
          snapshotUrls: ['https://i.gkd.li/import/13186082'],
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-信息流广告',
      desc: '点击右上角x按钮,点击不感兴趣',
      enable: true,
      rules: [
        {
          name: '点击右上角x按钮',
          key: 0,
          activityIds: [
            'com.ss.android.article.news.activity.MainActivity',
            'com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity',
          ],
          matches: 'UIView[text^="不感兴趣"][visibleToUser=true]',
          action: 'clickCenter',
          snapshotUrls: [
            'https://i.gkd.li/import/12733098',
            'https://i.gkd.li/import/12755264',
            'https://i.gkd.li/import/12836272',
            'https://i.gkd.li/import/12840162',
            'https://i.gkd.li/import/13093576',
            'https://i.gkd.li/import/12733098',
          ],
          exampleUrls: [
            'https://user-images.githubusercontent.com/44717382/273436460-cf007525-81ce-418b-ac05-3bfd75a627fe.gif',
          ],
        },
        {
          name: '点击不感兴趣',
          preKeys: 0,
          key: 1,
          activityIds: [
            'com.ss.android.article.news.activity.MainActivity',
            'com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity',
          ],
          matches:
            '@ViewGroup[clickable=true] > ImageView + TextView[text="不感兴趣"]',
          action: 'clickCenter',
          snapshotUrls: [
            'https://i.gkd.li/import/12733152',
            'https://i.gkd.li/import/12755265',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-底部话题推荐弹窗',
      enable: true,
      activityIds: ['com.ss.android.article.news.activity.MainActivity'],
      rules: [
        {
          name: '话题谈论',
          matches:
            'FlattenUIText[text="参与讨论"] + FlattenUIImage[clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/12706699'],
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-自动观看广告视频',
      desc: '自动观看广告并等待30s后关闭',
      enable: true,
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '点击【看视频】',
          activityIds: 'com.ss.android.article.news.activity.MainActivity',
          matches:
            '[id="com.bytedance.novel.api:id/component_ad_dialog_button_video"]',
          snapshotUrls: 'https://i.gkd.li/import/13402468',
        },
        {
          name: '等待30s点击【关闭】',
          actionDelay: 30000,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: 'UIText[text="广告"] +n UIText[text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/13402480',
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-局部广告-底部热榜弹窗',
      desc: '点击X',
      enable: true,
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.ss.android.article.news.activity.MainActivity',
          matches:
            '@FlattenUIImage[clickable=true] <n FrameLayout <<2 FrameLayout - LinearLayout [text="首页"]',
          snapshotUrls: 'https://i.gkd.li/import/13828331',
        },
      ],
    },
    {
      key: 8,
      name: '分段广告-信息流广告',
      desc: '关闭信息流广告',
      enable: true,
      fastQuery: true,
      activityIds: [
        'com.ss.android.article.news.activity.MainActivity',
        'com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击右上角x按钮',
          matches: 'UIView[text^="不感兴趣"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12836272',
            'https://i.gkd.li/i/13093576',
            'https://i.gkd.li/i/16624480',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击不感兴趣',
          matches: '@[clickable=true] >(1,2) [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12733152',
            'https://i.gkd.li/i/12755265',
            'https://i.gkd.li/i/16624474',
            'https://i.gkd.li/i/16624395',
            'https://i.gkd.li/i/17893117',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '功能类-自动观看广告视频',
      desc: '自动观看广告并等待30s后关闭',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '点击"看视频"',
          activityIds: 'com.ss.android.article.news.activity.MainActivity',
          matches:
            '[id="com.bytedance.novel.api:id/component_ad_dialog_button_video"]',
          snapshotUrls: 'https://i.gkd.li/i/13402468',
        },
        {
          preKeys: [0],
          name: '等待30s点击"关闭"',
          actionDelay: 30000,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: 'UIText[text="广告"] +n UIText[text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13402480',
        },
      ],
    },
    {
      key: 10,
      name: '局部广告-底部热榜弹窗',
      desc: '关闭底部热榜弹窗',
      enable: true,
      rules: [
        {
          activityIds: 'com.ss.android.article.news.activity.MainActivity',
          matches: 'FrameLayout[childCount=8] > FlattenUIImage[index=7]',
          snapshotUrls: 'https://i.gkd.li/i/13828331',
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-广告弹窗',
      desc: '关闭各种广告弹窗，包括关联抖音账号、默认进入发现频道、全屏广告弹窗等',
      enable: true,
      rules: [
        {
          key: 0,
          name: '关联抖音账号弹窗',
          actionMaximum: 1,
          resetMatch: 'app',
          fastQuery: true,
          activityIds: 'com.ss.android.article.news.activity.MainActivity',
          matches: '@[desc="关闭"] + [text^="关联"]',
          snapshotUrls: 'https://i.gkd.li/i/14717889',
        },
        {
          key: 1,
          name: '默认进入发现频道弹窗',
          actionMaximum: 1,
          resetMatch: 'app',
          fastQuery: true,
          activityIds: 'com.ss.android.article.news.activity.MainActivity',
          action: 'back',
          matches: '[text^="下次打开APP默认进入"]',
          snapshotUrls: 'https://i.gkd.li/i/15102876',
        },
        {
          key: 2,
          name: '全屏广告弹窗-类型1',
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.MainActivity',
          matches:
            '[id="android:id/content"] > FrameLayout[childCount=3] > ImageView[clickable=true][visibleToUser=true][index=2]',
          snapshotUrls: 'https://i.gkd.li/i/15314921',
        },
        {
          key: 3,
          name: '全屏广告弹窗-类型2',
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.MainActivity',
          matches:
            '@FlattenUIImage[text=""] -10 FlattenUIText[text="恭喜获得惊喜奖励"]',
          snapshotUrls: 'https://i.gkd.li/i/17681713',
        },
      ],
    },
  ],
});
