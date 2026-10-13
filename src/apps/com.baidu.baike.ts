import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.baidu.baike',
name: '百度百科',
groups: [
{
key: 0,
name: '权限提示-请求通知权限弹窗',
desc: '自动点击【不允许】',
enable: false,
activityIds: '.component.push.NotificationEnableDialog',
fastQuery: true,
resetMatch: 'app',
rules: '@TextView[text="不允许"] -n TextView[text*="发送通知"]',
snapshotUrls: 'https://i.gkd.li/import/12755717',
},
],
});
