import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.pmph.irenwei',
name: '人卫',
groups: [
{
key: 0,
name: '全屏广告-抽奖弹窗',
desc: '点击X',
enable: true,
fastQuery: true,
rules: [
{
activityIds: 'com.pmph.main.ad.AdActivity',
matches: '[id="com.pmph.irenwei:id/iv_close"]',
snapshotUrls: 'https://i.gkd.li/import/13897421',
},
],
},
],
});
