import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      enable: false,
      key: 0,
      name: '更新提示-关闭花呗升级弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        'com.alipay.android.msp.ui.views',
        'com.alipay.android.msp.ui.views.MspContainerActivity',
      ],
      rules: [
        {
          key: 0,
          matches: 'View[childCount=3] > @Image - View[text="花呗服务升级"]',
          snapshotUrls: 'https://i.gkd.li/import/12737055',
        },
        {
          fastQuery: true,
          matches: [
            '[text="根据相关法律法规要求，请尽快完成花呗升级"]',
            'FrameLayout > FrameLayout  > FrameLayout > [text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13183946',
            'https://i.gkd.li/import/12826077',
            'https://i.gkd.li/import/12915864',
          ],
        },
        {
          fastQuery: true,
          matches:
            '[text="花呗服务未升级，将影响后续使用"] <<n FrameLayout @FrameLayout[clickable=true] [text="暂不升级，继续付款"]',
          snapshotUrls: 'https://i.gkd.li/import/13631362',
        },
        {
          matches:
            '[id="com.alipay.android.app:id/flybird_userinfo"] + * >8 FrameLayout[clickable=true][index=1]',
          snapshotUrls: 'https://i.gkd.li/import/13857535',
        },
      ],
    },
    {
      enable: false,
      key: 1,
      name: '定位提示-请求定位权限弹窗',
      fastQuery: true,
      activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
      rules:
        '@[id="com.alipay.mobile.antui:id/closeButton"] - [id="com.alipay.mobile.antui:id/textAndButtonLayout"] [id="com.alipay.mobile.antui:id/tipTextView"][text^="开启定位权限"]',
      snapshotUrls: 'https://i.gkd.li/import/12792688',
    },
    {
      key: 2,
      name: '通知提示-请求通知弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '首页底部提示',
          activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
          matches:
            '@[desc="关闭"] - * >n [id="com.alipay.mobile.antui:id/tipTextView"][text^="开启通知权限"]',
          snapshotUrls: 'https://i.gkd.li/import/13194955',
        },
        {
          key: 1,
          name: '消息页弹窗提示',
          activityIds:
            'com.alipay.mobile.rome.pushservice.integration.PushOpenGuideActivity',
          matches:
            '[text="选择通知接收范围"] <2 RelativeLayout [text="暂时不用"]',
          snapshotUrls: 'https://i.gkd.li/import/13669620',
        },
      ],
    },
    {
      enable: false,
      key: 3,
      name: '更新提示-版本更新弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      activityIds: [
        'com.alipay.mobile.alipassapp.alkb.kb.ALPMainPage63',
        'com.eg.android.AlipayGphone.AlipayLogin',
        'com.alipay.mobile.about.ui.AboutAlipayActivity',
      ],
      rules: [
        {
          name: '弹窗-【稍后再说】',
          matches:
            'TextView[id="com.alipay.mobile.accountauthbiz:id/update_cancel_tv"]',
          snapshotUrls: 'https://i.gkd.li/import/13327095',
        },
        {
          name: '弹窗-【x】',
          matches:
            '[text="版本更新"||text^="Version"] - [id="com.alipay.mobile.antui:id/btn_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13490805',
            'https://i.gkd.li/import/13580594',
          ],
        },
        {
          name: '卡片-【x】',
          matches:
            '[text="立即升级最新版支付宝客户端"] < LinearLayout + [id="com.alipay.mobile.advertisement:id/announcementview_righticon"]',
          snapshotUrls: 'https://i.gkd.li/import/13490797',
        },
      ],
    },
    {
      enable: false,
      key: 4,
      name: '设置支付宝小组件',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      rules: [
        {
          matches:
            '@TextView[text="关闭"] < * <3 * < * + * >3 TextView[text="设置支付宝小组件"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/13327349',
        },
      ],
    },
    {
      key: 10,
      name: '小程序-12306',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 0,
          matches:
            '[desc="推荐广告"] > [desc="展开更多选项"][visibleToUser=true]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/13763314',
        },
        {
          preKeys: 0,
          key: 1,
          fastQuery: true,
          matches: '[text="对该内容不感兴趣"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/13763315',
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-借呗消费信贷协议',
      desc: '点击X',
      rules: [
        {
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            '[text="同意协议并刷脸验证"] < * -4 * >2 Image[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13915022',
        },
      ],
    },
    {
      key: 12,
      name: '通知提示-关闭花呗,借呗,还款升级,推荐等弹窗',
      desc: '关闭支付成功后的升级、开通、推荐等弹窗',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        'com.alipay.android.msp.ui.views',
        'com.alipay.android.msp.ui.views.MspContainerActivity',
        'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@[(name$=".Image"&&text.length=0)||((text^="暂不升级"||text^="放弃升级"||text^="不感兴趣")||text="关闭")][visibleToUser=true][desc.length=null] <<n * <n * > * >n [((text^="同意")&&((text*="协议并"||text*="升级并")))&&(text$="确认交易"||text$="升级"||text$="开通"||text*="刷脸"||text$="付款")||text="确认"||text="立即领取"||text="立即开通"||text="确认开通"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12737055',
            'https://i.gkd.li/import/13915022',
            'https://i.gkd.li/import/13183946',
            'https://i.gkd.li/import/12826077',
            'https://i.gkd.li/import/12915864',
            'https://i.gkd.li/import/14229068',
            'https://i.gkd.li/import/13631362',
            'https://i.gkd.li/import/13857535',
            'https://i.gkd.li/import/14060628',
            'https://i.gkd.li/i/14650607',
            'https://i.gkd.li/i/15050300',
            'https://i.gkd.li/i/16106615',
            'https://i.gkd.li/i/17391739',
            'https://i.gkd.li/i/17945065',
            'https://i.gkd.li/i/14893122',
            'https://i.gkd.li/i/19449399',
            'https://i.gkd.li/i/20684144',
            'https://i.gkd.li/i/23455533',
            'https://i.gkd.li/i/25000603',
            'https://i.gkd.li/i/27007114',
            'https://i.gkd.li/i/30699230',
            'https://i.gkd.li/i/31612291',
          ],
          excludeSnapshotUrls: ['https://i.gkd.li/i/19478718'],
        },
      ],
      ignoreGlobalGroupMatch: true,
    },
    {
      key: 13,
      name: '更新提示',
      desc: '关闭应用更新提示弹窗',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches: '[text="立即更新" || text="马上体验"] <n * > [text*="稍后"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13327095',
            'https://i.gkd.li/i/15010554',
          ],
        },
        {
          key: 1,
          matches: [
            '[text="版本更新" || text^="Version"]',
            '[id="com.alipay.mobile.antui:id/btn_close" || id="com.alipay.mobile.accountauthbiz:id/close_dialog_button"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13490805',
            'https://i.gkd.li/i/13580594',
            'https://i.gkd.li/i/23236828',
          ],
        },
        {
          key: 2,
          matches:
            '[text="立即升级最新版支付宝客户端"] < LinearLayout + [id="com.alipay.mobile.advertisement:id/announcementview_righticon"]',
          snapshotUrls: 'https://i.gkd.li/i/13490797',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-设置支付宝小组件',
      desc: '关闭支付宝小组件设置提示和推荐',
      enable: false,
      rules: [
        {
          key: 0,
          matches:
            '@TextView[text="关闭"] < * <3 * < * + * >3 TextView[text="设置支付宝小组件"]',
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/import/13327349',
        },
        {
          key: 1,
          matches:
            '[text="添加会员小组件"] < View +3 View[childCount=2] > @[text="近期不再提醒我"][clickable=true]',
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          snapshotUrls: 'https://i.gkd.li/i/16427922',
        },
        {
          key: 2,
          matches:
            '[text="通用半浮层容器页面"] >4 [text*="小组件"] - View[index=0][visibleToUser=true]',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          snapshotUrls: [
            'https://i.gkd.li/i/26164320',
            'https://i.gkd.li/i/26164322',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '分段广告-小程序-12306',
      desc: '关闭12306小程序界面的推广广告',
      enable: false,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 0,
          matches:
            '[desc="推荐广告"] > [desc="展开更多选项"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13763314',
        },
        {
          key: 1,
          preKeys: 0,
          matches: '[text="对该内容不感兴趣"]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/import/13763315',
        },
      ],
    },
    {
      key: 16,
      name: '功能类-支付后自动点击完成',
      desc: '支付/充值/提交成功后自动点击完成按钮',
      enable: false,
      fastQuery: true,
      rules: [
        {
          matches: [
            '[text="支付成功" || text="充值成功" || text="提交成功"]',
            '[text="完成"]',
          ],
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          snapshotUrls: [
            'https://i.gkd.li/import/14008852',
            'https://i.gkd.li/i/17503266',
            'https://i.gkd.li/i/16328809',
            'https://i.gkd.li/i/17686972',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '分段广告-出行扫码广告',
      desc: '关闭扫码出行页面的推广广告',
      enable: false,
      fastQuery: true,
      activityIds:
        'com.alipay.android.phone.wallet.aptrip.ui.activity.result.ResultPageActivityV2',
      rules: [
        {
          key: 0,
          name: '点击[展开更多]',
          matches: '@[desc="展开更多选项"] - * >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14546044',
        },
        {
          key: 1,
          name: '点击[对该内容不感兴趣]',
          preKeys: [0],
          matches: '@RelativeLayout[clickable=true] >2 [text$="内容不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14546047',
            'https://i.gkd.li/i/15209602',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '功能类-关闭免密支付开关',
      desc: '关闭免密支付功能开关',
      enable: false,
      actionMaximum: 1,
      rules: [
        {
          matches:
            '@[checked=true] < FrameLayout - [text*="免密"][text$="支付"]',
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/14630824',
            'https://i.gkd.li/i/14630825',
            'https://i.gkd.li/i/17107841',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '分段广告-服务消息页面卡片广告',
      desc: '关闭服务消息页面的卡片广告',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.alipay.android.phone.messageboxapp.ui.MsgBoxTabActivity',
        'com.alipay.android.phone.msgboxapp.ui.activity.MBoxTabPageActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '@[clickable=true] > [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14787644',
            'https://i.gkd.li/i/23935865',
          ],
        },
        {
          key: 1,
          preKeys: [0],
          matches: '@[clickable=true] >2 [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14787585',
            'https://i.gkd.li/i/23935930',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '全屏广告-弹窗广告',
      desc: '关闭全屏弹窗广告',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[desc="关闭"][clickable=true] < LinearLayout - [id="com.alipay.mobile.advertisement:id/standardlayer_contentview"][desc="推荐广告"]',
          activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
          snapshotUrls: [
            'https://i.gkd.li/i/14034152',
            'https://i.gkd.li/i/26184718',
          ],
        },
        {
          key: 1,
          matches:
            '@TextView[id=desc][text=""][visibleToUser=true][width<110][height<110][top>getPrev(1).height.div(2)][left<getPrev(1).width.div(2)][right>getPrev(1).width.div(2)] <(2,3) View[childCount>1] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
          activityIds: [
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
          forcedTime: 10000,
          snapshotUrls: [
            'https://i.gkd.li/i/16812751',
            'https://i.gkd.li/i/29666442',
            'https://i.gkd.li/i/29814861',
            'https://i.gkd.li/i/30511870',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/29814461',
        },
        {
          key: 2,
          matches:
            '@[text*="跳过"] + [text^="账单分期还"][visibleToUser=true] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          snapshotUrls: 'https://i.gkd.li/i/18409779',
        },
        {
          key: 3,
          name: '外卖红包',
          matches: '[desc="推荐广告"] + * > [desc="关闭"]',
          activityIds: '.com.eg.android.AlipayGphone.AlipayLogin',
          snapshotUrls: 'https://i.gkd.li/i/21138908',
        },
        {
          key: 4,
          matches: 'Image[visibleToUser=true][text="关闭弹屏"]',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          snapshotUrls: 'https://i.gkd.li/i/22531246',
        },
        {
          key: 5,
          name: '小组件弹窗',
          anyMatches: [
            '[text^="去"][text.length>2] + [text="近期不再提醒我"]',
            '@Image[width<80 && height<80][visibleToUser=true] < View < View < View < View < WebView[text*="半浮层容器"] < WebView <2 * < * < [id="android:id/content"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/16427922',
            'https://i.gkd.li/i/22984695',
            'https://i.gkd.li/i/22984696',
            'https://i.gkd.li/i/24981728',
            'https://i.gkd.li/i/27384135',
          ],
        },
        {
          key: 6,
          matches:
            '@[text="我知道了"][clickable=true] -n [text^="用碰一下支付"]',
          activityIds: '.AlipayLogin',
          snapshotUrls: 'https://i.gkd.li/i/24563264',
        },
      ],
    },
    {
      key: 21,
      name: '功能类-自动授权登录',
      desc: '自动点击登录确认',
      enable: false,
      rules: [
        {
          action: 'clickCenter',
          matches:
            '[text="支付宝授权"] >3 @[text="同意"][childCount=0] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          actionMaximum: 1,
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/17376764',
        },
      ],
    },
    {
      key: 22,
      name: '功能类-无法访问时点击[返回]',
      desc: '无法访问时点击[返回]',
      enable: false,
      rules: [
        {
          matches: [
            '[text="访问被拒绝" || text^="人气太旺啦" || text^="訪問被拒絕" || text^="人氣太旺啦" || text^="伺服器繁忙"][visibleToUser=true]',
            '[id="com.alipay.mobile.antui:id/back_button"][clickable=true]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
            'com.alipay.android.living.activity.LivingNotTransparentDetailActivity',
            'com.alipay.android.phone.wallet.blessingcard_receive.biz.activity.ReceiveDialogActivity',
            'com.alipay.android.living.activity.LivingDetailActivity',
            '.AlipayLogin',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23046994',
            'https://i.gkd.li/i/23096790',
            'https://i.gkd.li/i/23832722',
            'https://i.gkd.li/i/24353818',
            'https://i.gkd.li/i/24353826',
            'https://i.gkd.li/i/24183318',
            'https://i.gkd.li/i/25199767',
            'https://i.gkd.li/i/25485052',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '局部广告-底部横幅广告',
      enable: false,
      fastQuery: true,
      activityIds: '.AlipayLogin',
      rules: [
        {
          key: 0,
          name: '邀请参加调研',
          matches:
            '@ImageView[clickable=true][width<68] <2 [desc="底部广告"] - [vid="alipaylogin_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/26330637',
        },
      ],
    },
    {
      key: 24,
      name: '全屏广告-定位提示-请求定位权限弹窗',
      enable: false,
      fastQuery: true,
      activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
      rules:
        '@[id="com.alipay.mobile.antui:id/closeButton"] - [id="com.alipay.mobile.antui:id/textAndButtonLayout"] [id="com.alipay.mobile.antui:id/tipTextView"][text^="开启定位权限"]',
      snapshotUrls: 'https://i.gkd.li/import/12792688',
    },
    {
      key: 25,
      name: '全屏广告-通知提示-请求通知弹窗',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '首页底部提示',
          matches:
            '@[desc="关闭"] - * >n [id="com.alipay.mobile.antui:id/tipTextView"][text^="开启通知权限"]',
          activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
          snapshotUrls: 'https://i.gkd.li/import/13194955',
        },
        {
          key: 1,
          name: '消息页弹窗提示',
          matches:
            '[text="选择通知接收范围"] <2 RelativeLayout [text="暂时不用"]',
          activityIds:
            'com.alipay.mobile.rome.pushservice.integration.PushOpenGuideActivity',
          snapshotUrls: 'https://i.gkd.li/import/13669620',
        },
      ],
    },
    {
      key: 26,
      name: '全屏广告-小程序-12306',
      enable: false,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches:
            '[desc="推荐广告"] > [desc="展开更多选项"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13763314',
        },
        {
          key: 1,
          action: 'clickCenter',
          preKeys: 0,
          matches: '[text="对该内容不感兴趣"]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/import/13763315',
        },
      ],
    },
  ],
});
