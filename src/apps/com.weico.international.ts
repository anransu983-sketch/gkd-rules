import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.weico.international',
name: '微博轻享版',
groups: [
{
key: 0,
name: '局部广告-推荐流广告',
desc: '主页,搜索页',
enable: true,
activityIds: [
'com.weico.international.activity.MainFragmentActivity',
'com.weico.international.ui.search.SearchActivity',
],
exampleUrls:
'https://github.com/gkd-kit/subscription/assets/38517192/e713a2ca-5048-486a-874f-dd876d53c49b',
rules: [
{
preKeys: [1],
name: '点击不感兴趣',
matches: '@View > [text="不感兴趣"]',
snapshotUrls: [
'https://i.gkd.li/import/12505755',
'https://i.gkd.li/import/12505764',
],
},
{
key: 0,
name: '点击广告卡片右上角[x]',
matches: '[id="com.weico.international:id/item_timeline_ad_action"]',
snapshotUrls: [
'https://i.gkd.li/import/12505753',
'https://i.gkd.li/import/12505763',
'https://i.gkd.li/import/12857202',
],
},
],
},
{
key: 1,
name: '分段广告-信息流广告',
desc: '关闭主页、搜索页的信息流广告',
enable: true,
fastQuery: true,
activityIds: [
'com.weico.international.activity.MainFragmentActivity',
'com.weico.international.ui.search.SearchActivity',
'com.weico.international.ui.detail.StatusDetailV3Activity',
],
rules: [
{
key: 0,
name: '点击广告卡片右上角[x]',
matches: '[vid="item_timeline_ad_action"]',
snapshotUrls: [
'https://i.gkd.li/import/12505753',
'https://i.gkd.li/import/12505763',
'https://i.gkd.li/import/12857202',
'https://i.gkd.li/i/14444744',
'https://i.gkd.li/i/16667201',
],
},
{
key: 1,
preKeys: [0],
name: '点击不感兴趣',
action: 'clickCenter',
matches: '[text="不感兴趣"]',
snapshotUrls: [
'https://i.gkd.li/import/12505755',
'https://i.gkd.li/import/12505764',
'https://i.gkd.li/i/14798365',
'https://i.gkd.li/i/16667202',
'https://i.gkd.li/i/19226502',
'https://i.gkd.li/i/19310848',
],
},
],
},
],
});
