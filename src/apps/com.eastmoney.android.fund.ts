import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.eastmoney.android.fund',
name: '天天基金',
groups: [
{
key: 0,
name: '全屏广告-自选页面广告',
enable: true,
activityIds:
'com.eastmoney.android.fund.centralis.activity.FundRootActivity',
rules: [
'FrameLayout > FrameLayout > ImageView + FrameLayout[childCount=1] > ImageView',
],
snapshotUrls: 'https://i.gkd.li/import/12642387',
},
{
key: 1,
name: '全屏广告-自选页面缩写提示信息',
enable: true,
activityIds:
'com.eastmoney.android.fund.centralis.activity.FundRootActivity',
rules: [
'[desc="表示场内基金的最新价和折价率"] -(2) FrameLayout < FrameLayout + ImageView',
],
snapshotUrls: 'https://i.gkd.li/import/12642387',
},
{
key: 2,
name: '更新提示',
enable: false,
actionMaximum: 1,
resetMatch: 'app',
rules: '@FrameLayout[clickable=true] - * >2 [desc="立即升级"]',
snapshotUrls: 'https://i.gkd.li/import/13546927',
},
],
});
