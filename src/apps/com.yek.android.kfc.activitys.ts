import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.yek.android.kfc.activitys',
  name: '肯德基',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id=`com.yek.android.kfc.activitys:id/splash_tv_3`]',
      order: -10,
    },
  ],
});
