import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.huawei.hwid',
  name: 'HMS Core',
  groups: [
    {
      key: 0,
      name: '全屏广告-页面中间跳出广告',
      enable: true,
      activityIds: [
        'com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity',
      ],
      rules: [
        {
          matches: '[id="com.huawei.hwid:id/interstitial_close"]',
          snapshotUrls: ['https://i.gkd.li/import/12709068'],
        },
      ],
    },
  ],
});
