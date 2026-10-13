import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.gspace.android',
name: 'Gspace',
groups: [
{
key: 0,
name: '局部广告-主页面上方广告',
enable: true,
activityIds: ['com.gspace.android.ui.activity.main.MainActivity'],
rules: [
{
key: 0,
matches: '[id="com.gspace.android:id/hiad_banner_close_button"]',
snapshotUrls: 'https://i.gkd.li/import/12705339',
},
{
key: 1,
matches: '@Image < View -2 View > View > View TextView[text="广告"]',
snapshotUrls: [
'https://i.gkd.li/import/12910419',
'https://i.gkd.li/import/12910935',
],
},
{
preKeys: 1,
matches: '[id="com.byted.pangle:id/tt_item_tv" && text= "不感兴趣"]',
snapshotUrls: 'https://i.gkd.li/import/12910420',
},
],
},
{
key: 1,
name: '全屏广告-Youtube播放视频跳过广告',
enable: true,
rules: '[id="com.google.android.youtube:id/skip_ad_button"]',
snapshotUrls: 'https://i.gkd.li/import/12709006',
},
],
});
