import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.fanli.android.apps',
name: '返利',
groups: [
{
key: 0,
name: '全屏广告-应用内弹窗',
enable: true,
activityIds:
'com.fanli.android.module.webview.ui.activity.TransparentBrowserInnerActivity',
rules: '[id="J_poplayer_box"] >n @View + [text="main_bkg"]',
snapshotUrls: 'https://i.gkd.li/import/13245808',
},
],
});
