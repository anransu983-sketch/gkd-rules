import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wps.moffice_eng',
  name: 'WPS',
  groups: [
    {
      key: 1,
      name: '首页-文档列表广告',
      exampleUrls: [
        'https://github.com/gkd-kit/subscription/assets/38517192/57787554-0443-4bc0-9f29-1759aae07b9b'
      ],
      activityIds: [
        'cn.wps.moffice.main.StartPublicActivity',
        'cn.wps.moffice.documentmanager.PreStartActivity',
        'cn.wps.moffice.main.local.HomeRootActivity'
      ],
      rules: [
        {
          key: 0,
          matches: '[id$="/nativeclose"]',
          snapshotUrls: ['https://i.gkd.li/import/12505350', 'https://i.gkd.li/import/12505286']
        },
        {
          preKeys: 0,
          matches: '[text="关闭当前广告"||text="不喜欢此广告"]',
          snapshotUrls: ['https://i.gkd.li/import/12505365', 'https://i.gkd.li/import/13259090']
        }
      ]
    },
    {
      key: 2,
      name: '首页-弹窗广告',
      fastQuery: true,
      activityIds: [
        'cn.wps.moffice.main.AfterLoginActivity',
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity'
      ],
      rules: '[id="cn.wps.moffice_eng:id/afterlogin_cancel"]',
      snapshotUrls: ['https://i.gkd.li/import/13259097', 'https://i.gkd.li/import/12882712']
    },
    {
      enable: false,
      key: 3,
      name: '升级提示',
      activityIds: [
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
        'cn.wps.moffice.main.local.HomeRootActivity'
      ],
      rules: '[id="cn.wps.moffice_eng:id/close_new_func_guide_dialog_imageView"]',
      snapshotUrls: 'https://i.gkd.li/import/12882371'
    },
    {
      enable: false,
      key: 4,
      name: '开启WPS云服务',
      desc: '自动点击不开启',
      activityIds: [
        'cn.wps.moffice.main.cloud.roaming.login.core.QingLoginActivity',
        'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
        'com.tencent.mm.ui.base.w'
      ],
      rules: [
        {
          matches: '[id="cn.wps.moffice_eng:id/cloud_protocol_dialog_not_start_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12882536',
            'https://i.gkd.li/import/12882610',
            'https://i.gkd.li/import/12882678'
          ]
        },
        {
          matches: '[id="cn.wps.moffice_eng:id/dialog_button_positive"]',
          snapshotUrls: 'https://i.gkd.li/import/12882554'
        }
      ]
    },
    {
      key: 5,
      name: '文档末尾广告',
      activityIds: ['cn.wps.moffice.writer.multiactivity.Writer'],
      rules: [
        {
          key: 1,
          matches: '[id="cn.wps.moffice_eng:id/doc_end_ad_container_main"] >2 [id="cn.wps.moffice_eng:id/btn_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13513911'
        },
        {
          preKeys: 1,
          key: 2,
          matches: '[text="关闭当前广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13513914'
        }
      ]
    },
    {
      key: 6,
      name: '首页-底部广告',
      fastQuery: true,
      activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
      rules: '[id="cn.wps.moffice_eng:id/home_banner_ad_spread_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13804525'
    },
    {
      key: 7,
      name: '分段广告-首页文档列表广告',
      desc: '关闭首页文档列表中的广告',
      enable: false,
      fastQuery: true,
      activityIds: [
        'cn.wps.moffice.main.StartPublicActivity',
        'cn.wps.moffice.documentmanager.PreStartActivity',
        'cn.wps.moffice.main.local.HomeRootActivity'
      ],
      rules: [
        {
          key: 0,
          matches: '[id="com.mopub.ad.xiaomi:id/nativeclose"]',
          snapshotUrls: ['https://i.gkd.li/i/12505350', 'https://i.gkd.li/i/12505286']
        },
        {
          key: 99,
          preKeys: [0],
          matches: '[text="不喜欢此广告"]',
          snapshotUrls: ['https://i.gkd.li/i/12505365', 'https://i.gkd.li/i/13259090']
        }
      ]
    },
    {
      key: 8,
      name: '全屏广告-弹窗广告',
      desc: '关闭登录后弹窗和体验会员提示弹窗',
      enable: false,
      rules: [
        {
          key: 0,
          matches: '[vid="afterlogin_cancel"]',
          activityIds: [
            'cn.wps.moffice.main.AfterLoginActivity',
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity'
          ],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/13259097', 'https://i.gkd.li/i/12882712']
        },
        {
          key: 1,
          matches: '@TextView[clickable=true] -2 Image[text!=null] <<2 View - [id="app"] <<5 [vid="push_tips_ptr_super_webview"]',
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/13945835'
        },
        {
          key: 2,
          matches: '[vid="cloud_popup_close_view"][clickable=true]',
          activityIds: 'cn.wps.moffice.plugin.cloudPage.newpage.NewCloudSettingNewActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23786698'
        }
      ]
    },
    {
      key: 9,
      name: '全屏广告-关闭[开启WPS云服务]弹窗',
      desc: '自动点击不开启',
      enable: false,
      fastQuery: true,
      activityIds: [
        'cn.wps.moffice.main.cloud.roaming.login.core.QingLoginActivity',
        'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
        'com.tencent.mm.ui.base.w'
      ],
      rules: [
        {
          key: 1,
          matches: '[vid="cloud_protocol_dialog_not_start_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12882536',
            'https://i.gkd.li/i/12882610',
            'https://i.gkd.li/i/12882678'
          ]
        },
        {
          key: 2,
          matches: '[vid="dialog_button_positive"]',
          snapshotUrls: 'https://i.gkd.li/i/12882554'
        }
      ]
    },
    {
      key: 10,
      name: '分段广告-文档末尾广告',
      desc: '关闭文档末尾的广告内容',
      enable: false,
      fastQuery: true,
      activityIds: 'cn.wps.moffice.writer.multiactivity.Writer',
      rules: [
        {
          key: 1,
          matches: '[vid="doc_end_ad_container_main"] >2 [vid="btn_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13513911'
        },
        {
          key: 2,
          preKeys: [1],
          matches: '[text="关闭当前广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13513914'
        }
      ]
    },
    {
      key: 11,
      name: '局部广告',
      desc: '关闭各类局部广告',
      enable: false,
      rules: [
        {
          key: 1,
          matches: '[vid="home_banner_ad_spread_close" || vid="phone_message_close_button" || vid="close_home_ad_banner_iv" || vid="iv_item_close" || vid="iv_cloud_sync_close"][visibleToUser=true]',
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/13804525',
            'https://i.gkd.li/i/17893252',
            'https://i.gkd.li/i/18047731',
            'https://i.gkd.li/i/23577590',
            'https://i.gkd.li/i/23786789'
          ]
        },
        {
          key: 2,
          matches: '[vid="public_login"] <2 LinearLayout[childCount=2] + [vid="public_close"][clickable=true][visibleToUser=true]',
          activityIds: 'cn.wps.moffice.writer.multiactivity.Writer1',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/26026279',
          exampleUrls: 'https://e.gkd.li/a17eca15-c7bd-4ea6-ba84-0d3242641697'
        },
        {
          key: 3,
          matches: '[vid="home_page_list_view"] [vid="card_v"] >2 LinearLayout + * > [vid="close_iv"][visibleToUser=true]',
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/28419645'
        }
      ]
    },
    {
      key: 12,
      name: '局部广告-首页-文档列表广告',
      enable: false,
      fastQuery: true,
      activityIds: [
        'cn.wps.moffice.main.StartPublicActivity',
        'cn.wps.moffice.documentmanager.PreStartActivity',
        'cn.wps.moffice.main.local.HomeRootActivity'
      ],
      rules: [
        {
          key: 0,
          matches: '[id="cn.wps.moffice_eng:id/nativeclose"||id="com.mopub.ad.xiaomi:id/nativeclose"]',
          snapshotUrls: ['https://i.gkd.li/import/12505350', 'https://i.gkd.li/import/12505286']
        },
        {
          preKeys: 0,
          matches: '[text="关闭当前广告"||text="不喜欢此广告"]',
          snapshotUrls: ['https://i.gkd.li/import/12505365', 'https://i.gkd.li/import/13259090']
        }
      ],
      exampleUrls: [
        'https://github.com/gkd-kit/subscription/assets/38517192/57787554-0443-4bc0-9f29-1759aae07b9b'
      ]
    },
    {
      key: 13,
      name: '全屏广告-首页-弹窗广告',
      enable: false,
      fastQuery: true,
      activityIds: [
        'cn.wps.moffice.main.AfterLoginActivity',
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity'
      ],
      rules: '[id="cn.wps.moffice_eng:id/afterlogin_cancel"]',
      snapshotUrls: ['https://i.gkd.li/import/13259097', 'https://i.gkd.li/import/12882712']
    },
    {
      key: 14,
      name: '更新提示',
      enable: false,
      activityIds: [
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
        'cn.wps.moffice.main.local.HomeRootActivity'
      ],
      rules: '[id="cn.wps.moffice_eng:id/close_new_func_guide_dialog_imageView"]',
      snapshotUrls: 'https://i.gkd.li/import/12882371'
    },
    {
      key: 15,
      name: '全屏广告-开启WPS云服务',
      desc: '自动点击不开启',
      enable: false,
      activityIds: [
        'cn.wps.moffice.main.cloud.roaming.login.core.QingLoginActivity',
        'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
        'com.tencent.mm.ui.base.w'
      ],
      rules: [
        {
          matches: '[id="cn.wps.moffice_eng:id/cloud_protocol_dialog_not_start_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12882536',
            'https://i.gkd.li/import/12882610',
            'https://i.gkd.li/import/12882678'
          ]
        },
        {
          matches: '[id="cn.wps.moffice_eng:id/dialog_button_positive"]',
          snapshotUrls: 'https://i.gkd.li/import/12882554'
        }
      ]
    },
    {
      key: 16,
      name: '局部广告-文档末尾广告',
      enable: false,
      fastQuery: true,
      activityIds: ['cn.wps.moffice.writer.multiactivity.Writer'],
      rules: [
        {
          key: 1,
          matches: '[id="cn.wps.moffice_eng:id/doc_end_ad_container_main"] >2 [id="cn.wps.moffice_eng:id/btn_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13513911'
        },
        {
          key: 2,
          preKeys: 1,
          matches: '[text="关闭当前广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13513914'
        }
      ]
    },
    {
      key: 17,
      name: '局部广告-首页-底部广告',
      enable: false,
      fastQuery: true,
      activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
      rules: '[id="cn.wps.moffice_eng:id/home_banner_ad_spread_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13804525'
    }
  ]
});
