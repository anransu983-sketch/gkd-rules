import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'xxx.pornhub.fuck',
name: 'JavDB',
groups: [
{
key: 0,
name: '局部广告-公告弹窗',
enable: true,
activityIds: 'app.lawnchair.LawnchairLauncher',
rules: '[desc="公告"] + * + [desc="知道了"]',
snapshotUrls: 'https://i.gkd.li/import/13334608',
},
],
});
