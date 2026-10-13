import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.hihonor.magichome',
  name: '荣耀智慧空间',
  groups: [
    {
      key: 0,
      name: '局部广告-首页顶部广告',
      enable: true,
      activityIds: 'com.hihonor.magichome.business.MainActivity',
      rules: '[id="com.hihonor.magichome:id/item_close_image"]',
      snapshotUrls: 'https://i.gkd.li/import/12843930',
    },
    {
      key: 1,
      name: '全屏广告-推荐服务声明',
      desc: '推荐服务声明弹窗。默认点击【取消】按钮',
      enable: true,
      activityIds: 'com.hihonor.magichome.business.MainActivity',
      rules:
        '[text$="推荐服务声明"] < LinearLayout < LinearLayout + LinearLayout > [id="com.hihonor.magichome:id/negative_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/12843976',
    },
    {
      key: 2,
      name: '全屏广告-升级提示',
      desc: '点击以后再说',
      enable: true,
      activityIds: 'com.hihonor.magichome.business.MainActivity',
      fastQuery: true,
      rules:
        'TextView[text="立即更新"] -2 [id="com.hihonor.magichome:id/negative_btn"][text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/12916700',
    },
  ],
});
