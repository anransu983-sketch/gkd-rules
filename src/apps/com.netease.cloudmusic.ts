import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      enable: false,
      key: 1,
      name: '分段广告',
      desc: '有二次确认弹窗',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '卡片式广告',
          activityIds: [
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
            'com.netease.cloudmusic.music.biz.comment.activity.ReplyCommentActivity2',
            'com.netease.cloudmusic.music.biz.search.activity.SearchActivity'
          ],
          matches: ['[id="com.netease.cloudmusic:id/adTagView"]', '[vid="adTagClose"]'],
          snapshotUrls: [
            'https://i.gkd.li/import/12829944',
            'https://i.gkd.li/import/12723229',
            'https://i.gkd.li/import/12829938',
            'https://i.gkd.li/import/12829964',
            'https://i.gkd.li/import/12829953',
            'https://i.gkd.li/import/13859634'
          ]
        },
        {
          key: 1,
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[vid="tag_ad_banner"]',
          snapshotUrls: 'https://i.gkd.li/import/13927753'
        },
        {
          key: 2,
          name: '信息流广告-评论区内容推荐',
          activityIds: 'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
          matches: '@ViewGroup[clickable=true][childCount=2] > ImageView - ViewGroup > TextView[text.length>0]',
          snapshotUrls: ['https://i.gkd.li/import/13526986', 'https://i.gkd.li/import/13526711']
        },
        {
          preKeys: [0, 1],
          key: 90,
          activityIds: [
            'com.netease.cloudmusic.module.ad.feedback.AdFeedbackBottomSheet',
            'com.netease.cloudmusic.music.biz.search.activity.SearchActivity',
            'com.netease.cloudmusic.activity.MainActivity'
          ],
          matches: '[text="直接关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12829967',
            'https://i.gkd.li/import/13627047',
            'https://i.gkd.li/import/13859635'
          ]
        },
        {
          preKeys: 2,
          key: 91,
          activityIds: 'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
          matches: '@[id="com.netease.cloudmusic:id/artist_container"] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13526712'
        }
      ]
    },
    {
      key: 2,
      name: '我的页面-中间滚动广告',
      fastQuery: true,
      activityIds: ['com.netease.cloudmusic.activity.MainActivity'],
      rules: '[id="com.netease.cloudmusic:id/auto_scroll_switcher"] + [id="com.netease.cloudmusic:id/close_btn"]',
      snapshotUrls: ['https://i.gkd.li/import/12745666']
    },
    {
      key: 3,
      name: '主页-免费听歌',
      fastQuery: true,
      activityIds: ['com.netease.cloudmusic.activity.MainActivity'],
      rules: ['@ImageView + ViewGroup > TextView[text="VIP歌曲免费听30分钟"]'],
      snapshotUrls: ['https://i.gkd.li/import/12843383']
    },
    {
      key: 4,
      name: '弹窗广告',
      activityIds: 'com.netease.cloudmusic.activity.MainActivity',
      rules: [
        {
          key: 0,
          name: '音乐专辑售卖广告弹窗',
          matches: 'WebView >n View > TextView + TextView + TextView',
          snapshotUrls: 'https://i.gkd.li/import/13188737'
        },
        {
          key: 1,
          name: '京东双十一广告弹窗',
          matches: '[text="广告"] < ViewGroup + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13229016'
        },
        {
          key: 2,
          matches: '[id="com.netease.cloudmusic:id/dsl_dialog_root"] >n ViewGroup[childCount=2] > ImageView + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13684724'
        }
      ]
    },
    {
      enable: false,
      key: 5,
      name: 'VIP 弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
          matches: 'ImageView < @ViewGroup[clickable=true] <2 ViewGroup < ViewGroup + ScrollView [text="会员套餐"]',
          snapshotUrls: ['https://i.gkd.li/import/13189055', 'https://i.gkd.li/import/13260416']
        },
        {
          key: 1,
          name: '专属优惠-VIP续费弹窗',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '@ImageView - ViewGroup > [text="解锁千万级会员曲库"]',
          snapshotUrls: 'https://i.gkd.li/import/13228955'
        },
        {
          key: 2,
          name: '解锁更高音质',
          activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
          matches: '@ImageView -2 ViewGroup [text="解锁更高音质"]',
          snapshotUrls: 'https://i.gkd.li/import/13230603'
        },
        {
          key: 3,
          name: '黑胶过期-VIP续费弹窗',
          activityIds: 'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
          matches: 'ImageView < @ViewGroup -3 ViewGroup [text="您的黑胶VIP已过期"]',
          snapshotUrls: 'https://i.gkd.li/import/13230605'
        },
        {
          key: 4,
          name: '搭配会员音效-VIP支付弹窗',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[text*="搭配会员音效"] + @ViewGroup[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13391498'
        }
      ]
    },
    {
      key: 6,
      name: '更新弹窗',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity'
          ],
          matches: '[id="com.netease.cloudmusic:id/md_dialog_cm_close_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13233790',
            'https://i.gkd.li/import/13197457',
            'https://i.gkd.li/import/13228878'
          ]
        }
      ]
    },
    {
      enable: false,
      key: 7,
      name: '播放界面广告',
      desc: '右上角VIP小悬浮、巨幅卡片式广告',
      fastQuery: true,
      activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
      rules: [
        {
          key: 0,
          name: '右上角VIP小悬浮',
          matches: 'TextView[text!=null] + ImageView[id="com.netease.cloudmusic:id/close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13402634',
            'https://i.gkd.li/import/13402635',
            'https://i.gkd.li/import/13402636'
          ]
        },
        {
          key: 1,
          name: '巨幅卡片式广告',
          matches: '[text^="跳过广告"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13527105'
        }
      ]
    },
    {
      key: 8,
      name: '发现-顶部视频广告',
      desc: '自动点击跳过。',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[id="com.netease.cloudmusic:id/skipBannerAd"]',
          snapshotUrls: 'https://i.gkd.li/import/13768367'
        }
      ]
    },
    {
      key: 9,
      name: '免费听弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.netease.cloudmusic.activity.MainActivity',
      matchTime: 10000,
      rules: '@ImageView + ViewGroup > [text="VIP歌曲免费听30分钟"]',
      snapshotUrls: 'https://i.gkd.li/import/13804534'
    },
    {
      key: 10,
      name: '功能升级弹窗',
      rules: [
        {
          key: 0,
          name: '【我的】升级-下次再说',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[text="下次再说"] < ViewGroup',
          snapshotUrls: 'https://i.gkd.li/import/13804541'
        },
        {
          key: 1,
          name: '【社区广场】升级-点击右上角x',
          activityIds: 'com.netease.cloudmusic.music.biz.rn.activity.LayerReactNativeActivity',
          matches: '[text="社区广场全新升级"] + ViewGroup > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13804544'
        }
      ]
    },
    {
      key: 11,
      fastQuery: true,
      name: '全屏广告-播放页赞赏好音乐弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
          matches: '@ImageView[clickable=true] +3 * > [text="立即支持"]',
          snapshotUrls: 'https://i.gkd.li/import/13848913'
        }
      ]
    },
    {
      key: 12,
      name: '分段广告-卡片广告',
      desc: '点击[关闭]-点击[直接关闭]/[不感兴趣]；搜索页规则触发时会收起输入法',
      enable: false,
      rules: [
        {
          key: 0,
          matches: '[vid="tag_ad_banner" || vid="adTagView" || vid="closeAction"][clickable=true]',
          activityIds: [
            '.activity.MainActivity',
            '.music.biz.comment.activity.CommentActivity',
            '.music.biz.voice.player.revisionV1.ProgramPlayerActivityV1'
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/13859634',
            'https://i.gkd.li/i/13927753',
            'https://i.gkd.li/i/14549836',
            'https://i.gkd.li/i/14275955',
            'https://i.gkd.li/i/16047087'
          ]
        },
        {
          key: 1,
          matches: '@ViewGroup[clickable=true][childCount=2] > ImageView - ViewGroup > TextView[text.length>0] <<n [vid="recyclerView"]',
          activityIds: '.music.biz.comment.activity.CommentActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23771616'
        },
        {
          key: 2,
          matches: '@ViewGroup[clickable=true][childCount=1] + ViewGroup[childCount=1] > [text="艺人相关"]',
          activityIds: '.music.biz.comment.activity.CommentActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23771678'
        },
        {
          key: 90,
          anyMatches: ['[text="直接关闭"][clickable=true]', '@[clickable=true] > [text="不感兴趣"]'],
          activityIds: [
            '.activity.MainActivity',
            '.music.biz.comment.activity.CommentActivity',
            '.music.biz.voice.player.revisionV1.ProgramPlayerActivityV1'
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/13859635',
            'https://i.gkd.li/i/14932659',
            'https://i.gkd.li/i/16047089',
            'https://i.gkd.li/i/23771645'
          ]
        },
        {
          key: 91,
          name: '搜索页-点击广告标记',
          matches: '[vid="adTagView" || vid="adTagViewNew"][clickable=true]',
          activityIds: '.music.biz.search.activity.SearchActivity',
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/16357208', 'https://i.gkd.li/i/16357111'],
          exampleUrls: 'https://e.gkd.li/afb3fc72-7a69-489a-ac5a-7a70f5685667'
        },
        {
          key: 92,
          name: '搜索页-直接关闭',
          preKeys: [91],
          matches: '[text="直接关闭"]',
          activityIds: '.music.biz.search.activity.SearchActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/16357210',
          exampleUrls: 'https://e.gkd.li/1e2b2822-01dd-455f-8991-1b746c61c07c'
        }
      ]
    },
    {
      key: 13,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches: '[vid="iv_ad_close"]',
          activityIds: '.activity.PlayerActivity',
          snapshotUrls: 'https://i.gkd.li/i/15282417'
        },
        {
          key: 1,
          matches: '[vid="adCloseIV"][visibleToUser=true]',
          activityIds: '.music.biz.search.activity.SearchActivity',
          snapshotUrls: 'https://i.gkd.li/i/16385547'
        }
      ]
    },
    {
      key: 14,
      name: '全屏广告-弹窗广告',
      enable: false,
      activityIds: 'com.netease.cloudmusic.activity.MainActivity',
      rules: [
        {
          key: 0,
          name: '音乐专辑售卖广告弹窗',
          matches: 'WebView >n View > TextView + TextView + TextView',
          snapshotUrls: 'https://i.gkd.li/import/13188737'
        },
        {
          key: 1,
          name: '京东双十一广告弹窗',
          matches: '[text="广告"] < ViewGroup + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13229016'
        },
        {
          key: 2,
          matches: '[id="com.netease.cloudmusic:id/dsl_dialog_root"] >n ViewGroup[childCount=2] > ImageView + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13684724'
        }
      ]
    },
    {
      key: 15,
      name: '全屏广告-VIP弹窗',
      desc: '点击关闭VIP类弹窗广告',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 0,
          action: 'back',
          matches: [
            '[text="支付宝"][visibleToUser=true]',
            '[text^="确认协议并" || text="立即开通"][visibleToUser=true]'
          ],
          activityIds: [
            '.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
            '.activity.MainActivity',
            '.activity.PlayListActivity',
            '.music.biz.rn.activity.LayerReactNativeActivity'
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13189055',
            'https://i.gkd.li/i/13260416',
            'https://i.gkd.li/i/13996787',
            'https://i.gkd.li/i/13230605',
            'https://i.gkd.li/i/14268181',
            'https://i.gkd.li/i/13391498',
            'https://i.gkd.li/i/14045917',
            'https://i.gkd.li/i/14926722',
            'https://i.gkd.li/i/16242200',
            'https://i.gkd.li/i/20097276',
            'https://i.gkd.li/i/20218350'
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/20097306'
        },
        {
          key: 1,
          matches: '[text="忍痛离开"] < @ViewGroup[clickable=true] -n * > [text$="VIP可畅享千万曲库"]',
          activityIds: 'com.netease.cloudmusic.music.biz.rn.activity.CashierRNActivity',
          snapshotUrls: 'https://i.gkd.li/i/24548104'
        }
      ]
    },
    {
      key: 16,
      name: '功能类-扫码后自动点击[授权登录]',
      enable: false,
      rules: [
        {
          matches: '[text="授权登录"][clickable=true]',
          activityIds: '.module.login.LoginPermissionActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/14830218'
        }
      ]
    },
    {
      key: 17,
      name: '局部广告-我的页面-中间滚动广告',
      enable: false,
      fastQuery: true,
      activityIds: ['com.netease.cloudmusic.activity.MainActivity'],
      rules: '[id="com.netease.cloudmusic:id/auto_scroll_switcher"] + [id="com.netease.cloudmusic:id/close_btn"]',
      snapshotUrls: ['https://i.gkd.li/import/12745666']
    },
    {
      key: 18,
      name: '功能类-主页-免费听歌',
      enable: false,
      fastQuery: true,
      activityIds: ['com.netease.cloudmusic.activity.MainActivity'],
      rules: ['@ImageView + ViewGroup > TextView[text="VIP歌曲免费听30分钟"]'],
      snapshotUrls: ['https://i.gkd.li/import/12843383']
    },
    {
      key: 19,
      name: '全屏广告-VIP 弹窗',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches: 'ImageView < @ViewGroup[clickable=true] <2 ViewGroup < ViewGroup + ScrollView [text="会员套餐"]',
          activityIds: 'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
          snapshotUrls: ['https://i.gkd.li/import/13189055', 'https://i.gkd.li/import/13260416']
        },
        {
          key: 1,
          name: '专属优惠-VIP续费弹窗',
          matches: '@ImageView - ViewGroup > [text="解锁千万级会员曲库"]',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          snapshotUrls: 'https://i.gkd.li/import/13228955'
        },
        {
          key: 2,
          name: '解锁更高音质',
          matches: '@ImageView -2 ViewGroup [text="解锁更高音质"]',
          activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
          snapshotUrls: 'https://i.gkd.li/import/13230603'
        },
        {
          key: 3,
          name: '黑胶过期-VIP续费弹窗',
          matches: 'ImageView < @ViewGroup -3 ViewGroup [text="您的黑胶VIP已过期"]',
          activityIds: 'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
          snapshotUrls: 'https://i.gkd.li/import/13230605'
        },
        {
          key: 4,
          name: '搭配会员音效-VIP支付弹窗',
          matches: '[text*="搭配会员音效"] + @ViewGroup[childCount=1] > ImageView',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          snapshotUrls: 'https://i.gkd.li/import/13391498'
        }
      ]
    },
    {
      key: 20,
      name: '更新提示',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches: '[id="com.netease.cloudmusic:id/md_dialog_cm_close_btn"]',
          activityIds: [
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity'
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13233790',
            'https://i.gkd.li/import/13197457',
            'https://i.gkd.li/import/13228878'
          ]
        }
      ]
    },
    {
      key: 21,
      name: '局部广告-播放界面广告',
      desc: '右上角VIP小悬浮、巨幅卡片式广告',
      enable: false,
      fastQuery: true,
      activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
      rules: [
        {
          key: 0,
          name: '右上角VIP小悬浮',
          matches: 'TextView[text!=null] + ImageView[id="com.netease.cloudmusic:id/close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13402634',
            'https://i.gkd.li/import/13402635',
            'https://i.gkd.li/import/13402636'
          ]
        },
        {
          key: 1,
          name: '巨幅卡片式广告',
          matches: '[text^="跳过广告"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13527105'
        }
      ]
    },
    {
      key: 22,
      name: '局部广告-发现-顶部视频广告',
      desc: '自动点击跳过。',
      enable: false,
      fastQuery: true,
      rules: [
        {
          matches: '[id="com.netease.cloudmusic:id/skipBannerAd"]',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          snapshotUrls: 'https://i.gkd.li/import/13768367'
        }
      ]
    },
    {
      key: 23,
      name: '功能类-免费听弹窗',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      activityIds: 'com.netease.cloudmusic.activity.MainActivity',
      rules: '@ImageView + ViewGroup > [text="VIP歌曲免费听30分钟"]',
      snapshotUrls: 'https://i.gkd.li/import/13804534'
    },
    {
      key: 24,
      name: '全屏广告-功能升级弹窗',
      enable: false,
      rules: [
        {
          key: 0,
          name: '【我的】升级-下次再说',
          matches: '[text="下次再说"] < ViewGroup',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          snapshotUrls: 'https://i.gkd.li/import/13804541'
        },
        {
          key: 1,
          name: '全屏广告-【社区广场】升级-点击右上角x',
          matches: '[text="社区广场全新升级"] + ViewGroup > ImageView',
          activityIds: 'com.netease.cloudmusic.music.biz.rn.activity.LayerReactNativeActivity',
          snapshotUrls: 'https://i.gkd.li/import/13804544'
        }
      ]
    }
  ]
});
