// 场景分包 · 废弃游乐园（由创始神 v3 自动生成，纯数据）
// 字段见 src/content/schema.md
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push(  {
    "id": "god_废弃游乐园_gceb",
    "name": "废弃游乐园",
    "sky": "#d98c6a",
    "ground": "#8a5a3c",
    "fog": 0.022,
    "spawn": [
      0,
      0,
      6
    ],
    "props": [
      {
        "type": "box",
        "pos": [
          -4,
          0.8,
          -3
        ],
        "size": [
          3,
          1.6,
          1.4
        ],
        "color": "#6b5a4a"
      },
      {
        "type": "sphere",
        "pos": [
          4,
          1,
          2
        ],
        "size": [
          1
        ],
        "color": "#9a8a6a",
        "emissive": "#ffd166"
      },
      {
        "type": "cyl",
        "pos": [
          0,
          3,
          -7
        ],
        "size": [
          0.4,
          6
        ],
        "color": "#7a5a3a"
      },
      {
        "type": "cone",
        "pos": [
          0,
          6.7,
          -7
        ],
        "size": [
          1.6,
          1.4
        ],
        "color": "#b5533a",
        "emissive": "#ffb347"
      },
      {
        "type": "box",
        "pos": [
          0,
          6.4,
          -7
        ],
        "size": [
          3,
          0.4,
          0.4
        ],
        "color": "#8a6a4a"
      },
      {
        "type": "box",
        "pos": [
          2,
          0.4,
          3
        ],
        "size": [
          2,
          0.8,
          1
        ],
        "color": "#7a6a4a"
      }
    ],
    "spots": [
      {
        "id": "hall",
        "label": "鬼屋入口",
        "pos": [
          -4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "半开的门后黑得发甜。",
        "event": {
          "title": "胆量测试",
          "desc": "你决定进去看一眼。",
          "choices": [
            {
              "label": "硬着头皮进",
              "hint": "快乐+3 声望+2",
              "effect": {
                "happy": 3,
                "reputation": 2
              }
            },
            {
              "label": "门口张望",
              "hint": "知识+1",
              "effect": {
                "knowledge": 1
              }
            }
          ]
        }
      },
      {
        "id": "ferris",
        "label": "生锈摩天轮",
        "pos": [
          0,
          0,
          -4
        ],
        "radius": 3,
        "intro": "车厢在风里吱呀作响，像在叹气。",
        "event": {
          "title": "坐上摩天轮",
          "desc": "最高处能看见整个被遗忘的园区。",
          "choices": [
            {
              "label": "慢慢转一圈",
              "hint": "快乐+4 精力-2",
              "effect": {
                "happy": 4,
                "energy": -2
              }
            },
            {
              "label": "在顶舱发呆",
              "hint": "精力+3 快乐+2",
              "effect": {
                "energy": 3,
                "happy": 2
              }
            }
          ]
        }
      },
      {
        "id": "stage",
        "label": "废弃舞台",
        "pos": [
          4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "话筒线拖在地上，还能通电。",
        "event": {
          "title": "即兴表演",
          "desc": "没有观众，但你唱得很尽兴。",
          "choices": [
            {
              "label": "放声唱",
              "hint": "快乐+5 社交+1",
              "effect": {
                "happy": 5,
                "social": 1
              }
            },
            {
              "label": "录下来",
              "hint": "社交+3 知识+1",
              "effect": {
                "social": 3,
                "knowledge": 1
              }
            }
          ]
        }
      },
      {
        "id": "booth",
        "label": "旧摊位",
        "pos": [
          -5,
          0,
          3
        ],
        "radius": 2.6,
        "intro": "摊板下压着一张褪色奖券。",
        "event": {
          "title": "淘宝摊位",
          "desc": "你翻了翻蒙尘的杂物。",
          "choices": [
            {
              "label": "捡漏",
              "hint": "金钱+50 快乐+1",
              "effect": {
                "money": 50,
                "happy": 1
              }
            },
            {
              "label": "只怀旧",
              "hint": "快乐+2",
              "effect": {
                "happy": 2
              }
            }
          ]
        }
      }
    ],
    "narrative": "生锈的骨架还撑着旧日的轮廓，风穿过缝隙，像谁在叹气。",
    "ambient": "金属风声 · 远处电流",
    "eventHooks": [
      "downturn",
      "shortage",
      "sentiment"
    ],
    "meta": {
      "author": "创始神",
      "style": "废土 · 自动生成",
      "theme": "废弃游乐园",
      "note": "v3 主题化生成 · 主题「废弃游乐园」"
    }
  });
