import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'io.sbyd.app',
  name: '轻松阅',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      enable: true,
      activityIds: 'io.sbyd.app.ui.book.read.ReadBookActivity',
      rules: [
        {
          key: 1,
          matches:
            'TextView < LinearLayout[childCount=2] < FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13274336',
        },
        {
          key: 2,
          matches: [
            '[text^="立即" || text^="查看" || text^="领取"][text.length=4]',
            '[id="android:id/content"] >2 FrameLayout[childCount=3||childCount=2] > FrameLayout[childCount=5||childCount=6||childCount=8] > FrameLayout[childCount=1] > ImageView[text=null][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13302326',
            'https://i.gkd.li/import/13313576',
            'https://i.gkd.li/import/13313624',
            'https://i.gkd.li/import/13313576',
          ],
        },
        {
          key: 3,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] -2 @View - Image',
          snapshotUrls: 'https://i.gkd.li/import/12925052',
        },
        {
          key: 4,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] -4 @View < View[childCount=7]',
          snapshotUrls: 'https://i.gkd.li/import/12925095',
        },
      ],
    },
  ],
});
