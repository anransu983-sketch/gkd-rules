import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.mobile',
  name: '抖音',
  groups: [
    {
      key: 0,
      name: '青少年模式',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.ss.android.ugc.aweme.mobile:id/teen_mode_title"] +n [id="com.ss.android.ugc.aweme.mobile:id/bt_i_know"]',
      snapshotUrls: 'https://i.gkd.li/import/13255513',
    },
  ],
});
