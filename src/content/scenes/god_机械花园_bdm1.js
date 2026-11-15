// 场景分包 · 机械花园（由创始神 v3 自动生成，纯数据）
// 字段见 src/content/schema.md
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push(  {
    "id": "god_机械花园_bdm1",
    "name": "机械花园",
    "sky": "#aed3e8",
    "ground": "#6fa257",
    "fog": 0.016,
    "spawn": [
      0,
      0,
      6
    ],
    "props": [
      {
        "type": "sphere",
        "pos": [
          -3,
          3.4,
          -5
        ],
        "size": [
          1.6
        ],
        "color": "#7fd6a0",
        "emissive": "#39ffa0"
      },
      {
        "type": "cyl",
        "pos": [
          -3,
          1.5,
          -5
        ],
        "size": [
          0.4,
          3
        ],
        "color": "#5a8a6a"
      },
      {
        "type": "box",
        "pos": [
          -4,
          0.4,
          3
        ],
        "size": [
          1.4,
          0.8,
          1.2
        ],
        "color": "#5a7a6a"
      },
      {
        "type": "box",
        "pos": [
          3,
          1,
          -4
        ],
        "size": [
          2.4,
          2,
          2
        ],
        "color": "#4a6a5a",
        "emissive": "#39d0a0"
      },
      {
        "type": "sphere",
        "pos": [
          4,
          0.6,
          2
        ],
        "size": [
          0.5
        ],
        "color": "#aef0c8",
        "emissive": "#aef0c8"
      },
      {
        "type": "cone",
        "pos": [
          0,
          1.2,
          -7
        ],
        "size": [
          1.6,
          2.4
        ],
        "color": "#6a9a7a"
      }
    ],
    "spots": [
      {
        "id": "pond",
        "label": "水银池",
        "pos": [
          -4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "液态金属荡着涟漪。",
        "event": {
          "title": "池边冥想",
          "desc": "倒影里是个更平静的你。",
          "choices": [
            {
              "label": "静坐",
              "hint": "精力+4 快乐+3",
              "effect": {
                "energy": 4,
                "happy": 3
              }
            },
            {
              "label": "取样研究",
              "hint": "知识+3",
              "effect": {
                "knowledge": 3
              }
            }
          ]
        }
      },
      {
        "id": "lab",
        "label": "培育舱",
        "pos": [
          -5,
          0,
          3
        ],
        "radius": 2.6,
        "intro": "里面漂着发光的种子。",
        "event": {
          "title": "基因调配",
          "desc": "你试着配出会发光的果子。",
          "choices": [
            {
              "label": "大胆实验",
              "hint": "知识+5 精力-2",
              "effect": {
                "knowledge": 5,
                "energy": -2
              }
            },
            {
              "label": "保守培育",
              "hint": "知识+3 健康+1",
              "effect": {
                "knowledge": 3,
                "health": 1
              }
            }
          ]
        }
      },
      {
        "id": "garden",
        "label": "自动花圃",
        "pos": [
          0,
          0,
          -3
        ],
        "radius": 2.8,
        "intro": "齿轮玫瑰跟着光照开合。",
        "event": {
          "title": "培育机械花",
          "desc": "你调校了它的光合作用模块。",
          "choices": [
            {
              "label": "细心培育",
              "hint": "知识+4 快乐+2",
              "effect": {
                "knowledge": 4,
                "happy": 2
              }
            },
            {
              "label": "采朵送人",
              "hint": "社交+4 快乐+1",
              "effect": {
                "social": 4,
                "happy": 1
              }
            }
          ]
        }
      },
      {
        "id": "bench",
        "label": "藤椅",
        "pos": [
          4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "藤蔓是仿生材料，触感温热。",
        "event": {
          "title": "花园小坐",
          "desc": "鸟鸣其实是扬声器播放的。",
          "choices": [
            {
              "label": "享受假自然",
              "hint": "快乐+4 精力+2",
              "effect": {
                "happy": 4,
                "energy": 2
              }
            },
            {
              "label": "拆解扬声器",
              "hint": "知识+2 精力-1",
              "effect": {
                "knowledge": 2,
                "energy": -1
              }
            }
          ]
        }
      }
    ],
    "narrative": "齿轮玫瑰跟着光照开合，液态金属荡着会发光的涟漪。",
    "ambient": "发条滴答 · 蒸汽轻喷",
    "eventHooks": [
      "tech",
      "digital",
      "boom"
    ],
    "meta": {
      "author": "创始神",
      "style": "机械 · 自动生成",
      "theme": "机械花园",
      "note": "v3 主题化生成 · 主题「机械花园」"
    }
  });
