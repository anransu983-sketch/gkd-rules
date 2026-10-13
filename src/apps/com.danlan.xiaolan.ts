import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.danlan.xiaolan',
name: 'Blued极速版',
groups: [
{
key: 0,
name: '局部广告-附近的人-广告卡片',
enable: true,
fastQuery: true,
activityIds: 'com.soft.blued.ui.home.HomeActivity',
rules: [
{
key: 0,
matches:
'[id="com.danlan.xiaolan:id/ad_container"] >n [id="com.danlan.xiaolan:id/img_close"][clickable=true]',
snapshotUrls: 'https://i.gkd.li/import/13421613',
},
{
preKeys: [0],
key: 1,
matches: '@LinearLayout > [text="不感兴趣"]',
snapshotUrls: 'https://i.gkd.li/import/13421622',
},
],
},
{
key: 1,
name: '局部广告-来访-广告卡片',
enable: true,
fastQuery: true,
activityIds: 'com.blued.android.core.ui.TerminalActivity',
rules: [
{
key: 0,
matches: '[id="com.danlan.xiaolan:id/img_close"][clickable=true]',
snapshotUrls: 'https://i.gkd.li/import/13421923',
},
{
preKeys: [0],
key: 1,
matches: '@LinearLayout > [text="不感兴趣"]',
snapshotUrls: 'https://i.gkd.li/import/13422170',
},
],
},
],
});
