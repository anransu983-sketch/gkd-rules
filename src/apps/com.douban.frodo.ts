import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.douban.frodo',
  name: '豆瓣',
  groups: [
    {
      key: 0,
      name: '功能类-不分享/同步作品短评',
      desc: '书影音-作品-状态-不分享/同步短评(5s后可手动)',
      enable: false,
      fastQuery: true,
      matchTime: 5000,
      resetMatch: 'activity',
      activityIds: 'com.douban.frodo.subject.activity.RatingActivity',
      rules: [
        {
          key: 0,
          name: '不分享到微信、微博',
          matches:
            '@LinearLayout > [id="com.douban.frodo:id/check_weibo_wechat"][visibleToUser=true][checked=true]',
          snapshotUrls: ['https://i.gkd.li/import/12508777'],
        },
        {
          key: 1,
          name: '不同步到动态',
          matches:
            '@LinearLayout > [id="com.douban.frodo:id/check_status"][visibleToUser=true][checked=true]',
          snapshotUrls: ['https://i.gkd.li/import/12508777'],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-剧照广告',
      enable: true,
      fastQuery: true,
      activityIds: 'com.douban.frodo.baseproject.image.SociableImageActivity',
      rules: [
        {
          matches:
            'TextView[id="com.douban.frodo:id/ad_not_interest"][text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12509475',
        },
        {
          matches:
            'TextView[id="com.douban.frodo:id/mainText"][text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/12509476',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-信息流广告',
      desc: '首页动态/推荐,小组讨论列表,帖子底部,点击广告关闭后出现关闭原因底部菜单-点击不感兴趣',
      enable: true,
      fastQuery: true,
      activityIds: [
        'com.douban.frodo.activity.SplashActivity',
        'com.douban.frodo.status.activity.StatusDetailActivity',
        'com.douban.frodo.subject.structure.activity.MovieActivity',
        'com.douban.frodo.subject.activity.ForumTopicActivity',
        'com.douban.frodo.group.activity.GroupDetailActivity',
        'com.douban.frodo.group.activity.GroupTopicActivity',
        '.search.activity.NewSearchActivity',
      ],
      rules: [
        {
          key: 1,
          name: '首页-动态-信息流广告',
          activityIds: [
            'com.douban.frodo.activity.SplashActivity',
            'com.douban.frodo.status.activity.StatusDetailActivity',
          ],
          matches:
            'ImageView[id="com.douban.frodo:id/avatar"][index=0] +n ImageView[id="com.douban.frodo:id/menu_item"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12547964',
            'https://i.gkd.li/import/12548011',
            'https://i.gkd.li/import/12548046',
          ],
        },
        {
          key: 2,
          name: '小组-帖子列表信息流广告',
          activityIds: [
            'com.douban.frodo.group.activity.GroupDetailActivity',
            'com.douban.frodo.activity.SplashActivity',
          ],
          anyMatches: [
            '[id="com.douban.frodo:id/ad_tag"][text="广告"]',
            '@View[id=null] < FrameLayout -2 FrameLayout >2 TextView[text="广告"]',
            '@Image[id=null] < View -3 View >2 TextView[text="广告"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12723569',
            'https://i.gkd.li/import/13347455',
            'https://i.gkd.li/i/19149685',
            'https://i.gkd.li/i/19149700',
          ],
        },
        {
          key: 3,
          name: '回复-信息流广告',
          activityIds: '.group.activity.GroupTopicActivity',
          matches:
            '@ImageView[id="com.douban.frodo:id/menu_item"] <n ViewGroup[id="com.douban.frodo:id/ad_header_new"] < LinearLayout[id="com.douban.frodo:id/sdk_ad_item"]',
          snapshotUrls: 'https://i.gkd.li/i/19160529',
        },
        {
          key: 4,
          name: '搜索-信息流广告',
          activityIds: '.search.activity.NewSearchActivity',
          matches:
            '@ImageView[id="com.douban.frodo:id/menu_item"] <n ViewGroup < LinearLayout[id="com.douban.frodo:id/sdk_ad_item"]',
          snapshotUrls: 'https://i.gkd.li/i/19402518',
        },
        {
          name: '点击不感兴趣',
          preKeys: [1, 2, 3, 4],
          matches:
            '@LinearLayout[clickable=true] > [id="com.douban.frodo:id/mainText"][text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12548016',
            'https://i.gkd.li/import/12723422',
            'https://i.gkd.li/i/19402536',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-卡片广告',
      desc: '书影音-卡片广告-点击卡片右下角"广告"文字',
      enable: true,
      actionCd: 10000,
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/import/12548160',
      activityIds: 'com.douban.frodo.activity.SplashActivity',
      rules: [
        {
          key: 0,
          name: '点击【广告】',
          matches:
            '@View[clickable=true] > Image - TextView[text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12548131',
        },
        {
          preKeys: 0,
          name: '点击【不感兴趣】',
          matches:
            '[text="广告"] < * + * > [text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12548116',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-关闭评分反馈弹窗',
      enable: true,
      fastQuery: true,
      activityIds: 'com.douban.frodo.activity.SplashActivity',
      rules: {
        matches: '[text="下次再说"][id="com.douban.frodo:id/neutral"]',
        snapshotUrls: 'https://i.gkd.li/import/12548314',
      },
    },
    {
      key: 5,
      name: '局部广告-搜索页/帖子内容与评论区中间的卡片式广告',
      desc: '部分有二次弹窗',
      enable: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          name: '点击【x】关闭型',
          activityIds: ['com.douban.frodo.group.activity.GroupTopicActivity'],
          matches:
            'ImageView[id=null] +(n) LinearLayout[childCount<=2] + FrameLayout[childCount=1] > ImageView[id=null][visibleToUser=true][top>250]',
          snapshotUrls: [
            'https://i.gkd.li/import/12674798',
            'https://i.gkd.li/import/12674842',
            'https://i.gkd.li/import/12723462',
            'https://i.gkd.li/import/12723800',
            'https://i.gkd.li/import/13402399',
            'https://i.gkd.li/import/12548476',
          ],
        },
        {
          key: 1,
          name: '点击【广告】选原因型',
          matches: '[text="广告"][id$="ad_not_interest"]',
          activityIds: [
            'com.douban.frodo.subject.structure.activity.MovieActivity',
            'com.douban.frodo.subject.activity.ForumTopicActivity',
            'com.douban.frodo.group.activity.GroupTopicActivity',
            'com.douban.frodo.activity.SplashActivity',
            'com.douban.frodo.search.activity.NewSearchActivity',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12548064',
            'https://i.gkd.li/import/12548450',
            'https://i.gkd.li/import/12723751',
            'https://i.gkd.li/import/13062693',
            'https://i.gkd.li/import/13692895',
          ],
        },
        {
          name: '点击【不感兴趣】',
          preKeys: 1,
          matches:
            '@LinearLayout[clickable=true] > [id="com.douban.frodo:id/mainText"][text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12548016',
            'https://i.gkd.li/import/12723422',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '局部广告-个性化内容推荐弹窗',
      desc: '首页底部-个性化内容推荐弹窗-点击卡片右上角x直接关闭',
      enable: true,
      rules: {
        activityIds: ['com.douban.frodo.activity.SplashActivity'],
        matches:
          '[id="com.douban.frodo:id/info"][text^="开启个性化推荐"] - [id="com.douban.frodo:id/close"]',
        snapshotUrls: 'https://i.gkd.li/import/12836798',
      },
    },
    {
      key: 7,
      name: '全屏广告-弹窗广告',
      desc: '浏览详情时弹窗广告,点击右上角x',
      enable: true,
      rules: [
        {
          key: 0,
          name: '腾讯广告-1',
          activityIds:
            'com.douban.frodo.subject.structure.activity.MovieActivity',
          matches:
            'ImageView - FrameLayout[childCount=5] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13195565',
        },
        {
          key: 1,
          name: '腾讯广告-2',
          matches:
            'ImageView -n FrameLayout[childCount=2] > FrameLayout > FrameLayout > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/13296656',
            'https://i.gkd.li/import/13328126',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '更新提示',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.douban.frodo.activity.BetaApkDialogActivity',
            'com.douban.frodo.activity.SplashActivity',
          ],
          matches: ['[text="新版试用邀请"]', '@[text="取消"] + [text="下载"]'],
          snapshotUrls: [
            'https://i.gkd.li/import/13228832',
            'https://i.gkd.li/import/13659160',
          ],
        },
      ],
    },
  ],
});
