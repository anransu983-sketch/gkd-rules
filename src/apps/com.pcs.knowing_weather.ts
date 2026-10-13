import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.pcs.knowing_weather',
name: '知天气-决策',
groups: [
{
key: 0,
name: '更新提示',
enable: false,
fastQuery: true,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
rules: '[text="立即升级"] +2 [text="以后再说"]',
snapshotUrls: 'https://i.gkd.li/import/13378992',
},
],
});
