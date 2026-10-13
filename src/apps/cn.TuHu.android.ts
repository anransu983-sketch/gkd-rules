import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'cn.TuHu.android',
  name: '途虎养车',
  groups: [
    {
      key: 0,
      name: '全屏广告-广告弹窗',
      enable: true,
      fastQuery: true,
      activityIds: 'cn.TuHu.Activity.tuhutab.TuHuTabActivity',
      rules:
        '@[id="cn.TuHu.android:id/imgClose"] - [id="cn.TuHu.android:id/rlContent"] > [id="cn.TuHu.android:id/img_jump"]',
      snapshotUrls: 'https://i.gkd.li/import/13228818',
    },
    {
      key: 1,
      name: '权限提示-请求通知权限弹窗',
      enable: false,
      fastQuery: true,
      activityIds: 'cn.TuHu.Activity.tuhutab.TuHuTabActivity',
      rules: '[id="cn.TuHu.android:id/imgClose"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13228796',
        'https://i.gkd.li/import/13256535',
      ],
    },
  ],
});
