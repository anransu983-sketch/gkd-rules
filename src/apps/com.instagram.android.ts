import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.instagram.android',
  name: 'Instagram',
  groups: [
    {
      key: 1,
      enable: true,
      name: '信息流广告',
      desc: '但是步骤较多, 影响app使用',
      fastQuery: true,
      activityIds: 'com.instagram.mainactivity.InstagramMainActivity',
      rules: [
        {
          key: 0,
          name: '点击【更多】按钮',
          actionCd: 4000,
          matches:
            '[text="赞助内容"] + [id="com.instagram.android:id/feed_more_button_stub"]',
          snapshotUrls: 'https://i.gkd.li/import/12798562',
        },
        {
          key: 1,
          name: '点击【隐藏广告】按钮',
          matches: '@ViewGroup >n [text="隐藏广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12798571',
            'https://i.gkd.li/import/12829448',
          ],
        },
        {
          key: 2,
          name: '点击【广告不相关】按钮',
          matches: '@ViewGroup > [text="广告不相关"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12798590',
            'https://i.gkd.li/import/12829464',
          ],
        },
        {
          key: 3,
          name: '关闭[你不会再看到这条广告]',
          action: 'back',
          matches: '[text="你不会再看到这条广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12829492',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-信息流广告',
      desc: '但是步骤较多, 影响app使用',
      enable: true,
      fastQuery: true,
      activityIds: 'com.instagram.mainactivity.InstagramMainActivity',
      rules: [
        {
          key: 0,
          name: '点击"更多"按钮',
          matches:
            '[text="赞助内容"] + [id="com.instagram.android:id/feed_more_button_stub"]',
          actionCd: 4000,
          snapshotUrls: 'https://i.gkd.li/i/12798562',
        },
        {
          key: 1,
          name: '点击"隐藏广告"按钮',
          matches: '@ViewGroup >n [text="隐藏广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12798571',
            'https://i.gkd.li/i/12829448',
          ],
        },
        {
          key: 2,
          name: '点击"广告不相关"按钮',
          matches: '@ViewGroup > [text="广告不相关"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12798590',
            'https://i.gkd.li/i/12829464',
          ],
        },
        {
          key: 3,
          name: '关闭[你不会再看到这条广告]',
          action: 'back',
          matches: '[text="你不会再看到这条广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12829492',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动点击[查看翻译]',
      enable: false,
      fastQuery: true,
      activityIds: 'com.instagram.mainactivity.InstagramMainActivity',
      rules: [
        {
          key: 0,
          matches: '[text="查看翻译"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14093211',
        },
        {
          key: 1,
          matches:
            '[text$="查看翻译"][clickable=false][desc!=null][visibleToUser=true]',
          excludeMatches: '[text="查看翻译"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14784095',
            'https://i.gkd.li/i/16776676',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-信息流广告',
      desc: '但是步骤较多, 影响app使用',
      enable: true,
      fastQuery: true,
      activityIds: 'com.instagram.mainactivity.InstagramMainActivity',
      rules: [
        {
          key: 0,
          name: '点击【更多】按钮',
          matches:
            '[text="赞助内容"] + [id="com.instagram.android:id/feed_more_button_stub"]',
          actionCd: 4000,
          snapshotUrls: 'https://i.gkd.li/import/12798562',
        },
        {
          key: 1,
          name: '点击【隐藏广告】按钮',
          matches: '@ViewGroup >n [text="隐藏广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12798571',
            'https://i.gkd.li/import/12829448',
          ],
        },
        {
          key: 2,
          name: '点击【广告不相关】按钮',
          matches: '@ViewGroup > [text="广告不相关"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12798590',
            'https://i.gkd.li/import/12829464',
          ],
        },
        {
          key: 3,
          name: '关闭[你不会再看到这条广告]',
          action: 'back',
          matches: '[text="你不会再看到这条广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12829492',
        },
      ],
    },
  ],
});
