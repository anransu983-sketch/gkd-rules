import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'so.tita',
name: 'tita搜索',
groups: [
{
key: 0,
name: '全屏广告-应用内第三方 SDK 广告',
enable: true,
rules: [
{
key: 0,
activityIds: 'so.tita.view.activity.HomeActivity',
matches:
'[id="so.tita:id/flyt_banner"] >n FrameLayout > FrameLayout +n FrameLayout > ImageView',
snapshotUrls: 'https://i.gkd.li/import/12800404',
},
{
key: 1,
activityIds: [
'so.tita.view.activity.HomeActivity',
'so.tita.view.activity.EpisodeActivity',
'so.tita.view.activity.SearchActivity',
],
matches: [
'[id="so.tita:id/flyt_native"] >n LinearLayout > FrameLayout + LinearLayout + FrameLayout[visibleToUser=true]',
'[id="so.tita:id/flyt_native"] >n FrameLayout > ImageView +n FrameLayout > ImageView[visibleToUser=true]',
],
actionDelay: 1000,
snapshotUrls: [
'https://i.gkd.li/import/12800504',
'https://i.gkd.li/import/12800437',
'https://i.gkd.li/import/12800682',
'https://i.gkd.li/import/12800590',
'https://i.gkd.li/import/12800794',
'https://i.gkd.li/import/12800914',
],
},
{
key: 2,
activityIds: [
'so.tita.view.activity.WebVersionActivity',
'so.tita.view.activity.RankListActivity',
'so.tita.view.activity.CollectActivity',
'so.tita.view.activity.HistoryActivity',
'so.tita.view.activity.AllDownParentActivity',
'so.tita.view.activity.EpisodeActivity',
'so.tita.view.activity.KSYPlayerActivity',
],
matches: '@ImageView < FrameLayout + ImageView',
snapshotUrls: [
'https://i.gkd.li/import/12800486',
'https://i.gkd.li/import/12800559',
'https://i.gkd.li/import/12800633',
'https://i.gkd.li/import/12800655',
'https://i.gkd.li/import/12800673',
'https://i.gkd.li/import/12800732',
'https://i.gkd.li/import/12800739',
],
},
{
key: 3,
activityIds: [
'so.tita.view.activity.RankListActivity',
'so.tita.utils.cast.ui.CastPlayActivity',
],
matches: 'ImageView - FrameLayout > FrameLayout > ImageView',
snapshotUrls: [
'https://i.gkd.li/import/12800543',
'https://i.gkd.li/import/12800571',
],
},
{
key: 4,
activityIds: [
'so.tita.view.activity.CollectActivity',
'so.tita.view.activity.HistoryActivity',
'so.tita.view.activity.AllDownParentActivity',
],
matches:
'ImageView - FrameLayout > FrameLayout > FrameLayout > ImageView',
snapshotUrls: [
'https://i.gkd.li/import/12800616',
'https://i.gkd.li/import/12800642',
'https://i.gkd.li/import/12800659',
],
},
],
},
{
key: 1,
name: '全屏广告-观看视频去除广告提示弹窗',
enable: true,
activityIds: 'so.tita.view.activity.HomeActivity',
rules: '@[text="取 消"] + View + [text="确 定"]',
snapshotUrls: 'https://i.gkd.li/import/12800350',
},
],
});
