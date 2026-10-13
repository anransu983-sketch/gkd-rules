import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.smile.gifmaker',
name: '快手',
groups: [
{
key: 0,
name: '青少年模式',
enable: false,
activityIds: 'com.yxcorp.gifshow.HomeActivity',
rules: [
{
matches:
'@[id=`com.smile.gifmaker:id/positive`] + [id=`com.smile.gifmaker:id/set_teenage_mode`]',
},
{
matches:
'[id="com.smile.gifmaker:id/set_teenage_mode"] + [id="com.smile.gifmaker:id/positive"]',
snapshotUrls: 'https://i.gkd.li/import/12708609',
},
],
},
{
key: 1,
name: '全屏广告-首页-红包弹窗',
desc: '自动点击x按钮',
enable: true,
activityIds: 'com.yxcorp.gifshow.HomeActivity',
rules: [
{
name: '老友回归红包弹窗',
matches:
'@ImageView[id=null][clickable=true] + ViewGroup > [text!=null] + [text!=null]',
snapshotUrls: [
'https://i.gkd.li/import/12708649',
'https://i.gkd.li/import/12708660',
],
},
{
name: '限时高额奖励弹窗',
matches:
'@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup >2 [text="立即领取"]',
snapshotUrls: ['https://i.gkd.li/import/12708681'],
},
],
},
{
key: 2,
name: '局部广告-首页-左侧红包悬浮控件',
desc: '自动点击x按钮',
enable: true,
activityIds: 'com.yxcorp.gifshow.HomeActivity',
rules: [
{
matches:
'[id="com.smile.gifmaker:id/pendant_mask_bg"] + [id="com.smile.gifmaker:id/pendant_close"][visibleToUser=true]',
snapshotUrls: [
'https://i.gkd.li/import/12708671',
'https://i.gkd.li/import/12708676',
],
},
],
},
{
key: 3,
name: '全屏广告-你可能感兴趣的人',
desc: '自动点击【关闭】',
enable: true,
activityIds: 'com.yxcorp.gifshow.HomeActivity',
rules: '[id="com.smile.gifmaker:id/close_pymk"]',
snapshotUrls: [
'https://i.gkd.li/import/12708620',
'https://i.gkd.li/import/12708707',
],
},
{
key: 4,
name: '全屏广告-首页红包弹窗',
desc: '关闭首页弹出的各类红包广告弹窗',
enable: true,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
activityIds: 'com.yxcorp.gifshow.HomeActivity',
rules: [
{
key: 1,
name: '老友回归红包弹窗',
matches:
'@ImageView[id=null][clickable=true] + ViewGroup > [text!=null] + [text!=null]',
snapshotUrls: [
'https://i.gkd.li/i/12708649',
'https://i.gkd.li/i/12708660',
],
},
{
key: 2,
name: '限时高额奖励弹窗',
matches:
'@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup >2 [text="立即领取"]',
snapshotUrls: 'https://i.gkd.li/i/12708681',
},
],
},
{
key: 5,
name: '局部广告-首页左侧红包悬浮控件',
desc: '关闭首页左侧悬浮的红包广告控件',
enable: true,
fastQuery: true,
activityIds: 'com.yxcorp.gifshow.HomeActivity',
rules: [
{
matches:
'[id="com.smile.gifmaker:id/pendant_mask_bg"] + [id="com.smile.gifmaker:id/pendant_close"][visibleToUser=true]',
snapshotUrls: [
'https://i.gkd.li/i/12708671',
'https://i.gkd.li/i/12708676',
],
},
],
},
{
key: 6,
name: '功能类-推荐关注',
desc: '关闭各页面的推荐关注提示',
enable: false,
activityIds: 'com.yxcorp.gifshow.HomeActivity',
rules: [
{
key: 0,
name: '消息页面-你可能感兴趣的人',
fastQuery: true,
matches: '[id="com.smile.gifmaker:id/close_pymk"]',
snapshotUrls: 'https://i.gkd.li/i/12708707',
},
{
key: 1,
name: '我的页面-你可能感兴趣的人',
fastQuery: true,
matches:
'ViewGroup[childCount=3] > [text="隐藏"][visibleToUser=true]',
snapshotUrls: 'https://i.gkd.li/i/14001536',
},
{
key: 2,
name: '朋友推荐弹窗',
fastQuery: true,
matches: '[text="朋友推荐"] + [vid="close_btn"]',
snapshotUrls: 'https://i.gkd.li/i/14232217',
},
],
},
{
key: 7,
name: '全屏广告-直播间广告',
desc: '关闭直播间的全屏广告',
enable: true,
rules: [
{
fastQuery: true,
action: 'back',
activityIds:
'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
matches: '[text="幸运奖池"][visibleToUser=true] <<n [vid="webView"]',
snapshotUrls: 'https://i.gkd.li/i/15629334',
},
],
},
],
});
