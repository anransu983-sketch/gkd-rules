import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.google.android.apps.youtube.music',
name: 'YouTube Music',
groups: [
{
key: 0,
name: '局部广告-播放界面广告',
enable: true,
activityIds:
'com.google.android.apps.youtube.music.activities.MusicActivity',
rules: '[id="com.google.android.apps.youtube.music:id/skip_ad_text"]',
snapshotUrls: 'https://i.gkd.li/import/13196056',
},
],
});
