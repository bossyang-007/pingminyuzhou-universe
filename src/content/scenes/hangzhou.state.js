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
  "simYear": 2026,
  "realYear": 2026,
  "lastSync": "2026-11-14T13:47:47.217Z",
  "tick": 0,
  "rngState": 2076,
  "clock": {
    "day": 0,
    "hour": 8,
    "doy": 8,
    "year": 2026,
    "season": "冬",
    "dayType": "工作日",
    "isDay": true
  },
  "districts": {
    "hz_shangcheng": {
      "name": "上城区",
      "type": "core",
      "pop0": 140.2,
      "pop1": 198,
      "pop": 140.2,
      "prosperity": 60,
      "energy": 70,
      "mood": 72,
      "phase": 8,
      "renew": 45,
      "green": 30,
      "env": {
        "weather": "雨",
        "season": "冬",
        "isDay": true,
        "tempC": 4.9,
        "aqi": 86,
        "humidity": 83,
        "traffic": 84,
        "grid": 56,
        "water": null,
        "network": 39
      }
    },
    "hz_gongshu": {
      "name": "拱墅区",
      "type": "core",
      "pop0": 120.1,
      "pop1": 168,
      "pop": 120.1,
      "prosperity": 60,
      "energy": 70,
      "mood": 72,
      "phase": 8,
      "renew": 48,
      "green": 35,
      "env": {
        "weather": "晴",
        "season": "冬",
        "isDay": true,
        "tempC": 7.8,
        "aqi": 102,
        "humidity": 59,
        "traffic": 88,
        "grid": 56,
        "water": null,
        "network": 42
      }
    },
    "hz_xihu": {
      "name": "西湖区",
      "type": "core",
      "pop0": 118,
      "pop1": 160,
      "pop": 118,
      "prosperity": 60,
      "energy": 70,
      "mood": 72,
      "phase": 8,
      "renew": 50,
      "green": 46,
      "env": {
        "weather": "雨",
        "season": "冬",
        "isDay": true,
        "tempC": 1.5,
        "aqi": 85,
        "humidity": 87,
        "traffic": 87,
        "grid": 53,
        "water": 71,
        "network": 38
      }
    },
    "hz_binjiang": {
      "name": "滨江区",
      "type": "core",
      "pop0": 55.9,
      "pop1": 92,
      "pop": 55.9,
      "prosperity": 60,
      "energy": 70,
      "mood": 72,
      "phase": 8,
      "renew": 55,
      "green": 40,
      "env": {
        "weather": "雨",
        "season": "冬",
        "isDay": true,
        "tempC": 5.7,
        "aqi": 79,
        "humidity": 81,
        "traffic": 82,
        "grid": 54,
        "water": null,
        "network": 39
      }
    },
    "hz_xiaoshan": {
      "name": "萧山区",
      "type": "star",
      "pop0": 218.4,
      "pop1": 300,
      "pop": 218.4,
      "prosperity": 60,
      "energy": 70,
      "mood": 72,
      "phase": 8,
      "renew": 50,
      "green": 38,
      "env": {
        "weather": "雨",
        "season": "冬",
        "isDay": true,
        "tempC": 2.8,
        "aqi": 66,
        "humidity": 82,
        "traffic": 69,
        "grid": 56,
        "water": 69,
        "network": 37
      }
    },
    "hz_yuhang": {
      "name": "余杭区",
      "type": "star",
      "pop0": 143.8,
      "pop1": 215,
      "pop": 143.8,
      "prosperity": 60,
      "energy": 70,
      "mood": 72,
      "phase": 8,
      "renew": 60,
      "green": 44,
      "env": {
        "weather": "晴",
        "season": "冬",
        "isDay": true,
        "tempC": 6.6,
        "aqi": 91,
        "humidity": 61,
        "traffic": 73,
        "grid": 53,
        "water": null,
        "network": 43
      }
    },
    "hz_linping": {
      "name": "临平区",
      "type": "star",
      "pop0": 116,
      "pop1": 168,
      "pop": 116,
      "prosperity": 60,
      "energy": 70,
      "mood": 72,
      "phase": 8,
      "renew": 55,
      "green": 40,
      "env": {
        "weather": "霾",
        "season": "冬",
        "isDay": true,
        "tempC": 8.7,
        "aqi": 152,
        "humidity": 56,
        "traffic": 70,
        "grid": 54,
        "water": null,
        "network": 40
      }
    },
    "hz_qiantang": {
      "name": "钱塘区",
      "type": "star",
      "pop0": 81,
      "pop1": 122,
      "pop": 81,
      "prosperity": 60,
      "energy": 70,
      "mood": 72,
      "phase": 8,
      "renew": 65,
      "green": 42,
      "env": {
        "weather": "霾",
        "season": "冬",
        "isDay": true,
        "tempC": 6.8,
        "aqi": 157,
        "humidity": 61,
        "traffic": 67,
        "grid": 52,
        "water": 58,
        "network": 41
      }
    },
    "hz_fuyang": {
      "name": "富阳区",
      "type": "star",
      "pop0": 86.4,
      "pop1": 120,
      "pop": 86.4,
      "prosperity": 60,
      "energy": 70,
      "mood": 72,
      "phase": 8,
      "renew": 55,
      "green": 50,
      "env": {
        "weather": "晴",
        "season": "冬",
        "isDay": true,
        "tempC": 6.1,
        "aqi": 100,
        "humidity": 64,
        "traffic": 74,
        "grid": 49,
        "water": null,
        "network": 37
      }
    },
    "hz_linan": {
      "name": "临安区",
      "type": "star",
      "pop0": 65.7,
      "pop1": 92,
      "pop": 65.7,
      "prosperity": 60,
      "energy": 70,
      "mood": 72,
      "phase": 8,
      "renew": 65,
      "green": 78,
      "env": {
        "weather": "晴",
        "season": "冬",
        "isDay": true,
        "tempC": 4.9,
        "aqi": 99,
        "humidity": 60,
        "traffic": 69,
        "grid": 52,
        "water": 56,
        "network": 44
      }
    },
    "hz_tonglu": {
      "name": "桐庐县",
      "type": "eco",
      "pop0": 46.2,
      "pop1": 64,
      "pop": 46.2,
      "prosperity": 60,
      "energy": 70,
      "mood": 72,
      "phase": 8,
      "renew": 70,
      "green": 72,
      "env": {
        "weather": "晴",
        "season": "冬",
        "isDay": true,
        "tempC": 7.1,
        "aqi": 68,
        "humidity": 58,
        "traffic": 52,
        "grid": 55,
        "water": null,
        "network": 43
      }
    },
    "hz_chunan": {
      "name": "淳安县",
      "type": "eco",
      "pop0": 31.7,
      "pop1": 44,
      "pop": 31.7,
      "prosperity": 60,
      "energy": 70,
      "mood": 72,
      "phase": 8,
      "renew": 72,
      "green": 80,
      "env": {
        "weather": "晴",
        "season": "冬",
        "isDay": true,
        "tempC": 5.8,
        "aqi": 73,
        "humidity": 55,
        "traffic": 54,
        "grid": 50,
        "water": 57,
        "network": 41
      }
    },
    "hz_jiande": {
      "name": "建德市",
      "type": "eco",
      "pop0": 44.2,
      "pop1": 62,
      "pop": 44.2,
      "prosperity": 60,
      "energy": 70,
      "mood": 72,
      "phase": 8,
      "renew": 70,
      "green": 75,
      "env": {
        "weather": "晴",
        "season": "冬",
        "isDay": true,
        "tempC": 4.5,
        "aqi": 77,
        "humidity": 58,
        "traffic": 54,
        "grid": 55,
        "water": 61,
        "network": 40
      }
    }
  },
  "actors": {
    "citizens": {
      "satisfaction": 72,
      "activity": 70,
      "mobility": 50
    },
    "enterprises": {
      "output": 60,
      "hiring": 50,
      "energyDemand": 55
    },
    "cityBrain": {
      "load": 50,
      "syncRate": 100,
      "decisions": 0,
      "dispatched": 0
    },
    "ecology": {
      "carbonIndex": 100,
      "waterQuality": 85,
      "greenAvg": 52
    },
    "visitors": {
      "flow": 30,
      "spend": 40
    }
  },
  "anomalies": [],
  "interactions": [],
  "feed": [],
  "goals": [
    {
      "id": "pop",
      "name": "人口目标(逼近2076规划)",
      "metric": "全市模拟人口 1267.6 万",
      "target": "进度随 simYear",
      "status": "待启动"
    },
    {
      "id": "mood",
      "name": "宜居情绪 ≥ 68",
      "metric": "全市平均 72.0",
      "target": "68",
      "status": "达标"
    },
    {
      "id": "traffic",
      "name": "交通峰值可控 ≤ 88",
      "metric": "峰值 0",
      "target": "88",
      "status": "达标"
    },
    {
      "id": "grid",
      "name": "能源韧性(电网峰值 ≤ 95)",
      "metric": "峰值 0",
      "target": "95",
      "status": "达标"
    },
    {
      "id": "sync",
      "name": "数字孪生同步率 ≥ 99",
      "metric": "100.0%",
      "target": "99",
      "status": "达标"
    },
    {
      "id": "renew",
      "name": "可再生能源占比(阶段≥0)",
      "metric": "全市平均 58%",
      "target": "0%",
      "status": "达标"
    },
    {
      "id": "carbon",
      "name": "零碳进程(碳强度↓)",
      "metric": "碳指数 100.0",
      "target": "随年下降",
      "status": "达标"
    }
  ]
};
