import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.yitong.mbank.psbc',
  name: '邮储银行',
  groups: [
    {
      key: 0,
      name: '更新提示',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.yitong.mbank.psbc.module.app.view.customview.dialog.DialogUpdateApk',
        'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
      ],
      rules: [
        {
          matches: 'Button[id="com.yitong.mbank.psbc:id/bt_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12685350',
            'https://i.gkd.li/import/13695462',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-首页广告弹窗',
      enable: true,
      activityIds:
        'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
      rules:
        '[id="com.yitong.mbank.psbc:id/iv_theme"] + [id="com.yitong.mbank.psbc:id/iv_theme_close_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/12755516',
    },
    {
      key: 2,
      name: '局部广告-首页-浮窗广告',
      enable: true,
      activityIds:
        'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
      rules: '[id="com.yitong.mbank.psbc:id/img_close_float_window"]',
      snapshotUrls: 'https://i.gkd.li/import/13797314',
    },
    {
      key: 3,
      name: '局部广告-浮窗广告',
      desc: '关闭首页右侧的悬浮窗广告',
      enable: true,
      fastQuery: true,
      activityIds:
        'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
      rules: '[vid="img_close_float_window"]',
      snapshotUrls: 'https://i.gkd.li/i/16215989',
    },
  ],
});
