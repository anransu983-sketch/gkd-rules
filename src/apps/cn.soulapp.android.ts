import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'cn.soulapp.android',
  name: 'Soul',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      enable: true,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          matches: '[id="cn.soulapp.android:id/c_ad_skip_view_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12833280',
            'https://i.gkd.li/import/12850094',
          ],
        },
      ],
      order: -10,
    },
    {
      key: 1,
      name: '局部广告-广场-卡片广告',
      enable: true,
      fastQuery: true,
      activityIds: ['cn.soulapp.android.component.startup.main.MainActivity'],
      rules: [
        {
          matches:
            '@ImageView - [text="广告"] < LinearLayout < [id="cn.soulapp.android:id/fl_tag_container"]',
          snapshotUrls: 'https://i.gkd.li/import/12838000',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-app评分',
      enable: true,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.component.chat.ConversationActivity',
      rules: [
        {
          matches:
            '@[id="cn.soulapp.android:id/cancel"][text="取消"] - [id="cn.soulapp.android:id/score_rate"]',
          snapshotUrls: 'https://i.gkd.li/import/13425057',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示-升级到最新版本',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.component.startup.main.MainActivity',
      rules: [
        {
          matches:
            '@[id="cn.soulapp.android:id/img_close"] -2 RelativeLayout > [text="升级到最新版本"]',
          snapshotUrls: 'https://i.gkd.li/import/13693361',
        },
      ],
    },
  ],
});
