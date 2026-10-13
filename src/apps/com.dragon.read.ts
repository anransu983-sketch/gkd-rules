import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 0,
      name: '卡片式广告',
      activityIds: [
        'com.dragon.read.ad.banner.ui',
        'com.dragon.read.reader.ReaderActivity',
        'com.dragon.read.reader.ui.ReaderActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '@[clickable=true] TextView[text="关闭此条广告"]',
        },
        {
          key: 1,
          matches: '@ImageView - LinearLayout TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12908734',
        },
        {
          key: 2,
          matches:
            'FrameLayout > FrameLayout > ViewGroup[childCount=4] > @FrameLayout[clickable=true][visibleToUser=true] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/12716444',
            'https://i.gkd.li/import/13062909',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          matches:
            '[id="com.dragon.read:id/layout_banner_ad_bg"] > [id="com.dragon.read:id/close_button"]',
          snapshotUrls: 'https://i.gkd.li/import/13520314',
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '@[text="以后再说"] + [text="优先体验"]',
      snapshotUrls: 'https://i.gkd.li/import/12716477',
    },
    {
      key: 2,
      name: '首页右侧悬浮广告',
      activityIds: [
        'com.dragon.read.pages.main.MainFragmentActivity',
        'com.dragon.read.ad.openingscreenad.OpeningScreenADActivity',
      ],
      rules: [
        {
          matches:
            '[id="android:id/content"] > FrameLayout[childCount=1] > RelativeLayout[childCount=1] >2 ImageView[id!=null][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12716506',
            'https://i.gkd.li/import/13318796',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '优惠券弹窗',
      rules: [
        {
          key: 0,
          name: '电商惊喜券',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          fastQuery: true,
          matches:
            '@LynxFlattenUI[id=null][text=""][clickable=true] - [text="去逛商城"] -4 [text$="电商惊喜券"]',
          snapshotUrls: 'https://i.gkd.li/import/12910159',
        },
        {
          key: 1,
          name: '爆款好物一分购',
          fastQuery: true,
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            '@ImageView[clickable=true] <2 LinearLayout[childCount=2] < [id="android:id/content"][childCount=1]',
          snapshotUrls: 'https://i.gkd.li/import/12878266',
        },
      ],
    },
    {
      key: 4,
      name: '阅读页面_关注作者',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches: '@ImageView +2 FrameLayout >3 [text="关注"]',
          snapshotUrls: 'https://i.gkd.li/import/13399505',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '阅读页面广告弹窗-点击反馈按钮',
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches: '[text="反馈"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13520160',
            'https://i.gkd.li/import/13843155',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '阅读页面广告弹窗-点击不感兴趣',
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches: '@ViewGroup[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13520219',
            'https://i.gkd.li/import/13674550',
          ],
        },
        {
          key: 2,
          name: '阅读页面广告弹窗-点击下一页',
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches:
            '[id="com.dragon.read:id/readFlowNonRoundEntranceLayout"] [id="com.dragon.read:id/relativeRight"]',
          snapshotUrls: 'https://i.gkd.li/import/13674556',
        },
        {
          key: 3,
          name: '阅读页面广告弹窗-点击反馈',
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches: '[text="看视频免广告"] - [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/import/13816453',
        },
        {
          preKeys: 3,
          key: 4,
          name: '阅读页面广告弹窗-点击不感兴趣2',
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches: '[text="举报"] <2 ViewGroup - ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13816454',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '请求通知权限弹窗',
      desc: '自动点击',
      activityIds: 'com.dragon.read.widget.ConfirmDialogBuilder',
      rules: '@[text="取消"] < * -2 * > [text="开启推送提醒"]',
      snapshotUrls: 'https://i.gkd.li/import/12716592',
    },
    {
      key: 12,
      name: '关闭阅读-全屏广告',
      desc: '点击右上角',
      fastQuery: true,
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules: 'TextView[text="广告"] +2 Button[id="com.dragon.read:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13191156',
    },
    {
      key: 13,
      name: '更新提示',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      activityIds: '.pages.main.MainFragmentActivity',
      rules: [
        {
          matches: '@TextView[text="以后再说"] + TextView[text="优先体验"]',
          snapshotUrls: 'https://i.gkd.li/i/21290014',
        },
      ],
    },
    {
      key: 14,
      name: '局部广告-首页-右侧红包浮窗',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 20000,
      fastQuery: true,
      activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
      rules: [
        {
          anyMatches: [
            '@ImageView < * < RelativeLayout < FrameLayout <(1,2) [id="android:id/content"]',
            '@ImageView + ViewGroup > TextView[text="领取"][index=parent.childCount.minus(1)]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12716506',
            'https://i.gkd.li/i/17725414',
            'https://i.gkd.li/i/21708368',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '评价提示',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 20000,
      forcedTime: 20000,
      fastQuery: true,
      activityIds: '.pages.main.MainFragmentActivity',
      rules: [
        {
          matches:
            '@ImageView +n LinearLayout > TextView[text="我要反馈"] +2 TextView[text="五星好评"]',
          snapshotUrls: 'https://i.gkd.li/i/20772203',
        },
      ],
    },
    {
      key: 16,
      name: '全屏广告-周末开红包',
      desc: '点击 X',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      forcedTime: 20000,
      fastQuery: true,
      activityIds: '.pages.main.MainFragmentActivity',
      rules: [
        {
          matches:
            '@FlattenUIImage[index=parent.childCount.minus(1) ||index=parent.childCount.minus(2)] <n FrameLayout < * < * < * < * < * < [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/import/16347298',
            'https://i.gkd.li/import/14383684',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '全屏广告-书城-广告弹窗',
      desc: '【X】',
      enable: false,
      fastQuery: true,
      rules: [
        {
          matches: '@ImageView <2 LinearLayout < [id="android:id/content"]',
          activityIds: '.pages.main.MainFragmentActivity',
          snapshotUrls: [
            'https://i.gkd.li/i/18124360',
            'https://i.gkd.li/i/18124367',
          ],
        },
        {
          name: '电商惊喜券',
          matches:
            '@LynxFlattenUI[id=null][text=""][clickable=true] - [text="去逛商城"] -4 [text$="电商惊喜券"]',
          snapshotUrls: 'https://i.gkd.li/import/12910159',
        },
        {
          name: '爆款好物一分购',
          matches:
            '@ImageView[clickable=true] <2 LinearLayout[childCount=2] < [id="android:id/content"][childCount=1]',
          snapshotUrls: 'https://i.gkd.li/import/12878266',
        },
        {
          name: '限时会员福利',
          matches:
            '@ImageView[clickable=true] -3 ViewGroup >n TextView[text="恭喜获得限时会员福利"]',
          snapshotUrls: 'https://i.gkd.li/i/18553545',
        },
      ],
    },
    {
      key: 18,
      name: '通知提示-开启推送提醒',
      desc: '自动点击【取消】',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      forcedTime: 10000,
      fastQuery: true,
      activityIds: [
        '.pages.main.MainFragmentActivity',
        '.component.biz.impl.SearchActivity',
      ],
      rules: '@[text="取消"] < * -2 * > [text="开启推送提醒"]',
      snapshotUrls: 'https://i.gkd.li/i/17661722',
    },
    {
      key: 19,
      name: '评价提示-阅读',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'match',
      fastQuery: true,
      rules: [
        {
          matches: '@TextView[text="取消"] -n TextView[text="点评此书"]',
          snapshotUrls: 'https://i.gkd.li/i/21012283',
        },
      ],
    },
    {
      key: 20,
      name: '局部广告-阅读-卡片广告',
      desc: '点击X',
      enable: false,
      fastQuery: true,
      activityIds: '.reader.ui.ReaderActivity',
      rules: [
        {
          name: '卡片广告',
          anyMatches: [
            '@ImageView[visibleToUser=true] < FrameLayout <3 ViewGroup[childCount=4] <n * <n * <n * <n * <n * <n  * <n * <n * <n * <n * <n [id="com.dragon.read:id/root_view"]',
            '@ImageView[visibleToUser=true] < FrameLayout <3 ViewGroup[childCount=4] <n * <n * <n * <n * <n * <n  * <n * <n * <n * <n * <n * <n [id="com.dragon.read:id/root_view"]',
          ],
          excludeMatches: ['TextView[text="目录"]'],
          snapshotUrls: [
            'https://i.gkd.li/import/12716444',
            'https://i.gkd.li/i/17474881',
          ],
          excludeSnapshotUrls: ['https://i.gkd.li/i/20340317'],
        },
        {
          key: 1,
          name: '底部卡片广告',
          anyMatches: [
            '@ImageView - LinearLayout <n * <n * <n * <n * <n * <n * <n * <n * <n * <n [id="com.dragon.read:id/root_view"]',
            '@ImageView < FrameLayout - LinearLayout <n * <n * <n * <n * <n * <n * <n * <n * <n * <n [id="com.dragon.read:id/root_view"]',
            '@UISvg +n FlattenUIText[text="广告"] <n * <n * <n * <n * <n * <n * <n * <n * <n * <n [id="com.dragon.read:id/root_view"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12908734',
            'https://i.gkd.li/import/13520314',
            'https://i.gkd.li/import/15294350',
            'https://i.gkd.li/i/17474877',
            'https://i.gkd.li/i/17565008',
            'https://i.gkd.li/i/21479922',
          ],
        },
        {
          preKeys: 1,
          matches: 'TextView[text="关闭此广告"||text="关闭此条广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17928194',
            'https://i.gkd.li/i/17793195',
          ],
        },
        {
          name: '卡片-关注作者',
          matches: '@ImageView + TextView[text="关注我，掌握书籍最新动态"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13399505',
            'https://i.gkd.li/import/14896809',
          ],
        },
        {
          name: '领金币',
          matches: '@ImageView < [id="com.dragon.read:id/parent"]',
          snapshotUrls: 'https://i.gkd.li/i/17474890',
        },
        {
          name: '免广告权益',
          matches: '@ImageView - TextView[text="免广告权益"]',
          snapshotUrls: 'https://i.gkd.li/i/19937082',
        },
        {
          name: '限时会员福利',
          matches: '@ImageView + View + TextView[text="恭喜获得限时会员福利"]',
          snapshotUrls: 'https://i.gkd.li/i/19937239',
        },
      ],
    },
    {
      key: 21,
      name: '全屏广告-阅读-视频广告',
      desc: '点击【关闭】/【反馈-不感兴趣】',
      enable: false,
      fastQuery: true,
      activityIds: [
        '.reader.ui.ReaderActivity',
        '.ad.openingscreenad.OpeningScreenADActivity',
      ],
      rules: [
        {
          key: 1,
          name: '点击【关闭】',
          matches: '@[text="关闭"] - [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/import/13191156',
        },
        {
          key: 2,
          name: '点击【反馈】',
          matches: '[text="反馈"][visibleToUser=true]',
          excludeMatches: [
            '@[text="关闭"] - [text="反馈"]',
            '[text$="秒后，继续阅读下一页"]',
            '@[text="反馈"][visibleToUser=true][2=parent.childCount]',
          ],
          matchRoot: true,
          snapshotUrls: [
            'https://i.gkd.li/import/13520160',
            'https://i.gkd.li/i/17468490',
            'https://i.gkd.li/i/17474896',
            'https://i.gkd.li/i/21708291',
          ],
          exampleUrls: [
            'https://i.gkd.li/i/17564881',
            'https://i.gkd.li/i/17689909',
          ],
        },
        {
          key: 3,
          name: '点击【不感兴趣】',
          preKeys: 2,
          matches: '@TextView[text="不感兴趣"]',
          actionDelay: 100,
          snapshotUrls: [
            'https://i.gkd.li/import/13520219',
            'https://i.gkd.li/import/13674550',
            'https://i.gkd.li/i/17461153',
            'https://i.gkd.li/i/17928168',
          ],
        },
        {
          name: '关闭',
          matches: 'FlattenUIText[text="关闭"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21272921',
        },
      ],
    },
    {
      key: 22,
      name: '全屏广告-阅读-翻页广告',
      desc: '自动点击右下方空白处翻页，翻页模式【上下】无法使用',
      enable: false,
      forcedTime: 3600000,
      fastQuery: true,
      activityIds: [
        '.reader.ui.ReaderActivity',
        '.ad.openingscreenad.OpeningScreenADActivity',
      ],
      rules: [
        {
          position: {
            right: 100,
            bottom: 300,
          },
          matches: '[id="android:id/content"]',
          anyMatches: [
            'UISvg +n FlattenUIText[text^="¥"][visibleToUser=true]',
            '[text="点击关闭广告并退出小说" || text="去抢购" || text="去领取"][visibleToUser=true]',
            'TextView[text~="(?is)全[0-9]+集"] <2 ViewGroup + TextView[text="看全集"][visibleToUser=true]',
            'TextView[text="观看全集"][visibleToUser=true] -n TextView[vid="title"][text="短剧端内免费看"]',
            'TextView[text="免费看剧"][visibleToUser=true] < FrameLayout <(1,2) LinearLayout -n TextView[vid="title"]',
            'FlattenUIText[text="更多精选好物"||text="立即查看"||text="我知道了"][visibleToUser=true]',
          ],
          excludeMatches: '[text="反馈"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17941812',
            'https://i.gkd.li/i/17967442',
            'https://i.gkd.li/i/17474887',
            'https://i.gkd.li/i/17474889',
            'https://i.gkd.li/i/17932302',
            'https://i.gkd.li/i/18124417',
            'https://i.gkd.li/i/20279981',
            'https://i.gkd.li/i/20585911',
            'https://i.gkd.li/i/20586037',
            'https://i.gkd.li/i/21479966',
            'https://i.gkd.li/i/21708274',
            'https://i.gkd.li/i/21308312',
            'https://i.gkd.li/i/21913845',
            'https://i.gkd.li/i/21913873',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '局部广告-阅读-菜单右侧福利浮窗',
      desc: '点击X',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      activityIds: '.reader.ui.ReaderActivity',
      rules: [
        {
          name: '图书福利',
          matches:
            '@ImageView - ImageView < * < * < FrameLayout + LinearLayout > LinearLayout > TextView[text="目录"]',
          snapshotUrls: 'https://i.gkd.li/i/20340317',
        },
        {
          name: '免费领会员',
          matches:
            'ViewGroup - @ImageView < * < * < FrameLayout + LinearLayout > LinearLayout > TextView[text="目录"]',
          snapshotUrls: 'https://i.gkd.li/i/21341401',
        },
      ],
    },
  ],
});
