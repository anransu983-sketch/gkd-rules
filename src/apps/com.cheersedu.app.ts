import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.cheersedu.app',
name: '湛庐阅读',
groups: [
{
key: 0,
name: '更新提示',
enable: false,
fastQuery: true,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
activityIds: 'com.cheersedu.app.main.MainActivity',
rules: '[id="com.cheersedu.app:id/iv_version_close"]',
snapshotUrls: 'https://i.gkd.li/import/13315712',
},
],
});
