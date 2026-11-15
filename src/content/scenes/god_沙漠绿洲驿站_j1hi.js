// 场景分包 · 沙漠绿洲驿站（由创始神 v3 自动生成，纯数据）
// 字段见 src/content/schema.md
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push(  {
    "id": "god_沙漠绿洲驿站_j1hi",
    "name": "沙漠绿洲驿站",
    "sky": "#e8c98a",
    "ground": "#d9b06a",
    "fog": 0.018,
    "spawn": [
      0,
      0,
      6
    ],
    "props": [
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
        "color": "#ffe9a8",
        "emissive": "#ffd166"
      },
      {
        "type": "cone",
        "pos": [
          0,
          1.2,
          -7
        ],
        "size": [
          2,
          2.4
        ],
        "color": "#d9b06a"
      },
      {
        "type": "cyl",
        "pos": [
          -3,
          2,
          -5
        ],
        "size": [
          0.4,
          4
        ],
        "color": "#7a5a3a"
      },
      {
        "type": "sphere",
        "pos": [
          -3,
          4.4,
          -5
        ],
        "size": [
          1.8
        ],
        "color": "#3f7d3f"
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
        "color": "#c9a86a"
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
        "color": "#a88a5a"
      }
    ],
    "spots": [
      {
        "id": "tent",
        "label": "商队帐篷",
        "pos": [
          -4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "骆驼在帐外嚼着草。",
        "event": {
          "title": "商队夜话",
          "desc": "老向导讲起沙海另一头的城。",
          "choices": [
            {
              "label": "听故事",
              "hint": "知识+4 快乐+2",
              "effect": {
                "knowledge": 4,
                "happy": 2
              }
            },
            {
              "label": "换点补给",
              "hint": "金钱-25 健康+2",
              "effect": {
                "money": -25,
                "health": 2
              }
            }
          ]
        }
      },
      {
        "id": "shade",
        "label": "棕榈荫",
        "pos": [
          -5,
          0,
          4
        ],
        "radius": 2.6,
        "intro": "树荫下比太阳下凉十度。",
        "event": {
          "title": "树荫小憩",
          "desc": "蝉鸣成了最好的白噪音。",
          "choices": [
            {
              "label": "眯一觉",
              "hint": "精力+6 健康+1",
              "effect": {
                "energy": 6,
                "health": 1
              }
            },
            {
              "label": "写张明信片",
              "hint": "社交+3",
              "effect": {
                "social": 3
              }
            }
          ]
        }
      },
      {
        "id": "well",
        "label": "清泉井",
        "pos": [
          0,
          0,
          -3
        ],
        "radius": 2.6,
        "intro": "井水凉得能照见星星。",
        "event": {
          "title": "痛饮清泉",
          "desc": "一路风沙，这口水解了渴也解了乏。",
          "choices": [
            {
              "label": "大口喝",
              "hint": "健康+5 精力+3",
              "effect": {
                "health": 5,
                "energy": 3
              }
            },
            {
              "label": "装满水壶",
              "hint": "精力+2",
              "effect": {
                "energy": 2
              }
            }
          ]
        }
      },
      {
        "id": "market",
        "label": "香料摊",
        "pos": [
          4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "孜然与玫瑰的混合味扑面。",
        "event": {
          "title": "香料交易",
          "desc": "一捧藏红花能换不少钱。",
          "choices": [
            {
              "label": "倒卖获利",
              "hint": "金钱+60 声望-1",
              "effect": {
                "money": 60,
                "reputation": -1
              }
            },
            {
              "label": "买来下厨",
              "hint": "金钱-20 快乐+3",
              "effect": {
                "money": -20,
                "happy": 3
              }
            }
          ]
        }
      }
    ],
    "narrative": "沙丘的曲线被风雕得很慢，井水的凉能照见星星。",
    "ambient": "风沙轻啸 · 蝉鸣稀疏",
    "eventHooks": [
      "festival",
      "boom",
      "migration"
    ],
    "meta": {
      "author": "创始神",
      "style": "荒漠 · 自动生成",
      "theme": "沙漠绿洲驿站",
      "note": "v3 主题化生成 · 主题「沙漠绿洲驿站」"
    }
  });
