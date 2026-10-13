import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      enable: false,
      key: 1,
      name: '购物车界面-砸金蛋',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: '[id="com.jd.lib.cart.feature:id/iv_egg_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12642266',
    },
    {
      enable: true,
      key: 2,
      name: '我的界面-悬浮广告',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: [
        {
          key: 0,
          name: '参与调研',
          matches:
            'FrameLayout + RelativeLayout > RelativeLayout > ImageView + ImageView[desc!="返回"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642270',
            'https://i.gkd.li/import/12774910',
          ],
        },
        {
          key: 1,
          name: '邀好友得红包',
          matches:
            '@ImageView[id!=null] + FrameLayout[childCount=3] > ImageView + LinearLayout + TextView',
          snapshotUrls: 'https://i.gkd.li/import/13242002',
        },
      ],
    },
    {
      enable: true,
      key: 3,
      name: '首页-右侧浮层广告',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: 'RelativeLayout >n * > [desc^="关闭浮层"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13165659',
        'https://i.gkd.li/import/12837870',
        'https://i.gkd.li/import/13072091',
        'https://i.gkd.li/import/12837870',
      ],
    },
    {
      enable: false,
      key: 4,
      name: '通知提示-请求打开通知',
      activityIds: [
        'com.jd.lib.message.messagecenter.view.activity.MessageCenterMainActivityNew',
        'com.jd.lib.ordercenter.mygoodsorderlist.view.activity.MyOrderListActivity',
        'com.jingdong.app.mall.MainFrameActivity',
      ],
      rules: [
        {
          matches: 'TextView[text="开启消息通知"] +n ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12839864',
            'https://i.gkd.li/import/13772299',
            'https://i.gkd.li/import/13917163',
          ],
        },
        {
          matches:
            'TextView[text ^="打开系统通知"] - FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12839865',
        },
      ],
    },
    {
      key: 5,
      name: '广告弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches: 'FrameLayout > [desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/13165721',
        },
        {
          key: 1,
          activityIds:
            'com.jd.lib.cashier.complete.view.CashierCompleteActivity',
          matches:
            '[id="com.jingdong.app.mall:id/webview"] + [id="com.jingdong.app.mall:id/close"][desc="关闭页面"]',
          snapshotUrls: 'https://i.gkd.li/import/13218034',
        },
        {
          key: 2,
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches: '@[desc="关闭按钮"] <n * >n *[desc="弹窗"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13241883',
            'https://i.gkd.li/import/132599029',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches: 'RelativeLayout > ImageView[desc="关闭页面"]',
          excludeMatches: 'ImageView[desc="关闭页面"] - [text="优惠券"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13258996',
            'https://i.gkd.li/import/13336847',
          ],
        },
      ],
    },
    {
      enable: true,
      key: 6,
      name: '首页-底部横幅广告',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: 'ImageView < FrameLayout - FrameLayout > ImageView[desc="关闭"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13258973',
        'https://i.gkd.li/import/13258980',
        'https://i.gkd.li/import/13258981',
      ],
    },
    {
      enable: false,
      key: 7,
      name: '首页弹窗-打开通知',
      desc: '自动点击正下方的【x】',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches: '[id="com.jingdong.app.mall:id/btn_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13463618',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '京东账号登录授权',
      desc: '自动点击【确认登录】',
      activityIds: 'com.jingdong.app.mall.WebActivity',
      rules: '[text="京东登录"] > [desc="确认登录"]',
      snapshotUrls: 'https://i.gkd.li/import/12901734',
    },
    {
      enable: false,
      key: 11,
      name: '支付界面-产品推荐',
      desc: '自动点击右上角【x】',
      activityIds:
        'com.jd.lib.settlement.fillorder.activity.NewFillOrderActivity',
      rules: 'ImageView[clickable=true && desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13191146',
    },
    {
      enable: false,
      key: 12,
      name: '购物车界面-支付成功广告弹窗',
      desc: '自动点击正下方的【x】',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.jd.lib.cart.ShoppingCartNewActivity',
          matches: '@ImageView - ViewGroup >2 TextView[text="查看订单"]',
          snapshotUrls: 'https://i.gkd.li/import/13446362',
        },
      ],
    },
    {
      key: 13,
      name: '局部广告-悬浮广告',
      desc: '关闭首页悬浮广告、参与调研提示、红包弹窗和购物车砸金蛋',
      enable: true,
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: [
        {
          key: 0,
          name: '参与调研',
          anyMatches: [
            'FrameLayout + RelativeLayout > RelativeLayout[childCount=2] > ImageView[visibleToUser=true] + ImageView[!(desc="返回")][visibleToUser=true]',
            'FrameLayout + RelativeLayout > RelativeLayout[childCount=2] > ImageView[visibleToUser=true] + *[childCount=1] > ImageView[!(desc="返回")][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12642270',
            'https://i.gkd.li/i/21793011',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/import/12774910',
            'https://i.gkd.li/i/15110548',
          ],
        },
        {
          key: 1,
          name: '邀好友得红包',
          matches:
            '@ImageView[id!=null] + FrameLayout[childCount=3] > ImageView + LinearLayout + TextView',
          snapshotUrls: 'https://i.gkd.li/import/13242002',
        },
        {
          key: 2,
          name: '首页贴边广告',
          matches:
            'RelativeLayout >n * > [desc^="关闭" && !(id*="egg")][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13165659',
            'https://i.gkd.li/import/12837870',
            'https://i.gkd.li/import/13072091',
            'https://i.gkd.li/import/12837870',
            'https://i.gkd.li/i/17690650',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/15077913',
        },
        {
          key: 3,
          name: '购物车页面砸金蛋',
          matches: '[id="com.jd.lib.cart.feature:id/iv_egg_close"]',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/import/12642266',
            'https://i.gkd.li/i/14731003',
          ],
        },
        {
          key: 4,
          name: '推推红包',
          matches:
            '@ImageView[id^="com.jd.lib.personal.feature"][index=parent.childCount.minus(1)] <<(3,4) RelativeLayout > LinearLayout[id=null][childCount=2] > ImageView[id^="com.jd.lib.personal.feature"][index=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/20532279',
            'https://i.gkd.li/i/20532280',
            'https://i.gkd.li/i/23693918',
          ],
          excludeSnapshotUrls: ['https://i.gkd.li/i/21343338'],
        },
      ],
    },
    {
      key: 14,
      name: '通知提示',
      desc: '关闭消息通知开启提示',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      activityIds: [
        'com.jd.lib.message.messagecenter.view.activity.MessageCenterMainActivityNew',
        'com.jd.lib.ordercenter.mygoodsorderlist.view.activity.MyOrderListActivity',
        'com.jd.lib.message.messagecenter3.MessageCenterActivity',
        'com.jingdong.app.mall.MainFrameActivity',
      ],
      rules: [
        {
          matches:
            '@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] -n [text="开启消息通知"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12839864',
            'https://i.gkd.li/import/13772299',
            'https://i.gkd.li/import/13917163',
            'https://i.gkd.li/i/13463618',
            'https://i.gkd.li/i/14692570',
            'https://i.gkd.li/i/18060234',
          ],
        },
        {
          matches:
            'ImageView < @FrameLayout[clickable=true] + TextView[text^="打开系统通知"]',
          snapshotUrls: 'https://i.gkd.li/import/12839865',
        },
      ],
      ignoreGlobalGroupMatch: true,
    },
    {
      key: 15,
      name: '全屏广告-广告弹窗',
      enable: true,
      rules: [
        {
          key: 0,
          matches: 'FrameLayout > [desc="关闭"]',
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          snapshotUrls: 'https://i.gkd.li/import/13165721',
        },
        {
          key: 1,
          matches:
            '[id="com.jingdong.app.mall:id/webview"] + [id="com.jingdong.app.mall:id/close"][desc="关闭页面"]',
          activityIds:
            'com.jd.lib.cashier.complete.view.CashierCompleteActivity',
          snapshotUrls: 'https://i.gkd.li/import/13218034',
        },
        {
          key: 2,
          matches: '@[desc="关闭按钮"] <n * >n *[desc="弹窗"]',
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          snapshotUrls: [
            'https://i.gkd.li/import/13241883',
            'https://i.gkd.li/import/132599029',
          ],
        },
        {
          key: 3,
          matches: 'RelativeLayout > ImageView[desc="关闭页面"]',
          excludeMatches: 'ImageView[desc="关闭页面"] - [text="优惠券"]',
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/import/13258996',
            'https://i.gkd.li/import/13336847',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '局部广告-横幅广告',
      desc: '关闭页面顶部横幅广告和吸顶广告',
      enable: true,
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: [
        {
          key: 0,
          anyMatches: [
            'ImageView < FrameLayout[index=0] < ViewGroup[childCount>=3] > FrameLayout[index=parent.childCount.minus(1)||index=parent.childCount.minus(2)][childCount=1] > ImageView[desc="关闭"][visibleToUser=true]',
            'View + FrameLayout[index=1] <2 ViewGroup[childCount>=3] > FrameLayout[index=parent.childCount.minus(1)||index=parent.childCount.minus(2)][childCount=1] > ImageView[desc="关闭"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13258973',
            'https://i.gkd.li/import/13258980',
            'https://i.gkd.li/import/13258981',
            'https://i.gkd.li/i/22319329',
            'https://i.gkd.li/i/26164414',
          ],
        },
        {
          key: 1,
          matches:
            '@View[desc.length=null][clickable=true][longClickable=false][visibleToUser=true][id=null][right>parent.right.minus(140)][top<=parent.top.plus(30)] -n ImageView[id=null] <n RelativeLayout[id=null]',
          snapshotUrls: 'https://i.gkd.li/import/14163014',
        },
        {
          key: 2,
          anyMatches: [
            'ImageView +n ViewGroup >2 [text.length>0] < ViewGroup + @ViewGroup[clickable=true][visibleToUser=true][right>parent.right.minus(180)] > ImageView <<n RelativeLayout[id^="com.jd.lib.personal.feature:id/"]',
            '@ViewGroup[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true][right>parent.right.minus(180)] -2 ViewGroup[childCount<=1][index=0] + ViewGroup[childCount=2] >2 [text.length>0&&text.length<=3] <<n RelativeLayout[id^="com.jd.lib.personal.feature:id/"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/15047238',
            'https://i.gkd.li/i/17001455',
            'https://i.gkd.li/i/21344132',
            'https://i.gkd.li/i/23694139',
          ],
        },
        {
          key: 3,
          anyMatches: [
            '[desc="吸顶楼层"] > [desc="关闭按钮"][clickable=true][visibleToUser=true]',
            'ImageView[clickable=false] < @ViewGroup[clickable=true] <<4 [desc="吸顶楼层"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/15112953',
            'https://i.gkd.li/i/26164445',
          ],
        },
        {
          key: 4,
          matches: '[id="com.jd.lib.cart.feature:id/plus_close"]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/15229577',
        },
      ],
    },
    {
      key: 17,
      name: '功能类-京东账号登录授权',
      desc: '自动点击【确认登录】',
      enable: false,
      activityIds: 'com.jingdong.app.mall.WebActivity',
      rules: '[text="京东登录"] > [desc="确认登录"]',
      snapshotUrls: 'https://i.gkd.li/import/12901734',
    },
    {
      key: 18,
      name: '局部广告-支付页面产品推荐',
      desc: '关闭支付页面的推荐商品广告',
      enable: false,
      activityIds:
        'com.jd.lib.settlement.fillorder.activity.NewFillOrderActivity',
      rules: 'ImageView[clickable=true && desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13191146',
    },
    {
      key: 19,
      name: '功能类-支付订单后点击[完成/回首页]',
      desc: '点击支付完成后的[完成/回首页]按钮',
      enable: false,
      rules: [
        {
          matches:
            '[vid="lib_cashier_finish_back_page_text" || text="回首页"][clickable=true][visibleToUser=true]',
          activityIds:
            '.bundle.cashierfinish.view.CashierUserContentCompleteActivity',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/17358003',
            'https://i.gkd.li/i/29404312',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '通知提示-关闭支付时各类开通弹窗',
      desc: '关闭支付时弹出的免密、快付、人脸等弹窗',
      enable: false,
      actionMaximum: 2,
      resetMatch: 'app',
      activityIds: [
        'com.wangyin.payment.jdpaysdk.counter.ui.pay.CounterActivity',
        'com.jingdong.manto.card.MantoLightActivity',
        'com.jd.lib.jdpaysdk.JDPayActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text*="《"&&text*="协议"]',
            '[text*="暂不"||desc="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/19918601',
            'https://i.gkd.li/i/20033983',
            'https://i.gkd.li/i/20265504',
            'https://i.gkd.li/i/20709175',
          ],
        },
        {
          key: 1,
          matches:
            '@ImageView[id!=""][clickable=true] <n * > [(text*="京东快付"||text="设置默认支付工具")&&text.length<=8]',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/20516256',
            'https://i.gkd.li/i/23832919',
          ],
        },
      ],
      ignoreGlobalGroupMatch: true,
    },
    {
      key: 21,
      name: '全屏广告-购物车界面-砸金蛋',
      enable: true,
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: '[id="com.jd.lib.cart.feature:id/iv_egg_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12642266',
    },
    {
      key: 22,
      name: '局部广告-我的界面-悬浮广告',
      enable: true,
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: [
        {
          key: 0,
          name: '参与调研',
          matches:
            'FrameLayout + RelativeLayout > RelativeLayout > ImageView + ImageView[desc!="返回"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642270',
            'https://i.gkd.li/import/12774910',
          ],
        },
        {
          key: 1,
          name: '邀好友得红包',
          matches:
            '@ImageView[id!=null] + FrameLayout[childCount=3] > ImageView + LinearLayout + TextView',
          snapshotUrls: 'https://i.gkd.li/import/13242002',
        },
      ],
    },
    {
      key: 23,
      name: '局部广告-首页-右侧浮层广告',
      enable: true,
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: 'RelativeLayout >n * > [desc^="关闭浮层"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13165659',
        'https://i.gkd.li/import/12837870',
        'https://i.gkd.li/import/13072091',
        'https://i.gkd.li/import/12837870',
      ],
    },
    {
      key: 24,
      name: '全屏广告-通知提示-请求打开通知',
      enable: false,
      activityIds: [
        'com.jd.lib.message.messagecenter.view.activity.MessageCenterMainActivityNew',
        'com.jd.lib.ordercenter.mygoodsorderlist.view.activity.MyOrderListActivity',
        'com.jingdong.app.mall.MainFrameActivity',
      ],
      rules: [
        {
          matches: 'TextView[text="开启消息通知"] +n ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12839864',
            'https://i.gkd.li/import/13772299',
            'https://i.gkd.li/import/13917163',
          ],
        },
        {
          matches:
            'TextView[text ^="打开系统通知"] - FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12839865',
        },
      ],
    },
    {
      key: 25,
      name: '局部广告-首页-底部横幅广告',
      enable: true,
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: 'ImageView < FrameLayout - FrameLayout > ImageView[desc="关闭"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13258973',
        'https://i.gkd.li/import/13258980',
        'https://i.gkd.li/import/13258981',
      ],
    },
    {
      key: 26,
      name: '全屏广告-首页弹窗-打开通知',
      desc: '自动点击正下方的【x】',
      enable: false,
      fastQuery: true,
      rules: [
        {
          matches: '[id="com.jingdong.app.mall:id/btn_close"]',
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          snapshotUrls: 'https://i.gkd.li/import/13463618',
        },
      ],
    },
    {
      key: 27,
      name: '全屏广告-支付界面-产品推荐',
      desc: '自动点击右上角【x】',
      enable: false,
      activityIds:
        'com.jd.lib.settlement.fillorder.activity.NewFillOrderActivity',
      rules: 'ImageView[clickable=true && desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13191146',
    },
    {
      key: 28,
      name: '全屏广告-购物车界面-支付成功广告弹窗',
      desc: '自动点击正下方的【x】',
      enable: false,
      fastQuery: true,
      rules: [
        {
          matches: '@ImageView - ViewGroup >2 TextView[text="查看订单"]',
          activityIds: 'com.jd.lib.cart.ShoppingCartNewActivity',
          snapshotUrls: 'https://i.gkd.li/import/13446362',
        },
      ],
    },
  ],
});
