import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.maque.app',
  name: '麻雀省钱',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页活动弹窗',
      enable: true,
      activityIds: 'com.uzmap.pkg.EntranceActivity',
      rules:
        'ViewGroup[childCount=2] > ImageView[clickable=true] + ViewGroup[clickable=true][childCount=1] > ImageView[id=null][clickable=false]',
      snapshotUrls: 'https://i.gkd.li/import/12640100',
    },
  ],
});
