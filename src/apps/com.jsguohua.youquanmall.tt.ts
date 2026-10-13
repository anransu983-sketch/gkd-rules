import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.jsguohua.youquanmall.tt',
name: '图图影视',
groups: [
{
key: 0,
name: '全屏广告-应用内弹窗',
enable: true,
activityIds: 'com.zero.flutter_qq_ads.page.AdSplashActivity',
rules: [
{
matches:
'[text="去微信看看"] < FrameLayout <n FrameLayout[childCount=2] -n FrameLayout > ImageView',
snapshotUrls: 'https://i.gkd.li/import/13163314',
},
],
},
],
});
