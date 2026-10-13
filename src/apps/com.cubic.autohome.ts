import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.cubic.autohome',
name: '汽车之家',
groups: [
{
key: 0,
name: '全屏广告-弹窗广告',
enable: true,
activityIds: 'com.cubic.autohome.MainActivity',
rules: '[id="com.cubic.autohome:id/operate_show_exit_layout"]',
snapshotUrls: 'https://i.gkd.li/import/12836324',
},
{
key: 1,
name: '局部广告-右下角领福利悬浮窗',
desc: '点击X',
enable: true,
fastQuery: true,
rules: [
{
activityIds: 'com.cubic.autohome.MainActivity',
matches:
'@ImageView[visibleToUser=true] < * <2 * - [id="android:id/tabhost"]',
snapshotUrls: 'https://i.gkd.li/import/13885414',
},
],
},
],
});
