import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.ddsy.songyao',
name: '叮当快药',
groups: [
{
key: 0,
name: '全屏广告-优惠卷提示',
enable: true,
fastQuery: true,
activityIds: 'com.ddsy.songyao.activity.SplashActivity',
rules: [
{
matches:
'[id="com.ddsy.songyao:id/iv_coupon_bottom"] + [id="com.ddsy.songyao:id/iv_close"]',
snapshotUrls: 'https://i.gkd.li/import/13048720',
},
],
},
],
});
