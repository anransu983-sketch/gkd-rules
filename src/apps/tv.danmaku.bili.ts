import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'tv.danmaku.bili',
name: '哔哩哔哩',
groups: [
{
key: 0,
name: '开屏广告',
desc: '开屏广告,任意界面切回APP开屏广告',
enable: true,
fastQuery: true,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
rules: [
{
anyMatches: [
'TextView[id="tv.danmaku.bili:id/count_down"][text^="跳过"]',
'TextView[id="tv.danmaku.bili:id/skip"][text^="跳过"]',
],
snapshotUrls: [
'https://i.gkd.li/import/12705270',
'https://i.gkd.li/i/19142386',
],
},
],
order: -10,
},
{
key: 1,
name: '局部广告-评论区顶部公告横幅',
enable: true,
fastQuery: true,
excludeActivityIds: [
'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
'tv.danmaku.bili.MainActivityV2',
],
rules:
'LinearLayout[id=`tv.danmaku.bili:id/ad_tint_frame`] > ImageView[id="tv.danmaku.bili:id/close"][desc=`关闭`]',
snapshotUrls: [
'https://i.gkd.li/import/12785461',
'https://i.gkd.li/import/12775156',
],
},
{
key: 2,
name: '局部广告-动态推荐广告卡片',
desc: '点击卡片右上角[广告]按钮-点击不感兴趣',
enable: true,
fastQuery: true,
matchDelay: 5000,
activityIds: 'tv.danmaku.bili.MainActivityV2',
rules: [
{
key: 1,
matches: '[id=`tv.danmaku.bili:id/ad_goods_mark_big`]',
snapshotUrls: 'https://i.gkd.li/import/12700222',
},
{
preKeys: 1,
matches: '[text="不感兴趣"][id^="tv.danmaku.bili:id/reason"]',
snapshotUrls: 'https://i.gkd.li/import/12700243',
},
],
},
{
key: 3,
name: '局部广告-视频底部与评论区中间卡片式广告',
desc: '需点击二次弹窗 屏蔽原因',
enable: true,
fastQuery: true,
activityIds: [
'com.bilibili.video.videodetail.VideoDetailsActivity',
'com.bilibili.ship.theseus.all.UnitedBizDetailsActivity',
'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
],
rules: [
{
key: 0,
name: '点击广告卡片右侧菜单图标',
anyMatches: [
'@ImageView < FrameLayout[id="tv.danmaku.bili:id/more" || id="tv.danmaku.bili:id/more_layout"] <n * < FrameLayout[id="tv.danmaku.bili:id/ad_tint_frame"]',
'@ImageView < FrameLayout[id="tv.danmaku.bili:id/more"] <n RelativeLayout < FrameLayout < FrameLayout[id="tv.danmaku.bili:id/ad_tint_frame"]',
],
snapshotUrls: [
'https://i.gkd.li/import/12642260',
'https://i.gkd.li/import/12705266',
'https://i.gkd.li/import/12776568',
],
excludeSnapshotUrls: ['https://i.gkd.li/import/12707070'],
},
{
preKeys: 0,
key: 1,
name: '点击屏蔽广告',
matches: 'TextView[text="不感兴趣"||text="与视频内容不相关"]',
snapshotUrls: [
'https://i.gkd.li/import/12642261',
'https://i.gkd.li/import/13495649',
],
},
],
},
{
key: 4,
name: '其他-悬浮窗功能',
desc: '暂不开启',
enable: false,
fastQuery: true,
resetMatch: 'app',
actionMaximum: 1,
activityIds: [
'com.bilibili.video.story.StoryVideoActivity',
'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
],
rules: [
{
matches: [
'TextView[id="tv.danmaku.bili:id/common_dialog_title"][text^="开启悬浮窗功能"]',
'TextView[id="tv.danmaku.bili:id/common_dialog_nagetive_btn"][text="暂不开启"]',
],
snapshotUrls: [
'https://i.gkd.li/i/19260138',
'https://i.gkd.li/i/19402551',
],
},
],
},
{
key: 5,
name: '更新提示',
enable: false,
fastQuery: true,
actionMaximum: 1,
matchDelay: 5000,
activityIds: [
'com.bilibili.app.preferences.BiliPreferencesActivity',
'tv.danmaku.bili.ui.splash.ad.page.HotSplashActivity',
'tv.danmaku.bili.MainActivityV2',
],
rules: [
{
key: 1,
matches: '[id="tv.danmaku.bili:id/update_btn_cancel"]',
snapshotUrls: [
'https://i.gkd.li/import/12649689',
'https://i.gkd.li/import/13212209',
'https://i.gkd.li/import/13228977',
'https://i.gkd.li/import/13334963',
],
},
],
},
{
key: 6,
name: '局部广告-视频悬浮广告',
desc: '领取大会员月卡,B站免流星卡',
enable: true,
fastQuery: true,
matchTime: 10000,
actionMaximum: 1,
activityIds: [
'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
'com.bilibili.video.videodetail.VideoDetailsActivity',
],
rules: ['[id="tv.danmaku.bili:id/toast_x"]'],
snapshotUrls: [
'https://i.gkd.li/import/12892611',
'https://i.gkd.li/import/13308344',
'https://i.gkd.li/import/13538048',
],
exampleUrls: [
'https://github.com/gkd-kit/inspect/assets/38517192/110db806-3f8b-4cd2-a445-06c5f5eb21eb',
],
},
{
key: 7,
name: '局部广告-直播间卡片广告',
desc: '直播间底部售卖卡片-点击右上角x',
enable: true,
fastQuery: true,
matchTime: 10000,
actionMaximum: 1,
activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
rules: '[id="tv.danmaku.bili:id/shopping_close"]',
snapshotUrls: 'https://i.gkd.li/import/13200549',
},
{
key: 8,
name: '权限提示-请求通知权限弹窗',
enable: false,
fastQuery: true,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
activityIds: [
'tv.danmaku.bili.MainActivityV2',
'com.bilibili.video.story.StoryTransparentActivity',
],
rules: '[text$="通知"] +2 * > [id="tv.danmaku.bili:id/close"]',
snapshotUrls: [
'https://i.gkd.li/import/13229159',
'https://i.gkd.li/import/13614090',
],
},
{
key: 9,
name: '局部广告-首页-推荐视频卡片广告',
enable: true,
fastQuery: true,
activityIds: 'tv.danmaku.bili.MainActivityV2',
rules: [
{
key: 0,
name: '点击广告卡片右下角菜单按钮',
matches:
'[id="tv.danmaku.bili:id/ad_tint_frame"] [id="tv.danmaku.bili:id/more"]',
snapshotUrls: 'https://i.gkd.li/import/13256570',
},
{
preKeys: 0,
key: 1,
name: '点击[不感兴趣]',
matches: '@RelativeLayout > [text$="不感兴趣"]',
snapshotUrls: [
'https://i.gkd.li/import/13256605',
'https://i.gkd.li/import/13625309',
'https://i.gkd.li/import/13742257',
],
},
],
},
{
key: 10,
name: '局部广告-个性化内容推荐弹窗',
enable: true,
fastQuery: true,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
activityIds: 'tv.danmaku.bili.MainActivityV2',
rules:
'[text="开启个性化内容推荐"] +3 [id="tv.danmaku.bili:id/close_button"]',
snapshotUrls: 'https://i.gkd.li/import/13448905',
},
{
key: 11,
name: '通知提示-订阅感兴趣的通知',
enable: false,
fastQuery: true,
actionMaximum: 1,
resetMatch: 'app',
rules: [
{
activityIds: 'kntr.common.compose.launcher.ComposeContainerActivity',
matches: [
'TextView[id="tv.danmaku.bili:id/title"][text="订阅感兴趣的通知"]',
'TextView[id="tv.danmaku.bili:id/close"][text="暂不开启"]',
],
snapshotUrls: 'https://i.gkd.li/i/19402549',
},
],
},
{
key: 12,
name: '分段广告-动态推荐广告卡片',
desc: '关闭动态页面的广告卡片',
enable: true,
fastQuery: true,
matchDelay: 5000,
activityIds: 'tv.danmaku.bili.MainActivityV2',
rules: [
{
key: 1,
matches: '[vid="ad_goods_mark_big"]',
snapshotUrls: 'https://i.gkd.li/import/12700222',
},
{
preKeys: [1],
matches: '[text="不感兴趣"][id^="tv.danmaku.bili:id/reason"]',
snapshotUrls: 'https://i.gkd.li/import/12700243',
},
],
},
{
key: 13,
name: '分段广告-视频及搜索卡片广告',
desc: '关闭视频流和搜索结果中的广告卡片，包括视频底部、评论区中间、详情页下方等位置',
enable: true,
rules: [
{
key: 0,
name: '点击广告卡片右侧菜单图标',
activityIds: [
'tv.danmaku.bili.MainActivityV2',
'com.bilibili.video.videodetail.VideoDetailsActivity',
'com.bilibili.ship.theseus.all.UnitedBizDetailsActivity',
'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
],
anyMatches: [
'[height > prev.bottom.plus(200)] >n [(((desc*="广告"||desc*="来自淘宝")&&desc*="查看")||desc$=",,轻点两下查看详情"||(desc^="【有奖调研】"&&desc.length=22))||(id*="/ad_")][visibleToUser=true] >(2,3,4) @ImageView[visibleToUser=true] < [vid^="more" || id^="tv.danmaku.bili.adbiz:id/more"][visibleToUser=true]',
'[id$="ad_tint_frame" || id$="root_container" || id$="constraintLayout"][visibleToUser=true] >(1,2,3) [vid="more" || id="tv.danmaku.bili.adbiz:id/more"]',
'[text="课堂" || text="纪录片" || text="游戏" || vid="bottom_container" || vid="live_lottie_layout"][index=2] +n [vid="more"][visibleToUser=true]',
],
snapshotUrls: [
'https://i.gkd.li/import/12642260',
'https://i.gkd.li/import/12705266',
'https://i.gkd.li/import/12776568',
'https://i.gkd.li/import/12707070',
'https://i.gkd.li/i/14083540',
'https://i.gkd.li/i/14059876',
'https://i.gkd.li/i/14588315',
'https://i.gkd.li/i/14729855',
'https://i.gkd.li/i/17690786',
'https://i.gkd.li/i/17690800',
'https://i.gkd.li/i/17675629',
'https://i.gkd.li/i/18274379',
'https://i.gkd.li/i/19777632',
'https://i.gkd.li/i/19919163',
'https://i.gkd.li/i/19919168',
'https://i.gkd.li/i/20739380',
'https://i.gkd.li/i/20744764',
'https://i.gkd.li/i/20794380',
'https://i.gkd.li/i/21552836',
'https://i.gkd.li/i/21705345',
'https://i.gkd.li/i/21947622',
'https://i.gkd.li/i/18306851',
'https://i.gkd.li/i/19537979',
'https://i.gkd.li/i/23012670',
'https://i.gkd.li/i/23123800',
'https://i.gkd.li/i/23687196',
'https://i.gkd.li/i/27153803',
'https://i.gkd.li/i/27686976',
'https://i.gkd.li/i/23934632',
'https://i.gkd.li/i/23933866',
'https://i.gkd.li/i/24015674',
'https://i.gkd.li/i/23933925',
'https://i.gkd.li/i/17675894',
'https://i.gkd.li/i/18306858',
'https://i.gkd.li/i/28908101',
],
excludeSnapshotUrls: ['https://i.gkd.li/i/23833031'],
},
{
preKeys: [0],
key: 49,
fastQuery: true,
name: '点击[我不想看]',
activityIds: [
'tv.danmaku.bili.MainActivityV2',
'com.bilibili.video.videodetail.VideoDetailsActivity',
'com.bilibili.ship.theseus.all.UnitedBizDetailsActivity',
'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
],
matches: '[vid="recycler"] >n [text="我不想看"]',
snapshotUrls: ['https://i.gkd.li/i/17786751'],
},
{
preKeys: [0, 49],
key: 50,
fastQuery: true,
name: '点击[不感兴趣]',
activityIds: [
'tv.danmaku.bili.MainActivityV2',
'com.bilibili.video.videodetail.VideoDetailsActivity',
'com.bilibili.ship.theseus.all.UnitedBizDetailsActivity',
'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
],
matches:
'@[clickable=true] > [text="这个内容" || text="不感兴趣" || text="相似内容过多" || text="up主不感兴趣" || text="此类内容过多" || text="对该up的直播不感兴趣"|| text*="不想看" || text$="质量差" || text="减少直播推荐" || text="和当前视频无关"]',
snapshotUrls: [
'https://i.gkd.li/import/13495649',
'https://i.gkd.li/i/13742257',
'https://i.gkd.li/i/13256605',
'https://i.gkd.li/i/14155801',
'https://i.gkd.li/i/13742257',
'https://i.gkd.li/i/13945597',
'https://i.gkd.li/i/14155272',
'https://i.gkd.li/i/14059882',
'https://i.gkd.li/i/13625309',
'https://i.gkd.li/i/12642261',
'https://i.gkd.li/i/17676025',
'https://i.gkd.li/i/17676149',
'https://i.gkd.li/i/17677147',
'https://i.gkd.li/i/17786753',
'https://i.gkd.li/i/18266291',
'https://i.gkd.li/i/18274380',
'https://i.gkd.li/i/18292926',
'https://i.gkd.li/i/18296940',
'https://i.gkd.li/i/18306839',
'https://i.gkd.li/i/19777674',
'https://i.gkd.li/i/19919165',
'https://i.gkd.li/i/19919169',
'https://i.gkd.li/i/20710223',
'https://i.gkd.li/i/20718890',
'https://i.gkd.li/i/20720187',
'https://i.gkd.li/i/20739391',
'https://i.gkd.li/i/23687208',
'https://i.gkd.li/i/24836772',
'https://i.gkd.li/i/24015691',
'https://i.gkd.li/i/28659010',
'https://i.gkd.li/i/30885647',
],
},
{
preKeys: [50],
key: 51,
name: '点击关闭',
fastQuery: true,
activityIds: [
'tv.danmaku.bili.MainActivityV2',
'com.bilibili.video.videodetail.VideoDetailsActivity',
'com.bilibili.ship.theseus.all.UnitedBizDetailsActivity',
'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
],
anyMatches: [
'[vid="close_dislike"][visibleToUser=true]',
'@[text="关闭"][clickable=true] -n * <<(2,4) [name$="ComposeView" || name$="FrameLayout"] <n [vid="recycler"]',
],
snapshotUrls: [
'https://i.gkd.li/i/17675894',
'https://i.gkd.li/i/18587456',
'https://i.gkd.li/i/25739074',
],
},
{
key: 52,
name: '搜索结果-点击右下角[菜单]',
fastQuery: true,
activityIds: 'com.bilibili.search2.main.BiliMainSearchActivity',
matches: '[vid="ad_tint_frame"] > [vid="more"][clickable=true]',
snapshotUrls: [
'https://i.gkd.li/i/17269053',
'https://i.gkd.li/i/17964354',
'https://i.gkd.li/i/28495212',
],
},
{
key: 53,
preKeys: [52],
name: '搜索结果-点击[不感兴趣]',
fastQuery: true,
activityIds: 'com.bilibili.search2.main.BiliMainSearchActivity',
matches:
'@[clickable=true] > [text$="不感兴趣" || text*="不想看" || text$="质量差"]',
snapshotUrls: [
'https://i.gkd.li/i/17269055',
'https://i.gkd.li/i/17964356',
'https://i.gkd.li/i/22657666',
],
},
],
},
{
key: 14,
name: '局部广告-会员购',
desc: '底部横幅Ad',
enable: true,
rules: [
{
fastQuery: true,
activityIds: '.MainActivityV2',
matches: '[vid="mall_home_newuser_coupon_close"][clickable=true]',
snapshotUrls: 'https://i.gkd.li/i/26240948',
},
],
},
{
key: 15,
name: '局部广告-首页浮标广告',
enable: true,
rules: [
{
fastQuery: true,
activityIds: '.MainActivityV2',
matches: '[vid="animation_close"][clickable=true]',
snapshotUrls: 'https://i.gkd.li/i/25357810',
},
],
},
{
key: 16,
name: '局部广告-视频页广告',
desc: '关闭视频页面的会员推广弹窗和免流星卡广告',
enable: true,
fastQuery: true,
rules: [
{
key: 1,
matchTime: 10000,
actionMaximum: 1,
activityIds: [
'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
'com.bilibili.video.videodetail.VideoDetailsActivity',
],
matches: '[vid="toast_x"]',
snapshotUrls: [
'https://i.gkd.li/i/12892611',
'https://i.gkd.li/i/13308344',
'https://i.gkd.li/i/13538048',
],
},
{
key: 2,
activityIds:
'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
matches:
'@[vid="close"][visibleToUser=true] - [text$="免费领B站大会员"]',
snapshotUrls: 'https://i.gkd.li/i/18165189',
},
{
key: 3,
activityIds:
'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
matches:
'[desc="close"] < @[clickable=true] <3 View <2 [childCount=4] < View <2 View < ComposeView < FrameLayout < [vid="fl_tab_pager_container"]',
snapshotUrls: 'https://i.gkd.li/i/31067294',
},
],
},
{
key: 17,
name: '局部广告-直播间悬浮窗广告',
desc: '关闭直播间的悬浮窗广告',
enable: true,
fastQuery: true,
activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
rules: [
{
key: 0,
matches:
'[id="tv.danmaku.bili:id/shopping_close" || vid="live_game_card_close" || vid="match_close" || vid="iv_pop_rank_guide_card_close"][visibleToUser=true]',
snapshotUrls: [
'https://i.gkd.li/i/13200549',
'https://i.gkd.li/i/22990081',
'https://i.gkd.li/i/23098023',
'https://i.gkd.li/i/25238734',
],
},
{
key: 1,
forcedTime: 120000,
matches:
'@[vid="close" || vid="iv_close"] - [vid="up_avatar" || vid="gift_icon" || vid="follow_container"][visibleToUser=true]',
snapshotUrls: [
'https://i.gkd.li/i/14782965',
'https://i.gkd.li/i/32246446',
'https://i.gkd.li/i/18046573',
'https://i.gkd.li/i/22990105',
],
},
{
key: 2,
matchTime: 10000,
actionMaximum: 1,
matches:
'View[visibleToUser=true] <<2 @[clickable=true] < [vid="pager"]',
snapshotUrls: [
'https://i.gkd.li/i/24985920',
'https://i.gkd.li/i/25240029',
],
excludeSnapshotUrls: ['https://i.gkd.li/i/25369451'],
},
],
},
{
key: 18,
name: '功能类-自动关闭故事模式',
desc: '退出视频播放时的竖屏故事模式',
enable: false,
matchTime: 10000,
actionMaximum: 1,
rules: [
{
fastQuery: true,
activityIds: [
'com.bilibili.video.story.StoryVideoActivity',
'com.bilibili.video.story.StoryTransparentActivity',
],
matches: '[vid="story_ctrl_router"][visibleToUser=true]',
snapshotUrls: [
'https://i.gkd.li/i/18164075',
'https://i.gkd.li/i/23325994',
],
},
],
},
{
key: 19,
name: '功能类-自动点击评论区的[展开更多评论]',
desc: '自动点击评论区的[展开更多评论]',
enable: false,
rules: [
{
fastQuery: true,
activityIds: [
'com.bilibili.video.story.StoryVideoActivity',
'com.bilibili.video.story.StoryTransparentActivity',
'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
'com.bilibili.ship.theseus.playlist.UnitedPlaylistActivity',
],
matches: '@LinearLayout[clickable=true] > [text="展开更多评论"]',
snapshotUrls: [
'https://i.gkd.li/i/22572375',
'https://i.gkd.li/i/23325508',
'https://i.gkd.li/i/22573433',
'https://i.gkd.li/i/23786106',
],
},
],
},
{
key: 20,
name: '全屏广告-完善信息弹窗',
desc: '按[返回键]',
enable: true,
rules: [
{
fastQuery: true,
action: 'back',
activityIds: '.MainActivityV2',
matches:
'[vid="design_bottom_sheet"] >2 [vid="title"][text="完善信息，获取精准推荐"]',
snapshotUrls: 'https://i.gkd.li/i/31165755',
},
],
},
{
key: 21,
name: '功能类-自动领取会员经验',
desc: '在会员中心页面自动领取会员经验',
enable: false,
rules: [
{
fastQuery: true,
activityIds: 'com.bilibili.vip.web.VipWebActivity',
matches:
'@TextView[index=parent.childCount.minus(1)][text="领取"] -n [text="领经验"] < View <(2,3) View <3 View < [id="app"][getChild(childCount.minus(1)).text$="隐私政策"] <<(5,6) [vid="webview"]',
snapshotUrls: [
'https://i.gkd.li/i/22886723',
'https://i.gkd.li/i/22886739',
],
excludeSnapshotUrls: 'https://i.gkd.li/i/23385023',
},
],
},
{
key: 22,
name: '功能类-自动点击查看原图',
desc: '浏览图片时自动切换至原图模式',
enable: false,
rules: [
{
fastQuery: true,
activityIds: [
'com.bilibili.video.story.StoryVideoActivity',
'com.bilibili.video.story.StoryTransparentActivity',
'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
'com.bilibili.ship.theseus.playlist.UnitedPlaylistActivity',
'com.bilibili.bplus.followinglist.page.browser.ui.LightBrowserActivityV2',
'com.bilibili.lib.ui.ComposeActivity',
'com.bilibili.column.ui.detail.image.ColumnImageViewerActivity',
],
matches: '[text^="查看原图"][visibleToUser=true]',
snapshotUrls: [
'https://i.gkd.li/i/23325552',
'https://i.gkd.li/i/23304237',
'https://i.gkd.li/i/23304245',
'https://i.gkd.li/i/23786065',
'https://i.gkd.li/i/23305280',
'https://i.gkd.li/i/23305281',
'https://i.gkd.li/i/23305275',
],
},
],
},
{
key: 23,
name: '功能类-登录授权',
desc: '点击确认授权按钮',
enable: false,
rules: [
{
key: 0,
activityIds: '.ui.webview.MWebActivity',
fastQuery: true,
matches: [
'[text="哔哩哔哩扫码登录"]',
'[text="确认"][visibleToUser=true]',
],
snapshotUrls: 'https://i.gkd.li/i/24989484',
},
],
},
{
key: 24,
name: '局部广告-视频页-即将展示Ad',
desc: '视频途中[x秒后展示广告] -> 取消',
enable: true,
rules: [
{
fastQuery: true,
activityIds:
'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
matches:
'@[text="取消"][clickable=true][visibleToUser=true] - [text="后将展示广告"] <2 View[childCount=3] <<2 ComposeView <<3 FrameLayout[childCount=1] <n * < [vid="video_container"]',
snapshotUrls: 'https://i.gkd.li/i/29379312',
},
],
},
],
});
