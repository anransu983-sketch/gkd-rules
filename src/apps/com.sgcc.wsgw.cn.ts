import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.sgcc.wsgw.cn',
name: '网上国网',
groups: [
{
key: 0,
name: '全屏广告-首页弹窗广告',
enable: true,
activityIds: [
'com.sgcc.wsgw.mainbundle.NewsSyRemind2Activity',
'com.sgcc.wsgw.rnbundle.activity.HomeReactActivity',
],
rules: [
{
key: 1,
actionCd: 2000,
fastQuery: true,
matches: '@[focusable=true] + [text="今日不再出现"]',
snapshotUrls: [
'https://i.gkd.li/import/12745042',
'https://i.gkd.li/import/13247655',
],
},
{
preKeys: 1,
key: 2,
actionDelay: 300,
matches:
'ViewGroup[childCount=1] > @ViewGroup[childCount=1] > ImageView',
snapshotUrls: [
'https://i.gkd.li/import/13247655',
'https://i.gkd.li/import/13247655',
],
},
{
preKeys: 1,
key: 3,
actionDelay: 300,
fastQuery: true,
matches:
'[id="com.sgcc.wsgw.cn:id/news_remind_laytout"] >n [id="com.sgcc.wsgw.cn:id/btn_remind_close"]',
snapshotUrls: ['https://i.gkd.li/import/12745042'],
},
],
},
{
key: 1,
name: '更新提示',
enable: false,
fastQuery: true,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
activityIds: 'com.sgcc.wsgw.rnbundle.activity.HomeReactActivity',
rules: '@ImageView < ViewGroup -3 [text="有新版本啦!"]',
snapshotUrls: 'https://i.gkd.li/import/13501638',
},
],
});
