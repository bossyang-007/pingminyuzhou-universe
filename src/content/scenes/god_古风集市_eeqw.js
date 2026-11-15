// 场景分包 · 古风集市（由创始神 v3 自动生成，纯数据）
// 字段见 src/content/schema.md
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push(  {
    "id": "god_古风集市_eeqw",
    "name": "古风集市",
    "sky": "#c9b79a",
    "ground": "#b98c5a",
    "fog": 0.016,
    "spawn": [
      0,
      0,
      6
    ],
    "props": [
      {
        "type": "cyl",
        "pos": [
          -4,
          1.5,
          -3
        ],
        "size": [
          0.4,
          3
        ],
        "color": "#6b4a2f"
      },
      {
        "type": "box",
        "pos": [
          0,
          1.2,
          -6
        ],
        "size": [
          7,
          2.4,
          1.4
        ],
        "color": "#a8503a"
      },
      {
        "type": "cone",
        "pos": [
          2,
          1,
          3
        ],
        "size": [
          1.2,
          2
        ],
        "color": "#b5533a"
      },
      {
        "type": "box",
        "pos": [
          4,
          0.6,
          1
        ],
        "size": [
          2,
          1.2,
          1.4
        ],
        "color": "#c9a86a"
      },
      {
        "type": "sphere",
        "pos": [
          -4,
          3.4,
          -3
        ],
        "size": [
          1.6
        ],
        "color": "#3f7d3f"
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
        "color": "#8a6f4a"
      }
    ],
    "spots": [
      {
        "id": "tea",
        "label": "茶寮",
        "pos": [
          0,
          0,
          -3
        ],
        "radius": 2.8,
        "intro": "幡旗写着\"一盏知春秋\"。",
        "event": {
          "title": "品茗听书",
          "desc": "说书人正讲到紧要处。",
          "choices": [
            {
              "label": "听得入迷",
              "hint": "知识+4 快乐+2",
              "effect": {
                "knowledge": 4,
                "happy": 2
              }
            },
            {
              "label": "与邻客对弈",
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
        "id": "food",
        "label": "小吃摊",
        "pos": [
          4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "糖画与臭豆腐齐飞。",
        "event": {
          "title": "市井觅食",
          "desc": "烟火气最抚凡人心。",
          "choices": [
            {
              "label": "大快朵颐",
              "hint": "快乐+4 健康+2",
              "effect": {
                "happy": 4,
                "health": 2
              }
            },
            {
              "label": "请摊主吃",
              "hint": "社交+4 金钱-20",
              "effect": {
                "social": 4,
                "money": -20
              }
            }
          ]
        }
      },
      {
        "id": "craft",
        "label": "铁匠铺",
        "pos": [
          -5,
          0,
          3
        ],
        "radius": 2.6,
        "intro": "叮当声里火星四溅。",
        "event": {
          "title": "打一把小刀",
          "desc": "你抡起锤，像模像样。",
          "choices": [
            {
              "label": "认真学艺",
              "hint": "知识+3 精力-2",
              "effect": {
                "knowledge": 3,
                "energy": -2
              }
            },
            {
              "label": "买现成的",
              "hint": "金钱-30 声望+1",
              "effect": {
                "money": -30,
                "reputation": 1
              }
            }
          ]
        }
      },
      {
        "id": "lantern",
        "label": "花灯铺",
        "pos": [
          -4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "兔子灯晃着暖黄的光。",
        "event": {
          "title": "猜灯谜",
          "desc": "你盯着谜面皱起眉。",
          "choices": [
            {
              "label": "猜中谜底",
              "hint": "知识+3 快乐+2",
              "effect": {
                "knowledge": 3,
                "happy": 2
              }
            },
            {
              "label": "买盏灯",
              "hint": "金钱-15 快乐+2",
              "effect": {
                "money": -15,
                "happy": 2
              }
            }
          ]
        }
      }
    ],
    "narrative": "青砖黛瓦、灯笼摇红，糖画与评书争着钻进耳朵。",
    "ambient": "灯笼摇红 · 评书声起",
    "eventHooks": [
      "market",
      "peace",
      "festival"
    ],
    "meta": {
      "author": "创始神",
      "style": "古风 · 自动生成",
      "theme": "古风集市",
      "note": "v3 主题化生成 · 主题「古风集市」"
    }
  });
