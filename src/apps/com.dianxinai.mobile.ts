import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.dianxinai.mobile',
  name: '点心云',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      enable: true,
      activityIds: ['com.dianxinai.mobile.MainActivity'],
      rules:
        '@ViewGroup[clickable = true] > TextView[text $="s" && text.length=2]',
      snapshotUrls: 'https://i.gkd.li/import/12847518',
      order: -10,
    },
  ],
});
