import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.videogo',
name: '萤石云视频',
groups: [
{
key: 0,
name: '全屏广告-主页广告',
enable: true,
fastQuery: true,
activityIds: ['com.videogo.main.MainTabActivity'],
rules: [
{
key: 0,
matches: '[id="com.videogo:id/ad_close"]',
snapshotUrls: 'https://i.gkd.li/import/13255684',
},
{
preKeys: 0,
matches: '[id="com.videogo:id/ad_closead_nointerest"]',
snapshotUrls: 'https://i.gkd.li/import/13255697',
},
],
},
],
});
