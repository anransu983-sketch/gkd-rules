import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.zgnet.eClass',
  name: '掌医课堂',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: 'TextView[id$="tv_close_time"&&text^="关闭"]',
          snapshotUrls: ['https://i.gkd.li/import/12644260'],
        },
      ],
      order: -10,
    },
    {
      key: 1,
      name: '全屏广告-退出确认弹窗（默认关闭）',
      enable: true,
      rules: [
        {
          matches:
            '[text*="确定要退出"] < LinearLayout +n LinearLayout > TextView[id$="tv_exit_sure"]',
          snapshotUrls: ['https://i.gkd.li/import/12645513'],
        },
      ],
    },
  ],
});
