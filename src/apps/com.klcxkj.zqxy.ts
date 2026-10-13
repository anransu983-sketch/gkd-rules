import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.klcxkj.zqxy',
  name: '趣智校园',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.klcxkj.zqxy.ui.main.MainActivity',
            'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          ],
          matches: '[id="com.klcxkj.zqxy:id/anythink_myoffer_btn_close_id"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13195649',
            'https://i.gkd.li/import/12781415',
          ],
        },
        {
          key: 1,
          name: '腾讯广告',
          activityIds: [
            'com.klcxkj.zqxy.ui.main.MainActivity',
            'com.klcxkj.zqxy.ui.device.apartment.ble.BathingBleActivity',
          ],
          matches:
            'FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]',
          snapshotUrls: [
            'https://i.gkd.li/import/12781461',
            'https://i.gkd.li/import/13488673',
            'https://i.gkd.li/import/13546464',
            'https://i.gkd.li/import/13071301',
            'https://i.gkd.li/import/13274836',
            'https://i.gkd.li/import/13274836',
            'https://i.gkd.li/import/13707849',
          ],
        },
        {
          key: 4,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
        },
        {
          key: 5,
          name: '吉欣广告',
          activityIds: 'com.klcxkj.zqxy.ui.splash.SplashActivity',
          matches: '@ViewGroup < ViewGroup +2 ViewGroup > [text="吉欣广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13274838',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-横幅广告',
      enable: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.klcxkj.zqxy.ui.device.drink.ble.DrinkingBleActivity',
          ],
          matches:
            '[id="com.klcxkj.zqxy:id/bathing_adv_layout"] >n FrameLayout[childCount=1] > ImageView',
          snapshotUrls: ['https://i.gkd.li/import/13488870'],
        },
      ],
    },
  ],
});
