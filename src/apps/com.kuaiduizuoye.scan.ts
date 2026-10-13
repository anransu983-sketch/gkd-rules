import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.kuaiduizuoye.scan',
name: '快对',
groups: [
{
key: 0,
name: '全屏广告-首页广告弹窗',
enable: true,
activityIds: 'com.hihonor.android.launcher.drawer.DrawerLauncher',
rules: '[id="com.kuaiduizuoye.scan:id/iv_advertisement_widget_close"]',
snapshotUrls: 'https://i.gkd.li/import/12716285',
},
],
});
