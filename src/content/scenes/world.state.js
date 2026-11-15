// 平民宇宙 · 世界事件动态状态（由 tools/world/events.mjs 自动生成，请勿手改）
// WORLD_STATE 记录宇宙历、资源账本、活跃世界事件与历史轨迹，供游戏运行时读取并渲染全局氛围。
export const WORLD_STATE = {
  "config": {
    "STEP_DAYS": 2,
    "SEED": 2076,
    "EVENT_CHANCE": 0.8,
    "MAX_NEW_EVENT": 2,
    "FEED_KEEP": 24,
    "HISTORY_KEEP": 30,
    "ACTIVE_KEEP": 8,
    "GOALS": {
      "satisfactionFloor": 60,
      "moodFloor": 60,
      "linkFloor": 70,
      "conflictCeil": 20,
      "exploreTarget": 100
    }
  },
  "simYear": 2026,
  "realYear": 2026,
  "lastSync": "2026-11-15T15:07:57.372Z",
  "tick": 9,
  "rngState": 368496658,
  "calendar": {
    "day": 18,
    "year": 2026,
    "season": "冬",
    "dayType": "工作日"
  },
  "ledger": {
    "currency": 86.8,
    "energy": 59.2,
    "mood": 72.8,
    "link": 100,
    "satisfaction": 88.1,
    "explore": 70.6,
    "conflict": 0
  },
  "activeEvents": [
    {
      "id": "E8-80",
      "type": "mediation",
      "name": "邻里矛盾调解",
      "kind": "social",
      "color": "#9be0b0",
      "severity": 2,
      "age": 0,
      "dur": 3,
      "eff": {
        "conflict": -10,
        "satisfaction": 6,
        "mood": 4
      },
      "bornTick": 8,
      "bornAt": "2026-D18"
    },
    {
      "id": "E6-60",
      "type": "boom",
      "name": "经济繁荣波",
      "kind": "economy",
      "color": "#9be86b",
      "severity": 2,
      "age": 2,
      "dur": 1,
      "eff": {
        "currency": 16,
        "mood": 6
      },
      "bornTick": 6,
      "bornAt": "2026-D14"
    },
    {
      "id": "E5-50",
      "type": "peace",
      "name": "和平协定",
      "kind": "peace",
      "color": "#8be0ff",
      "severity": 1,
      "age": 3,
      "dur": 2,
      "eff": {
        "conflict": -14,
        "satisfaction": 6
      },
      "bornTick": 5,
      "bornAt": "2026-D12"
    }
  ],
  "history": [
    {
      "tick": 8,
      "name": "邻里互助公约",
      "kind": "social",
      "outcome": "自然落幕"
    },
    {
      "tick": 5,
      "name": "数字嘉年华",
      "kind": "digital",
      "outcome": "自然落幕"
    },
    {
      "tick": 4,
      "name": "科技突破",
      "kind": "tech",
      "outcome": "自然落幕"
    },
    {
      "tick": 2,
      "name": "科技突破",
      "kind": "tech",
      "outcome": "自然落幕"
    }
  ],
  "interactions": [
    {
      "clock": "2026-D18 (冬/工作日)",
      "from": "世界中枢",
      "to": "市井",
      "kind": "调控",
      "detail": "平滑物价与小微信贷，托底民生镜像",
      "effect": "货币流通趋稳"
    },
    {
      "clock": "2026-D18 (冬/工作日)",
      "from": "邻里自治",
      "to": "社区",
      "kind": "共治",
      "detail": "互助公约与迁徙安置由社区镜像协同",
      "effect": "满意度与联通回升"
    },
    {
      "clock": "2026-D16 (冬/工作日)",
      "from": "世界中枢",
      "to": "市井",
      "kind": "调控",
      "detail": "平滑物价与小微信贷，托底民生镜像",
      "effect": "货币流通趋稳"
    },
    {
      "clock": "2026-D16 (冬/工作日)",
      "from": "邻里自治",
      "to": "社区",
      "kind": "共治",
      "detail": "互助公约与迁徙安置由社区镜像协同",
      "effect": "满意度与联通回升"
    },
    {
      "clock": "2026-D14 (冬/工作日)",
      "from": "世界中枢",
      "to": "市井",
      "kind": "调控",
      "detail": "平滑物价与小微信贷，托底民生镜像",
      "effect": "货币流通趋稳"
    },
    {
      "clock": "2026-D14 (冬/工作日)",
      "from": "邻里自治",
      "to": "社区",
      "kind": "共治",
      "detail": "互助公约与迁徙安置由社区镜像协同",
      "effect": "满意度与联通回升"
    },
    {
      "clock": "2026-D12 (冬/周末)",
      "from": "邻里自治",
      "to": "社区",
      "kind": "共治",
      "detail": "互助公约与迁徙安置由社区镜像协同",
      "effect": "满意度与联通回升"
    },
    {
      "clock": "2026-D10 (冬/工作日)",
      "from": "邻里自治",
      "to": "社区",
      "kind": "共治",
      "detail": "互助公约与迁徙安置由社区镜像协同",
      "effect": "满意度与联通回升"
    },
    {
      "clock": "2026-D8 (冬/工作日)",
      "from": "开源社群",
      "to": "全宇宙",
      "kind": "扩散",
      "detail": "新技术/奇观向平民开放，鼓励探索与创作",
      "effect": "探索进度上升"
    },
    {
      "clock": "2026-D6 (冬/周末)",
      "from": "开源社群",
      "to": "全宇宙",
      "kind": "扩散",
      "detail": "新技术/奇观向平民开放，鼓励探索与创作",
      "effect": "探索进度上升"
    },
    {
      "clock": "2026-D4 (冬/工作日)",
      "from": "开源社群",
      "to": "全宇宙",
      "kind": "扩散",
      "detail": "新技术/奇观向平民开放，鼓励探索与创作",
      "effect": "探索进度上升"
    },
    {
      "clock": "2026-D2 (冬/节假日)",
      "from": "开源社群",
      "to": "全宇宙",
      "kind": "扩散",
      "detail": "新技术/奇观向平民开放，鼓励探索与创作",
      "effect": "探索进度上升"
    }
  ],
  "feed": [
    {
      "year": 2026,
      "kind": "event",
      "text": "【涌现】邻里矛盾调解：两户邻里的停车与噪音积怨，经社区镜像调解员促成对话，冲突回落、理解回升（严重度 2）。"
    },
    {
      "year": 2026,
      "kind": "life",
      "text": "潮汐空调为全城省下一次峰值负荷，绿电跨区互济生效。"
    },
    {
      "year": 2026,
      "kind": "end",
      "text": "【落幕】邻里互助公约（社区镜像发起互助公约，老人就医、孩童托管由邻里接力，满意与联通同步回升（严重度 3）。）已结束。"
    },
    {
      "year": 2026,
      "kind": "event",
      "text": "【涌现】经济繁荣波：平民创业与小微制造回暖，货币流通加速，市井烟火更旺（严重度 2）。"
    },
    {
      "year": 2026,
      "kind": "event",
      "text": "【涌现】和平协定：邻里间缔结互助与分歧化解公约，冲突指数回落，社区更安（严重度 1）。"
    },
    {
      "year": 2026,
      "kind": "end",
      "text": "【落幕】数字嘉年华（全息游园与开源创作大赛上线，数字联通与探索欲被点燃（严重度 4）。）已结束。"
    },
    {
      "year": 2026,
      "kind": "event",
      "text": "【涌现】邻里互助公约：社区镜像发起互助公约，老人就医、孩童托管由邻里接力，满意与联通同步回升（严重度 3）。"
    },
    {
      "year": 2026,
      "kind": "life",
      "text": "一架低空物流无人机掠过，把山货送抵三十公里外的餐桌。"
    },
    {
      "year": 2026,
      "kind": "end",
      "text": "【落幕】科技突破（一项平民可用的开源技术扩散：低空物流、潮汐空调或社区储能落地（严重度 4）。）已结束。"
    },
    {
      "year": 2026,
      "kind": "life",
      "text": "社区全息学堂今晨开课，老人与孩子在镜像宇宙同堂共学。"
    },
    {
      "year": 2026,
      "kind": "event",
      "text": "【涌现】数字嘉年华：全息游园与开源创作大赛上线，数字联通与探索欲被点燃（严重度 4）。"
    },
    {
      "year": 2026,
      "kind": "life",
      "text": "城市中枢完成一次全球心跳同步，数字孪生误差趋近于零。"
    },
    {
      "year": 2026,
      "kind": "end",
      "text": "【落幕】科技突破（一项平民可用的开源技术扩散：低空物流、潮汐空调或社区储能落地（严重度 4）。）已结束。"
    },
    {
      "year": 2026,
      "kind": "event",
      "text": "【涌现】科技突破：一项平民可用的开源技术扩散：低空物流、潮汐空调或社区储能落地（严重度 4）。"
    },
    {
      "year": 2026,
      "kind": "event",
      "text": "【涌现】科技突破：一项平民可用的开源技术扩散：低空物流、潮汐空调或社区储能落地（严重度 4）。"
    },
    {
      "year": 2026,
      "kind": "life",
      "text": "社区全息学堂今晨开课，老人与孩子在镜像宇宙同堂共学。"
    }
  ],
  "quests": [
    {
      "id": "Q_E8-80",
      "title": "参与·邻里矛盾调解",
      "desc": "邻里矛盾调解正在社区发酵，邻里的温度等你添一把。",
      "source": "world",
      "linkedEvent": "E8-80",
      "choices": [
        {
          "label": "出一份力",
          "hint": "社交+4",
          "effect": {
            "social": 4
          }
        },
        {
          "label": "点赞支持",
          "hint": "社交+2",
          "effect": {
            "social": 2
          }
        }
      ]
    },
    {
      "id": "Q_E6-60",
      "title": "把握·经济繁荣波",
      "desc": "经济繁荣波，市井烟火正旺，机会在眼前。",
      "source": "world",
      "linkedEvent": "E6-60",
      "choices": [
        {
          "label": "小试身手",
          "hint": "金钱+60 快乐+2",
          "effect": {
            "money": 60,
            "happy": 2
          }
        },
        {
          "label": "稳妥观望",
          "hint": "快乐+1",
          "effect": {
            "happy": 1
          }
        }
      ]
    },
    {
      "id": "Q_E5-50",
      "title": "守护·和平协定",
      "desc": "和平协定缔结，社区更安宁。",
      "source": "world",
      "linkedEvent": "E5-50",
      "choices": [
        {
          "label": "参与公约",
          "hint": "社交+3 快乐+2",
          "effect": {
            "social": 3,
            "happy": 2
          }
        },
        {
          "label": "乐见其成",
          "hint": "快乐+1",
          "effect": {
            "happy": 1
          }
        }
      ]
    }
  ],
  "trend": {
    "explore": [
      18,
      39.3,
      48.6,
      66.6,
      70.6,
      70.6,
      70.6,
      70.6
    ],
    "conflict": [
      8.2,
      7.8,
      6.5,
      7.4,
      7,
      4.9,
      2,
      0
    ],
    "mood": [
      72.5,
      71.7,
      71.2,
      71.1,
      71.4,
      70.5,
      71.2,
      72.8
    ],
    "currency": [
      53.8,
      53.6,
      55.2,
      59.6,
      69.1,
      70.9,
      77.1,
      86.8
    ],
    "satisfaction": [
      67.1,
      67.4,
      66.7,
      65.5,
      67.5,
      71.9,
      77.3,
      88.1
    ]
  },
  "goals": [
    {
      "id": "satisfaction",
      "name": "公民满意度 ≥ 60",
      "metric": "88.1",
      "target": "60",
      "status": "达标"
    },
    {
      "id": "mood",
      "name": "情绪指数 ≥ 60",
      "metric": "72.8",
      "target": "60",
      "status": "达标"
    },
    {
      "id": "link",
      "name": "数字联通度 ≥ 70",
      "metric": "100.0",
      "target": "70",
      "status": "达标"
    },
    {
      "id": "explore",
      "name": "探索进度（累积 → 100）",
      "metric": "70.6",
      "target": "100",
      "status": "进行中"
    },
    {
      "id": "conflict",
      "name": "冲突指数 ≤ 20",
      "metric": "0.0",
      "target": "20",
      "status": "达标"
    },
    {
      "id": "zeroCrisis",
      "name": "零重大负向事件",
      "metric": "平稳",
      "target": "无 sev≥4 危机",
      "status": "达标"
    }
  ]
};
