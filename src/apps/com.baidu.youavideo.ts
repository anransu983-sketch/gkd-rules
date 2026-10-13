import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.baidu.youavideo',
name: '一刻相册',
groups: [
{
key: 0,
name: '更新提示',
enable: false,
activityIds: ['com.baidu.youavideo.home.view.HomeActivity'],
fastQuery: true,
rules: [
{
matches:
'[id="com.baidu.youavideo:id/tv_upgrade"] < LinearLayout +2 [id="com.baidu.youavideo:id/img_close"]',
snapshotUrls: ['https://i.gkd.li/import/12597916'],
},
],
},
{
key: 1,
name: '局部广告-悬浮窗',
desc: '关闭广告悬浮窗',
enable: true,
activityIds: ['com.baidu.youavideo.home.view.HomeActivity'],
fastQuery: true,
rules: [
{
matches: '[id="com.baidu.youavideo:id/img_operation_close"]',
snapshotUrls: ['https://i.gkd.li/import/12970088'],
},
],
},
{
key: 2,
name: '全屏广告-评价',
desc: '点击下次再说',
enable: false,
activityIds: ['com.baidu.youavideo.home.view.HomeActivity'],
fastQuery: true,
rules: [
{
matches: '[id="com.baidu.youavideo:id/tv_next_time"]',
snapshotUrls: ['https://i.gkd.li/import/12970094'],
},
],
},
{
key: 3,
name: '全屏广告-会员充值提示',
desc: '点击x关闭充值提示',
enable: true,
activityIds: ['com.baidu.youavideo.home.view.HomeActivity'],
fastQuery: true,
rules: [
{
matches:
'[id="com.baidu.youavideo:id/tv_confirm_pay"] -5 [id="com.baidu.youavideo:id/img_close_dialog"]',
snapshotUrls: ['https://i.gkd.li/import/12970094'],
},
],
},
{
key: 4,
name: '全屏广告-弹窗广告',
desc: '点击x关闭广告提示',
enable: true,
activityIds: ['com.baidu.youavideo.home.view.HomeActivity'],
fastQuery: true,
rules: [
{
matches:
'[id="com.baidu.youavideo:id/dialog_home_pop_close_button"] ',
snapshotUrls: ['https://i.gkd.li/import/13048700'],
},
],
},
{
key: 5,
name: '权限提示-请求开启通知权限弹窗',
enable: false,
activityIds: 'com.baidu.youavideo.app.ui.HomeActivity',
fastQuery: true,
rules:
'[id="com.baidu.youavideo:id/dialog_open_guide_notification_root"] > [id="com.baidu.youavideo:id/img_close"]',
snapshotUrls: 'https://i.gkd.li/import/13413819',
},
{
key: 6,
name: '局部广告-照片-底部浮窗广告',
enable: true,
activityIds: 'com.baidu.youavideo.home.view.HomeActivity',
fastQuery: true,
rules:
'[id="com.baidu.youavideo:id/cl_root"] + [id="com.baidu.youavideo:id/img_close"]',
snapshotUrls: 'https://i.gkd.li/import/13711475',
},
{
key: 7,
name: '局部广告-广告卡片',
enable: true,
fastQuery: true,
rules: '[vid="iv_close"][visibleToUser=true]',
snapshotUrls: 'https://i.gkd.li/import/13874124',
},
],
});
