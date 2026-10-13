import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.tmall.wireless',
  name: '手机天猫',
  groups: [
    {
      key: 0,
      name: '更新提示',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.tmall.wireless.splash.TMSplashActivity',
        'com.tmall.wireless.maintab.module.TMMainTabActivity',
        'com.tmall.wireless.webview.TMCommonWebViewActivity',
      ],
      rules: '[id="com.tmall.wireless:id/update_button_cancel"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13162603',
        'https://i.gkd.li/import/13258201',
        'https://i.gkd.li/import/13399536',
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      enable: true,
      activityIds: [
        'com.tmall.wireless.maintab.module.TMMainTabActivity',
        'com.tmall.wireless.turboweb.container.TurboWebViewActivity',
        'com.tmall.wireless.webview.TMCommonWebViewActivity',
      ],
      rules:
        'Image[id=null][clickable=false] < View + Image[id=null][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/13222394',
        'https://i.gkd.li/import/13222500',
        'https://i.gkd.li/import/13222510',
      ],
    },
    {
      key: 2,
      name: '全屏广告-系统通知',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds:
        'com.tmall.wireless.messagebox.activity.TMMsgboxMainActivity',
      rules: 'View[text="开启系统通知"] - View[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13258215',
    },
  ],
});
