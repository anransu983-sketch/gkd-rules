import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.qihoo.camera',
  name: '360摄像机',
  groups: [
    {
      key: 0,
      name: '全屏广告-卡录像界面广告',
      enable: true,
      actionMaximum: 1,
      activityIds: 'com.qihoo.jia.playpage.RecordPlayActivity',
      rules: [
        {
          name: '视频下方卡片式广告',
          matches:
            'ViewGroup[childCount=2] > ImageView[clickable=true] + ImageView[clickable=true]',
        },
        {
          name: '云收藏弹窗广告',
          matches:
            'ViewGroup > @ImageView[clickable=true] -n TextView[text="云收藏"]',
        },
      ],
      snapshotUrls: 'https://i.gkd.li/import/13630755',
    },
  ],
});
