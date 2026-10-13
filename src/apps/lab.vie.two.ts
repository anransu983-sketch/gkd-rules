import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'lab.vie.two',
  name: 'LIBVIO',
  groups: [
    {
      key: 0,
      name: '全屏广告-账号注册说明弹窗',
      desc: '每次打开app的弹窗提示，本规则自动点击【我知道了】',
      enable: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc="账号注册说明"] +2 [desc="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13379070',
    },
  ],
});
