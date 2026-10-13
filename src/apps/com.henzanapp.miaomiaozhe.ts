import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.henzanapp.miaomiaozhe',
  name: '喵喵折',
  groups: [
    {
      key: 0,
      name: '更新提示',
      enable: false,
      activityIds: 'com.henzanapp.miaomiaozhe.activity.WelcomeActivity',
      rules: '[text="更新提示"] +(2) LinearLayout > [text="取消"]',
      snapshotUrls: ['https://i.gkd.li/import/12649457'],
    },
  ],
});
