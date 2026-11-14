// 杭州镜像宇宙 · 动态状态（由 tools/hangzhou/evolve.mjs 自动生成，请勿手改）
// HZ_STATE 记录「智能平民宇宙·杭州」的模拟时钟、环境、多方交互、异常响应与运行目标，供游戏运行时读取，实现状态同步。
export const HZ_STATE = {
  "config": {
    "STEP": 2,
    "HOURS": 6,
    "SEED": 2076,
    "ANOMALY_RATE": 1,
    "MAX_NEW_ANOMALY": 3,
    "FEED_KEEP": 20,
    "ANOMALY_KEEP": 40,
    "INTERACT_KEEP": 12,
    "GOALS": {
      "moodFloor": 68,
      "trafficCeil": 88,
      "gridCeil": 95,
      "syncFloor": 99,
      "renewTarget": 70,
      "carbonFloorRatio": 0
    }
  },
  "simYear": 2028,
  "realYear": 2026,
  "lastSync": "2026-11-14T19:01:57.092Z",
  "tick": 1,
  "rngState": 2384309762,
  "clock": {
    "day": 0.25,
    "hour": 14,
    "doy": 0,
    "year": 2028,
    "season": "冬",
    "dayType": "节假日",
    "isDay": true
  },
  "districts": {
    "hz_shangcheng": {
      "name": "上城区",
      "type": "core",
      "pop0": 140.2,
      "pop1": 198,
      "pop": 142.4,
      "prosperity": 63.9,
      "energy": 78,
      "mood": 73.7,
      "phase": 14,
      "renew": 46.6,
      "green": 31.4,
      "env": {
        "weather": "晴",
        "season": "冬",
        "isDay": true,
        "tempC": 13.2,
        "aqi": 101,
        "humidity": 63,
        "traffic": 69,
        "grid": 55,
        "water": null,
        "network": 52
      }
    },
    "hz_gongshu": {
      "name": "拱墅区",
      "type": "core",
      "pop0": 120.1,
      "pop1": 168,
      "pop": 121.8,
      "prosperity": 64.3,
      "energy": 77.3,
      "mood": 74.1,
      "phase": 14,
      "renew": 49.5,
      "green": 36.3,
      "env": {
        "weather": "多云",
        "season": "冬",
        "isDay": true,
        "tempC": 11.9,
        "aqi": 102,
        "humidity": 61,
        "traffic": 61,
        "grid": 50,
        "water": null,
        "network": 49
      }
    },
    "hz_xihu": {
      "name": "西湖区",
      "type": "core",
      "pop0": 118,
      "pop1": 160,
      "pop": 120,
      "prosperity": 64.2,
      "energy": 78.3,
      "mood": 74,
      "phase": 14,
      "renew": 51.4,
      "green": 47.1,
      "env": {
        "weather": "多云",
        "season": "冬",
        "isDay": true,
        "tempC": 8.6,
        "aqi": 102,
        "humidity": 64,
        "traffic": 70,
        "grid": 51,
        "water": 57,
        "network": 55
      }
    },
    "hz_binjiang": {
      "name": "滨江区",
      "type": "core",
      "pop0": 55.9,
      "pop1": 92,
      "pop": 57.2,
      "prosperity": 62.1,
      "energy": 74.9,
      "mood": 71.9,
      "phase": 14,
      "renew": 56.2,
      "green": 41.2,
      "env": {
        "weather": "雨",
        "season": "冬",
        "isDay": true,
        "tempC": 9.7,
        "aqi": 87,
        "humidity": 83,
        "traffic": 59,
        "grid": 54,
        "water": null,
        "network": 55
      }
    },
    "hz_xiaoshan": {
      "name": "萧山区",
      "type": "star",
      "pop0": 218.4,
      "pop1": 300,
      "pop": 221.5,
      "prosperity": 62.5,
      "energy": 74.2,
      "mood": 72.3,
      "phase": 14,
      "renew": 51.4,
      "green": 39.2,
      "env": {
        "weather": "多云",
        "season": "冬",
        "isDay": true,
        "tempC": 9.8,
        "aqi": 89,
        "humidity": 63,
        "traffic": 51,
        "grid": 50,
        "water": 58,
        "network": 53
      }
    },
    "hz_yuhang": {
      "name": "余杭区",
      "type": "star",
      "pop0": 143.8,
      "pop1": 215,
      "pop": 147,
      "prosperity": 62.4,
      "energy": 73.9,
      "mood": 72.2,
      "phase": 14,
      "renew": 61,
      "green": 45.1,
      "env": {
        "weather": "多云",
        "season": "冬",
        "isDay": true,
        "tempC": 10.2,
        "aqi": 101,
        "humidity": 61,
        "traffic": 49,
        "grid": 50,
        "water": null,
        "network": 51
      }
    },
    "hz_linping": {
      "name": "临平区",
      "type": "star",
      "pop0": 116,
      "pop1": 168,
      "pop": 118,
      "prosperity": 63.4,
      "energy": 74.9,
      "mood": 73.2,
      "phase": 14,
      "renew": 56.2,
      "green": 41.2,
      "env": {
        "weather": "雨",
        "season": "冬",
        "isDay": true,
        "tempC": 9.2,
        "aqi": 75,
        "humidity": 80,
        "traffic": 49,
        "grid": 56,
        "water": null,
        "network": 56
      }
    },
    "hz_qiantang": {
      "name": "钱塘区",
      "type": "star",
      "pop0": 81,
      "pop1": 122,
      "pop": 82.9,
      "prosperity": 62.6,
      "energy": 73.9,
      "mood": 68.4,
      "phase": 14,
      "renew": 65.8,
      "green": 43.2,
      "env": {
        "weather": "霾",
        "season": "冬",
        "isDay": true,
        "tempC": 10.4,
        "aqi": 161,
        "humidity": 60,
        "traffic": 47,
        "grid": 53,
        "water": 57,
        "network": 51
      }
    },
    "hz_fuyang": {
      "name": "富阳区",
      "type": "star",
      "pop0": 86.4,
      "pop1": 120,
      "pop": 87.5,
      "prosperity": 63.3,
      "energy": 74.5,
      "mood": 69.1,
      "phase": 14,
      "renew": 56.2,
      "green": 51,
      "env": {
        "weather": "霾",
        "season": "冬",
        "isDay": true,
        "tempC": 14,
        "aqi": 158,
        "humidity": 61,
        "traffic": 46,
        "grid": 51,
        "water": null,
        "network": 49
      }
    },
    "hz_linan": {
      "name": "临安区",
      "type": "star",
      "pop0": 65.7,
      "pop1": 92,
      "pop": 66.6,
      "prosperity": 62.7,
      "energy": 74.4,
      "mood": 72.5,
      "phase": 14,
      "renew": 65.8,
      "green": 78.3,
      "env": {
        "weather": "晴",
        "season": "冬",
        "isDay": true,
        "tempC": 10.7,
        "aqi": 100,
        "humidity": 64,
        "traffic": 50,
        "grid": 49,
        "water": 58,
        "network": 49
      }
    },
    "hz_tonglu": {
      "name": "桐庐县",
      "type": "eco",
      "pop0": 46.2,
      "pop1": 64,
      "pop": 46.8,
      "prosperity": 60.9,
      "energy": 71,
      "mood": 72.7,
      "phase": 14,
      "renew": 70.6,
      "green": 72.4,
      "env": {
        "weather": "雨",
        "season": "冬",
        "isDay": true,
        "tempC": 9.3,
        "aqi": 57,
        "humidity": 82,
        "traffic": 38,
        "grid": 51,
        "water": null,
        "network": 51
      }
    },
    "hz_chunan": {
      "name": "淳安县",
      "type": "eco",
      "pop0": 31.7,
      "pop1": 44,
      "pop": 32.5,
      "prosperity": 62.5,
      "energy": 73,
      "mood": 72.3,
      "phase": 14,
      "renew": 72.5,
      "green": 80.2,
      "env": {
        "weather": "晴",
        "season": "冬",
        "isDay": true,
        "tempC": 10.9,
        "aqi": 75,
        "humidity": 61,
        "traffic": 41,
        "grid": 56,
        "water": 57,
        "network": 51
      }
    },
    "hz_jiande": {
      "name": "建德市",
      "type": "eco",
      "pop0": 44.2,
      "pop1": 62,
      "pop": 45.3,
      "prosperity": 60.9,
      "energy": 71.1,
      "mood": 72.7,
      "phase": 14,
      "renew": 70.6,
      "green": 75.4,
      "env": {
        "weather": "雨",
        "season": "冬",
        "isDay": true,
        "tempC": 7.8,
        "aqi": 54,
        "humidity": 84,
        "traffic": 38,
        "grid": 52,
        "water": 69,
        "network": 52
      }
    }
  },
  "actors": {
    "citizens": {
      "satisfaction": 72.2,
      "activity": 74.6,
      "mobility": 51.4
    },
    "enterprises": {
      "output": 62.7,
      "hiring": 51.5,
      "energyDemand": 56
    },
    "cityBrain": {
      "load": 53.7,
      "syncRate": 99.6,
      "decisions": 1,
      "dispatched": 1
    },
    "ecology": {
      "carbonIndex": 95,
      "waterQuality": 59.3,
      "greenAvg": 52.5
    },
    "visitors": {
      "flow": 62.7,
      "spend": 70
    }
  },
  "anomalies": [
    {
      "id": "A0-0",
      "type": "空气重污染",
      "scope": "hz_fuyang",
      "severity": 4,
      "status": "active",
      "bornTick": 0,
      "bornAt": "2028-D0 14:00",
      "response": "工业限产 + 扬尘管控 + 生态绿廊净化 + 错峰通行"
    }
  ],
  "interactions": [
    {
      "clock": "2028-D0 14:00",
      "kind": "commute",
      "from": "萧山区",
      "to": "上城区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2028-D0 14:00",
      "kind": "commute",
      "from": "余杭区",
      "to": "滨江区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2028-D0 14:00",
      "kind": "commute",
      "from": "临平区",
      "to": "上城区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2028-D0 14:00",
      "kind": "commute",
      "from": "钱塘区",
      "to": "滨江区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2028-D0 14:00",
      "kind": "commute",
      "from": "富阳区",
      "to": "西湖区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2028-D0 14:00",
      "kind": "commute",
      "from": "临安区",
      "to": "余杭区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2028-D0 14:00",
      "kind": "commute",
      "from": "桐庐县",
      "to": "西湖区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2028-D0 14:00",
      "kind": "commute",
      "from": "淳安县",
      "to": "上城区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2028-D0 14:00",
      "kind": "commute",
      "from": "建德市",
      "to": "上城区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2028-D0 14:00",
      "kind": "visitor",
      "from": "外围客流",
      "to": "上城区/西湖区/萧山区/桐庐县/淳安县/建德市",
      "detail": "低空接驳 + 民宿镜像扩容承接游客流",
      "effect": "拉动文旅消费与交通负荷"
    },
    {
      "clock": "2028-D0 14:00",
      "kind": "policy",
      "from": "城市中枢",
      "to": "全市",
      "detail": "下发 1 项异常响应预案，启动数字孪生预演",
      "effect": "异常进入闭环"
    }
  ],
  "feed": [
    {
      "year": 2028,
      "kind": "alert",
      "text": "【预警】富阳区触发「空气重污染」(严重度 4)，中枢启动：工业限产 + 扬尘管控 + 生态绿廊净化 + 错峰通行。"
    },
    {
      "year": 2028,
      "kind": "life",
      "text": "建德市数字孪生节点与城市中枢完成一次心跳同步，同步率 99.6%。"
    }
  ],
  "goals": [
    {
      "id": "pop",
      "name": "人口目标(逼近2076规划)",
      "metric": "全市模拟人口 1289.5 万",
      "target": "进度随 simYear",
      "status": "进行中"
    },
    {
      "id": "mood",
      "name": "宜居情绪 ≥ 68",
      "metric": "全市平均 72.2",
      "target": "68",
      "status": "达标"
    },
    {
      "id": "traffic",
      "name": "交通峰值可控 ≤ 88",
      "metric": "峰值 70",
      "target": "88",
      "status": "达标"
    },
    {
      "id": "grid",
      "name": "能源韧性(电网峰值 ≤ 95)",
      "metric": "峰值 56",
      "target": "95",
      "status": "达标"
    },
    {
      "id": "sync",
      "name": "数字孪生同步率 ≥ 99",
      "metric": "99.6%",
      "target": "99",
      "status": "达标"
    },
    {
      "id": "renew",
      "name": "可再生能源占比(阶段≥3)",
      "metric": "全市平均 60%",
      "target": "3%",
      "status": "达标"
    },
    {
      "id": "carbon",
      "name": "零碳进程(碳强度↓)",
      "metric": "碳指数 95.0",
      "target": "随年下降",
      "status": "达标"
    }
  ]
};
