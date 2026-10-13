import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.paokeji.yiqu',
  name: '喵趣漫画',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      enable: true,
      matchTime: 10000,
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          anyMatches: [
            '@View <(2,3) FrameLayout <2 FrameLayout < FrameLayout < [id="com.paokeji.yiqu:id/lyContainer"]',
            '[text="跳过"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/14031922',
            'https://i.gkd.li/import/14427345',
            'https://i.gkd.li/import/15197461',
          ],
        },
      ],
      order: -10,
    },
    {
      key: 1,
      name: '局部广告',
      enable: true,
      activityIds: [
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
        'com.aster.comic.app.view.MainActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      rules: [
        {
          key: 0,
          name: '腾讯SDK',
          actionDelay: 350,
          matches:
            '[id="android:id/content"] >(-n+4) FrameLayout > FrameLayout[childCount=1] > ImageView[index=0 && id!=null]',
          snapshotUrls: [
            'https://i.gkd.li/import/13830354',
            'https://i.gkd.li/import/13842716',
            'https://i.gkd.li/import/13842966',
          ],
        },
        {
          key: 1,
          name: '字节SDK',
          matches: 'FrameLayout[desc*="close"] > View',
          snapshotUrls: [
            'https://i.gkd.li/import/13839432',
            'https://i.gkd.li/import/13839519',
          ],
        },
        {
          key: 2,
          name: '穿山甲SDK',
          actionDelay: 350,
          matches: [
            '[id="com.byted.pangle.m:id/tt_reward_full_count_down_after"]',
            '[text="反馈"] <<n View + View[childCount=1]',
            '[text*="跳过" && text.length<=6] <2 @View -(3-n) View < View',
            '[text="反馈"] -n @View[index<=1] > Image[text.length=0]',
            '[text="反馈"] <<n View - View[childCount=1]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13830798',
            'https://i.gkd.li/import/13810767',
            'https://i.gkd.li/import/13829749',
            'https://i.gkd.li/import/13809737',
            'https://i.gkd.li/import/13809578',
            'https://i.gkd.li/import/13810150',
          ],
        },
        {
          key: 3,
          name: '快手SDK',
          matches: [
            '[text*="跳过"] <n *[clickable=true]',
            '[vid="ksad_auto_close_btn"]',
            '[vid="ksad_video_container"] < * >n ViewGroup[index=1] >n @ViewGroup[clickable=true] > ImageView',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13809629',
            'https://i.gkd.li/import/13829312',
            'https://i.gkd.li/import/13837855',
          ],
        },
      ],
    },
  ],
});
