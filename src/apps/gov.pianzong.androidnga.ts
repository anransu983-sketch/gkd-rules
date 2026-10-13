import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'gov.pianzong.androidnga',
  name: 'NGA玩家社区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      fastQuery: true,
      resetMatch: 'app',
      rules: [
        '[id="gov.pianzong.androidnga:id/iv_tg_ad"]',
        '[id="gov.pianzong.androidnga:id/ksad_splash_circle_skip_view"]',
        '[id="gov.pianzong.androidnga:id/ksad_skip_view_skip"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/12476484',
        'https://i.gkd.li/import/12706127',
        'https://i.gkd.li/import/12864707',
        'https://i.gkd.li/import/12911882',
        'https://i.gkd.li/import/13798686',
      ],
      order: -10,
    },
    {
      key: 1,
      name: '局部广告-首页-推荐-广告卡片',
      enable: true,
      activityIds: 'com.donews.nga.activitys.MainActivity',
      rules: ['[id="gov.pianzong.androidnga:id/iv_close_ad"]'],
      snapshotUrls: 'https://i.gkd.li/import/12482727',
    },
    {
      key: 2,
      name: '局部广告-话题-帖子列表广告',
      desc: '点击卡片x按钮关闭广告',
      enable: true,
      activityIds:
        'gov.pianzong.androidnga.activity.forumdetail.ForumDetailActivity',
      rules: [
        {
          matches: 'Image[text="ams_icon_single_close"]',
          snapshotUrls: ['https://i.gkd.li/import/12655805'],
        },
        {
          matches:
            'TextView[text!=null] - ImageView < LinearLayout[childCount=2] + FrameLayout[childCount=1] > ImageView[id=null]',
          snapshotUrls: ['https://i.gkd.li/import/12706140'],
        },
        {
          matches:
            '[text="广告"] - [id="gov.pianzong.androidnga:id/iv_information_ad_close"]',
          snapshotUrls: ['https://i.gkd.li/import/13303236'],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-社区-顶部广告',
      enable: true,
      activityIds: 'com.donews.nga.activitys.MainActivity',
      rules: '[id="gov.pianzong.androidnga:id/iv_close_community_ad"]',
      snapshotUrls: ['https://i.gkd.li/import/12706132'],
    },
  ],
});
