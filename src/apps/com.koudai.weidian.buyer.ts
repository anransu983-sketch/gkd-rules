import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.koudai.weidian.buyer',
name: '微店',
groups: [
{
key: 0,
name: '全屏广告-首页红包弹窗',
enable: true,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
activityIds: 'com.vdian.android.wdb.main.ui.activity.MainTabsActivity',
rules:
'FrameLayout > FrameLayout > RelativeLayout > ImageView[clickable=true][index=1]',
snapshotUrls: 'https://i.gkd.li/import/13646151',
},
],
});
