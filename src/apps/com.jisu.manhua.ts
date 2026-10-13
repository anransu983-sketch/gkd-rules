import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.jisu.manhua',
name: '漫画人极速版',
groups: [
{
key: 0,
name: '全屏广告-弹窗广告',
enable: true,
fastQuery: true,
activityIds: 'com.ilike.cartoon.activities.HomeActivity',
rules: [
{
matches:
'[id="com.jisu.manhua:id/iv_promotion"] + [id="com.jisu.manhua:id/iv_close"]',
snapshotUrls: 'https://i.gkd.li/import/13688186',
},
],
},
],
});
