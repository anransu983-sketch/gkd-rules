import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'ctrip.android.view',
name: '携程旅行',
groups: [
{
key: 0,
name: '更新提示',
enable: false,
activityIds: 'ctrip.android.publicproduct.home.view.CtripHomeActivity',
rules: '[text*="用户已升级"] < * + [desc="关闭"]',
snapshotUrls: 'https://i.gkd.li/import/13218347',
},
],
});
