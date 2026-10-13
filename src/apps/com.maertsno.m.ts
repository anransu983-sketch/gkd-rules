import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.maertsno.m',
name: 'OnStream',
groups: [
{
key: 0,
name: '全屏广告',
enable: true,
fastQuery: true,
activityIds: 'co.notix.interstitial.InterstitialActivity',
rules: '[vid="tv_button"]',
snapshotUrls: 'https://i.gkd.li/import/13842558',
},
],
});
