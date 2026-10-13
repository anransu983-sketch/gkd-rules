import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.miui.packageinstaller',
  name: '应用包管理组件',
  groups: [
    {
      key: 0,
      name: '功能类-自动第三方安装应用',
      desc: '自动允许第三方应用调用安装，安装应用',
      enable: false,
      rules: [
        {
          key: 0,
          activityIds: [],
          matches:
            'TextView[text*="尝试安装应用"] < LinearLayout +2n LinearLayout > Button[text="继续"]',
          snapshotUrls: 'https://i.gkd.li/import/12874746',
        },
        {
          key: 1,
          activityIds: [
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
          matches: '@[text="允许"] + [text="禁止"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13054478',
            'https://i.gkd.li/import/13399425',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '功能类-自动安装应用',
      desc: '启用后安装高风险应用将自动完成，请自行评估风险决定是否启用',
      enable: false,
      rules: [
        {
          key: 0,
          name: '点击【继续安装】',
          activityIds: [
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
          matches:
            '[text="取消安装"] < LinearLayout - @FrameLayout > LinearLayout > [text="继续安装"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12818034',
            'https://i.gkd.li/import/12818054',
          ],
        },
        {
          key: 1,
          name: '点击【继续安装】2',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches: '@[text="继续安装"] + [text="取消安装"]',
          snapshotUrls: 'https://i.gkd.li/import/12889120',
        },
        {
          key: 2,
          name: '勾选【已了解此应用未经安全检测】',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches:
            '[id="com.miui.packageinstaller:id/install_checked"][checked=false]',
          snapshotUrls: [
            'https://i.gkd.li/import/12888410',
            'https://i.gkd.li/import/12889120',
          ],
        },
        {
          key: 3,
          name: '点击【了解风险】',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches: '@[text="了解风险"] + [text="取消安装"]',
          snapshotUrls: 'https://i.gkd.li/import/12889135',
        },
        {
          preKeys: 3,
          key: 4,
          name: '勾选【已了解此应用存在高风险】',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches:
            '[id="com.miui.packageinstaller:id/install_checked"][checked=false]',
          snapshotUrls: [
            'https://i.gkd.li/import/12889137',
            'https://i.gkd.li/import/12889148',
          ],
        },
        {
          preKeys: 4,
          key: 5,
          name: '点击【仍然安装】',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches: '@[text="仍然安装"] + [text="取消安装"]',
          snapshotUrls: 'https://i.gkd.li/import/12889148',
        },
        {
          key: 6,
          name: '点击【完成】',
          activityIds: [
            'com.miui.packageInstaller.ui.normalmode.InstallProgressActivity',
            'com.miui.packageInstaller.InstallProgressActivity',
            'com.miui.packageInstaller.ui.securemode.PureInstallProgressActivity',
          ],
          matches:
            '[id="com.miui.packageinstaller:id/done_layout"] > [text="完成"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12818044',
            'https://i.gkd.li/import/13229404',
            'https://i.gkd.li/import/13501872',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动更新应用',
      enable: false,
      rules: [
        {
          key: 0,
          name: '点击【继续更新】',
          activityIds: [
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
          matches:
            '[text="取消更新"] < LinearLayout - @FrameLayout > LinearLayout > [text="继续更新"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12817988',
            'https://i.gkd.li/import/12910080',
          ],
        },
        {
          key: 1,
          name: '点击【继续更新】2',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches: '@[text="继续更新"] + [text="取消更新"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13024731',
            'https://i.gkd.li/import/13038465',
          ],
        },
        {
          key: 2,
          name: '勾选【已了解此安装包未经安全检测】',
          activityIds: [
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
          matches:
            '[id="com.miui.packageinstaller:id/install_checked"][checked=false][text="已了解此安装包未经安全检测"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13024730',
            'https://i.gkd.li/import/13024731',
          ],
        },
        {
          key: 3,
          name: '点击【完成】',
          activityIds: [
            'com.miui.packageInstaller.ui.normalmode.InstallProgressActivity',
            'com.miui.packageInstaller.InstallProgressActivity',
          ],
          matches:
            '[id="com.miui.packageinstaller:id/done_layout"] > [text="完成"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12817999',
            'https://i.gkd.li/import/13255733',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-放弃开启安全守护',
      desc: '勾选不再提示并点击放弃开启安全守护',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      activityIds:
        'com.miui.packageInstaller.ui.normalmode.InstallProgressActivity',
      rules: [
        {
          key: 0,
          matches: '[text="30天内不再提示"][checked=false]',
          snapshotUrls: 'https://i.gkd.li/i/16487140',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="放弃"]',
          snapshotUrls: 'https://i.gkd.li/i/16487142',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动安装/更新应用',
      desc: '自动点击安装/更新和完成按钮(需关闭应用安全验证和安全守护)',
      enable: false,
      matchRoot: true,
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '点击[安装]/[更新]',
          activityIds: [
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
          ],
          matches:
            '@FrameLayout[clickable=true] > LinearLayout[childCount=1] > [text^="继续" || text^="仍然"][text.length=4][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16487278',
            'https://i.gkd.li/i/16487282',
            'https://i.gkd.li/i/17691996',
            'https://i.gkd.li/i/20053957',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击[完成]',
          activityIds:
            'com.miui.packageInstaller.ui.normalmode.InstallProgressActivity',
          excludeMatches: '[text*="安装失败"]',
          matches: '[text="完成"]',
          snapshotUrls: 'https://i.gkd.li/i/16487274',
          excludeSnapshotUrls: 'https://i.gkd.li/i/20282424',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-自动允许应用安装软件',
      desc: '(存在安全风险)自动勾选记住选择并允许应用安装软件',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      activityIds: [
        'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
        'com.miui.packageInstaller.NewInstallerPrepareActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击[记住我的选择]',
          matches: [
            '[text^="是否允许"][text*="安装应用"][visibleToUser=true]',
            'CheckBox[text="记住我的选择"][checked=false][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/16487366',
            'https://i.gkd.li/i/16487389',
            'https://i.gkd.li/i/18937578',
            'https://i.gkd.li/i/20287209',
          ],
        },
        {
          preKeys: [0],
          name: '点击[允许]',
          matches: '[text="允许"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16487365',
            'https://i.gkd.li/i/18937576',
            'https://i.gkd.li/i/20287160',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '功能类-安装来源不可信',
      desc: '点击[授权本次安装]',
      enable: false,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          position: {
            left: 'width * 0.3511',
            top: 'height * 0.5',
          },
          activityIds:
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
          matches: '[text$="授权本次安装"]',
          exampleUrls: 'https://e.gkd.li/e470baf2-56dc-4e3c-8da0-9747eeec602f',
          snapshotUrls: 'https://i.gkd.li/i/17898736',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-备案信息弹窗',
      desc: '点击[继续安装]',
      enable: false,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
          matches: ['[text$="备案信息"]', '[text="继续安装"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/17908298',
            'https://i.gkd.li/i/20642970',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '功能类-无视风险继续安装',
      desc: '(存在安全风险)自动点击无视风险继续安装并授权',
      enable: false,
      actionMaximum: 1,
      fastQuery: true,
      activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
      rules: [
        {
          key: 0,
          matches: '@[clickable=true] >2 [text="无视风险继续安装"]',
          exampleUrls: 'https://e.gkd.li/46f06948-5ec1-4054-8aa3-a8f39e5d1f26',
          snapshotUrls: 'https://i.gkd.li/i/18002566',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="继续"]',
          exampleUrls: 'https://e.gkd.li/375fc2ec-841a-4af6-be99-9391ebeb7dc5',
          snapshotUrls: 'https://i.gkd.li/i/18002704',
        },
        {
          preKeys: [1],
          key: 2,
          matches:
            '@[clickable=true][desc="更多"] > [vid="action_menu_item_child_icon"]',
          exampleUrls: 'https://e.gkd.li/de8fb9c9-ea4e-4c03-93bd-047bf31cd4c8',
          snapshotUrls: 'https://i.gkd.li/i/18002708',
        },
        {
          preKeys: [2],
          key: 3,
          matches: '@[clickable=true] >(1,2) [text="单次安装授权"]',
          exampleUrls: 'https://e.gkd.li/0e8afdd7-04d3-46fd-9095-b61123d041b2',
          snapshotUrls: [
            'https://i.gkd.li/i/18002712',
            'https://i.gkd.li/i/20746863',
          ],
        },
      ],
    },
  ],
});
