import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.weaver.emobile7',
  name: 'EMobile7',
  groups: [
    {
      key: 0,
      name: '更新提示',
      enable: false,
      activityIds: 'weaver.fw.com.MainActivity',
      rules: [
        {
          matches:
            '@[id="com.weaver.emobile7:id/sdl__negative_button"][text="取消"] +(2) [id="com.weaver.emobile7:id/sdl__positive_button"][text="更新"]',
          snapshotUrls: ['https://i.gkd.li/import/12673154'],
        },
      ],
    },
  ],
});
