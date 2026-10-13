import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      excludeActivityIds: [
        'com.tencent.mobileqq.activity.ChatActivity',
        'com.tencent.mobileqq.search.activity.UniteSearchActivity'
      ],
      rules: {
        excludeMatches: '[vid="chat_item_content_layout"]',
        matches: 'TextView[text^="跳过"][text.length<=10][vid!="title"]'
      },
      snapshotUrls: [
        'https://i.gkd.li/import/13062244',
        'https://i.gkd.li/import/13093155',
        'https://i.gkd.li/import/13207731',
        'https://i.gkd.li/import/13217807',
        'https://i.gkd.li/import/13856647',
        'https://i.gkd.li/import/13868177'
      ]
    },
    {
      enable: false,
      key: 1,
      name: '消息页面-顶部广告',
      desc: '规则误触,待修复,需要快照准确定位',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        {
          key: 0,
          matches: 'TextView[text!=null] < LinearLayout + ImageView[desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12892726',
            'https://i.gkd.li/import/12774870',
            'https://i.gkd.li/import/13207766',
            'https://i.gkd.li/import/13386518'
          ]
        },
        {
          key: 1,
          name: '消息页面-顶部惊喜礼包',
          matches: '[text*="惊喜礼包"] + FrameLayout + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13426912'
        },
        {
          key: 2,
          matches: 'ImageView + RelativeLayout[childCount=2] > TextView[text!=null] + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13476400'
        }
      ]
    },
    {
      enable: false,
      key: 2,
      name: '分段广告-好友动态-广告卡片',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity'
          ],
          matches: 'View[desc="广告"] + ImageView[clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/12847842', 'https://i.gkd.li/import/13787345']
        },
        {
          preKeys: 0,
          key: 1,
          activityIds: [
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
            'com.tencent.mobileqq.activity.SplashActivity'
          ],
          fastQuery: true,
          matches: '@[clickable=true] > ImageView + [text="关闭此条广告"]',
          snapshotUrls: ['https://i.gkd.li/import/12840889', 'https://i.gkd.li/import/13831867']
        },
        {
          preKeys: 0,
          key: 2,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity'
          ],
          fastQuery: true,
          matches: '@[clickable=true] > * > ImageView + [text="隐藏此条动态"]',
          snapshotUrls: ['https://i.gkd.li/import/13761147', 'https://i.gkd.li/import/13849730']
        },
        {
          key: 3,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity'
          ],
          matches: '[id="com.tencent.mobileqq:id/tv_name"] + TextView[text="广告"] + @ImageView[clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/12749584', 'https://i.gkd.li/import/13627967']
        }
      ]
    },
    {
      key: 3,
      name: '频道页面广告',
      rules: [
        {
          name: '弹窗广告',
          fastQuery: true,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog'
          ],
          matches: 'ImageView[id="com.tencent.mobileqq:id/close"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/13206663', 'https://i.gkd.li/import/12642081']
        },
        {
          name: '右侧悬浮广告',
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches: 'FrameLayout[desc="发表帖子"] - LinearLayout[id!=null] >3 ImageView[id!=null][clickable=false] - View[id!=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12708844'
        }
      ]
    },
    {
      enable: false,
      key: 4,
      name: '顶部SVIP广告',
      desc: '消息界面-搜索框和消息记录之间的广告卡片,点击关闭右侧x',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: 'LinearLayout > TextView[text*="SVIP"||text*="超级会员"] + FrameLayout[childCount<=2] + [name$="ImageView"||name$="Button"][id!=null][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/12706907',
        'https://i.gkd.li/import/13107298',
        'https://i.gkd.li/import/12793359',
        'https://i.gkd.li/import/12855048',
        'https://i.gkd.li/import/13228108'
      ]
    },
    {
      enable: false,
      key: 5,
      name: '好友热播',
      desc: '好友动态中的好友热播，自动选择“减少好友热播” - 默认关闭',
      activityIds: [
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
        'com.tencent.mobileqq.activity.SplashActivity'
      ],
      rules: [
        {
          name: '点击[好友热播]卡片右上角菜单按钮',
          matches: 'TextView[text="好友热播"] + Button[id^="com.tencent.mobileqq.qzone_df_impl:id/"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/12721427', 'https://i.gkd.li/import/12894359']
        },
        {
          name: '点击[减少好友热播]',
          matches: 'TextView[text="减少好友热播"] <2 LinearLayout < LinearLayout[id^="com.tencent.mobileqq.qzone_df_impl:id/"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/12721433', 'https://i.gkd.li/import/12894375']
        }
      ]
    },
    {
      key: 7,
      name: '扫一扫-登录确认',
      desc: '自动点击登录。包括 PC 登录确认、QQ 互联登录确认。',
      fastQuery: true,
      rules: [
        {
          key: 1,
          name: 'PC 登录确认',
          activityIds: [
            'com.tencent.biz.qrcode.activity.QRLoginAuthActivity',
            'com.tencent.mobileqq.activity.DevlockQuickLoginActivity'
          ],
          matches: 'TextView[text="登录确认"||text="一键验证"] <n * +n * >n Button[text*="登录"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13623520',
            'https://i.gkd.li/import/12789287',
            'https://i.gkd.li/import/13063027'
          ]
        },
        {
          key: 2,
          name: 'QQ 互联登录确认',
          activityIds: ['com.tencent.mobileqq.activity.DevLockQuickVerifyActivity'],
          matches: 'Button[text="拒绝"] - Button[text="登录"]',
          snapshotUrls: ['https://i.gkd.li/import/13166314']
        }
      ]
    },
    {
      enable: false,
      key: 8,
      name: '消息页面顶部-无法接收新消息通知',
      desc: '消息界面-搜索框和消息记录之间的通知卡片,点击关闭右侧x',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: 'RelativeLayout > [text^="当前无法接收"] + ImageView',
      snapshotUrls: 'https://i.gkd.li/import/12855441'
    },
    {
      key: 9,
      name: '我的等级-浮窗广告',
      activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
      rules: 'TextView[text="QQ等级规则"] + View > TextView[id=null&&text.length=0]',
      snapshotUrls: 'https://i.gkd.li/import/12914734'
    },
    {
      enable: false,
      key: 10,
      name: '自动勾选原图',
      desc: '发送图片时自动勾选原图',
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.tencent.qqnt.qbasealbum.WinkHomeActivity',
        'com.tencent.mobileqq.activity.photo.album.NewPhotoListActivity'
      ],
      rules: '@CheckBox[checked=false] + [text="原图"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12705556',
        'https://i.gkd.li/import/12705559',
        'https://i.gkd.li/import/13295142',
        'https://i.gkd.li/import/13476247'
      ]
    },
    {
      enable: false,
      key: 11,
      name: '自动查看原图',
      desc: '查看图片时自动点击原图',
      activityIds: 'com.tencent.richframework.gallery.QQGalleryActivity',
      rules: '[desc="查看原图"][checked=false]',
      snapshotUrls: ['https://i.gkd.li/import/12840632', 'https://i.gkd.li/import/12840633']
    },
    {
      enable: false,
      key: 12,
      name: 'QQ小世界评论区广告',
      desc: '点击广告-弹出原因框-关闭此条广告',
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.tencent.biz.qqcircle.activity.QCircleFolderActivity'
      ],
      rules: [
        {
          key: 0,
          matches: 'RelativeLayout[childCount=5] > @LinearLayout[clickable=true][childCount=2][id!=null] > TextView[text="广告"][id!=null]',
          snapshotUrls: 'https://i.gkd.li/import/12847819'
        },
        {
          preKeys: 0,
          matches: '@LinearLayout[clickable=true] > TextView[text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12847821'
        }
      ]
    },
    {
      key: 13,
      name: 'QQ小程序开屏广告',
      desc: '点击右下角跳过',
      activityIds: [
        'com.tencent.mobileqq.mini.appbrand.ui.AppBrandUI',
        'com.tencent.mobileqq.activity.miniaio.MiniChatActivity'
      ],
      rules: [
        {
          matches: 'TextView[text = "广告"] < RelativeLayout + RelativeLayout TextView[text = "跳过"]',
          snapshotUrls: ['https://i.gkd.li/import/12877215', 'https://i.gkd.li/import/12919195']
        }
      ]
    },
    {
      key: 14,
      name: '黄钻-弹窗广告',
      activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
      rules: 'TextView[text.length=0&&clickable=true&&visibleToUser=true] + View > Button[text.length=0&&focusable=true]',
      snapshotUrls: ['https://i.gkd.li/import/12914978', 'https://i.gkd.li/import/12914886']
    },
    {
      enable: false,
      key: 15,
      name: '好友动态-为你推荐',
      fastQuery: true,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity'
      ],
      rules: [
        {
          key: 0,
          matches: '@ImageView[clickable=true] - [text="为你推荐"]',
          snapshotUrls: ['https://i.gkd.li/import/12929620', 'https://i.gkd.li/import/13387606']
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@LinearLayout[id!=null][clickable=true] > LinearLayout > [text="减少此类推荐"]',
          snapshotUrls: ['https://i.gkd.li/import/12929619', 'https://i.gkd.li/import/13387605']
        }
      ]
    },
    {
      key: 17,
      name: '更新弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[desc="关闭"] - ViewGroup > [text="立即体验"||text="立即升级"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13188721',
        'https://i.gkd.li/import/13386719',
        'https://i.gkd.li/import/13459507'
      ]
    },
    {
      enable: false,
      key: 18,
      name: '更新提示-消息页面-顶部',
      rules: [
        {
          key: 0,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          fastQuery: true,
          matches: '[id="com.tencent.mobileqq:id/iyx"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13188722',
            'https://i.gkd.li/import/13255493',
            'https://i.gkd.li/import/13843140'
          ]
        },
        {
          key: 1,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches: '[text="发现QQ版本更新"] + [text="点击下载"] + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13931212'
        }
      ]
    },
    {
      enable: false,
      key: 19,
      name: '内测邀请弹窗',
      fastQuery: true,
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        {
          key: 0,
          matches: '@ImageView[desc="关闭"] <2 * >2 [text="QQ测试版"]',
          snapshotUrls: 'https://i.gkd.li/import/13526551'
        }
      ]
    },
    {
      enable: false,
      key: 20,
      name: '钱包-卡片广告',
      fastQuery: true,
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        {
          key: 0,
          matches: 'ViewGroup[childCount=6] > [text="广告"]',
          snapshotUrls: ['https://i.gkd.li/import/13695087']
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@LinearLayout > [text="关闭此条广告"]',
          snapshotUrls: ['https://i.gkd.li/import/13699701']
        }
      ]
    },
    {
      key: 21,
      name: '首页广告弹窗',
      rules: [
        {
          key: 0,
          name: '元梦之星广告弹窗',
          activityIds: 'com.tencent.mobileqq.activity.QPublicTransFragmentActivity',
          matches: 'ViewGroup[childCount=2] > ViewGroup[childCount=3][index=1] > ViewGroup[clickable=true][visibleToUser=true][index=1][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13797876'
        }
      ]
    },
    {
      key: 22,
      name: '局部广告',
      desc: '关闭各页面局部广告，包括消息、聊天、联系人、好友动态等页面',
      enable: false,
      rules: [
        {
          key: 0,
          name: '消息页面顶部广告',
          matches: '[longClickable!=true][vid!="chat_item_head_icon"][desc=null&&text=null] <n *[left=0][vid!="root"][visibleToUser=true] >n TextView[clickable=false][text.length>0][!(text~="(?is).*([01]?[0-9]|2[0-3])[:：][0-5][0-9].*")][text!$="G"&&text!$="M"&&text!$="k"][visibleToUser=true] <<n * > [name$="ImageView"||name$="Button"][desc="关闭"||(desc=null&&text=null)][vid!="chat_item_head_icon"][childCount=0][visibleToUser=true][clickable=true][longClickable!=true][left>0]',
          excludeMatches: [
            '[id^="com.tencent.mobileqq.qzone"]',
            '[text="互动标识"]',
            '[text="群标签"]',
            '[text="小程序"]'
          ],
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          snapshotUrls: [
            'https://i.gkd.li/import/13426912',
            'https://i.gkd.li/import/12706907',
            'https://i.gkd.li/import/13107298',
            'https://i.gkd.li/import/12793359',
            'https://i.gkd.li/import/12855048',
            'https://i.gkd.li/import/13228108',
            'https://i.gkd.li/import/12855441',
            'https://i.gkd.li/import/13188722',
            'https://i.gkd.li/import/13255493',
            'https://i.gkd.li/import/13843140',
            'https://i.gkd.li/import/13931212',
            'https://i.gkd.li/import/14178669',
            'https://i.gkd.li/import/14178667',
            'https://i.gkd.li/import/12892726',
            'https://i.gkd.li/import/12774870',
            'https://i.gkd.li/import/13207766',
            'https://i.gkd.li/import/13386518',
            'https://i.gkd.li/import/13476400',
            'https://i.gkd.li/import/14155603',
            'https://i.gkd.li/import/14217033',
            'https://i.gkd.li/i/13255493',
            'https://i.gkd.li/i/16323755',
            'https://i.gkd.li/i/17529150',
            'https://i.gkd.li/i/23837678',
            'https://i.gkd.li/i/24230528',
            'https://i.gkd.li/i/25235782',
            'https://i.gkd.li/i/26159150',
            'https://i.gkd.li/i/28426083',
            'https://i.gkd.li/i/28425887',
            'https://i.gkd.li/i/28425944',
            'https://i.gkd.li/i/29140037'
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/14414585',
            'https://i.gkd.li/i/15075866',
            'https://i.gkd.li/i/15782476',
            'https://i.gkd.li/i/15883390',
            'https://i.gkd.li/i/24989508'
          ]
        },
        {
          key: 1,
          name: '好友动态详情页广告',
          matches: '@[desc="关闭广告"][visibleToUser=true] <4 RelativeLayout <2 LinearLayout <2 LinearLayout < FrameLayout <n RecyclerView < FrameLayout - FrameLayout >2 [text="详情"]',
          activityIds: [
            'com.qzone.reborn.base.QZoneTransparentShellActivity',
            'com.qzone.reborn.base.QZoneShellActivity'
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/17009847',
            'https://i.gkd.li/i/17815694',
            'https://i.gkd.li/i/17827969'
          ],
          exampleUrls: 'https://e.gkd.li/b78a3e44-3bd9-445d-9199-e989269c2be3'
        },
        {
          key: 2,
          name: '推荐你试试这些玩法',
          matches: '@[desc="关闭"] - [text="推荐你试试这些玩法"]',
          activityIds: 'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/18236745',
          exampleUrls: 'https://e.gkd.li/6cf71a22-0e21-4877-86a7-69d84353ad5a'
        },
        {
          key: 3,
          name: '联系人页面顶部可能认识的人推荐',
          matches: '@ImageView[childCount=0][clickable=true][visibleToUser=true] -2 [text*="发现可能认识的人"]',
          activityIds: '.activity.SplashActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/18237415'
        },
        {
          key: 4,
          name: '聊天页面关键词广告',
          matches: 'FrameLayout[childCount=2] >2 FrameLayout[childCount=2] >3 FrameLayout[childCount=2] > [text="跳过" || text="关闭"][clickable=true]',
          activityIds: [
            'com.tencent.mobileqq.profilecard.activity.FriendProfileCardActivity',
            'com.tencent.mobileqq.activity.ChatActivity',
            'com.tencent.mobileqq.activity.SplashActivity'
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/14183188',
            'https://i.gkd.li/i/16549500',
            'https://i.gkd.li/i/16555184'
          ]
        },
        {
          key: 5,
          name: '空间相册内广告',
          matches: '@ImageView[clickable=true][width<87] <2 [visibleToUser=true] - [childCount=3] >2 [text="广告"]',
          activityIds: 'com.qzone.reborn.base.QZoneShellActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/30869035'
        }
      ]
    },
    {
      key: 23,
      name: '分段广告-广告卡片菜单',
      desc: '通过广告卡片菜单关闭好友动态、小世界评论区和钱包场景中的广告',
      enable: false,
      rules: [
        {
          key: 0,
          name: '①点击[广告]',
          matches: '@[clickable=true] > [text="广告"][visibleToUser=true]',
          activityIds: [
            'com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity',
            '.guild.base.QPublicFragmentActivityForMainWebActivity',
            'com.qzone.reborn.base.QZoneShellActivity'
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/21947672',
            'https://i.gkd.li/i/24404962',
            'https://i.gkd.li/i/28888622'
          ]
        },
        {
          key: 1,
          matches: '@[desc="更多"][clickable=true] - [desc="广告"][visibleToUser=true] - LinearLayout > [text="今天"]',
          activityIds: '.activity.SplashActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24381585'
        },
        {
          key: 2,
          matches: '[text="广告"][clickable=true]',
          activityIds: 'com.qzone.reborn.layer.part.QzoneFeedProGalleryActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/30876372'
        },
        {
          key: 50,
          name: '点击[关闭]此条广告',
          preKeys: [0, 1, 2],
          matches: '@[clickable=true] >(1,2) [text^="关闭"][text*="条"][text.length<10]',
          activityIds: [
            'com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity',
            '.guild.base.QPublicFragmentActivityForMainWebActivity',
            'com.qzone.reborn.layer.part.QzoneFeedProGalleryActivity',
            'com.qzone.reborn.base.QZoneShellActivity',
            '.activity.SplashActivity'
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/21947698',
            'https://i.gkd.li/i/24381598',
            'https://i.gkd.li/i/24406932',
            'https://i.gkd.li/i/26997293',
            'https://i.gkd.li/i/28888643',
            'https://i.gkd.li/i/28942736',
            'https://i.gkd.li/i/30876374'
          ]
        },
        {
          key: 100,
          name: '点击[直接关闭]',
          preKeys: [50],
          matches: '[text="直接关闭"][clickable=true]',
          activityIds: [
            'com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity',
            '.guild.base.QPublicFragmentActivityForMainWebActivity',
            'com.qzone.reborn.layer.part.QzoneFeedProGalleryActivity',
            'com.qzone.reborn.base.QZoneShellActivity',
            '.activity.SplashActivity'
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/26997174',
            'https://i.gkd.li/i/28942737',
            'https://i.gkd.li/i/30876376'
          ]
        },
        {
          key: 101,
          name: '小世界评论区-点击[广告]',
          matches: 'RelativeLayout[childCount=5] > @LinearLayout[clickable=true][childCount=2][id!=null] > TextView[text="广告"][id!=null]',
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.tencent.biz.qqcircle.activity.QCircleFolderActivity'
          ],
          snapshotUrls: 'https://i.gkd.li/import/12847819'
        },
        {
          key: 102,
          name: '小世界评论区-点击[关闭此条广告]',
          preKeys: 101,
          matches: '@LinearLayout[clickable=true] > TextView[text="关闭此条广告"]',
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.tencent.biz.qqcircle.activity.QCircleFolderActivity'
          ],
          snapshotUrls: 'https://i.gkd.li/import/12847821'
        },
        {
          key: 103,
          name: '钱包页-点击[广告]',
          matches: 'ViewGroup[childCount=6] > [text="广告"]',
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'cooperation.qwallet.plugin.QWalletToolFragmentActivity'
          ],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/import/13695087']
        },
        {
          key: 104,
          name: '钱包页-点击[广告]父节点',
          matches: '@View[visibleToUser=true] > [text="广告"]',
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'cooperation.qwallet.plugin.QWalletToolFragmentActivity'
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/import/14231489'
        },
        {
          key: 105,
          name: '钱包页-点击[关闭此条广告]',
          preKeys: [103, 104],
          matches: '@LinearLayout > [text="关闭此条广告"]',
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'cooperation.qwallet.plugin.QWalletToolFragmentActivity'
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/import/13699701'
        }
      ]
    },
    {
      key: 24,
      name: '全屏广告-弹窗广告',
      desc: '关闭各种场景下的全屏弹窗广告，包括频道页面、钱包页面、黄钻页面等',
      enable: false,
      rules: [
        {
          key: 0,
          name: '频道页面-广告',
          matches: 'ImageView[id="com.tencent.mobileqq:id/close"][clickable=true]',
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog'
          ],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/import/13206663', 'https://i.gkd.li/import/12642081']
        },
        {
          key: 1,
          name: '钱包页面-广告',
          matches: '[desc="弹窗推荐活动"] + [desc="关闭"]',
          activityIds: 'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
          snapshotUrls: 'https://i.gkd.li/i/14822290'
        },
        {
          key: 2,
          name: '黄钻页面-广告',
          matches: 'TextView[text.length=0&&clickable=true&&visibleToUser=true] + View[childCount<=1] > Button[text.length=0&&focusable=true]',
          activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
          snapshotUrls: ['https://i.gkd.li/import/12914978', 'https://i.gkd.li/import/12914886'],
          excludeSnapshotUrls: ['https://i.gkd.li/import/14229202', 'https://i.gkd.li/i/22869121']
        },
        {
          key: 3,
          name: '推广游戏广告弹窗',
          anyMatches: [
            'ViewGroup[childCount=2] > ViewGroup[childCount=3][index=1] > ViewGroup[clickable=true][visibleToUser=true][index=1][childCount=0]',
            'Button[text.length>0][visibleToUser=true] < * -n * > [text*="欢迎回来"][visibleToUser=true] +n ImageView[visibleToUser=true]'
          ],
          activityIds: [
            'com.tencent.mobileqq.activity.QPublicTransFragmentActivity',
            'cooperation.vip.ad.UserLeadingActivity'
          ],
          actionMaximum: 1,
          resetMatch: 'activity',
          matchTime: 10000,
          snapshotUrls: [
            'https://i.gkd.li/import/13797876',
            'https://i.gkd.li/i/15981784',
            'https://i.gkd.li/i/16922256'
          ]
        },
        {
          key: 4,
          name: '小Q提醒',
          matches: 'ViewGroup[childCount=6] > @ViewGroup[index=2][clickable=true][visibleToUser=true] <<n [id="android:id/content"]',
          activityIds: 'com.tencent.mobileqq.activity.QPublicTransFragmentActivity',
          actionMaximum: 1,
          resetMatch: 'app',
          matchTime: 10000,
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/import/14207286', 'https://i.gkd.li/i/15136939']
        },
        {
          key: 5,
          name: '资料卡个性装扮弹窗',
          matches: '[desc^="资料卡可展示"] + [desc="关闭浮层"]',
          activityIds: '.activity.VisitorsActivity',
          snapshotUrls: ['https://i.gkd.li/i/18348068']
        },
        {
          key: 6,
          name: '关闭开启通讯录建议弹窗页面',
          matches: ['[text="开启通讯录"]', '[text="关闭"]'],
          activityIds: '.activity.phone.PhoneMatchActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/18266370'
        }
      ]
    },
    {
      key: 25,
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
          matches: '@[desc="关闭"] - * > [text="发现新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/13386719'
        },
        {
          key: 1,
          matches: '@[text="稍后处理"] +2 [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/14724108'
        },
        {
          key: 3,
          matches: '@[desc="关闭"] - * > [text="QQ测试版"]',
          snapshotUrls: ['https://i.gkd.li/i/13526551', 'https://i.gkd.li/i/22455760']
        }
      ],
      actionMaximumKey: 0
    },
    {
      key: 26,
      name: '分段广告-动态页[好友热播/为你推荐]',
      desc: '点击并关闭好友热播和推荐内容',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
        'com.tencent.mobileqq.activity.SplashActivity'
      ],
      rules: [
        {
          key: 0,
          name: '点击[好友热播]卡片右上角菜单按钮',
          matches: '@[clickable=true][visibleToUser=true][childCount=0] - [text="好友热播" || text="为你推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12721427',
            'https://i.gkd.li/import/12894359',
            'https://i.gkd.li/i/14822579',
            'https://i.gkd.li/i/12929620',
            'https://i.gkd.li/i/13387606'
          ]
        },
        {
          key: 1,
          name: '点击[减少好友热播/为你推荐]',
          preKeys: [0],
          matches: '@[clickable=true] >2 [text="减少好友热播" || text="减少此类推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12721433',
            'https://i.gkd.li/import/12894375',
            'https://i.gkd.li/i/14822576',
            'https://i.gkd.li/i/12929619',
            'https://i.gkd.li/i/13387605'
          ]
        }
      ]
    },
    {
      key: 27,
      name: '通知提示',
      desc: '关闭消息推送开启提示',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches: '@[desc*="关闭"] - * > [text="开启消息推送"]',
          snapshotUrls: 'https://i.gkd.li/i/15051308'
        }
      ]
    },
    {
      key: 28,
      name: '功能类-自动授权',
      desc: '自动点击登录。包括 PC 登录确认、QQ 互联登录确认。',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 1,
          name: 'PC 登录确认',
          matches: [
            '[text="登录确认" || text="一键验证"][visibleToUser=true]',
            'Button[text*="登录" || text="确认" || text^="允许登录"][clickable=true][visibleToUser=true]'
          ],
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.tencent.biz.qrcode.activity.QRLoginAuthActivity',
            'com.tencent.mobileqq.activity.DevlockQuickLoginActivity',
            'com.tencent.mobileqq.activity.DevLockQuickVerifyActivity',
            'com.tencent.biz.pubaccount.api.impl.PublicAccountBrowserImpl'
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13623520',
            'https://i.gkd.li/import/12789287',
            'https://i.gkd.li/import/13063027',
            'https://i.gkd.li/import/13166314',
            'https://i.gkd.li/i/15884502',
            'https://i.gkd.li/i/15884520',
            'https://i.gkd.li/i/20737651',
            'https://i.gkd.li/i/22319172',
            'https://i.gkd.li/i/20737721'
          ]
        },
        {
          key: 2,
          name: 'QQ 互联登录确认',
          matches: 'Button[text="同意"][clickable=true][visibleToUser=true]',
          excludeMatches: ['[text="群通知"]'],
          activityIds: [
            'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
            'com.tencent.open.agent.QuickLoginAuthorityActivity'
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14752498',
            'https://i.gkd.li/i/20737675',
            'https://i.gkd.li/i/22631619'
          ]
        },
        {
          key: 3,
          name: '点击确认',
          preKeys: [1, 2],
          matches: 'Button[text="确认"||text="我知道了"]',
          activityIds: [
            'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
            'com.tencent.biz.pubaccount.api.impl.PublicAccountBrowserImpl'
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14752519',
            'https://i.gkd.li/i/22319176',
            'https://i.gkd.li/i/20737673',
            'https://i.gkd.li/i/22870545'
          ]
        }
      ]
    },
    {
      key: 29,
      name: '局部广告-浮窗广告',
      desc: '关闭等级规则页和频道页的浮窗广告',
      enable: false,
      activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
      rules: [
        {
          key: 0,
          name: '我的等级-浮窗广告',
          matches: 'TextView[text="QQ等级规则"] + View > TextView[id=null&&text.length=0]',
          snapshotUrls: 'https://i.gkd.li/import/12914734'
        },
        {
          key: 1,
          name: '频道-右侧悬浮广告',
          matches: 'FrameLayout[desc="发表帖子"] - LinearLayout[id!=null] >3 ImageView[id!=null][clickable=false] - View[id!=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12708844'
        }
      ]
    },
    {
      key: 30,
      name: '功能类-自动勾选原图',
      desc: '发送图片时自动勾选原图',
      enable: false,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.tencent.qqnt.qbasealbum.WinkHomeActivity',
        'com.tencent.mobileqq.activity.photo.album.NewPhotoListActivity'
      ],
      rules: '@CheckBox[checked=false] + [text="原图"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12705556',
        'https://i.gkd.li/import/12705559',
        'https://i.gkd.li/import/13295142',
        'https://i.gkd.li/import/13476247'
      ]
    },
    {
      key: 31,
      name: '功能类-自动查看原图',
      desc: '浏览图片时自动切换至原图模式',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.tencent.richframework.gallery.QQGalleryActivity',
        'com.tencent.mobileqq.richmediabrowser.AIOGalleryActivity'
      ],
      rules: [
        {
          key: 0,
          name: '点击查看原图',
          matches: '[text^="查看原图"][checked=false][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12840632',
            'https://i.gkd.li/import/12840633',
            'https://i.gkd.li/i/14757735',
            'https://i.gkd.li/i/15024319',
            'https://i.gkd.li/i/24489364'
          ]
        },
        {
          key: 1,
          name: '关闭流量提示弹窗',
          matches: ['[text="流量提醒"]', '[text="继续"]'],
          snapshotUrls: 'https://i.gkd.li/i/18344117'
        }
      ]
    },
    {
      key: 32,
      name: '全屏广告-QQ小程序开屏广告',
      desc: '点击右下角跳过',
      enable: false,
      activityIds: [
        'com.tencent.mobileqq.mini.appbrand.ui.AppBrandUI',
        'com.tencent.mobileqq.activity.miniaio.MiniChatActivity'
      ],
      rules: [
        {
          matches: 'TextView[text = "广告"] < RelativeLayout + RelativeLayout TextView[text = "跳过"]',
          snapshotUrls: ['https://i.gkd.li/import/12877215', 'https://i.gkd.li/import/12919195']
        }
      ]
    },
    {
      key: 33,
      name: '分段广告-天气页卡片广告',
      desc: '点击关闭-点击关闭此条广告',
      enable: false,
      activityIds: [
        'com.tencent.mobileqq.activity.QPublicFragmentActivity',
        'com.tencent.mobileqq.activity.QQBrowserActivity'
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[desc="返回"]',
            '[desc="首页"]',
            '[desc="分享"]',
            'RecyclerView > *[childCount=1] >3 * >n @*[childCount=2][clickable=true][visibleToUser=true]'
          ],
          snapshotUrls: ['https://i.gkd.li/i/14549503', 'https://i.gkd.li/i/14019384']
        },
        {
          key: 1,
          preKeys: 0,
          matches: '@LinearLayout[childCount=3] > [text="关闭此条广告"]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/14019401'
        },
        {
          key: 2,
          preKeys: 0,
          matches: 'View < @ViewGroup[clickable=true][visibleToUser=true] - ViewGroup > ViewGroup[childCount=6] > ViewGroup[childCount=2]',
          snapshotUrls: 'https://i.gkd.li/i/14549504'
        }
      ]
    },
    {
      key: 34,
      name: '功能类-自动领取群聊红包',
      desc: '领取群聊中的普通拼手气红包,不包括自己发的红包、专属红包、口令红包和私聊红包',
      enable: false,
      rules: [
        {
          key: 0,
          matches: 'ImageView[childCount=0] <<(1,2) RelativeLayout < FrameLayout +2 LinearLayout >3 @ViewGroup[clickable=true][!(getChild(childCount.minus(1)).text^="已")] + TextView[text="拼手气红包"]',
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/14221309',
            'https://i.gkd.li/i/18725007',
            'https://i.gkd.li/i/24551887'
          ],
          excludeSnapshotUrls: ['https://i.gkd.li/i/18574530'],
          exampleUrls: 'https://m.gkd.li/57941037/7a933a7f-dc5a-4eb7-8a6f-fe3cc4e8fb5e'
        },
        {
          key: 1,
          preKeys: [0],
          anyMatches: [
            '@[desc="关闭"][clickable=true] < RelativeLayout -2 ViewGroup >4 [text^="来晚一步"][visibleToUser=true]',
            '[desc="拆红包"][visibleToUser=true]'
          ],
          activityIds: [
            'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
            'com.tencent.biz.TenpayActivity'
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14221242',
            'https://i.gkd.li/i/18724880',
            'https://i.gkd.li/i/24551748'
          ],
          exampleUrls: 'https://m.gkd.li/57941037/61006833-9806-45b2-b3a1-55b9b248958f'
        },
        {
          key: 2,
          preKeys: [1],
          matches: '@[desc="返回"] +n [text="红包记录"]',
          activityIds: [
            'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
            'com.tencent.biz.TenpayActivity'
          ],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/14221279', 'https://i.gkd.li/i/24551886'],
          exampleUrls: 'https://m.gkd.li/57941037/b90e6a69-ac57-41a5-bd2c-c500b92a58ba'
        }
      ]
    },
    {
      key: 35,
      name: '功能类-申请入群后自动点击右上角关闭',
      enable: false,
      actionMaximum: 1,
      fastQuery: true,
      activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
      rules: [
        {
          matches: [
            'TextView[text="入群申请中"][visibleToUser=true]',
            'TextView[text="关闭"][visibleToUser=true]'
          ],
          snapshotUrls: 'https://i.gkd.li/import/14235163'
        }
      ]
    },
    {
      key: 36,
      name: '全屏广告-个人主页广告',
      desc: '点击关闭',
      enable: false,
      rules: [
        {
          key: 0,
          name: '迷你窝弹窗',
          action: 'back',
          matches: '[text="开启迷你窝"]',
          activityIds: 'com.tencent.mobileqq.profilecard.activity.FriendProfileCardActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/14188980'
        },
        {
          key: 1,
          name: '个性装扮弹窗',
          matches: ['[desc="关闭浮层"]', '[desc="关闭"][visibleToUser=true]'],
          activityIds: 'cooperation.vip.ad.UserLeadingActivity',
          snapshotUrls: 'https://i.gkd.li/i/15137056',
          excludeSnapshotUrls: 'https://i.gkd.li/i/21792204'
        }
      ]
    },
    {
      key: 37,
      name: '功能类-授权登录时关闭获取QQ好友关系',
      desc: '自动点击关闭获取QQ好友关系',
      enable: false,
      rules: [
        {
          matches: '@CompoundButton[checked=true] - RelativeLayout > [text="你的QQ好友关系"]',
          activityIds: 'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/16929347'
        }
      ]
    },
    {
      key: 38,
      name: '分段广告-QQ空间空友爱看',
      desc: '点击卡片右侧[推荐] ②点击[关闭推荐]',
      enable: false,
      fastQuery: true,
      activityIds: 'com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity',
      rules: [
        {
          key: 0,
          name: '①更多操作',
          matches: '@[desc="更多操作"][clickable=true][visibleToUser=true] <3 * +4 * >5 [text="空友爱看"]',
          snapshotUrls: 'https://i.gkd.li/i/32656065'
        },
        {
          key: 1,
          name: '②不感兴趣',
          preKeys: [0],
          matches: '@[clickable=true] >2 [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/32656067'
        },
        {
          key: 2,
          name: '③选择原因',
          preKeys: [1],
          matches: '[desc="没有我想看的类型 未选中"]',
          activityIds: '.activity.QPublicTransFragmentActivity',
          snapshotUrls: 'https://i.gkd.li/i/32656073'
        },
        {
          key: 3,
          name: '④提交',
          preKeys: [2],
          matches: '[desc$="已选中"] +n * > [desc="提交"]',
          activityIds: '.activity.QPublicTransFragmentActivity',
          snapshotUrls: 'https://i.gkd.li/i/32656070'
        }
      ]
    },
    {
      key: 39,
      name: '局部广告-消息页面-顶部广告',
      desc: '规则误触,待修复,需要快照准确定位',
      enable: false,
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        {
          key: 0,
          matches: 'TextView[text!=null] < LinearLayout + ImageView[desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12892726',
            'https://i.gkd.li/import/12774870',
            'https://i.gkd.li/import/13207766',
            'https://i.gkd.li/import/13386518'
          ]
        },
        {
          key: 1,
          name: '局部广告-消息页面-顶部惊喜礼包',
          matches: '[text*="惊喜礼包"] + FrameLayout + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13426912'
        },
        {
          key: 2,
          matches: 'ImageView + RelativeLayout[childCount=2] > TextView[text!=null] + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13476400'
        }
      ]
    },
    {
      key: 40,
      name: '局部广告-频道页面广告',
      enable: false,
      rules: [
        {
          name: '弹窗广告',
          matches: 'ImageView[id="com.tencent.mobileqq:id/close"][clickable=true]',
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog'
          ],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/import/13206663', 'https://i.gkd.li/import/12642081']
        },
        {
          name: '右侧悬浮广告',
          matches: 'FrameLayout[desc="发表帖子"] - LinearLayout[id!=null] >3 ImageView[id!=null][clickable=false] - View[id!=null][clickable=true]',
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          snapshotUrls: 'https://i.gkd.li/import/12708844'
        }
      ]
    },
    {
      key: 41,
      name: '局部广告-顶部SVIP广告',
      desc: '消息界面-搜索框和消息记录之间的广告卡片,点击关闭右侧x',
      enable: false,
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: 'LinearLayout > TextView[text*="SVIP"||text*="超级会员"] + FrameLayout[childCount<=2] + [name$="ImageView"||name$="Button"][id!=null][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/12706907',
        'https://i.gkd.li/import/13107298',
        'https://i.gkd.li/import/12793359',
        'https://i.gkd.li/import/12855048',
        'https://i.gkd.li/import/13228108'
      ]
    },
    {
      key: 42,
      name: '局部广告-好友热播',
      desc: '好友动态中的好友热播，自动选择“减少好友热播” - 默认关闭',
      enable: false,
      activityIds: [
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
        'com.tencent.mobileqq.activity.SplashActivity'
      ],
      rules: [
        {
          name: '点击[好友热播]卡片右上角菜单按钮',
          matches: 'TextView[text="好友热播"] + Button[id^="com.tencent.mobileqq.qzone_df_impl:id/"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/12721427', 'https://i.gkd.li/import/12894359']
        },
        {
          name: '点击[减少好友热播]',
          matches: 'TextView[text="减少好友热播"] <2 LinearLayout < LinearLayout[id^="com.tencent.mobileqq.qzone_df_impl:id/"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/12721433', 'https://i.gkd.li/import/12894375']
        }
      ]
    },
    {
      key: 43,
      name: '功能类-扫一扫-登录确认',
      desc: '自动点击登录。包括 PC 登录确认、QQ 互联登录确认。',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 1,
          name: 'PC 登录确认',
          matches: 'TextView[text="登录确认"||text="一键验证"] <n * +n * >n Button[text*="登录"]',
          activityIds: [
            'com.tencent.biz.qrcode.activity.QRLoginAuthActivity',
            'com.tencent.mobileqq.activity.DevlockQuickLoginActivity'
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13623520',
            'https://i.gkd.li/import/12789287',
            'https://i.gkd.li/import/13063027'
          ]
        },
        {
          key: 2,
          name: 'QQ 互联登录确认',
          matches: 'Button[text="拒绝"] - Button[text="登录"]',
          activityIds: ['com.tencent.mobileqq.activity.DevLockQuickVerifyActivity'],
          snapshotUrls: ['https://i.gkd.li/import/13166314']
        }
      ]
    },
    {
      key: 44,
      name: '局部广告-消息页面顶部-无法接收新消息通知',
      desc: '消息界面-搜索框和消息记录之间的通知卡片,点击关闭右侧x',
      enable: false,
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: 'RelativeLayout > [text^="当前无法接收"] + ImageView',
      snapshotUrls: 'https://i.gkd.li/import/12855441'
    },
    {
      key: 45,
      name: '局部广告-我的等级-浮窗广告',
      enable: false,
      activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
      rules: 'TextView[text="QQ等级规则"] + View > TextView[id=null&&text.length=0]',
      snapshotUrls: 'https://i.gkd.li/import/12914734'
    },
    {
      key: 46,
      name: '局部广告-QQ小世界评论区广告',
      desc: '点击广告-弹出原因框-关闭此条广告',
      enable: false,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.tencent.biz.qqcircle.activity.QCircleFolderActivity'
      ],
      rules: [
        {
          key: 0,
          matches: 'RelativeLayout[childCount=5] > @LinearLayout[clickable=true][childCount=2][id!=null] > TextView[text="广告"][id!=null]',
          snapshotUrls: 'https://i.gkd.li/import/12847819'
        },
        {
          preKeys: 0,
          matches: '@LinearLayout[clickable=true] > TextView[text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12847821'
        }
      ]
    },
    {
      key: 47,
      name: '全屏广告-黄钻-弹窗广告',
      enable: false,
      activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
      rules: 'TextView[text.length=0&&clickable=true&&visibleToUser=true] + View > Button[text.length=0&&focusable=true]',
      snapshotUrls: ['https://i.gkd.li/import/12914978', 'https://i.gkd.li/import/12914886']
    },
    {
      key: 48,
      name: '局部广告-好友动态-为你推荐',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity'
      ],
      rules: [
        {
          key: 0,
          matches: '@ImageView[clickable=true] - [text="为你推荐"]',
          snapshotUrls: ['https://i.gkd.li/import/12929620', 'https://i.gkd.li/import/13387606']
        },
        {
          key: 1,
          preKeys: 0,
          matches: '@LinearLayout[id!=null][clickable=true] > LinearLayout > [text="减少此类推荐"]',
          snapshotUrls: ['https://i.gkd.li/import/12929619', 'https://i.gkd.li/import/13387605']
        }
      ]
    },
    {
      key: 49,
      name: '全屏广告-内测邀请弹窗',
      enable: false,
      fastQuery: true,
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        {
          key: 0,
          matches: '@ImageView[desc="关闭"] <2 * >2 [text="QQ测试版"]',
          snapshotUrls: 'https://i.gkd.li/import/13526551'
        }
      ]
    },
    {
      key: 50,
      name: '全屏广告-钱包-卡片广告',
      enable: false,
      fastQuery: true,
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        {
          key: 0,
          matches: 'ViewGroup[childCount=6] > [text="广告"]',
          snapshotUrls: ['https://i.gkd.li/import/13695087']
        },
        {
          key: 1,
          preKeys: 0,
          matches: '@LinearLayout > [text="关闭此条广告"]',
          snapshotUrls: ['https://i.gkd.li/import/13699701']
        }
      ]
    },
    {
      key: 51,
      name: '全屏广告-首页广告弹窗',
      enable: false,
      rules: [
        {
          key: 0,
          name: '元梦之星广告弹窗',
          matches: 'ViewGroup[childCount=2] > ViewGroup[childCount=3][index=1] > ViewGroup[clickable=true][visibleToUser=true][index=1][childCount=0]',
          activityIds: 'com.tencent.mobileqq.activity.QPublicTransFragmentActivity',
          snapshotUrls: 'https://i.gkd.li/import/13797876'
        }
      ]
    }
  ]
});
