import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
id: 'com.jingyao.easybike',
name: '哈啰',
groups: [
{
key: 0,
name: '全屏广告-请求通知权限弹窗',
enable: false,
fastQuery: true,
activityIds: [
'com.yanzhenjie.permission.PermissionActivity',
'com.hellobike.atlas.business.portal.PortalActivity',
],
rules: '[text*="开启通知"] < FrameLayout + FrameLayout >2 [text="取消"]',
snapshotUrls: [
'https://i.gkd.li/import/13228735',
'https://i.gkd.li/import/13402675',
],
},
{
key: 1,
name: '全屏广告-请求定位权限弹窗',
enable: false,
fastQuery: true,
activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
rules:
'[text="系统定位服务已关闭"] < FrameLayout +n FrameLayout >2 [text="取消"]',
snapshotUrls: 'https://i.gkd.li/import/13228677',
},
{
key: 2,
name: '全屏广告-应用内活动、广告弹窗（大部分）',
enable: true,
activityIds: [
'com.hellobike.ads.widget.insert.dialog.HBAdvertDialog',
'com.hellobike.atlas.business.portal.PortalActivity',
],
rules:
'FrameLayout[id="com.jingyao.easybike:id/hbDialogLayout"] + ImageView[id="com.jingyao.easybike:id/actionDialogClose"][clickable=true]',
snapshotUrls: [
'https://i.gkd.li/import/12650028',
'https://i.gkd.li/import/12650090',
'https://i.gkd.li/import/13331231',
],
},
{
key: 3,
name: '全屏广告-哈啰智能电动车-广告弹窗',
enable: true,
fastQuery: true,
activityIds: [
'com.hellobike.evehicle.business.main.EVehicleHomeManagerActivity',
],
rules:
'[id="com.jingyao.easybike:id/lottie_view"] < ViewGroup + [id="com.jingyao.easybike:id/btn_close"]',
snapshotUrls: ['https://i.gkd.li/import/12650163'],
},
{
key: 4,
name: '局部广告-右侧悬浮广告',
enable: true,
fastQuery: true,
activityIds: ['com.hellobike.atlas.business.portal.PortalActivity'],
rules:
'@[id="com.jingyao.easybike:id/closeFloatArea"] + [id="com.jingyao.easybike:id/floatADContainer"]',
snapshotUrls: ['https://i.gkd.li/import/12650071'],
},
{
key: 5,
name: '全屏广告-骑行订单完成-广告弹窗',
enable: true,
activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
rules:
'[text="订单完成"] >(2) View[childCount=2] > Image[id=null][clickable=true]',
snapshotUrls: ['https://i.gkd.li/import/12684673'],
},
{
key: 6,
name: '全屏广告-骑行卡-优惠券弹窗',
enable: true,
activityIds: ['com.hellobike.atlas.business.portal.PortalActivity'],
rules: '[desc="去使用"] + Button[text=null][visibleToUser=true]',
snapshotUrls: ['https://i.gkd.li/import/12739316'],
},
{
key: 7,
name: '功能类-新人教学弹窗',
desc: '点击跳过',
enable: false,
fastQuery: true,
activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
rules:
'@View[text="跳过"] <2 View <2 View <<n FrameLayout[id="com.jingyao.easybike:id/h5_pc_container"]',
snapshotUrls: ['https://i.gkd.li/import/13837543'],
},
],
});
