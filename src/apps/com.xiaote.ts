import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.xiaote',
name: '小特',
groups: [
{
key: 0,
name: '开屏广告',
enable: true,
fastQuery: true,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
rules: [
{
matches: '[id="com.xiaote:id/ad_close"][text*="关闭"]',
snapshotUrls: 'https://i.gkd.li/import/14035706',
},
],
order: -10,
},
],
});
