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
  "lastSync": "2026-11-14T20:57:59.266Z",
  "tick": 1,
  "rngState": 503955352,
  "calendar": {
    "day": 2,
    "year": 2026,
    "season": "冬",
    "dayType": "节假日"
  },
  "ledger": {
    "currency": 54.4,
    "energy": 58.8,
    "mood": 71.2,
    "link": 64.7,
    "satisfaction": 67.5,
    "explore": 10,
    "conflict": 9.1
  },
  "activeEvents": [
    {
      "id": "E0-0",
      "type": "wonder",
      "name": "星空奇观",
      "kind": "wonder",
      "color": "#b08bff",
      "severity": 2,
      "age": 0,
      "dur": 2,
      "eff": {
        "explore": 18,
        "mood": 10
      },
      "bornTick": 0,
      "bornAt": "2026-D2"
    }
  ],
  "history": [],
  "interactions": [
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
      "metric": "67.5",
      "target": "60",
      "status": "达标"
    },
    {
      "id": "mood",
      "name": "情绪指数 ≥ 60",
      "metric": "71.2",
      "target": "60",
      "status": "达标"
    },
    {
      "id": "link",
      "name": "数字联通度 ≥ 70",
      "metric": "64.7",
      "target": "70",
      "status": "临界"
    },
    {
      "id": "explore",
      "name": "探索进度（累积 → 100）",
      "metric": "10.0",
      "target": "100",
      "status": "起步"
    },
    {
      "id": "conflict",
      "name": "冲突指数 ≤ 20",
      "metric": "9.1",
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
