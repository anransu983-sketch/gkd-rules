import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.android.VideoPlayer',
name: 'i 视频',
groups: [
{
key: 0,
name: '青少年模式',
enable: false,
fastQuery: true,
actionMaximum: 1,
resetMatch: 'app',
rules: '[vid="child_mode_cancel_button"]',
snapshotUrls: 'https://i.gkd.li/import/13849807',
},
],
});
