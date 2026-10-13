import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'cn.com.ruijie.magicbox',
  name: '无线魔盒',
  groups: [
    {
      key: 0,
      name: '更新提示',
      enable: false,
      fastQuery: true,
      activityIds: 'cn.com.ruijie.wifibox.activity.MainActivity',
      rules: [
        '@ImageView[id="cn.com.ruijie.magicbox:id/imageView_close"] +(2) RelativeLayout > LinearLayout > [text*="新版本"]',
      ],
      snapshotUrls: 'https://i.gkd.li/import/12642359',
    },
  ],
});
