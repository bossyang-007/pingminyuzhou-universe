// 场景分包 · 云端图书馆（由创始神 v3 自动生成，纯数据）
// 字段见 src/content/schema.md
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push(  {
    "id": "god_云端图书馆_8by7",
    "name": "云端图书馆",
    "sky": "#c8d4dc",
    "ground": "#9fb0b8",
    "fog": 0.016,
    "spawn": [
      0,
      0,
      6
    ],
    "props": [
      {
        "type": "box",
        "pos": [
          -3,
          1.5,
          -5
        ],
        "size": [
          2,
          3,
          1.2
        ],
        "color": "#d6e0e8"
      },
      {
        "type": "box",
        "pos": [
          3,
          1.5,
          -5
        ],
        "size": [
          2,
          3,
          1.2
        ],
        "color": "#d6e0e8"
      },
      {
        "type": "cyl",
        "pos": [
          0,
          2,
          0
        ],
        "size": [
          0.3,
          4
        ],
        "color": "#b8c4cc"
      },
      {
        "type": "sphere",
        "pos": [
          0,
          4.2,
          0
        ],
        "size": [
          0.6
        ],
        "color": "#ffe9a8",
        "emissive": "#ffd166"
      },
      {
        "type": "box",
        "pos": [
          0,
          1.5,
          -7
        ],
        "size": [
          8,
          3,
          1
        ],
        "color": "#e8eef2"
      },
      {
        "type": "box",
        "pos": [
          4,
          0.5,
          3
        ],
        "size": [
          1.4,
          1,
          1.2
        ],
        "color": "#c9b79a"
      }
    ],
    "spots": [
      {
        "id": "quiz",
        "label": "问答水晶",
        "pos": [
          -5,
          0,
          3
        ],
        "radius": 2.6,
        "intro": "水晶用老人的声音提问。",
        "event": {
          "title": "知识问答",
          "desc": "答对有奖，答错……也长见识。",
          "choices": [
            {
              "label": "认真作答",
              "hint": "知识+4 声望+2",
              "effect": {
                "knowledge": 4,
                "reputation": 2
              }
            },
            {
              "label": "蒙一个",
              "hint": "知识+1 快乐+1",
              "effect": {
                "knowledge": 1,
                "happy": 1
              }
            }
          ]
        }
      },
      {
        "id": "read",
        "label": "悬浮书岛",
        "pos": [
          -3,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "书页自己翻动，像有看不见的手。",
        "event": {
          "title": "沉浸式阅读",
          "desc": "你陷进一张会发光的阅读椅。",
          "choices": [
            {
              "label": "读一上午",
              "hint": "知识+6 精力-2",
              "effect": {
                "knowledge": 6,
                "energy": -2
              }
            },
            {
              "label": "速览目录",
              "hint": "知识+3",
              "effect": {
                "knowledge": 3
              }
            }
          ]
        }
      },
      {
        "id": "balcony",
        "label": "观云台",
        "pos": [
          5,
          0,
          4
        ],
        "radius": 3,
        "intro": "云在脚下而不是头上。",
        "event": {
          "title": "凭栏远眺",
          "desc": "世界安静得只剩风。",
          "choices": [
            {
              "label": "放空冥想",
              "hint": "精力+4 快乐+3",
              "effect": {
                "energy": 4,
                "happy": 3
              }
            },
            {
              "label": "拍张照",
              "hint": "社交+3",
              "effect": {
                "social": 3
              }
            }
          ]
        }
      },
      {
        "id": "archive",
        "label": "记忆档案",
        "pos": [
          3,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "玻璃球里封存着陌生人的回忆。",
        "event": {
          "title": "翻阅记忆",
          "desc": "别人的人生在你眼前快进。",
          "choices": [
            {
              "label": "认真共情",
              "hint": "社交+4 快乐+2",
              "effect": {
                "social": 4,
                "happy": 2
              }
            },
            {
              "label": "当作故事",
              "hint": "知识+2",
              "effect": {
                "knowledge": 2
              }
            }
          ]
        }
      }
    ],
    "narrative": "云在脚下缓缓流过，声音被滤得很轻，像隔着一层梦。",
    "ambient": "云雾缭绕 · 风铃轻响",
    "eventHooks": [
      "wonder",
      "festival",
      "peace"
    ],
    "meta": {
      "author": "创始神",
      "style": "空灵 · 自动生成",
      "theme": "云端图书馆",
      "note": "v3 主题化生成 · 主题「云端图书馆」"
    }
  });
