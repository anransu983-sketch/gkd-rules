import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.zhihu.android',
name: '知乎',
groups: [
{
key: 0,
name: '开屏广告',
enable: true,
fastQuery: true,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
rules: 'TextView[id="com.zhihu.android:id/btn_skip"]',
snapshotUrls: [
'https://i.gkd.li/import/12707641',
'https://i.gkd.li/import/12899263',
'https://i.gkd.li/import/13070251',
'https://i.gkd.li/import/12841423',
'https://i.gkd.li/import/12883329',
'https://i.gkd.li/import/12981146',
],
order: -10,
},
{
key: 1,
name: '全屏广告-关闭广告弹窗',
desc: '点击 关闭广告按钮 之后出现的广告弹窗',
enable: true,
activityIds: [
'com.zhihu.android.ContentActivity',
'com.zhihu.android.app.ui.activity.MainActivity',
],
rules:
'@FrameLayout ImageView + TextView[text*=`虚假广告`][id=`com.zhihu.android:id/tv_content`]',
},
{
key: 2,
name: '全屏广告-关闭广告原因',
desc: '点击 关闭广告按钮 之后出现的选择原因',
enable: true,
activityIds: 'com.zhihu.android.ContentActivity',
rules: [
'[id=`com.zhihu.android:id/confirm_uninterest`]',
'[id=`com.zhihu.android:id/revert_uninterest`] <n * + [id=`com.zhihu.android:id/reason_container`] > [id=`com.zhihu.android:id/uninterest_reason`]',
],
},
{
key: 3,
name: '全屏广告-关闭推荐',
desc: '关闭回答底部其他回答',
enable: true,
activityIds: 'com.zhihu.android.mix.activity.ContentMixProfileActivity',
rules: [
'TextView + View + TextView + TextView[text$=`评论`][text*=`赞同`] + View',
],
},
{
key: 4,
name: '分段广告-推荐页广告卡片',
desc: '赚稿费广告卡片,盐选推荐广告,知乎学课堂,汽车广告',
enable: true,
rules: [
{
key: 0,
activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
matches:
'[id="com.zhihu.android:id/content"] >2 TextView[text="不感兴趣"][id="com.zhihu.android:id/title"]',
},
{
key: 1,
activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
matches:
'TextView[text=`内容质量差`][id=`com.zhihu.android:id/tv_content`]',
},
{
key: 2,
activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
matches:
'@ImageView[id=`com.zhihu.android:id/menu`] < FrameLayout - * > TextView[text^=`广告`]',
},
{
key: 3,
activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
matches:
'@ImageView[id=null][clickable=true] -n TextView[text*=`广告`][index=0]',
},
],
},
{
key: 5,
name: '分段广告-问题-回答列表-卡片广告',
enable: true,
rules: [
{
key: 0,
activityIds: 'com.zhihu.android.ContentActivity',
fastQuery: true,
matches: '@ImageView[clickable=true] -n [text="广告"]',
snapshotUrls: 'https://i.gkd.li/import/13849671',
},
{
key: 1,
activityIds: 'com.zhihu.android.ContentActivity',
matches:
'ImageView[id=null] + TextView[text!=null][id=null] + ViewGroup > ImageView[clickable=true]',
},
{
key: 2,
activityIds: 'com.zhihu.android.ContentActivity',
fastQuery: true,
matches: '@ImageView[clickable=true] -3 * > [text="广告"]',
snapshotUrls: 'https://i.gkd.li/import/13849442',
},
{
key: 90,
preKeys: [0],
activityIds: 'com.zhihu.android.ContentActivity',
fastQuery: true,
matches: '@[clickable=true] >3 [text="内容不感兴趣"]',
snapshotUrls: 'https://i.gkd.li/import/13849689',
},
],
},
{
key: 6,
name: '局部广告-回答底部评论顶部的任意广告推荐',
enable: true,
activityIds: [
'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
'com.zhihu.android.app.ui.activity.HostActivity',
],
rules: [
{
key: 0,
matches: '@Image + TextView[text$=`的广告`]',
},
{
key: 1,
matches:
'TextView[text$=`的广告`] +n TextView[text=`×`][visibleToUser=true]',
snapshotUrls: 'https://i.gkd.li/import/12864109',
},
{
key: 2,
activityIds: [
'com.zhihu.android.mix.activity.ContentMixProfileActivity',
],
matches: 'TextView[text="查看详情"] + TextView[text="×"]',
snapshotUrls: [
'https://i.gkd.li/import/12647617',
'https://i.gkd.li/import/12647659',
],
},
{
key: 3,
matches: 'TextView[text*=`赞同`][text*=`评论`] + TextView[text=`×`]',
},
{
key: 4,
matches: 'TextView[text*=`回答`][text*=`关注`] + TextView[text=`×`]',
},
{
key: 6,
matches: 'TextView[text$=`的广告`] - Image[id=null]',
},
{
key: 8,
matches: 'TextView[text*=`点赞`][text*=`的回答`] +2 Image[id=null]',
},
{
key: 9,
matches:
'TextView[text=""] + Image[text=""] + TextView[text="​"] + Image[id=null][clickable=true]',
},
{
key: 10,
matches:
'@ImageView[id=null][clickable=true] -(2) ViewGroup > [text$="广告"]',
snapshotUrls: ['https://i.gkd.li/import/12647525'],
},
{
preKeys: [10],
key: 100,
name: '反馈弹窗-点击“不感兴趣”',
matches:
'[id="com.zhihu.android:id/recycler_view"] > FrameLayout >(3) [text$="不感兴趣"]',
snapshotUrls: ['https://i.gkd.li/import/12647541'],
},
],
},
{
key: 7,
name: '全屏广告-关闭首页广告',
enable: true,
activityIds: 'com.zhihu.android.app.ui.activity.AdAlphaVideoActivity',
rules: '[id=`com.zhihu.android:id/tv_ad_close`]',
},
{
key: 8,
name: '局部广告-推荐页-顶部广告',
enable: true,
activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
rules: [
'[id="com.zhihu.android:id/tv_ad_tag"] + [id="com.zhihu.android:id/img_close_focus"]',
],
},
{
key: 9,
name: '全屏广告-推送通知弹窗',
desc: '推送通知弹窗-点击x按钮',
enable: false,
activityIds: 'com.zhihu.android.app.ui.dialog.d',
rules: [
'TextView[id="com.zhihu.android:id/guide_title"] - ImageView[id="com.zhihu.android:id/guide_image_exit"][clickable=true]',
],
snapshotUrls: ['https://i.gkd.li/import/12647583'],
},
{
key: 10,
name: '全屏广告-会员页面-月卡红包',
enable: true,
activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
rules: [
'ImageView[id="com.zhihu.android:id/floating_img"] + ImageView[id="com.zhihu.android:id/floating_close_btn"][clickable=true]',
],
snapshotUrls: ['https://i.gkd.li/import/12647421'],
},
{
key: 11,
name: '全屏广告-会员页面-广告弹窗',
enable: true,
activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
rules: [
'[id="com.zhihu.android:id/image"] < RelativeLayout + [id="com.zhihu.android:id/dismiss"]',
],
snapshotUrls: ['https://i.gkd.li/import/12707676'],
},
{
key: 12,
name: '功能类-问题回答-自动展开',
enable: false,
activityIds:
'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
rules: [
'ImageView[id="com.zhihu.android:id/iv_expand"] - TextView[id="com.zhihu.android:id/tv_expand"][text="展开"][visibleToUser=true]',
],
snapshotUrls: [
'https://i.gkd.li/import/12647688',
'https://i.gkd.li/import/12707687',
],
},
{
key: 13,
name: '分段广告-信息流广告',
desc: '关闭信息流中的广告',
enable: true,
fastQuery: true,
rules: [
{
key: 0,
activityIds: [
'.feature.short_container_feature.ui.',
'.ContentActivity',
],
matches:
'@[clickable=true][visibleToUser=true] -(1,2) TextView[childCount=0][id=null][text=null][desc=null] <n ViewGroup >n [text*="广告"][childCount=0][id=null][desc=null]',
snapshotUrls: [
'https://i.gkd.li/i/13849671',
'https://i.gkd.li/i/14645530',
'https://i.gkd.li/i/14178516',
'https://i.gkd.li/i/13849442',
'https://i.gkd.li/i/14178979',
'https://i.gkd.li/i/14178980',
'https://i.gkd.li/i/14206949',
'https://i.gkd.li/i/14206988',
'https://i.gkd.li/i/18008867',
'https://i.gkd.li/i/25572259',
],
excludeSnapshotUrls: [
'https://i.gkd.li/i/17002118',
'https://i.gkd.li/i/17002119',
'https://i.gkd.li/i/17002120',
],
},
{
key: 2,
activityIds: '.app.ui.activity.MainActivity',
matches:
'@ImageView[clickable=true][childCount=0] < FrameLayout[childCount=1] - * > [text*="广告" || text$="商品介绍"]',
snapshotUrls: [
'https://i.gkd.li/i/14296163',
'https://i.gkd.li/i/14321041',
'https://i.gkd.li/i/14468152',
'https://i.gkd.li/i/17237944',
],
},
{
key: 3,
activityIds: [
'.app.ui.activity.MainActivity',
'.ContentActivity',
'.feature.short_container_feature.ui.ShortContainerHostActivity',
],
matches:
'@ViewGroup[clickable=true][childCount=1] <(2,3,4) ViewGroup -(2,3) ViewGroup[childCount>1] >(1,2) [text*="广告"]',
snapshotUrls: [
'https://i.gkd.li/i/14192451',
'https://i.gkd.li/i/18217217',
'https://i.gkd.li/i/19591989',
'https://i.gkd.li/i/21813914',
'https://i.gkd.li/i/24214771',
],
},
{
key: 4,
activityIds: '.app.ui.activity.MainActivity',
matches:
'@ViewGroup[clickable=true][childCount=1] <3 ViewGroup < ViewGroup -(2,3) ViewGroup >2 [text*="广告"]',
snapshotUrls: [
'https://i.gkd.li/i/14332161',
'https://i.gkd.li/i/14730741',
],
},
{
key: 5,
activityIds:
'.feature.short_container_feature.ui.ShortContainerHostActivity',
matches: '@[vid="remove"] - [vid="subtitle"][text*="广告"]',
snapshotUrls: [
'https://i.gkd.li/i/17268845',
'https://i.gkd.li/i/17268869',
],
},
{
preKeys: [0, 2, 3, 4, 5],
key: 90,
activityIds: [
'.feature.short_container_feature.ui.ShortContainerHostActivity',
'.ContentActivity',
'.app.ui.activity.MainActivity',
],
matches:
'@[clickable=true] >(1,3) [text$="不感兴趣" || text^="屏蔽作者"||text$="内容重复"||text="不喜欢该内容"]',
snapshotUrls: [
'https://i.gkd.li/i/13849689',
'https://i.gkd.li/i/17237940',
'https://i.gkd.li/i/17268849',
'https://i.gkd.li/i/18807610',
'https://i.gkd.li/i/23431871',
],
},
],
},
{
key: 14,
name: '全屏广告-广告弹窗',
desc: '关闭会员页、首页等位置的各类广告弹窗',
enable: true,
fastQuery: true,
activityIds: [
'com.zhihu.android.app.ui.activity.MainActivity',
'com.zhihu.android.app.ui.activity.AdAlphaVideoActivity',
],
rules: [
{
key: 0,
name: '会员页广告弹窗',
matches: '[id="com.zhihu.android:id/dismiss"]',
snapshotUrls: 'https://i.gkd.li/i/12707676',
},
{
key: 1,
name: '首页广告弹窗',
matches: '[vid="tv_ad_close"]',
snapshotUrls: 'https://i.gkd.li/i/14648128',
},
{
key: 2,
name: '会员页红包弹窗',
matches: '[id="com.zhihu.android:id/floating_close_btn"]',
snapshotUrls: 'https://i.gkd.li/i/12647421',
},
],
},
{
key: 15,
name: '局部广告-回答底部广告',
desc: '关闭回答底部的推广内容和热度提示',
enable: true,
activityIds: [
'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
'com.zhihu.android.app.ui.activity.MainActivity',
],
rules: [
{
key: 0,
anyMatches: [
'@[clickable=true][visibleToUser=true] -(1,2) TextView[childCount=0][id=null][text=null][desc=null] <n ViewGroup >n [text*="广告"][childCount=0][id=null][desc=null]',
'ImageView < @[index=parent.childCount.minus(1)][clickable=true][width<150] <n ViewGroup + [childCount=2] >3 [text="广告"]',
],
snapshotUrls: [
'https://i.gkd.li/import/14178980',
'https://i.gkd.li/import/14206949',
'https://i.gkd.li/import/14232195',
'https://i.gkd.li/import/14235024',
'https://i.gkd.li/i/14944631',
'https://i.gkd.li/i/14391614',
'https://i.gkd.li/i/14548763',
'https://i.gkd.li/i/14220104',
'https://i.gkd.li/i/14421277',
'https://i.gkd.li/i/15024185',
'https://i.gkd.li/i/15024288',
'https://i.gkd.li/i/15282584',
'https://i.gkd.li/i/15285359',
'https://i.gkd.li/i/20648888',
'https://i.gkd.li/i/28590141',
'https://i.gkd.li/i/28661886',
'https://i.gkd.li/i/14232195',
],
excludeSnapshotUrls: ['https://i.gkd.li/i/17088832'],
},
],
},
{
key: 16,
name: '局部广告-悬浮广告',
desc: '关闭首页、发现页等位置的悬浮广告和关注提示',
enable: true,
rules: [
{
key: 0,
name: '发现页面-右侧年卡折扣悬浮窗',
fastQuery: true,
activityIds: ['com.zhihu.android.app.ui.activity.MainActivity'],
matches: ['[vid="activity_img"]', '[vid="activity_close"]'],
snapshotUrls: 'https://i.gkd.li/import/14296251',
},
{
key: 1,
name: '首页-右侧悬浮窗广告',
activityIds: ['com.zhihu.android.app.ui.activity.MainActivity'],
fastQuery: true,
matches:
'@ImageView[clickable=true][visibleToUser=true] + * >2 [text="广告"]',
snapshotUrls: 'https://i.gkd.li/i/14635636',
},
{
key: 2,
name: '回答页-底部关注悬浮窗',
activityIds: [
'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
],
fastQuery: true,
matches: '[vid="close_img"]',
snapshotUrls: 'https://i.gkd.li/i/14970008',
},
{
key: 3,
name: '回答页-底部关注悬浮窗-2',
activityIds:
'com.zhihu.android.mix.activity.ContentMixProfileActivity',
fastQuery: true,
matches:
'View[childCount=3] > @View[clickable=true][childCount=1][text=""] > Image[text=""][childCount=0] <<n [vid="view_content"]',
snapshotUrls: 'https://i.gkd.li/i/16422471',
},
{
key: 4,
name: '搜索栏上方广告',
activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
fastQuery: true,
matches: ['[vid="ad_container"]', '[vid="img_close_focus"]'],
snapshotUrls: 'https://i.gkd.li/i/14156887',
},
],
},
{
key: 17,
name: '功能类-自动授权',
desc: '自动确认知乎扫码登录的授权请求',
enable: false,
activityIds: 'com.zhihu.android.app.ui.activity.HostActivity',
rules: [
{
matches: '[text="取消"] <n * > [text="确认登录"]',
snapshotUrls: 'https://i.gkd.li/import/14341536',
},
],
},
{
key: 18,
name: '功能类-自动展开回答',
desc: '自动点击展开被折叠的回答全文',
enable: false,
fastQuery: true,
rules: [
{
activityIds:
'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
matches:
'ImageView[id="com.zhihu.android:id/iv_expand"] - TextView[text="展开"][visibleToUser=true]',
snapshotUrls: [
'https://i.gkd.li/import/12647688',
'https://i.gkd.li/import/12707687',
],
},
],
},
{
key: 19,
name: '局部广告-评论区卡片广告',
desc: '点击关闭',
enable: true,
actionMaximum: 1,
rules: [
{
key: 0,
name: '氛围评价卡片',
fastQuery: true,
activityIds: '.comment.ui.activity.CommentListActivity',
matches:
'@ViewGroup[clickable=true] - [text^="你对该内容下的评论氛围是否满意"][visibleToUser=true]',
snapshotUrls: 'https://i.gkd.li/i/20473238',
},
{
key: 1,
name: '评论区广告',
fastQuery: true,
activityIds: '.comment.ui.activity.CommentListActivity',
matches:
'@ViewGroup[childCount=1][clickable=true][visibleToUser=true][getChild(0).name$="SvgView"] - [text="广告"]',
snapshotUrls: 'https://i.gkd.li/i/20711018',
},
{
key: 2,
name: '优质答主推荐',
fastQuery: true,
activityIds:
'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
matches: '@[vid="ic_close"][clickable=true] -n [text="更多优质答主"]',
snapshotUrls: 'https://i.gkd.li/i/24335648',
},
],
},
],
});
