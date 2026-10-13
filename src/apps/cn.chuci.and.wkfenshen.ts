import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'cn.chuci.and.wkfenshen',
  name: '猴子分身',
  groups: [
    {
      key: 0,
      name: '全屏广告-购买会员弹窗',
      enable: true,
      fastQuery: true,
      activityIds: 'cn.chuci.and.wkfenshen.ActMain',
      rules: [
        {
          matches: [
            '@ImageView[id="cn.chuci.and.wkfenshen:id/action_close"] + ViewGroup[id="cn.chuci.and.wkfenshen:id/local_cl_content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13226988',
        },
      ],
    },
  ],
});
