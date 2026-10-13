import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.m.mfood',
name: 'mFood',
groups: [
{
key: 0,
name: '局部广告-浮窗廣告',
enable: true,
fastQuery: true,
activityIds: 'com.zdyl.mfood.ui.home.MainActivity',
rules: '[id="com.m.mfood:id/close"]',
snapshotUrls: 'https://i.gkd.li/import/13350787',
},
],
});
