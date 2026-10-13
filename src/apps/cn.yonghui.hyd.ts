import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'cn.yonghui.hyd',
  name: '永辉生活',
  groups: [
    {
      key: 0,
      name: '全屏广告-优惠卷弹窗',
      enable: true,
      fastQuery: true,
      activityIds: '.coupon.couponfactory.CouponFactoryActivity',
      rules: [
        {
          anyMatches: [
            '@TextView[id="cn.yonghui.hyd:id/close"] -n [id="cn.yonghui.hyd:id/title"][text="天降红包"]',
            '@ImageView[id="cn.yonghui.hyd:id/close"] -n [id="cn.yonghui.hyd:id/couponsWillGoneHeaderIv"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13414401',
            'https://i.gkd.li/import/13414444',
          ],
        },
      ],
    },
  ],
});
