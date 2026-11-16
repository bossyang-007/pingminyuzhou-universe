// 场景分包 · 悬浮寺庙（由创始神 v3 自动生成，纯数据）
// 字段见 src/content/schema.md
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push(  {
    "id": "god_悬浮寺庙_68tx",
    "name": "悬浮寺庙",
    "sky": "#c8d4dc",
    "ground": "#9fb0b8",
    "fog": 0.018,
    "spawn": [
      0,
      0,
      6
    ],
    "props": [
      {
        "type": "cone",
        "pos": [
          3,
          2.8,
          -3
        ],
        "size": [
          1,
          1.2
        ],
        "color": "#c0392b"
      },
      {
        "type": "cyl",
        "pos": [
          -3,
          1.2,
          -3
        ],
        "size": [
          0.3,
          2.4
        ],
        "color": "#b8a98a"
      },
      {
        "type": "cyl",
        "pos": [
          3,
          1.2,
          -3
        ],
        "size": [
          0.3,
          2.4
        ],
        "color": "#b8a98a"
      },
      {
        "type": "box",
        "pos": [
          0,
          1.5,
          -6
        ],
        "size": [
          6,
          3,
          2
        ],
        "color": "#e6ddcf",
        "emissive": "#ffe9c8"
      },
      {
        "type": "cone",
        "pos": [
          -3,
          2.8,
          -3
        ],
        "size": [
          1,
          1.2
        ],
        "color": "#c0392b"
      },
      {
        "type": "sphere",
        "pos": [
          0,
          4,
          -6
        ],
        "size": [
          0.6
        ],
        "color": "#ffd166",
        "emissive": "#ffd166"
      }
    ],
    "spots": [
      {
        "id": "spring",
        "label": "心泉",
        "pos": [
          4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "泉眼冒着温热的雾。",
        "event": {
          "title": "掬泉净手",
          "desc": "冷水激得人清醒。",
          "choices": [
            {
              "label": "净手静心",
              "hint": "精力+3 健康+2",
              "effect": {
                "energy": 3,
                "health": 2
              }
            },
            {
              "label": "饮一口",
              "hint": "健康+3",
              "effect": {
                "health": 3
              }
            }
          ]
        }
      },
      {
        "id": "garden",
        "label": "枯山水",
        "pos": [
          -5,
          0,
          3
        ],
        "radius": 2.6,
        "intro": "白砂上的纹路像水波。",
        "event": {
          "title": "耙砂入定",
          "desc": "你一下下理着砂纹。",
          "choices": [
            {
              "label": "慢慢耙",
              "hint": "精力+4 快乐+2",
              "effect": {
                "energy": 4,
                "happy": 2
              }
            },
            {
              "label": "赏其形",
              "hint": "知识+2",
              "effect": {
                "knowledge": 2
              }
            }
          ]
        }
      },
      {
        "id": "bell",
        "label": "钟楼",
        "pos": [
          -4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "铜钟等你撞响。",
        "event": {
          "title": "撞钟祈福",
          "desc": "一声钟响，山谷回荡。",
          "choices": [
            {
              "label": "用力撞",
              "hint": "快乐+4 声望+2",
              "effect": {
                "happy": 4,
                "reputation": 2
              }
            },
            {
              "label": "轻叩三下",
              "hint": "精力+2 快乐+1",
              "effect": {
                "energy": 2,
                "happy": 1
              }
            }
          ]
        }
      },
      {
        "id": "hall",
        "label": "大殿",
        "pos": [
          0,
          0,
          -3
        ],
        "radius": 2.8,
        "intro": "香雾缭绕，钟声很远。",
        "event": {
          "title": "殿内静修",
          "desc": "你跟着僧侣念了一段经。",
          "choices": [
            {
              "label": "诚心礼佛",
              "hint": "精力+4 快乐+3",
              "effect": {
                "energy": 4,
                "happy": 3
              }
            },
            {
              "label": "抄一份经",
              "hint": "知识+3 声望+1",
              "effect": {
                "knowledge": 3,
                "reputation": 1
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
      "theme": "悬浮寺庙",
      "note": "v3 主题化生成 · 主题「悬浮寺庙」"
    }
  });
