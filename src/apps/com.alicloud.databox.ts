import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.alicloud.databox',
name: '阿里云盘',
groups: [
{
key: 0,
name: '功能类-自动签到',
enable: false,
activityIds: 'com.alicloud.databox.MainActivity',
rules: [
{
key: 0,
name: '自动签到',
matches: ['[id="com.alicloud.databox:id/tvTaskAction"][text="领取"]'],
snapshotUrls: 'https://i.gkd.li/import/12929318',
fastQuery: true,
},
{
key: 1,
preKeys: [0],
name: '在签到后，关闭弹窗',
matches: ['[id="com.alicloud.databox:id/ivClose"]'],
snapshotUrls: 'https://i.gkd.li/import/13038304',
fastQuery: true,
},
],
},
{
key: 1,
name: '全屏广告-活动弹窗',
enable: true,
activityIds: 'com.alicloud.databox.MainActivity',
rules: '[text^="好运盲盒"] >n View > Image + TextView[clickable=true]',
snapshotUrls: 'https://i.gkd.li/import/13228610',
},
{
key: 2,
name: '功能类-时光设备间-自动点击“开心收下”',
enable: false,
activityIds:
'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
actionMaximum: 1,
resetMatch: 'activity',
matchTime: 10000,
rules: 'View[childCount=9] > @Image -2 View[childCount=5]',
snapshotUrls: 'https://i.gkd.li/import/13596924',
},
{
key: 3,
name: '更新提示-版本更新',
enable: false,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
fastQuery: true,
activityIds: 'com.alicloud.databox.MainActivity',
rules: [
{
matches: '[text^="立即了解"] -3 View[clickable=true]',
snapshotUrls: 'https://i.gkd.li/import/13806865',
},
],
},
{
key: 4,
name: '功能类-时光设备间-自动点击',
desc: '自动点击“开心收下”',
enable: false,
activityIds:
'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
actionMaximum: 1,
matchTime: 10000,
rules: 'View[childCount=9] > @Image -2 View[childCount=5]',
snapshotUrls: 'https://i.gkd.li/import/13596924',
},
{
key: 5,
name: '更新提示',
desc: '关闭应用更新提示弹窗',
enable: false,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
fastQuery: true,
activityIds: 'com.alicloud.databox.MainActivity',
rules: [
{
matches:
'[text*="新版本"] -n @[clickable=true][getChild(0).name$="Image"] <<4 [id="root"] <<3 [vid="webContainer"]',
snapshotUrls: 'https://i.gkd.li/import/13806865',
},
],
},
{
key: 6,
name: '通知提示-顶端横幅”',
desc: '出现在首页、备份盘、资源库',
enable: false,
ignoreGlobalGroupMatch: true,
fastQuery: true,
activityIds: ['com.alicloud.databox.MainActivity'],
rules: [
{
key: 0,
name: '首页',
excludeMatches: '[vid="layoutBanner"] > [text$=">>"]',
matches: ['[id="com.alicloud.databox:id/ivTitleAction"]'],
snapshotUrls: 'https://i.gkd.li/import/14161399',
excludeSnapshotUrls: 'https://i.gkd.li/i/17556779',
},
{
key: 1,
name: '备份盘、资源库',
matches: ['[id="com.alicloud.databox:id/notice_view_icon_button"]'],
snapshotUrls: [
'https://i.gkd.li/import/14161340',
'https://i.gkd.li/import/14161336',
],
},
],
},
{
key: 7,
name: '功能类-自动授权',
desc: '包括扫码登录',
enable: false,
actionMaximum: 1,
resetMatch: 'app',
fastQuery: true,
activityIds: 'com.taobao.login4android.scan.QrScanActivity',
rules: [
{
matches: '[text="确认并登录"][clickable=true]',
snapshotUrls: 'https://i.gkd.li/i/14414503',
},
],
},
{
key: 8,
name: '全屏广告-[容量使用超限]提示',
desc: '点击关闭',
enable: true,
fastQuery: true,
activityIds: '.MainActivity',
rules: [
{
matches: ['[text="容量使用超限"]', '[vid="layout_close"]'],
snapshotUrls: 'https://i.gkd.li/i/15158788',
},
],
},
{
key: 9,
name: '局部广告-卡片广告',
desc: '关闭卡片式广告',
enable: true,
fastQuery: true,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
activityIds: '.transferpage.TransferListActivity',
rules: [
{
key: 0,
matches: '[vid="close"]',
snapshotUrls: 'https://i.gkd.li/i/15433289',
},
],
},
],
});
