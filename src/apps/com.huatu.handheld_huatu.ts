import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.huatu.handheld_huatu',
  name: '华图在线',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页广告弹窗',
      enable: true,
      activityIds: [
        'com.huatu.handheld_huatu.view.MainPopDialog',
        'com.huatu.handheld_huatu.business.main.MainTabActivity',
      ],
      rules:
        '[id="com.huatu.handheld_huatu:id/main_img_adv_bg"] + [id="com.huatu.handheld_huatu:id/main_img_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12715702',
        'https://i.gkd.li/import/12744973',
      ],
    },
    {
      key: 1,
      name: '全屏广告-请求通知权限弹窗',
      enable: false,
      activityIds: 'com.huatu.handheld_huatu.business.main.MainTabActivity',
      rules: '[text*="开启通知提示"] +2 LinearLayout > [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/import/12715719',
    },
  ],
});
