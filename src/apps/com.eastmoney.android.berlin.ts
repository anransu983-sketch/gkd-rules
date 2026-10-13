import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.eastmoney.android.berlin',
name: '东方财富',
groups: [
{
key: 0,
name: '更新提示',
enable: false,
activityIds: [
'com.eastmoney.android.module.launcher.internal.home.HomeActivity',
'com.bbk.launcher2.Launcher',
],
rules:
'@[id="com.eastmoney.android.berlin:id/tv_update_next_time"] + [id="com.eastmoney.android.berlin:id/tv_update_now"]',
snapshotUrls: [
'https://i.gkd.li/import/12706070',
'https://i.gkd.li/import/13399156',
],
},
{
key: 1,
name: '权限提示-请求通知权限提示信息',
enable: false,
activityIds: [
'com.eastmoney.android.module.launcher.internal.home.HomeActivity',
],
rules:
'[id="com.eastmoney.android.berlin:id/push_on_notify_on"] + [id="com.eastmoney.android.berlin:id/push_on_notify_delete"]',
snapshotUrls: ['https://i.gkd.li/import/12706065'],
},
],
});
