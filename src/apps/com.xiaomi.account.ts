import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.xiaomi.account',
  name: '小米账号',
  groups: [
    {
      key: 0,
      name: '更新提示',
      enable: false,
      activityIds: 'com.xiaomi.account.upgrade.AccountApkUpdateDialogActivity',
      rules: '@[text="以后再说"] + [text="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/import/12781280',
    },
  ],
});
