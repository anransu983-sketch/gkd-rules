import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.mxbc.mxsa',
name: '蜜雪冰城',
groups: [
{
key: 0,
name: '全屏广告-主界面弹窗广告',
enable: true,
activityIds: ['com.mxbc.mxsa.modules.main.MainActivity'],
rules: [
{
key: 1,
matches: '[id="com.mxbc.mxsa:id/close"]',
snapshotUrls: 'https://i.gkd.li/import/12929345',
},
],
},
],
});
