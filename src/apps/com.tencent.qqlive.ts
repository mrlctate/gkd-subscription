import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          action: 'clickCenter',
          matches: 'TextView[text="跳过"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/17409509'],
        },
      ],
    },
    {
      key: 2,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[text*="青少年模式"] +3 TextView[text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/12700145',
    },
    {
      key: 3,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[text*="新版本"] +3 TextView[text="暂不升级"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12700486',
        'https://i.gkd.li/i/13799951',
      ],
    },
    {
      key: 4,
      name: '分段广告-卡片广告',
      fastQuery: true,
      rules: [
        {
          key: 1,
          name: '首页顶部卡片广告',
          activityIds: '.ona.activity.SplashHomeActivity',
          matches:
            'RelativeLayout[clickable=true] >2 ImageView +(3,4) ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/17542913',
            'https://i.gkd.li/i/17534256',
          ],
        },
        {
          key: 2,
          name: '首页顶部背景广告',
          activityIds: '.ona.activity.SplashHomeActivity',
          matches: '[text="关闭广告"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12700518',
        },
        {
          key: 3,
          name: '个人中心页卡片广告',
          activityIds: [
            '.ona.activity.SplashHomeActivity',
            '.ona.offline.client.group.DownloadGroupActivity',
          ],
          matches: 'ViewGroup > ViewGroup > ImageView[index=2][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/12700175'],
        },
        {
          key: 4,
          name: '个人中心点击关闭广告',
          activityIds: ['.ona.activity.SplashHomeActivity'],
          matches:
            'View[childCount=4] >2 TextView[text.length=4 || text.length=5] < View + View[clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/17959231'],
        },
        {
          key: 5,
          name: '个人中心页顶部背景广告',
          activityIds: '.ona.activity.SplashHomeActivity',
          matches:
            'RelativeLayout > FrameLayout + @ImageView[clickable=true] + ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12777344',
        },
        {
          key: 6,
          name: '点击右上角[广告]-1',
          activityIds: [
            '.ona.activity.SplashHomeActivity',
            '.ona.activity.VideoDetailActivity',
          ],
          matches:
            'RelativeLayout > @FrameLayout[clickable=true] > ImageView[desc="the ad tag"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12737313',
            'https://i.gkd.li/i/13685842',
          ],
        },
        {
          key: 7,
          name: '点击右上角[广告]-2',
          activityIds: '.ona.activity.SplashHomeActivity',
          matches:
            'RelativeLayout[childCount=3] > ImageView + RelativeLayout + ImageView[clickable=true][visibleToUser=true]',
          snapshotUrls: ['https://i.gkd.li/i/17586123'],
        },
        {
          key: 8,
          name: '点击右下角关闭-1',
          activityIds: '.ona.activity.SplashHomeActivity',
          matches:
            'TextView[text.length=4 || text.length=5] < LinearLayout + ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13426421',
            'https://i.gkd.li/i/17986394',
            'https://i.gkd.li/i/17725554',
            'https://i.gkd.li/i/17725673',
          ],
        },
        {
          key: 9,
          name: '点击右下角关闭-2',
          activityIds: '.ona.activity.SplashHomeActivity',
          matches:
            'View[childCount=4] > @View[index=3][clickable=true] - View > TextView[text="立即下载"]',
          snapshotUrls: 'https://i.gkd.li/i/17692384',
        },

        // 以下是配合本规则组内其他key使用的规则，反馈界面的规则都是一样的
        {
          key: 98,
          name: '广告反馈卡片-选择原因',
          activityIds: [
            '.ona.activity.SplashHomeActivity',
            '.ona.activity.HotStartSplashActivity',
            '.ona.activity.VideoDetailActivity',
            '.ona.offline.client.group.DownloadGroupActivity',
          ],
          matches:
            'TextView[text="关闭这条广告的原因"] +2 RecyclerView > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17725162',
            'https://i.gkd.li/i/13685871',
            'https://i.gkd.li/i/13703219',
            'https://i.gkd.li/i/17725215',
          ],
        },
        {
          preKeys: [98],
          key: 99,
          name: '广告反馈卡片-确认原因',
          activityIds: [
            '.ona.activity.SplashHomeActivity',
            '.ona.activity.VideoDetailActivity',
            '.ona.offline.client.group.DownloadGroupActivity',
          ],
          matches:
            '[text="关闭这条广告的原因"] + [text="确认"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/17725215',
            'https://i.gkd.li/i/13685877',
            'https://i.gkd.li/i/13703298',
          ],
        },
      ],
    },
    {
      key: 5,
      fastQuery: true,
      name: '全屏广告-视频播放时的广告',
      desc: '自动点击 跳过/关闭广告',
      activityIds: '.ona.activity.VideoDetailActivity',
      rules: [
        {
          key: 0,
          name: '全屏广告',
          matches:
            '@[text$="跳过广告"][clickable=true] +2 [text="VIP可关闭该广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12700407',
            'https://i.gkd.li/i/12700433',
          ],
        },
        {
          key: 1,
          name: '左下角悬浮广告',
          matches:
            'FrameLayout[childCount=2] > FrameLayout > RelativeLayout > View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13043079',
        },
        {
          key: 2,
          name: '全屏广告2',
          fastQuery: true,
          matches: '@[text$="关闭广告"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13526547',
        },
        {
          key: 3,
          name: '居中广告-1',
          matches:
            'ViewGroup[childCount>10] > FrameLayout[index=10] >4 ImageView[clickable=true][visibleToUser=true][index=1 || index=3]',
          snapshotUrls: [
            'https://i.gkd.li/i/13695067',
            'https://i.gkd.li/i/13946107',
            'https://i.gkd.li/i/14001277',
          ],
        },
        {
          key: 4,
          name: '居中广告-2',
          matches: '[id="com.tencent.qqlive:id/pause_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14318385',
        },
        {
          key: 5,
          name: '底部弹窗广告',
          matches:
            'ViewGroup > @View[clickable=true] +4 LinearLayout > [text="看广告免费看剧"]',
          snapshotUrls: 'https://i.gkd.li/i/14318385',
        },
      ],
    },
    {
      key: 6,
      fastQuery: true,
      name: '全屏广告-首页-弹窗广告',
      activityIds: '.ona.activity.SplashHomeActivity',
      rules: [
        {
          key: 1,
          matches: 'View[id="95777258"] > Button[index=2]',
          snapshotUrls: 'https://i.gkd.li/i/17626519',
        },
        {
          key: 2,
          matches: '@RelativeLayout[clickable=true] + * >3 [text="立即预约"]',
          snapshotUrls: 'https://i.gkd.li/i/14567294',
        },
        {
          key: 3,
          matches:
            '@ImageView[clickable=true][visibleToUser=true] -3 LinearLayout >2 [text="立即免费领取"]',
          snapshotUrls: 'https://i.gkd.li/i/17476569',
        },
        {
          key: 4,
          matches: '[text="暂不需要，稍后领取"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/17525567',
        },
        {
          key: 5,
          matches:
            'FrameLayout > ImageView + @ImageView[clickable=true] + TextView',
          snapshotUrls: 'https://i.gkd.li/i/17474933',
        },
      ],
    },
    {
      key: 7,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: 'LinearLayout > @[text="以后再说"] + [text="好的"]',
          snapshotUrls: 'https://i.gkd.li/i/12700139',
        },
        {
          key: 1,
          matches: '@ImageView + * > [text^="开启通知"]',
          snapshotUrls: 'https://i.gkd.li/i/13670465',
        },
      ],
    },
  ],
});
