import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.huodao.hdphone',
name: '找靓机',
groups: [
{
key: 0,
name: '全屏广告-超级补贴日弹窗',
desc: '点击X',
enable: true,
fastQuery: true,
rules: [
{
matches:
'[id="android:id/content"] >2 [id="com.huodao.hdphone:id/dialog_close"]',
snapshotUrls: 'https://i.gkd.li/import/13927567',
},
],
},
],
});
