import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.huawei.android.totemweather',
  name: '华为天气',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          matches: [
            '[id="com.huawei.android.totemweather:id/rl_splash_container"]',
            '[text.length<=4][text^="跳过"]',
          ],
          action: 'clickCenter',
          snapshotUrls: [
            'https://i.gkd.li/import/12928975',
            'https://i.gkd.li/import/13226636',
          ],
        },
      ],
      order: -10,
    },
    {
      key: 1,
      name: '局部广告-卡片式广告',
      enable: true,
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds:
            'com.huawei.android.totemweather.composite.MarketCompositeActivity',
          matches:
            '[id="com.huawei.android.totemweather:id/promote_ad_cancel"]',
          snapshotUrls: 'https://i.gkd.li/import/13218197',
        },
        {
          preKeys: 0,
          key: 1,
          activityIds: 'com.huawei.openalliance.ad.activity.FeedbackActivity',
          matches:
            '[id="com.huawei.android.totemweather:id/feedback_negative_flv"] > [text="直接关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/13259434',
        },
        {
          key: 2,
          activityIds: 'com.huawei.android.totemweather.WeatherMainActivity',
          matches:
            '[id="com.huawei.android.totemweather:id/ad_cancel"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13521221',
        },
        {
          key: 3,
          activityIds: 'com.huawei.android.totemweather.WeatherHome',
          matches: '[id="com.huawei.android.totemweather:id/ad_cancel"]',
          snapshotUrls: 'https://i.gkd.li/import/13787501',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-顶部广告条',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.huawei.android.totemweather.WeatherMainActivity',
          matches: '[vid="rl_close_pps"] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13800100',
        },
      ],
    },
  ],
});
