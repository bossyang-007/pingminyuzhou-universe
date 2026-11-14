// 场景分包 · 森林树屋社区（由创始神自动生成，纯数据）
// 字段见 src/content/schema.md
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push(  {
    "id": "god_森林树屋社区_11d6",
    "name": "森林树屋社区",
    "sky": "#aed3e8",
    "ground": "#6fa257",
    "fog": 0.014,
    "spawn": [
      0,
      0,
      5
    ],
    "props": [
      {
        "type": "box",
        "pos": [
          0,
          1,
          -6
        ],
        "size": [
          4,
          2,
          2
        ],
        "color": "#cbb89a",
        "emissive": "#ffd166"
      },
      {
        "type": "cyl",
        "pos": [
          -5,
          1.2,
          2
        ],
        "size": [
          0.4,
          2.4
        ],
        "color": "#6b4a2f"
      },
      {
        "type": "sphere",
        "pos": [
          -5,
          2.7,
          2
        ],
        "size": [
          1.4
        ],
        "color": "#3f7d3f"
      },
      {
        "type": "sphere",
        "pos": [
          5,
          1.2,
          3
        ],
        "size": [
          0.4
        ],
        "color": "#ffe9a8",
        "emissive": "#ffd166"
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
        "color": "#9a7b4f"
      }
    ],
    "spots": [
      {
        "id": "explore",
        "label": "探索角落",
        "pos": [
          0,
          0,
          -4
        ],
        "radius": 2.6,
        "intro": "这里似乎藏着什么。",
        "event": {
          "title": "在新地图探索",
          "desc": "你在「森林树屋社区」里四处张望，发现了意想不到的细节。",
          "choices": [
            {
              "label": "仔细查看",
              "hint": "知识+3 快乐+2",
              "effect": {
                "knowledge": 3,
                "happy": 2
              }
            },
            {
              "label": "随手拍下",
              "hint": "社交+2 快乐+2",
              "effect": {
                "social": 2,
                "happy": 2
              }
            }
          ]
        }
      },
      {
        "id": "rest",
        "label": "歇脚处",
        "pos": [
          2,
          0,
          3
        ],
        "radius": 2.4,
        "intro": "走累了，正好坐会儿。",
        "event": {
          "title": "就地歇脚",
          "desc": "风很轻，时间很慢。",
          "choices": [
            {
              "label": "闭眼养神",
              "hint": "精力+5",
              "effect": {
                "energy": 5
              }
            },
            {
              "label": "发条动态",
              "hint": "社交+3",
              "effect": {
                "social": 3
              }
            }
          ]
        }
      },
      {
        "id": "trade",
        "label": "小卖部",
        "pos": [
          -5,
          0,
          2
        ],
        "radius": 2.6,
        "intro": "路边支了个小摊。",
        "event": {
          "title": "顺便消费",
          "desc": "摊主热情地招呼你。",
          "choices": [
            {
              "label": "买点特产",
              "hint": "金钱-25 快乐+3",
              "effect": {
                "money": -25,
                "happy": 3
              }
            },
            {
              "label": "只逛不买",
              "hint": "快乐+1",
              "effect": {
                "happy": 1
              }
            }
          ]
        }
      }
    ]
  });
