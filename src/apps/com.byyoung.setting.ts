import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.byyoung.setting',
name: '爱玩机工具箱',
groups: [
{
key: 0,
name: '权限提示-忽略授权提示',
enable: false,
activityIds: 'com.byyoung.setting.Welcome.PermissionActivity',
rules: [
{
matches: '[id="com.byyoung.setting:id/tv_name"][text*="忽略授权"]',
snapshotUrls: 'https://i.gkd.li/import/12829909',
},
],
},
],
});
