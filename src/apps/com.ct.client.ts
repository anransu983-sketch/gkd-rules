import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.ct.client',
name: '中国电信',
groups: [
{
key: 0,
name: '开屏广告',
enable: true,
fastQuery: true,
actionMaximum: 1,
resetMatch: 'app',
matchTime: 10000,
rules: '[id="com.ct.client:id/btSkip"]',
snapshotUrls: 'https://i.gkd.li/i/17584648',
order: -10,
},
{
key: 1,
name: '全屏广告-用户引导',
enable: true,
fastQuery: true,
activityIds: 'com.ct.client.activity.UserGuideActivity',
rules: '[id="com.ct.client:id/tvSkip"]',
snapshotUrls: ['https://i.gkd.li/import/12508971'],
},
{
key: 2,
name: '更新提示',
enable: false,
actionMaximum: 1,
resetMatch: 'app',
fastQuery: true,
rules: 'LinearLayout > [text="取消升级"]',
snapshotUrls: [
'https://i.gkd.li/import/12819594',
'https://i.gkd.li/import/13316168',
'https://i.gkd.li/import/13695096',
],
},
{
key: 3,
name: '局部广告-浮窗广告',
desc: '会出现在首页、查询办理页面',
enable: true,
fastQuery: true,
activityIds: [
'com.ct.client.common.ConfirmDialogActivity',
'com.ct.client.activity.MainActivity',
],
rules: [
{
matches: 'ImageView[id="com.ct.client:id/close"]',
snapshotUrls: [
'https://i.gkd.li/import/12819676',
'https://i.gkd.li/import/12913735',
],
},
{
matches: 'ImageView[id="com.ct.client:id/ivFloatClose"]',
snapshotUrls: ['https://i.gkd.li/import/13043345'],
},
],
},
{
key: 4,
name: '全屏广告-业务办理-弹窗广告',
enable: true,
activityIds: [
'com.ct.client.common.webview.OnlineBusinessWebkitActivity',
],
rules: 'Image[text="tishi-close"]',
snapshotUrls: ['https://i.gkd.li/import/12913804'],
},
{
key: 5,
name: '权限提示-消息-开启消息通知',
desc: '自动点击关闭',
enable: false,
activityIds: ['com.ct.client.activity.MainActivity'],
rules: 'ImageView[id="com.ct.client:id/msg_close"]',
snapshotUrls: ['https://i.gkd.li/import/13043522'],
},
{
key: 6,
name: '全屏广告-软件更新/安装后的用户引导',
desc: '自动点击更新或安装后的引导页面跳过按钮',
enable: false,
fastQuery: true,
activityIds: 'com.ct.client.activity.UserGuideActivity',
rules: '[id="com.ct.client:id/tvSkip"]',
snapshotUrls: ['https://i.gkd.li/import/12508971'],
},
{
key: 7,
name: '全屏广告-弹窗广告',
desc: '关闭首页和查询办理页面的浮窗广告',
enable: true,
fastQuery: true,
activityIds: [
'com.ct.client.common.ConfirmDialogActivity',
'com.ct.client.activity.MainActivity',
],
rules: [
{
key: 0,
matches: 'ImageView[id="com.ct.client:id/close"]',
snapshotUrls: [
'https://i.gkd.li/import/12819676',
'https://i.gkd.li/import/12913735',
'https://i.gkd.li/i/15104434',
],
},
{
key: 1,
matches: 'ImageView[id="com.ct.client:id/ivFloatClose"]',
snapshotUrls: [
'https://i.gkd.li/import/13043345',
'https://i.gkd.li/i/15137220',
],
},
{
key: 2,
activityIds: [
'com.ct.client.common.webview.OnlineBusinessWebkitActivity',
],
matches: 'Image[text="tishi-close"]',
snapshotUrls: ['https://i.gkd.li/import/12913804'],
},
],
},
],
});
