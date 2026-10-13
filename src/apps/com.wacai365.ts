import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.wacai365',
name: '挖财记账',
groups: [
{
key: 0,
name: '更新提示',
enable: false,
fastQuery: true,
actionMaximum: 1,
activityIds: [
'com.wacai365.HomeActivity',
'com.wacai.android.wind.splash.WindDialogActivity',
],
rules:
'@ImageView[id="com.wacai365:id/tv_cancel"] - TextView[text^="新版本"]',
snapshotUrls: [
'https://i.gkd.li/import/13249620',
'https://i.gkd.li/import/13772291',
],
},
{
key: 1,
name: '全屏广告-弹窗广告',
enable: true,
fastQuery: true,
actionMaximum: 1,
activityIds: 'com.wacai365.HomeActivity',
rules: '[id^="com.wacai365:id/promote_banner_close"]',
snapshotUrls: 'https://i.gkd.li/import/13249666',
},
{
key: 2,
name: '开屏广告',
enable: true,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
rules: [
{
key: 0,
fastQuery: true,
matches: '@View[clickable=true] <2 * <2 * < [vid="flTTContainer"]',
snapshotUrls: 'https://i.gkd.li/import/14021540',
},
{
key: 3,
fastQuery: true,
matches: '[text^="跳过"][text.length<=6]',
snapshotUrls: 'https://i.gkd.li/import/13399124',
},
],
order: -10,
},
],
});
