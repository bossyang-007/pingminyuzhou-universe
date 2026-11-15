// 场景分包 · 地下黑市（由创始神 v3 自动生成，纯数据）
// 字段见 src/content/schema.md
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push(  {
    "id": "god_地下黑市_472b",
    "name": "地下黑市",
    "sky": "#241d2e",
    "ground": "#342a3a",
    "fog": 0.026,
    "spawn": [
      0,
      0,
      6
    ],
    "props": [
      {
        "type": "box",
        "pos": [
          0,
          1.4,
          -6
        ],
        "size": [
          8,
          2.8,
          1.6
        ],
        "color": "#2a2330",
        "emissive": "#ff8c3a"
      },
      {
        "type": "cyl",
        "pos": [
          -4,
          1.5,
          -3
        ],
        "size": [
          0.3,
          3
        ],
        "color": "#4a3f4a"
      },
      {
        "type": "sphere",
        "pos": [
          -4,
          3.2,
          -3
        ],
        "size": [
          1
        ],
        "color": "#ff8c3a",
        "emissive": "#ff8c3a"
      },
      {
        "type": "box",
        "pos": [
          -3,
          0.4,
          4
        ],
        "size": [
          1.4,
          0.8,
          1.2
        ],
        "color": "#4a3f4a"
      },
      {
        "type": "cone",
        "pos": [
          2,
          1,
          3
        ],
        "size": [
          1,
          2
        ],
        "color": "#3a3038"
      },
      {
        "type": "box",
        "pos": [
          4,
          0.8,
          1
        ],
        "size": [
          2,
          1.6,
          1.4
        ],
        "color": "#332b38"
      }
    ],
    "spots": [
      {
        "id": "info",
        "label": "情报贩子",
        "pos": [
          0,
          0,
          -3
        ],
        "radius": 2.8,
        "intro": "帽檐压得很低，只露一双眼睛。",
        "event": {
          "title": "买情报",
          "desc": "一条消息可能值一座城。",
          "choices": [
            {
              "label": "重金购密",
              "hint": "金钱-50 知识+4",
              "effect": {
                "money": -50,
                "knowledge": 4
              }
            },
            {
              "label": "以物易讯",
              "hint": "社交+3 声望-1",
              "effect": {
                "social": 3,
                "reputation": -1
              }
            }
          ]
        }
      },
      {
        "id": "lottery",
        "label": "地下赌档",
        "pos": [
          -5,
          0,
          3
        ],
        "radius": 2.6,
        "intro": "骰盅起落，呼吸都屏住。",
        "event": {
          "title": "小赌怡情",
          "desc": "你押了一注。",
          "choices": [
            {
              "label": "孤注一掷",
              "hint": "金钱+90 快乐+4 健康-2",
              "effect": {
                "money": 90,
                "happy": 4,
                "health": -2
              }
            },
            {
              "label": "见好就收",
              "hint": "金钱+20 快乐+2",
              "effect": {
                "money": 20,
                "happy": 2
              }
            }
          ]
        }
      },
      {
        "id": "forge",
        "label": "地下军火",
        "pos": [
          -4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "枪油味混着汗味。",
        "event": {
          "title": "淘装备",
          "desc": "你挑了把顺手的。",
          "choices": [
            {
              "label": "武装自己",
              "hint": "金钱-60 声望-2",
              "effect": {
                "money": -60,
                "reputation": -2
              }
            },
            {
              "label": "只看看",
              "hint": "知识+1",
              "effect": {
                "knowledge": 1
              }
            }
          ]
        }
      },
      {
        "id": "shadow",
        "label": "暗角",
        "pos": [
          5,
          0,
          4
        ],
        "radius": 2.6,
        "intro": "这里没人注意你。",
        "event": {
          "title": "隐身片刻",
          "desc": "你需要喘口气。",
          "choices": [
            {
              "label": "闭眼养神",
              "hint": "精力+5",
              "effect": {
                "energy": 5
              }
            },
            {
              "label": "观察众人",
              "hint": "知识+2 社交+1",
              "effect": {
                "knowledge": 2,
                "social": 1
              }
            }
          ]
        }
      }
    ],
    "narrative": "帽檐压得很低，只露一双眼睛，骰盅起落的呼吸都屏着。",
    "ambient": "低语嘈杂 · 骰盅起落",
    "eventHooks": [
      "sentiment",
      "downturn",
      "shortage"
    ],
    "meta": {
      "author": "创始神",
      "style": "暗市 · 自动生成",
      "theme": "地下黑市",
      "note": "v3 主题化生成 · 主题「地下黑市」"
    }
  });
