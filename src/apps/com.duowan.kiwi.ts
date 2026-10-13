import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.duowan.kiwi',
name: '虎牙直播',
groups: [
{
key: 0,
name: '青少年模式',
enable: false,
activityIds: [
'com.duowan.kiwi.homepage.Homepage',
'com.duowan.kiwi.immersepage.impl.ImmersePageActivity',
],
fastQuery: true,
rules:
'[id="com.duowan.kiwi:id/hyui_dialog_button_positive"][text="我知道了"]',
snapshotUrls: 'https://i.gkd.li/import/12908790',
},
{
key: 1,
name: '局部广告-直播间悬浮广告',
enable: true,
activityIds: 'com.duowan.kiwi.liveroom.ChannelPage',
rules: [
{
key: 0,
fastQuery: true,
matches: '[id="com.duowan.kiwi:id/ad_close"]',
snapshotUrls: [
'https://i.gkd.li/import/12901045',
'https://i.gkd.li/import/12901044',
],
},
{
key: 1,
fastQuery: true,
matches: '[id="com.duowan.kiwi:id/game_header_close"]',
snapshotUrls: [
'https://i.gkd.li/import/13395604',
'https://i.gkd.li/import/13395606',
],
},
{
key: 2,
matches:
'[id="com.duowan.kiwi:id/popup_banner"] >2 [id="com.duowan.kiwi:id/ui_count_down"]',
snapshotUrls: ['https://i.gkd.li/import/13417245'],
},
{
key: 3,
matches:
'[id="com.duowan.kiwi:id/miniapp_content_container"] FrameLayout > ViewGroup[childCount=2] > @ViewGroup[clickable=true] > ImageView',
snapshotUrls: 'https://i.gkd.li/import/13401266',
},
],
},
{
key: 2,
name: '更新提示',
enable: false,
activityIds: 'com.duowan.kiwi.homepage.Homepage',
fastQuery: true,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
rules: [
{
matches: '@ImageView[id="com.duowan.kiwi:id/upgrade_cancel"]',
snapshotUrls: 'https://i.gkd.li/import/13440833',
},
],
},
{
key: 3,
name: '全屏广告-弹窗广告',
enable: true,
rules: [
{
key: 0,
activityIds: 'com.duowan.kiwi.homepage.Homepage',
matches:
'[id="com.duowan.kiwi:id/animation_view"] + [id="com.duowan.kiwi:id/v_close"]',
snapshotUrls: 'https://i.gkd.li/import/13625453',
},
],
},
{
key: 4,
name: '全屏广告-root提示',
desc: '您的设备已经被ROOT',
enable: true,
fastQuery: true,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
rules: '[text^="您的设备已经被ROOT"] + LinearLayout [text="确认"]',
snapshotUrls: 'https://i.gkd.li/import/13536744',
},
{
key: 5,
name: '通知提示-root提示',
desc: '点击确认',
enable: false,
ignoreGlobalGroupMatch: true,
fastQuery: true,
matchTime: 10000,
actionMaximum: 1,
resetMatch: 'app',
rules: [
{
activityIds: '.homepage.Homepage',
matches: '[text^="您的设备已经被ROOT"] + LinearLayout [text="确认"]',
snapshotUrls: 'https://i.gkd.li/i/13536744',
},
],
},
],
});
