// 场景分包 · 赛博地下城（由创始神 v3 自动生成，纯数据）
// 字段见 src/content/schema.md
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push(  {
    "id": "god_赛博地下城_14f8",
    "name": "赛博地下城",
    "sky": "#241d2e",
    "ground": "#342a3a",
    "fog": 0.02,
    "spawn": [
      0,
      0,
      6
    ],
    "props": [
      {
        "type": "box",
        "pos": [
          -2,
          0.6,
          2
        ],
        "size": [
          1.6,
          1.2,
          1.2
        ],
        "color": "#3a3f5c",
        "emissive": "#39d0ff"
      },
      {
        "type": "box",
        "pos": [
          -5,
          2,
          -6
        ],
        "size": [
          2,
          4,
          2
        ],
        "color": "#2b2f45",
        "emissive": "#ff2bd6"
      },
      {
        "type": "sphere",
        "pos": [
          0,
          6.4,
          -9
        ],
        "size": [
          0.5
        ],
        "color": "#ff2bd6",
        "emissive": "#ff2bd6"
      },
      {
        "type": "box",
        "pos": [
          5,
          1.6,
          -6
        ],
        "size": [
          2,
          3.2,
          2
        ],
        "color": "#2b2f45",
        "emissive": "#2bffea"
      },
      {
        "type": "cyl",
        "pos": [
          0,
          3,
          -9
        ],
        "size": [
          0.3,
          6
        ],
        "color": "#555a7a"
      },
      {
        "type": "box",
        "pos": [
          3,
          0.5,
          3
        ],
        "size": [
          1.2,
          1,
          1
        ],
        "color": "#444a66"
      }
    ],
    "spots": [
      {
        "id": "deal",
        "label": "黑市摊",
        "pos": [
          -5,
          0,
          3
        ],
        "radius": 2.6,
        "intro": "摊主用三只眼睛打量你。",
        "event": {
          "title": "地下交易",
          "desc": "明码标价，童叟无欺（大概）。",
          "choices": [
            {
              "label": "淘件装备",
              "hint": "金钱-60 健康+2",
              "effect": {
                "money": -60,
                "health": 2
              }
            },
            {
              "label": "只砍价不买",
              "hint": "社交+2 快乐+1",
              "effect": {
                "social": 2,
                "happy": 1
              }
            }
          ]
        }
      },
      {
        "id": "hack",
        "label": "黑客终端",
        "pos": [
          -3,
          0,
          1
        ],
        "radius": 2.4,
        "intro": "一台没人管的老终端还亮着，光标一闪一闪。",
        "event": {
          "title": "潜入数据残骸",
          "desc": "你试着从废弃节点里扒点有用的东西。",
          "choices": [
            {
              "label": "破解防火墙",
              "hint": "知识+5 精力-3",
              "effect": {
                "knowledge": 5,
                "energy": -3
              }
            },
            {
              "label": "顺手拷贝资料",
              "hint": "知识+3 声望-2",
              "effect": {
                "knowledge": 3,
                "reputation": -2
              }
            }
          ]
        }
      },
      {
        "id": "bar",
        "label": "霓虹酒馆",
        "pos": [
          3,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "合成酒精的味道混着电流声。",
        "event": {
          "title": "霓虹下的闲谈",
          "desc": "酒保是个话痨，知道不少地下消息。",
          "choices": [
            {
              "label": "请他喝一杯",
              "hint": "社交+5 金钱-20",
              "effect": {
                "social": 5,
                "money": -20
              }
            },
            {
              "label": "打听情报",
              "hint": "知识+3 社交+2",
              "effect": {
                "knowledge": 3,
                "social": 2
              }
            }
          ]
        }
      },
      {
        "id": "roof",
        "label": "天台",
        "pos": [
          5,
          0,
          4
        ],
        "radius": 3,
        "intro": "城市在脚下流淌成一条光河。",
        "event": {
          "title": "天台发呆",
          "desc": "高处风大，脑子反而清醒。",
          "choices": [
            {
              "label": "吹风放空",
              "hint": "精力+5 快乐+2",
              "effect": {
                "energy": 5,
                "happy": 2
              }
            },
            {
              "label": "记一笔账",
              "hint": "知识+2 声望+1",
              "effect": {
                "knowledge": 2,
                "reputation": 1
              }
            }
          ]
        }
      }
    ],
    "narrative": "霓虹在积水里碎成光斑，数据雨顺着檐角滴落，这里的时间比外面快半拍。",
    "ambient": "霓虹低鸣 · 数据流雨",
    "eventHooks": [
      "tech",
      "digital",
      "sentiment"
    ],
    "meta": {
      "author": "创始神",
      "style": "赛博 · 自动生成",
      "theme": "赛博地下城",
      "note": "v3 主题化生成 · 主题「赛博地下城」"
    }
  });
