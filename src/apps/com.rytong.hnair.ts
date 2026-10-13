import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.rytong.hnair',
name: '海南航空',
groups: [
{
key: 0,
name: '全屏广告-首页-弹窗广告',
enable: true,
activityIds: 'com.hnair.airlines.ui.main.MainActivity',
rules: 'ImageView[id*="com.rytong.hnair:id/iv_cloes"]',
snapshotUrls: 'https://i.gkd.li/import/12846381',
},
{
key: 1,
name: '全屏广告-首页弹窗广告',
desc: '关闭APP首页出现的全屏弹窗广告',
enable: true,
fastQuery: true,
activityIds: 'com.hnair.airlines.ui.main.MainActivity',
rules: 'ImageView[id="com.rytong.hnair:id/iv_cloes"]',
snapshotUrls: 'https://i.gkd.li/import/12846381',
},
],
});
