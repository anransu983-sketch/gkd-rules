import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.qcymall.earphonesetup',
name: 'QCY',
groups: [
{
key: 0,
name: '局部广告-我的-广告卡片',
enable: true,
fastQuery: true,
matchTime: 10000,
resetMatch: 'activity',
activityIds: 'com.qcymall.earphonesetup.v2ui.activity.V2MainActivity',
actionMaximum: 1,
rules: '[vid="close_img_banner"]',
snapshotUrls: 'https://i.gkd.li/import/13874219',
},
],
});
