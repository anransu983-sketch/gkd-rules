import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.fenbi.android.leo',
name: '小猿口算',
groups: [
{
key: 0,
name: '全屏广告-评分弹窗',
enable: true,
fastQuery: true,
actionMaximum: 1,
activityIds:
'com.fenbi.android.leo.imgsearch.sdk.activity.NewCheckCameraActivity',
rules: '@[text="残忍拒绝"] + [text*="好评"][text.length<=10]',
snapshotUrls: 'https://i.gkd.li/import/13226140',
},
],
});
