import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.hupu.games',
name: '虎扑',
groups: [
{
key: 0,
name: '局部广告-推荐流广告',
desc: '点击卡片右上角广告文字或省略号,出现广告反馈,点击屏蔽该广告',
enable: true,
fastQuery: true,
activityIds: [
'com.hupu.games.main.MainActivity',
'com.hupu.android.bbs.detail.PostDetailActivity',
'com.hupu.topic.TopicActivity',
'com.hupu.android.bbs.page.rating.ratingDetail.RatingDetailActivity',
'com.hupu.android.bbs.detail.PostDetailActivity',
'com.google.android.material.bottomsheet.BottomSheetDialog',
],
rules: [
{
key: 1,
name: '【广告】',
anyMatches: [
'@[id="com.hupu.games:id/shield_view"] >2 [id="com.hupu.games:id/tv_tag"][text="广告"]',
'@[id="com.hupu.games:id/shield_view"] - FrameLayout > ViewGroup > [id="com.hupu.games:id/tvSign"][text="广告"]',
],
snapshotUrls: [
'https://i.gkd.li/import/12511005',
'https://i.gkd.li/import/13258026',
'https://i.gkd.li/import/13259692',
'https://i.gkd.li/i/13259692',
'https://i.gkd.li/i/22327976',
],
},
{
preKeys: 1,
key: 2,
name: '【屏蔽该广告/不感兴趣】',
matches: '@TextView[text="屏蔽该广告"||text="不感兴趣"]',
snapshotUrls: [
'https://i.gkd.li/import/12511010',
'https://i.gkd.li/import/12534848',
'https://i.gkd.li/import/13259699',
'https://i.gkd.li/i/12534848',
'https://i.gkd.li/i/18123775',
],
},
],
},
],
});
