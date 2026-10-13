import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.igpsport.igpsportandroid',
name: 'iGPSPORT',
groups: [
{
key: 0,
name: '更新提示',
enable: false,
actionMaximum: 1,
resetMatch: 'app',
rules: '@[text="忽略本次"] + [text="立即升级"]',
snapshotUrls: 'https://i.gkd.li/import/13797203',
},
],
});
