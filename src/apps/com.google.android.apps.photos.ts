import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.google.android.apps.photos',
name: '谷歌相册',
groups: [
{
key: 0,
name: '更新提示-取消更新',
desc: '点击[以后再说]',
enable: false,
activityIds: [
'com.google.android.apps.photos.update.treatment.UpdateAppTreatmentPromoPageActivity',
],
fastQuery: true,
rules: [
{
matches:
'[id=`com.google.android.apps.photos:id/negative_button`][text=`以后再说`]',
snapshotUrls: 'https://i.gkd.li/import/13218940',
},
],
},
{
key: 1,
name: '全屏广告-优惠提示',
desc: '点击X',
enable: true,
fastQuery: true,
rules: [
{
activityIds:
'com.google.android.apps.photos.cloudstorage.paidfeatures.PaidFeaturesActivity',
matches:
'@[desc="转到上一层级"] < ViewGroup[id="com.google.android.apps.photos:id/toolbar"]',
snapshotUrls: 'https://i.gkd.li/import/13774247',
},
],
},
],
});
