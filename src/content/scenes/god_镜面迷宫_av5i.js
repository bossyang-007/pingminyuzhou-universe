// 场景分包 · 镜面迷宫（由创始神 v3 自动生成，纯数据）
// 字段见 src/content/schema.md
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push(  {
    "id": "god_镜面迷宫_av5i",
    "name": "镜面迷宫",
    "sky": "#241d2e",
    "ground": "#342a3a",
    "fog": 0.024,
    "spawn": [
      0,
      0,
      6
    ],
    "props": [
      {
        "type": "box",
        "pos": [
          3,
          1.5,
          -4
        ],
        "size": [
          0.2,
          3,
          1
        ],
        "color": "#cfd8e0",
        "emissive": "#9fd6ff"
      },
      {
        "type": "box",
        "pos": [
          -4,
          0.4,
          3
        ],
        "size": [
          1.2,
          0.8,
          1
        ],
        "color": "#9fb0c0"
      },
      {
        "type": "box",
        "pos": [
          0,
          1.5,
          -6
        ],
        "size": [
          1,
          3,
          0.2
        ],
        "color": "#cfd8e0",
        "emissive": "#9fd6ff"
      },
      {
        "type": "sphere",
        "pos": [
          0,
          3.2,
          -6
        ],
        "size": [
          0.5
        ],
        "color": "#fff",
        "emissive": "#cfe8ff"
      },
      {
        "type": "box",
        "pos": [
          4,
          1.5,
          1
        ],
        "size": [
          1,
          3,
          0.2
        ],
        "color": "#cfd8e0",
        "emissive": "#9fd6ff"
      },
      {
        "type": "box",
        "pos": [
          -3,
          1.5,
          -4
        ],
        "size": [
          0.2,
          3,
          1
        ],
        "color": "#cfd8e0",
        "emissive": "#9fd6ff"
      }
    ],
    "spots": [
      {
        "id": "puzzle",
        "label": "谜题镜",
        "pos": [
          -4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "镜面浮着一道光做的算式。",
        "event": {
          "title": "解镜中谜",
          "desc": "你的大脑开始高速运转。",
          "choices": [
            {
              "label": "解出答案",
              "hint": "知识+5 精力-2",
              "effect": {
                "knowledge": 5,
                "energy": -2
              }
            },
            {
              "label": "撞碎看后",
              "hint": "快乐+2 精力-1",
              "effect": {
                "happy": 2,
                "energy": -1
              }
            }
          ]
        }
      },
      {
        "id": "hall",
        "label": "无尽回廊",
        "pos": [
          4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "往前走，尽头还是你。",
        "event": {
          "title": "穿越回廊",
          "desc": "你数着脚步找出口。",
          "choices": [
            {
              "label": "冷静寻路",
              "hint": "精力+3 知识+2",
              "effect": {
                "energy": 3,
                "knowledge": 2
              }
            },
            {
              "label": "奔跑宣泄",
              "hint": "健康+3 快乐+2",
              "effect": {
                "health": 3,
                "happy": 2
              }
            }
          ]
        }
      },
      {
        "id": "gift",
        "label": "镜中礼物",
        "pos": [
          -5,
          0,
          3
        ],
        "radius": 2.6,
        "intro": "某个镜像手里多了个盒子。",
        "event": {
          "title": "取镜中物",
          "desc": "你伸手，它竟递了出来。",
          "choices": [
            {
              "label": "收下宝物",
              "hint": "金钱+60 快乐+2",
              "effect": {
                "money": 60,
                "happy": 2
              }
            },
            {
              "label": "礼尚往来",
              "hint": "社交+3 声望+2",
              "effect": {
                "social": 3,
                "reputation": 2
              }
            }
          ]
        }
      },
      {
        "id": "rest",
        "label": "静镜台",
        "pos": [
          5,
          0,
          4
        ],
        "radius": 3,
        "intro": "一面不反光的黑镜，正好歇脚。",
        "event": {
          "title": "镜台小坐",
          "desc": "没有倒影，反而轻松。",
          "choices": [
            {
              "label": "闭眼养神",
              "hint": "精力+5",
              "effect": {
                "energy": 5
              }
            },
            {
              "label": "理妆容",
              "hint": "快乐+2 社交+1",
              "effect": {
                "happy": 2,
                "social": 1
              }
            }
          ]
        }
      }
    ],
    "narrative": "无数个你同时回头看你，尽头还是你。",
    "ambient": "镜面回响 · 静谧回荡",
    "eventHooks": [
      "festival",
      "sentiment",
      "wonder"
    ],
    "meta": {
      "author": "创始神",
      "style": "幻镜 · 自动生成",
      "theme": "镜面迷宫",
      "note": "v3 主题化生成 · 主题「镜面迷宫」"
    }
  });
