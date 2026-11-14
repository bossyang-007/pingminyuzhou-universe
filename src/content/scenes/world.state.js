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
  "lastSync": "2026-11-14T14:53:57.346Z",
  "tick": 3,
  "rngState": 312131761,
  "calendar": {
    "day": 6,
    "year": 2026,
    "season": "冬",
    "dayType": "周末"
  },
  "ledger": {
    "currency": 61,
    "energy": 58.1,
    "mood": 86.8,
    "link": 64.8,
    "satisfaction": 68,
    "explore": 37,
    "conflict": 8.8
  },
  "activeEvents": [
    {
      "id": "E1-13",
      "type": "boom",
      "name": "经济繁荣波",
      "kind": "economy",
      "color": "#9be86b",
      "severity": 3,
      "age": 1,
      "dur": 2,
      "eff": {
        "currency": 16,
        "mood": 6
      },
      "bornTick": 1,
      "bornAt": "2026-D4"
    }
  ],
  "history": [
    {
      "tick": 2,
      "name": "星空奇观",
      "kind": "wonder",
      "outcome": "自然落幕"
    }
  ],
  "interactions": [
    {
      "clock": "2026-D6 (冬/周末)",
      "from": "世界中枢",
      "to": "市井",
      "kind": "调控",
      "detail": "平滑物价与小微信贷，托底民生镜像",
      "effect": "货币流通趋稳"
    },
    {
      "clock": "2026-D4 (冬/工作日)",
      "from": "世界中枢",
      "to": "市井",
      "kind": "调控",
      "detail": "平滑物价与小微信贷，托底民生镜像",
      "effect": "货币流通趋稳"
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
      "kind": "life",
      "text": "社区全息学堂今晨开课，老人与孩子在镜像宇宙同堂共学。"
    },
    {
      "year": 2026,
      "kind": "end",
      "text": "【落幕】星空奇观（流星雨 / 极光 / 双月幻象在镜像夜空上演，平民仰头许愿，探索欲迸发（严重度 2）。）已结束。"
    },
    {
      "year": 2026,
      "kind": "event",
      "text": "【涌现】经济繁荣波：平民创业与小微制造回暖，货币流通加速，市井烟火更旺（严重度 3）。"
    },
    {
      "year": 2026,
      "kind": "life",
      "text": "潮汐空调为全城省下一次峰值负荷，绿电跨区互济生效。"
    },
    {
      "year": 2026,
      "kind": "event",
      "text": "【涌现】星空奇观：流星雨 / 极光 / 双月幻象在镜像夜空上演，平民仰头许愿，探索欲迸发（严重度 2）。"
    },
    {
      "year": 2026,
      "kind": "life",
      "text": "城市中枢完成一次全球心跳同步，数字孪生误差趋近于零。"
    }
  ],
  "goals": [
    {
      "id": "satisfaction",
      "name": "公民满意度 ≥ 60",
      "metric": "68.0",
      "target": "60",
      "status": "达标"
    },
    {
      "id": "mood",
      "name": "情绪指数 ≥ 60",
      "metric": "86.8",
      "target": "60",
      "status": "达标"
    },
    {
      "id": "link",
      "name": "数字联通度 ≥ 70",
      "metric": "64.8",
      "target": "70",
      "status": "临界"
    },
    {
      "id": "explore",
      "name": "探索进度（累积 → 100）",
      "metric": "37.0",
      "target": "100",
      "status": "起步"
    },
    {
      "id": "conflict",
      "name": "冲突指数 ≤ 20",
      "metric": "8.8",
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
