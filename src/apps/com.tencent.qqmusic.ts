import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    {
      key: 0,
      name: '局部广告-广告卡片',
      enable: true,
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      rules: [
        {
          key: 2,
          matches: '[text="广告"] +n [desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13206534',
            'https://i.gkd.li/import/13797001',
          ],
        },
        {
          key: 3,
          matches:
            '@ImageView - ImageView - RelativeLayout >n [text="听歌入会赢绿钻"||text="摇动点击广告跳转"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13206982',
            'https://i.gkd.li/import/13218134',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-首页-底部广告弹窗',
      enable: true,
      fastQuery: true,
      activityIds: 'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
      rules: 'View[id="js_close_btn"][desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13115121',
    },
    {
      key: 2,
      name: '全屏广告-内测体验弹窗',
      desc: '点击[不再提醒]',
      enable: true,
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      fastQuery: true,
      rules: '[text="抢先体验"] -2 [text="不再提醒"]',
      snapshotUrls: 'https://i.gkd.li/import/13178485',
    },
    {
      key: 3,
      name: '全屏广告-免流弹窗',
      desc: '点击[流量够用]',
      enable: true,
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      fastQuery: true,
      rules: '[text="流量够用"]',
      snapshotUrls: 'https://i.gkd.li/import/13197868',
    },
    {
      key: 4,
      name: '局部广告-卡片广告',
      desc: '关闭播放界面、歌单页、我的页等位置的各类卡片广告',
      enable: true,
      activityIds: '.activity.AppStarterActivity',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.business.playernew.view.NewPlayerActivity',
          matches:
            '[text^="广告"] + [text="跳过"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13985169',
        },
        {
          key: 2,
          fastQuery: true,
          matches:
            '@[desc="关闭"][clickable=true] -(1,2) [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206534',
            'https://i.gkd.li/i/13797001',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          matches:
            '@ImageView - ImageView - RelativeLayout >3 [text="听歌入会赢绿钻" || text="摇动点击广告跳转"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206982',
            'https://i.gkd.li/i/13218134',
          ],
        },
        {
          key: 4,
          fastQuery: true,
          matches: '@[clickable=true] > [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15041019',
            'https://i.gkd.li/i/18227243',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/18219557',
        },
        {
          key: 5,
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][height<87] <2 RelativeLayout - * > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/26806364',
        },
        {
          key: 6,
          fastQuery: true,
          matches:
            '@ImageView[clickable=true] - [text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17450309',
        },
        {
          key: 7,
          fastQuery: true,
          matches: '[text="广告 | 关闭"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18227204',
        },
        {
          key: 20,
          matchTime: 10000,
          matches:
            'RecyclerView > FrameLayout[desc!=null] >3 LinearLayout[id!=null] > ViewPager > FrameLayout[visibleToUser=true] > ImageView[childCount=0][clickable=true][width<150 && height<100][index=parent.childCount.minus(1)]',
          snapshotUrls: [
            'https://i.gkd.li/i/23623581',
            'https://i.gkd.li/i/23623677',
          ],
        },
        {
          key: 21,
          matches:
            'ImageView[width<80 && height<80] <<2 @ViewGroup[clickable=true] - [text^="hi~"]',
          snapshotUrls: 'https://i.gkd.li/i/23930716',
        },
        {
          key: 22,
          matches:
            'RecyclerView > LinearLayout[childCount=3] >5 ViewGroup[childCount=3] > @ViewGroup[clickable=true] >2 ImageView[text=null][desc=null][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15756931',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告',
      desc: '关闭各类全屏广告弹窗，包括网页广告、免流弹窗和签到弹窗',
      enable: true,
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            '.activity.TranslucentWebViewActivity',
            '.activity.AppStarterActivity',
            '.business.playernew.view.NewPlayerActivity',
            'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
          ],
          matches:
            '@[desc^="关闭"][desc.length<10][visibleToUser=true][width>50 && width<177] <<(25-n) [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13115121',
            'https://i.gkd.li/i/14549936',
            'https://i.gkd.li/i/14798904',
            'https://i.gkd.li/i/15209764',
            'https://i.gkd.li/i/15261116',
            'https://i.gkd.li/i/17459008',
            'https://i.gkd.li/i/23930628',
            'https://i.gkd.li/i/23930853',
            'https://i.gkd.li/i/17057551',
            'https://i.gkd.li/i/23495699',
            'https://i.gkd.li/i/13806773',
          ],
        },
        {
          key: 2,
          activityIds: [
            '.activity.AppStarterActivity',
            '.business.playernew.view.NewPlayerActivity',
          ],
          matches:
            '@ImageView[childCount=0][visibleToUser=true][width<130 && height<130] <<(7,8,9) [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18439138',
            'https://i.gkd.li/i/22924866',
            'https://i.gkd.li/i/20745872',
            'https://i.gkd.li/i/22699223',
            'https://i.gkd.li/i/30530361',
          ],
        },
        {
          key: 4,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.AppStarterActivity',
          matches:
            '@ViewGroup[childCount=0][clickable=true][visibleToUser=true][width<150 && height<150] < ViewGroup[childCount=1] < ViewGroup < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/22699207',
        },
        {
          key: 6,
          name: '免流弹窗',
          activityIds: [
            '.activity.AppStarterActivity',
            '.business.playernew.view.NewPlayerActivity',
          ],
          matches: '[text="流量够用"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13197868',
            'https://i.gkd.li/i/15285647',
          ],
        },
        {
          key: 8,
          activityIds: '.activity.AppStarterActivity',
          matches:
            '@ViewGroup[childCount=0][clickable=true] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13806782',
        },
        {
          key: 9,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.AppStarterActivity',
          matches: '[visibleToUser=true][desc$="不再提示"]',
          snapshotUrls: 'https://i.gkd.li/i/18428240',
        },
      ],
    },
    {
      key: 6,
      name: '分段广告-评论区广告',
      desc: '点击右下角展开-点击[不感兴趣]',
      enable: true,
      activityIds: '.activity.base.FragmentActivityWithMinibar',
      rules: [
        {
          key: 0,
          matches:
            'RecyclerView > ViewGroup > ViewGroup[childCount=6] > @ViewGroup[clickable=true][childCount=1] > ViewGroup > View',
          snapshotUrls: 'https://i.gkd.li/i/15010210',
        },
        {
          preKeys: [0],
          key: 99,
          fastQuery: true,
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/15010226',
        },
      ],
    },
  ],
});
