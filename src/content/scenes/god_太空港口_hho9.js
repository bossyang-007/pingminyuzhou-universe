// 场景分包 · 太空港口（由创始神 v3 自动生成，纯数据）
// 字段见 src/content/schema.md
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push(  {
    "id": "god_太空港口_hho9",
    "name": "太空港口",
    "sky": "#0b0b1a",
    "ground": "#15152a",
    "fog": 0.025,
    "spawn": [
      0,
      0,
      6
    ],
    "props": [
      {
        "type": "sphere",
        "pos": [
          -5,
          4.4,
          -4
        ],
        "size": [
          1.4
        ],
        "color": "#9fd6ff",
        "emissive": "#39d0ff"
      },
      {
        "type": "sphere",
        "pos": [
          -3,
          1,
          2
        ],
        "size": [
          0.6
        ],
        "color": "#ffe9a8",
        "emissive": "#ffd166"
      },
      {
        "type": "cone",
        "pos": [
          5,
          1.2,
          -4
        ],
        "size": [
          1.4,
          2.4
        ],
        "color": "#2a3358",
        "emissive": "#ff9bd0"
      },
      {
        "type": "box",
        "pos": [
          0,
          1.5,
          -7
        ],
        "size": [
          10,
          3,
          1.6
        ],
        "color": "#1f2540",
        "emissive": "#39d0ff"
      },
      {
        "type": "cyl",
        "pos": [
          -5,
          2,
          -4
        ],
        "size": [
          0.6,
          4
        ],
        "color": "#33405e"
      },
      {
        "type": "box",
        "pos": [
          3,
          0.6,
          3
        ],
        "size": [
          1.6,
          1.2,
          1.2
        ],
        "color": "#2a3358"
      }
    ],
    "spots": [
      {
        "id": "dock",
        "label": "泊位控制台",
        "pos": [
          0,
          0,
          -4
        ],
        "radius": 3,
        "intro": "屏幕滚动着各星系的到港时刻。",
        "event": {
          "title": "调度飞船",
          "desc": "你指挥一艘货船安全入港。",
          "choices": [
            {
              "label": "精准调度",
              "hint": "声望+5 知识+2",
              "effect": {
                "reputation": 5,
                "knowledge": 2
              }
            },
            {
              "label": "随便放行",
              "hint": "快乐+2 声望-2",
              "effect": {
                "happy": 2,
                "reputation": -2
              }
            }
          ]
        }
      },
      {
        "id": "bar",
        "label": "失重酒吧",
        "pos": [
          -5,
          0,
          3
        ],
        "radius": 2.6,
        "intro": "酒球悬浮着，被吸管追。",
        "event": {
          "title": "船员夜话",
          "desc": "各星球的故事撞在一起。",
          "choices": [
            {
              "label": "请客聊嗨",
              "hint": "社交+5 金钱-25",
              "effect": {
                "social": 5,
                "money": -25
              }
            },
            {
              "label": "安静听",
              "hint": "知识+3 快乐+1",
              "effect": {
                "knowledge": 3,
                "happy": 1
              }
            }
          ]
        }
      },
      {
        "id": "sim",
        "label": "训练舱",
        "pos": [
          5,
          0,
          4
        ],
        "radius": 2.6,
        "intro": "模拟驾驶舱等你上手。",
        "event": {
          "title": "模拟飞行",
          "desc": "你过了一次星际航道考核。",
          "choices": [
            {
              "label": "全力通关",
              "hint": "知识+4 精力-3",
              "effect": {
                "knowledge": 4,
                "energy": -3
              }
            },
            {
              "label": "热身练习",
              "hint": "精力-1 知识+2",
              "effect": {
                "energy": -1,
                "knowledge": 2
              }
            }
          ]
        }
      },
      {
        "id": "shop",
        "label": "星际商栈",
        "pos": [
          -4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "玻璃罐里漂着会发光的矿石。",
        "event": {
          "title": "外星交易",
          "desc": "用地球特产换点稀罕物。",
          "choices": [
            {
              "label": "精明议价",
              "hint": "金钱+70 知识+1",
              "effect": {
                "money": 70,
                "knowledge": 1
              }
            },
            {
              "label": "换纪念品",
              "hint": "金钱-40 快乐+3",
              "effect": {
                "money": -40,
                "happy": 3
              }
            }
          ]
        }
      }
    ],
    "narrative": "整面墙是星海，地球只是颗蓝点，烦恼在尺度面前变小了。",
    "ambient": "舱内循环风 · 星海无声",
    "eventHooks": [
      "tech",
      "wonder",
      "migration"
    ],
    "meta": {
      "author": "创始神",
      "style": "太空 · 自动生成",
      "theme": "太空港口",
      "note": "v3 主题化生成 · 主题「太空港口」"
    }
  });
