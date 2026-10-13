import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.tencent.cmocmna',
  name: '腾讯手游加速器',
  groups: [
    {
      key: 0,
      name: '局部广告-悬浮广告',
      enable: true,
      activityIds: 'com.tencent.mocmna.activity.MainActivity',
      rules:
        'ViewGroup[childCount=2] > @ImageView[id!=null][clickable=true] + ImageView',
      snapshotUrls: [
        'https://i.gkd.li/import/12847323',
        'https://i.gkd.li/import/12847336',
        'https://i.gkd.li/import/13063271',
      ],
    },
    {
      key: 1,
      name: '局部广告-信息流内嵌广告',
      enable: true,
      activityIds: 'com.tencent.mocmna.activity.MainActivity',
      rules: 'ImageView - ViewGroup > ImageView + ImageView + ImageView',
      snapshotUrls: [
        'https://i.gkd.li/import/12847340',
        'https://i.gkd.li/import/12847364',
      ],
    },
  ],
});
