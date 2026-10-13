import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.icbc',
  name: '中国工商银行',
  groups: [
    {
      key: 0,
      name: '全屏广告-第一次启动提示',
      enable: true,
      activityIds: 'com.icbc.activity.init.SplashActivity',
      rules: '[id="com.icbc:id/close_btn"]',
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      enable: true,
      activityIds: 'com.icbc.activity.main.MainActivity',
      rules: '[id="com.icbc:id/tv_time"][text*="跳过"][text.length<=6]',
      snapshotUrls: 'https://i.gkd.li/import/13330431',
    },
    {
      key: 2,
      name: '局部广告-右下角浮标广告',
      enable: true,
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.activity.web.ICBCWebView',
            '.activity.main.MainActivity',
            '.mydetail.MyDetailMainActivity',
          ],
          matches: '[vid="iv_close_task_center"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22616307',
            'https://i.gkd.li/i/23227312',
          ],
        },
      ],
    },
  ],
});
