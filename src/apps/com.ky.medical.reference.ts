import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.ky.medical.reference',
name: '用药参考',
groups: [
{
key: 0,
name: '开屏广告',
enable: true,
fastQuery: true,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
rules: '[id="com.ky.medical.reference:id/btn_go"][text^="关闭"]',
snapshotUrls: 'https://i.gkd.li/import/12918049',
order: -10,
},
{
key: 1,
name: '全屏广告-弹窗广告',
enable: true,
activityIds: 'com.ky.medical.reference.promotion.AdDialogActivity',
rules: [
{
matches: '[id="com.ky.medical.reference:id/icClose"]',
snapshotUrls: 'https://i.gkd.li/import/12840924',
},
],
},
],
});
