import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.black.unique',
name: '全球购骑士特权',
groups: [
{
key: 0,
name: '全屏广告-弹窗广告',
enable: true,
fastQuery: true,
activityIds: 'com.black.unique.feature.home.HomeActivity',
rules: [
{
matches: '@ImageView[id="com.black.unique:id/iv_close"]',
snapshotUrls: 'https://i.gkd.li/import/13499502',
},
],
},
],
});
