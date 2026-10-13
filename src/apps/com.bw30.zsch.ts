import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.bw30.zsch',
name: '四川航空',
groups: [
{
key: 0,
name: '更新提示',
enable: false,
fastQuery: true,
activityIds: ['com.bw.zsch.MainActivityTab'],
rules: '[id="com.bw30.zsch:id/tv_cancel"]',
snapshotUrls: ['https://i.gkd.li/import/13068699'],
},
],
});
