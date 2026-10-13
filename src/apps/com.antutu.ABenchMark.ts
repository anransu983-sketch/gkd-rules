import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.antutu.ABenchMark',
  name: '安兔兔评测',
  groups: [
    {
      key: 0,
      name: '局部广告-广告卡片',
      enable: true,
      activityIds: 'com.android.module.app.ui.test.activity.ActivityTestResult',
      rules: '[text="广告"] + TextView + View > TextView',
      snapshotUrls: 'https://i.gkd.li/import/13234012',
    },
  ],
});
