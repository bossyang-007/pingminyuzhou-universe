// 场景分包 · 海底城市（由创始神 v3 自动生成，纯数据）
// 字段见 src/content/schema.md
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push(  {
    "id": "god_海底城市_kluz",
    "name": "海底城市",
    "sky": "#1b6ca8",
    "ground": "#0f4c75",
    "fog": 0.03,
    "spawn": [
      0,
      0,
      6
    ],
    "props": [
      {
        "type": "cone",
        "pos": [
          2,
          1,
          2
        ],
        "size": [
          1.2,
          2
        ],
        "color": "#0c5f78"
      },
      {
        "type": "box",
        "pos": [
          0,
          0.3,
          4
        ],
        "size": [
          3,
          0.6,
          1.4
        ],
        "color": "#0a4f66"
      },
      {
        "type": "box",
        "pos": [
          4,
          1.2,
          -4
        ],
        "size": [
          2.4,
          2.4,
          2
        ],
        "color": "#0e7d99",
        "emissive": "#1bd0ff"
      },
      {
        "type": "cyl",
        "pos": [
          -4,
          1.5,
          -4
        ],
        "size": [
          0.5,
          3
        ],
        "color": "#0d6b86"
      },
      {
        "type": "sphere",
        "pos": [
          0,
          2,
          -7
        ],
        "size": [
          2.4
        ],
        "color": "#1f8fb0",
        "emissive": "#2bd6ff"
      },
      {
        "type": "sphere",
        "pos": [
          -3,
          0.6,
          3
        ],
        "size": [
          0.5
        ],
        "color": "#aef0ff",
        "emissive": "#aef0ff"
      }
    ],
    "spots": [
      {
        "id": "coral",
        "label": "珊瑚园",
        "pos": [
          -3,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "荧光珊瑚随暗流摆动。",
        "event": {
          "title": "珊瑚养护",
          "desc": "你帮小丑鱼整理了下家园。",
          "choices": [
            {
              "label": "仔细照料",
              "hint": "快乐+4 知识+2",
              "effect": {
                "happy": 4,
                "knowledge": 2
              }
            },
            {
              "label": "喂喂鱼群",
              "hint": "快乐+3 社交+1",
              "effect": {
                "happy": 3,
                "social": 1
              }
            }
          ]
        }
      },
      {
        "id": "market",
        "label": "海沟集市",
        "pos": [
          -5,
          0,
          3
        ],
        "radius": 2.6,
        "intro": "章鱼商贩用触手比划价格。",
        "event": {
          "title": "深海交易",
          "desc": "这里的货币是会发光的珍珠。",
          "choices": [
            {
              "label": "买珍珠",
              "hint": "金钱-30 快乐+2",
              "effect": {
                "money": -30,
                "happy": 2
              }
            },
            {
              "label": "帮工换货",
              "hint": "社交+4 精力-2",
              "effect": {
                "social": 4,
                "energy": -2
              }
            }
          ]
        }
      },
      {
        "id": "spring",
        "label": "热泉口",
        "pos": [
          5,
          0,
          4
        ],
        "radius": 2.8,
        "intro": "黑烟囱喷着温热的矿浆。",
        "event": {
          "title": "热泉泡汤",
          "desc": "矿物质温泉，泡着很解乏。",
          "choices": [
            {
              "label": "泡一会儿",
              "hint": "健康+5 精力+3",
              "effect": {
                "health": 5,
                "energy": 3
              }
            },
            {
              "label": "采点矿石",
              "hint": "金钱+40 精力-2",
              "effect": {
                "money": 40,
                "energy": -2
              }
            }
          ]
        }
      },
      {
        "id": "wreck",
        "label": "沉船",
        "pos": [
          3,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "锈蚀的船舱里似乎有反光。",
        "event": {
          "title": "沉船探宝",
          "desc": "你钻进幽暗的货舱。",
          "choices": [
            {
              "label": "撬开宝箱",
              "hint": "金钱+80 精力-4",
              "effect": {
                "money": 80,
                "energy": -4
              }
            },
            {
              "label": "只拍照留念",
              "hint": "知识+2 社交+2",
              "effect": {
                "knowledge": 2,
                "social": 2
              }
            }
          ]
        }
      }
    ],
    "narrative": "蓝绿的光从穹顶渗下来，鲸歌的低频贴着胸口走。",
    "ambient": "水波荡漾 · 鲸歌低频",
    "eventHooks": [
      "festival",
      "tourism",
      "tech"
    ],
    "meta": {
      "author": "创始神",
      "style": "深海 · 自动生成",
      "theme": "海底城市",
      "note": "v3 主题化生成 · 主题「海底城市」"
    }
  });
