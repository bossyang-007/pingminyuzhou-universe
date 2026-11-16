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
  "simYear": 2060,
  "realYear": 2026,
  "lastSync": "2026-11-16T19:00:55.127Z",
  "tick": 8,
  "rngState": 1887018080,
  "clock": {
    "day": 2,
    "hour": 8,
    "doy": 2,
    "year": 2060,
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
      "pop": 179.8,
      "prosperity": 71.8,
      "energy": 78.3,
      "mood": 67.2,
      "phase": 8,
      "renew": 72.2,
      "green": 54.5,
      "env": {
        "weather": "霾",
        "season": "冬",
        "isDay": true,
        "tempC": 8.5,
        "aqi": 163,
        "humidity": 64,
        "traffic": 92,
        "grid": 57,
        "water": null,
        "network": 49
      }
    },
    "hz_gongshu": {
      "name": "拱墅区",
      "type": "core",
      "pop0": 120.1,
      "pop1": 168,
      "pop": 152.4,
      "prosperity": 75.6,
      "energy": 80.3,
      "mood": 69.4,
      "phase": 8,
      "renew": 73.2,
      "green": 57.4,
      "env": {
        "weather": "霾",
        "season": "冬",
        "isDay": true,
        "tempC": 10.1,
        "aqi": 207,
        "humidity": 64,
        "traffic": 91,
        "grid": 51,
        "water": null,
        "network": 52
      }
    },
    "hz_xihu": {
      "name": "西湖区",
      "type": "core",
      "pop0": 118,
      "pop1": 160,
      "pop": 146.7,
      "prosperity": 77.2,
      "energy": 80.2,
      "mood": 70.6,
      "phase": 8,
      "renew": 73.8,
      "green": 64,
      "env": {
        "weather": "晴",
        "season": "冬",
        "isDay": true,
        "tempC": 0.9,
        "aqi": 103,
        "humidity": 64,
        "traffic": 96,
        "grid": 60,
        "water": 56,
        "network": 52
      }
    },
    "hz_binjiang": {
      "name": "滨江区",
      "type": "core",
      "pop0": 55.9,
      "pop1": 92,
      "pop": 80.7,
      "prosperity": 80.1,
      "energy": 78.2,
      "mood": 72.1,
      "phase": 8,
      "renew": 75.4,
      "green": 60.4,
      "env": {
        "weather": "雨",
        "season": "冬",
        "isDay": true,
        "tempC": 4.9,
        "aqi": 73,
        "humidity": 90,
        "traffic": 84,
        "grid": 53,
        "water": null,
        "network": 49
      }
    },
    "hz_xiaoshan": {
      "name": "萧山区",
      "type": "star",
      "pop0": 218.4,
      "pop1": 300,
      "pop": 273.6,
      "prosperity": 80.7,
      "energy": 76.8,
      "mood": 67,
      "phase": 8,
      "renew": 73.8,
      "green": 59.2,
      "env": {
        "weather": "多云",
        "season": "冬",
        "isDay": true,
        "tempC": 4.5,
        "aqi": 168,
        "humidity": 59,
        "traffic": 81,
        "grid": 50,
        "water": 59,
        "network": 51
      }
    },
    "hz_yuhang": {
      "name": "余杭区",
      "type": "star",
      "pop0": 143.8,
      "pop1": 215,
      "pop": 192,
      "prosperity": 81,
      "energy": 75.3,
      "mood": 70.8,
      "phase": 8,
      "renew": 77,
      "green": 62.8,
      "env": {
        "weather": "晴",
        "season": "冬",
        "isDay": true,
        "tempC": 7.8,
        "aqi": 112,
        "humidity": 63,
        "traffic": 71,
        "grid": 51,
        "water": null,
        "network": 50
      }
    },
    "hz_linping": {
      "name": "临平区",
      "type": "star",
      "pop0": 116,
      "pop1": 168,
      "pop": 151.1,
      "prosperity": 75.6,
      "energy": 77.7,
      "mood": 73.6,
      "phase": 8,
      "renew": 75.4,
      "green": 60.4,
      "env": {
        "weather": "晴",
        "season": "冬",
        "isDay": true,
        "tempC": 7.6,
        "aqi": 98,
        "humidity": 55,
        "traffic": 68,
        "grid": 52,
        "water": null,
        "network": 50
      }
    },
    "hz_qiantang": {
      "name": "钱塘区",
      "type": "star",
      "pop0": 81,
      "pop1": 122,
      "pop": 108.9,
      "prosperity": 82.8,
      "energy": 76.9,
      "mood": 72.5,
      "phase": 8,
      "renew": 78.6,
      "green": 61.6,
      "env": {
        "weather": "晴",
        "season": "冬",
        "isDay": true,
        "tempC": 5.2,
        "aqi": 98,
        "humidity": 59,
        "traffic": 70,
        "grid": 53,
        "water": 58,
        "network": 53
      }
    },
    "hz_fuyang": {
      "name": "富阳区",
      "type": "star",
      "pop0": 86.4,
      "pop1": 120,
      "pop": 109.5,
      "prosperity": 82.7,
      "energy": 77.6,
      "mood": 72.6,
      "phase": 8,
      "renew": 75.4,
      "green": 66.3,
      "env": {
        "weather": "雨",
        "season": "冬",
        "isDay": true,
        "tempC": 3.5,
        "aqi": 63,
        "humidity": 82,
        "traffic": 75,
        "grid": 52,
        "water": null,
        "network": 52
      }
    },
    "hz_linan": {
      "name": "临安区",
      "type": "star",
      "pop0": 65.7,
      "pop1": 92,
      "pop": 83.3,
      "prosperity": 83.3,
      "energy": 77.1,
      "mood": 71.7,
      "phase": 8,
      "renew": 78.6,
      "green": 82.9,
      "env": {
        "weather": "晴",
        "season": "冬",
        "isDay": true,
        "tempC": 4.4,
        "aqi": 97,
        "humidity": 60,
        "traffic": 78,
        "grid": 54,
        "water": 57,
        "network": 54
      }
    },
    "hz_tonglu": {
      "name": "桐庐县",
      "type": "eco",
      "pop0": 46.2,
      "pop1": 64,
      "pop": 58.1,
      "prosperity": 76.4,
      "energy": 73.9,
      "mood": 70.5,
      "phase": 8,
      "renew": 80.2,
      "green": 79.3,
      "env": {
        "weather": "晴",
        "season": "冬",
        "isDay": true,
        "tempC": 8,
        "aqi": 68,
        "humidity": 63,
        "traffic": 63,
        "grid": 50,
        "water": null,
        "network": 51
      }
    },
    "hz_chunan": {
      "name": "淳安县",
      "type": "eco",
      "pop0": 31.7,
      "pop1": 44,
      "pop": 39.8,
      "prosperity": 78.2,
      "energy": 74.2,
      "mood": 70.5,
      "phase": 8,
      "renew": 80.8,
      "green": 84.1,
      "env": {
        "weather": "多云",
        "season": "冬",
        "isDay": true,
        "tempC": 4.7,
        "aqi": 68,
        "humidity": 58,
        "traffic": 65,
        "grid": 53,
        "water": 61,
        "network": 51
      }
    },
    "hz_jiande": {
      "name": "建德市",
      "type": "eco",
      "pop0": 44.2,
      "pop1": 62,
      "pop": 56.1,
      "prosperity": 78.7,
      "energy": 77.8,
      "mood": 74.2,
      "phase": 8,
      "renew": 80.2,
      "green": 81.1,
      "env": {
        "weather": "晴",
        "season": "冬",
        "isDay": true,
        "tempC": 4.2,
        "aqi": 75,
        "humidity": 58,
        "traffic": 64,
        "grid": 50,
        "water": 55,
        "network": 53
      }
    }
  },
  "actors": {
    "citizens": {
      "satisfaction": 71,
      "activity": 77.3,
      "mobility": 76.8
    },
    "enterprises": {
      "output": 78.8,
      "hiring": 69.5,
      "energyDemand": 60
    },
    "cityBrain": {
      "load": 68.4,
      "syncRate": 97.2,
      "decisions": 7,
      "dispatched": 7
    },
    "ecology": {
      "carbonIndex": 33.3,
      "waterQuality": 57.7,
      "greenAvg": 67.2
    },
    "visitors": {
      "flow": 68.4,
      "spend": 70
    }
  },
  "anomalies": [
    {
      "id": "A7-70",
      "type": "地铁故障",
      "scope": "hz_shangcheng",
      "severity": 4.4,
      "status": "active",
      "bornTick": 7,
      "bornAt": "2060-D2 8:00",
      "response": "公交加密 + 低空通勤分流 + 信号自适应 + 闸机限流"
    },
    {
      "id": "A7-71",
      "type": "空气重污染",
      "scope": "hz_shangcheng",
      "severity": 4.1,
      "status": "active",
      "bornTick": 7,
      "bornAt": "2060-D2 8:00",
      "response": "工业限产 + 扬尘管控 + 生态绿廊净化 + 错峰通行"
    },
    {
      "id": "A7-72",
      "type": "游客激增",
      "scope": "hz_shangcheng",
      "severity": 4.1,
      "status": "active",
      "bornTick": 7,
      "bornAt": "2060-D2 8:00",
      "response": "预约限流 + 低空接驳 + 民宿镜像扩容 + 治安联动"
    },
    {
      "id": "A6-60",
      "type": "空气重污染",
      "scope": "hz_gongshu",
      "severity": 1.2,
      "status": "active",
      "bornTick": 6,
      "bornAt": "2058-D1 2:00",
      "response": "工业限产 + 扬尘管控 + 生态绿廊净化 + 错峰通行"
    },
    {
      "id": "A6-61",
      "type": "寒潮",
      "scope": "hz_xihu",
      "severity": 0.8,
      "status": "active",
      "bornTick": 6,
      "bornAt": "2058-D1 2:00",
      "response": "热电联产调度 + 暖屋镜像 + 管网防冻巡检"
    },
    {
      "id": "A6-62",
      "type": "空气重污染",
      "scope": "hz_xiaoshan",
      "severity": 3.4,
      "status": "active",
      "bornTick": 6,
      "bornAt": "2058-D1 2:00",
      "response": "工业限产 + 扬尘管控 + 生态绿廊净化 + 错峰通行"
    },
    {
      "id": "A5-50",
      "type": "游客激增",
      "scope": "hz_shangcheng",
      "severity": -1,
      "status": "resolved",
      "bornTick": 5,
      "bornAt": "2056-D1 20:00",
      "response": "预约限流 + 低空接驳 + 民宿镜像扩容 + 治安联动",
      "recoveredAt": "2060-D2"
    },
    {
      "id": "A5-51",
      "type": "空气重污染",
      "scope": "hz_yuhang",
      "severity": -0.6,
      "status": "resolved",
      "bornTick": 5,
      "bornAt": "2056-D1 20:00",
      "response": "工业限产 + 扬尘管控 + 生态绿廊净化 + 错峰通行",
      "recoveredAt": "2060-D2"
    },
    {
      "id": "A5-52",
      "type": "舆情波动",
      "scope": "city",
      "severity": 1.4,
      "status": "active",
      "bornTick": 5,
      "bornAt": "2056-D1",
      "response": "中枢全息公告 + 民生镜像答疑 + 诉求闭环"
    },
    {
      "id": "A4-40",
      "type": "游客激增",
      "scope": "hz_shangcheng",
      "severity": -0.9,
      "status": "resolved",
      "bornTick": 4,
      "bornAt": "2055-D1 14:00",
      "response": "预约限流 + 低空接驳 + 民宿镜像扩容 + 治安联动",
      "recoveredAt": "2060-D2"
    },
    {
      "id": "A3-30",
      "type": "交通拥堵",
      "scope": "hz_shangcheng",
      "severity": -0.5,
      "status": "resolved",
      "bornTick": 3,
      "bornAt": "2054-D1 8:00",
      "response": "信号自适应 + 低空通勤分流 + 镜像办公引导",
      "recoveredAt": "2058-D1"
    },
    {
      "id": "A3-31",
      "type": "交通拥堵",
      "scope": "hz_xihu",
      "severity": -1.1,
      "status": "resolved",
      "bornTick": 3,
      "bornAt": "2054-D1 8:00",
      "response": "信号自适应 + 低空通勤分流 + 镜像办公引导",
      "recoveredAt": "2056-D1"
    },
    {
      "id": "A3-32",
      "type": "强降雨内涝",
      "scope": "hz_xiaoshan",
      "severity": -1.4,
      "status": "resolved",
      "bornTick": 3,
      "bornAt": "2054-D1 8:00",
      "response": "排涝机器人 + 数字孪生内涝预演 + 隧道封控 + 低空巡检",
      "recoveredAt": "2056-D1"
    },
    {
      "id": "A2-20",
      "type": "空气重污染",
      "scope": "hz_shangcheng",
      "severity": -0.4,
      "status": "resolved",
      "bornTick": 2,
      "bornAt": "2053-D0 2:00",
      "response": "工业限产 + 扬尘管控 + 生态绿廊净化 + 错峰通行",
      "recoveredAt": "2055-D1"
    },
    {
      "id": "A2-21",
      "type": "游客激增",
      "scope": "hz_shangcheng",
      "severity": -0.8,
      "status": "resolved",
      "bornTick": 2,
      "bornAt": "2053-D0 2:00",
      "response": "预约限流 + 低空接驳 + 民宿镜像扩容 + 治安联动",
      "recoveredAt": "2056-D1"
    },
    {
      "id": "A2-22",
      "type": "寒潮",
      "scope": "hz_gongshu",
      "severity": -0.4,
      "status": "resolved",
      "bornTick": 2,
      "bornAt": "2053-D0 2:00",
      "response": "热电联产调度 + 暖屋镜像 + 管网防冻巡检",
      "recoveredAt": "2055-D1"
    },
    {
      "id": "A0-0",
      "type": "空气重污染",
      "scope": "hz_fuyang",
      "severity": -0.3,
      "status": "resolved",
      "bornTick": 0,
      "bornAt": "2050-D0 14:00",
      "response": "工业限产 + 扬尘管控 + 生态绿廊净化 + 错峰通行",
      "recoveredAt": "2054-D1"
    }
  ],
  "interactions": [
    {
      "clock": "2060-D2 08:00",
      "kind": "commute",
      "from": "萧山区",
      "to": "上城区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2060-D2 08:00",
      "kind": "commute",
      "from": "余杭区",
      "to": "滨江区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2060-D2 08:00",
      "kind": "commute",
      "from": "临平区",
      "to": "上城区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2060-D2 08:00",
      "kind": "commute",
      "from": "钱塘区",
      "to": "滨江区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2060-D2 08:00",
      "kind": "commute",
      "from": "富阳区",
      "to": "西湖区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2060-D2 08:00",
      "kind": "commute",
      "from": "临安区",
      "to": "余杭区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2060-D2 08:00",
      "kind": "commute",
      "from": "桐庐县",
      "to": "西湖区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2060-D2 08:00",
      "kind": "commute",
      "from": "淳安县",
      "to": "上城区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2060-D2 08:00",
      "kind": "commute",
      "from": "建德市",
      "to": "上城区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    },
    {
      "clock": "2060-D2 08:00",
      "kind": "visitor",
      "from": "外围客流",
      "to": "上城区/西湖区/萧山区/桐庐县/淳安县/建德市",
      "detail": "低空接驳 + 民宿镜像扩容承接游客流",
      "effect": "拉动文旅消费与交通负荷"
    },
    {
      "clock": "2060-D2 08:00",
      "kind": "policy",
      "from": "城市中枢",
      "to": "全市",
      "detail": "下发 7 项异常响应预案，启动数字孪生预演",
      "effect": "异常进入闭环"
    },
    {
      "clock": "2058-D1 02:00",
      "kind": "commute",
      "from": "萧山区",
      "to": "上城区",
      "detail": "通勤流 NaN 人·方向，早/晚高峰经低空廊道分流",
      "effect": "缓解核心区路面压力"
    }
  ],
  "feed": [
    {
      "year": 2060,
      "kind": "alert",
      "text": "【预警】上城区触发「地铁故障」(严重度 4.4)，中枢启动：公交加密 + 低空通勤分流 + 信号自适应 + 闸机限流。"
    },
    {
      "year": 2060,
      "kind": "alert",
      "text": "【预警】上城区触发「空气重污染」(严重度 4.1)，中枢启动：工业限产 + 扬尘管控 + 生态绿廊净化 + 错峰通行。"
    },
    {
      "year": 2060,
      "kind": "alert",
      "text": "【预警】上城区触发「游客激增」(严重度 4.1)，中枢启动：预约限流 + 低空接驳 + 民宿镜像扩容 + 治安联动。"
    },
    {
      "year": 2060,
      "kind": "life",
      "text": "余杭区社区镜像完成零碳微改造，邻里能量与情绪双双回升。"
    },
    {
      "year": 2060,
      "kind": "life",
      "text": "余杭区的潮汐/水温空调为全城节省一次峰值负荷，绿电跨区互济生效。"
    },
    {
      "year": 2060,
      "kind": "recover",
      "text": "【恢复】上城区游客激增已闭环：预约限流 + 低空接驳 + 民宿镜像扩容 + 治安联动。"
    },
    {
      "year": 2060,
      "kind": "recover",
      "text": "【恢复】余杭区空气重污染已闭环：工业限产 + 扬尘管控 + 生态绿廊净化 + 错峰通行。"
    },
    {
      "year": 2060,
      "kind": "recover",
      "text": "【恢复】上城区游客激增已闭环：预约限流 + 低空接驳 + 民宿镜像扩容 + 治安联动。"
    },
    {
      "year": 2058,
      "kind": "alert",
      "text": "【预警】拱墅区触发「空气重污染」(严重度 2.5)，中枢启动：工业限产 + 扬尘管控 + 生态绿廊净化 + 错峰通行。"
    },
    {
      "year": 2058,
      "kind": "alert",
      "text": "【预警】西湖区触发「寒潮」(严重度 2.3)，中枢启动：热电联产调度 + 暖屋镜像 + 管网防冻巡检。"
    },
    {
      "year": 2058,
      "kind": "alert",
      "text": "【预警】萧山区触发「空气重污染」(严重度 5)，中枢启动：工业限产 + 扬尘管控 + 生态绿廊净化 + 错峰通行。"
    },
    {
      "year": 2058,
      "kind": "life",
      "text": "桐庐县的潮汐/水温空调为全城节省一次峰值负荷，绿电跨区互济生效。"
    },
    {
      "year": 2058,
      "kind": "life",
      "text": "富阳区数字孪生节点与城市中枢完成一次心跳同步，同步率 97.2%。"
    },
    {
      "year": 2058,
      "kind": "recover",
      "text": "【恢复】上城区交通拥堵已闭环：信号自适应 + 低空通勤分流 + 镜像办公引导。"
    },
    {
      "year": 2056,
      "kind": "alert",
      "text": "【预警】上城区触发「游客激增」(严重度 2.1)，中枢启动：预约限流 + 低空接驳 + 民宿镜像扩容 + 治安联动。"
    },
    {
      "year": 2056,
      "kind": "alert",
      "text": "【预警】余杭区触发「空气重污染」(严重度 2.8)，中枢启动：工业限产 + 扬尘管控 + 生态绿廊净化 + 错峰通行。"
    },
    {
      "year": 2056,
      "kind": "alert",
      "text": "【预警】全市触发「舆情波动」(严重度 4)，中枢启动：中枢全息公告 + 民生镜像答疑 + 诉求闭环。"
    },
    {
      "year": 2056,
      "kind": "life",
      "text": "淳安县社区镜像完成零碳微改造，邻里能量与情绪双双回升。"
    },
    {
      "year": 2056,
      "kind": "recover",
      "text": "【恢复】上城区游客激增已闭环：预约限流 + 低空接驳 + 民宿镜像扩容 + 治安联动。"
    },
    {
      "year": 2056,
      "kind": "recover",
      "text": "【恢复】萧山区强降雨内涝已闭环：排涝机器人 + 数字孪生内涝预演 + 隧道封控 + 低空巡检。"
    }
  ],
  "quests": [
    {
      "id": "HQ_A7-70",
      "title": "应对·地铁故障",
      "desc": "上城区正在处置「地铁故障」（严重度 4.4）：公交加密 + 低空通勤分流 + 信号自适应 + 闸机限流",
      "source": "hangzhou",
      "linkedAnomaly": "A7-70",
      "choices": [
        {
          "label": "参与处置",
          "hint": "精力-3 声望+2 快乐+1",
          "effect": {
            "energy": -3,
            "reputation": 2,
            "happy": 1
          }
        },
        {
          "label": "做好自护",
          "hint": "健康+2",
          "effect": {
            "health": 2
          }
        }
      ]
    },
    {
      "id": "HQ_A7-71",
      "title": "应对·空气重污染",
      "desc": "上城区正在处置「空气重污染」（严重度 4.1）：工业限产 + 扬尘管控 + 生态绿廊净化 + 错峰通行",
      "source": "hangzhou",
      "linkedAnomaly": "A7-71",
      "choices": [
        {
          "label": "参与处置",
          "hint": "精力-3 声望+2 快乐+1",
          "effect": {
            "energy": -3,
            "reputation": 2,
            "happy": 1
          }
        },
        {
          "label": "做好自护",
          "hint": "健康+2",
          "effect": {
            "health": 2
          }
        }
      ]
    },
    {
      "id": "HQ_A7-72",
      "title": "应对·游客激增",
      "desc": "上城区正在处置「游客激增」（严重度 4.1）：预约限流 + 低空接驳 + 民宿镜像扩容 + 治安联动",
      "source": "hangzhou",
      "linkedAnomaly": "A7-72",
      "choices": [
        {
          "label": "参与处置",
          "hint": "精力-3 声望+2 快乐+1",
          "effect": {
            "energy": -3,
            "reputation": 2,
            "happy": 1
          }
        },
        {
          "label": "做好自护",
          "hint": "健康+2",
          "effect": {
            "health": 2
          }
        }
      ]
    },
    {
      "id": "HQ_A6-60",
      "title": "应对·空气重污染",
      "desc": "拱墅区正在处置「空气重污染」（严重度 1.2）：工业限产 + 扬尘管控 + 生态绿廊净化 + 错峰通行",
      "source": "hangzhou",
      "linkedAnomaly": "A6-60",
      "choices": [
        {
          "label": "参与处置",
          "hint": "精力-3 声望+2 快乐+1",
          "effect": {
            "energy": -3,
            "reputation": 2,
            "happy": 1
          }
        },
        {
          "label": "做好自护",
          "hint": "健康+2",
          "effect": {
            "health": 2
          }
        }
      ]
    }
  ],
  "trend": {
    "avgMood": [
      72.2,
      72.1,
      70.1,
      72,
      73.2,
      71.1,
      69.7,
      71
    ],
    "peakGrid": [
      56,
      64,
      48,
      64,
      61,
      72,
      57,
      60
    ],
    "syncRate": [
      99.6,
      99.6,
      98.4,
      97.6,
      98,
      98,
      97.2,
      97.2
    ]
  },
  "goals": [
    {
      "id": "pop",
      "name": "人口目标(逼近2076规划)",
      "metric": "全市模拟人口 1632 万",
      "target": "进度随 simYear",
      "status": "进行中"
    },
    {
      "id": "mood",
      "name": "宜居情绪 ≥ 68",
      "metric": "全市平均 71.0",
      "target": "68",
      "status": "达标"
    },
    {
      "id": "traffic",
      "name": "交通峰值可控 ≤ 88",
      "metric": "峰值 96",
      "target": "88",
      "status": "失守"
    },
    {
      "id": "grid",
      "name": "能源韧性(电网峰值 ≤ 95)",
      "metric": "峰值 60",
      "target": "95",
      "status": "达标"
    },
    {
      "id": "sync",
      "name": "数字孪生同步率 ≥ 99",
      "metric": "97.2%",
      "target": "99",
      "status": "失守"
    },
    {
      "id": "renew",
      "name": "可再生能源占比(阶段≥48)",
      "metric": "全市平均 77%",
      "target": "48%",
      "status": "达标"
    },
    {
      "id": "carbon",
      "name": "零碳进程(碳强度↓)",
      "metric": "碳指数 33.3",
      "target": "随年下降",
      "status": "达标"
    }
  ]
};
