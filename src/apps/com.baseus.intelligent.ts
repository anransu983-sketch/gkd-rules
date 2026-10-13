import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.baseus.intelligent',
name: '倍思',
groups: [
{
key: 0,
name: '权限提示-定位提示-定位请求',
desc: '点击取消-点击取消',
enable: false,
rules: [
{
key: 0,
fastQuery: true,
activityIds: 'com.baseus.intelligent.view.home.MainActivity',
matches: '@[text="取消"] + [text="前往设置"]',
snapshotUrls: 'https://i.gkd.li/import/13827653',
},
{
preKeys: 0,
key: 1,
fastQuery: true,
activityIds: 'com.baseus.intelligent.view.home.MainActivity',
matches: '@[text="取消"] + [text="授权"]',
snapshotUrls: 'https://i.gkd.li/import/13827986',
},
],
},
],
});
