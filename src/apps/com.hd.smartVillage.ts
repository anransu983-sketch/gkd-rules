import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.hd.smartVillage',
  name: '恒大智慧社区',
  groups: [
    {
      key: 0,
      name: '全屏广告-关闭开启通知弹窗',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      activityIds: [
        'com.hd.smartVillage.modules.main.MainActivity',
        'com.hd.smartVillage.modules.h5service.H5WebActivity',
      ],
      rules: 'View[id="com.hd.smartVillage:id/notificationSettingCloseBtn"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13223669',
        'https://i.gkd.li/import/13293000',
      ],
    },
    {
      key: 1,
      name: '全屏广告-更新弹窗',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      activityIds: 'com.hd.smartVillage.modules.main.MainActivity',
      rules:
        'TextView[id="com.hd.smartVillage:id/tv_upgrade_cancel"][text="取消"]',
      snapshotUrls: 'https://i.gkd.li/import/13223642',
    },
  ],
});
