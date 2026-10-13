import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.youku.phone',
  name: '优酷视频',
  groups: [
    {
      key: 0,
      name: '青少年模式',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.youku.phone.designatemode.adolescent.HomePageTipDialog',
        'com.youku.v2.HomePageEntry',
      ],
      rules: '[text="青少年模式"] +(3) [text="我知道了"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12701050',
        'https://i.gkd.li/import/13498556',
      ],
    },
    {
      key: 1,
      name: '全屏广告-视频推荐弹窗',
      enable: true,
      fastQuery: true,
      activityIds: 'com.youku.vip.wrapper.VipHomeActivity',
      rules: '[id="com.youku.phone:id/closeView"][desc="关闭弹层"]',
      snapshotUrls: 'https://i.gkd.li/import/12701029',
    },
  ],
});
