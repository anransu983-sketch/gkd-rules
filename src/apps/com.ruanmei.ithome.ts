import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.ruanmei.ithome',
  name: 'IT之家',
  groups: [
    {
      key: 0,
      name: '局部广告-资讯页-信息流广告',
      enable: true,
      activityIds: 'com.ruanmei.ithome.ui.MainActivity',
      rules: '[id="hongbaotips"] +n @View > [text="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13167193',
    },
  ],
});
