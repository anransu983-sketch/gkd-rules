import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.hihonor.vmall',
name: '荣耀商城',
groups: [
{
key: 0,
name: '全屏广告-应用内广告弹窗',
enable: true,
activityIds: [
'com.vmall.client.base.fragment.VmallWapActivity',
'com.vmall.client.splash.fragment.SplashActivity',
],
rules: '[id="com.hihonor.vmall:id/gift_close_iv"]',
snapshotUrls: 'https://i.gkd.li/import/13060881',
},
],
});
