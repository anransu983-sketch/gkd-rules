import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.jiongji.andriod.card',
name: '百词斩',
groups: [
{
key: 0,
name: '全屏广告-活动弹窗',
enable: true,
activityIds: 'com.baicizhan.main.activity.MainTabActivity',
rules:
'[text="反馈"] + ImageView + ImageView[childCount=0][clickable=true]',
snapshotUrls: 'https://i.gkd.li/import/13415075',
},
{
key: 1,
name: '更新提示',
enable: false,
fastQuery: true,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
activityIds: 'com.baicizhan.main.activity.MainTabActivity',
rules: '[text="抢先体验"] - [text="取消"]',
snapshotUrls: 'https://i.gkd.li/import/13488652',
},
],
});
