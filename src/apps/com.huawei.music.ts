import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.huawei.music',
name: '华为音乐',
groups: [
{
key: 0,
name: '开屏广告',
enable: true,
activityIds: ['com.android.mediacenter.PageActivity'],
rules: [
{
matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
action: 'clickCenter',
snapshotUrls: ['https://i.gkd.li/import/12745222'],
},
],
order: -10,
},
{
key: 1,
name: '全屏广告-广告反馈下拉窗',
enable: true,
fastQuery: true,
activityIds: ['com.huawei.openalliance.ad.activity.FeedbackActivity'],
rules: [
{
matches:
'TextView[id="com.huawei.music:id/label_title"][text="直接关闭"]',
snapshotUrls: [
'https://i.gkd.li/import/13067574',
'https://i.gkd.li/import/13067572',
'https://i.gkd.li/import/13067571',
'https://i.gkd.li/import/13067659',
'https://i.gkd.li/import/13067665',
'https://i.gkd.li/import/13067820',
],
},
],
},
{
key: 2,
name: '局部广告-播放界面直播浮窗',
enable: true,
fastQuery: true,
activityIds: ['com.android.mediacenter.MainActivity'],
rules: [
{
matches:
'TextView[id="com.huawei.music:id/live_info"] < LinearLayout -2 [id="com.huawei.music:id/close_button"]',
snapshotUrls: ['https://i.gkd.li/import/13067649'],
},
],
},
{
key: 3,
name: '局部广告-播放（音乐、视频）页面广告',
enable: true,
fastQuery: true,
activityIds: ['com.android.mediacenter.MainActivity'],
rules: [
{
matches:
'TextView[id="com.huawei.music:id/ad_icon"&&visibleToUser=true]',
snapshotUrls: [
'https://i.gkd.li/import/13067956',
'https://i.gkd.li/import/13067978',
'https://i.gkd.li/import/13067387',
],
},
],
},
{
key: 4,
name: '局部广告-评论区广告',
enable: true,
fastQuery: true,
activityIds: [
'com.android.mediacenter.comment.ui.CommentListMainActivity',
],
rules: [
{
matches: '[id="com.huawei.music:id/ad_icon"]',
snapshotUrls: ['https://i.gkd.li/import/13067937'],
},
],
},
{
key: 5,
name: '局部广告-视频播放页广告反馈',
enable: true,
fastQuery: true,
activityIds: ['com.android.mediacenter.MainActivity'],
rules: [
{
matches: 'TextView[text="不感兴趣"][id$="title"][visibleToUser=true]',
snapshotUrls: [
'https://i.gkd.li/import/13067986',
'https://i.gkd.li/import/13067981',
],
},
],
},
{
key: 6,
name: '局部广告-播放器上滑广告',
enable: true,
fastQuery: true,
activityIds: ['com.android.mediacenter.MainActivity'],
rules: [
{
matches:
'ViewGroup > TextView[text="广告"][id$="ad_icon"][visibleToUser=true]',
snapshotUrls: [
'https://i.gkd.li/import/13068935',
'https://i.gkd.li/import/13194163',
'https://i.gkd.li/import/13263590',
],
},
],
},
],
});
