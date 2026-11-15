// 场景分包 · 蒸汽朋克车站（由创始神 v3 自动生成，纯数据）
// 字段见 src/content/schema.md
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push(  {
    "id": "god_蒸汽朋克车站_od3m",
    "name": "蒸汽朋克车站",
    "sky": "#c9b79a",
    "ground": "#b98c5a",
    "fog": 0.02,
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
          1.5,
          -7
        ],
        "size": [
          9,
          3,
          1.4
        ],
        "color": "#6b5640"
      },
      {
        "type": "sphere",
        "pos": [
          0,
          3.6,
          -7
        ],
        "size": [
          0.6
        ],
        "color": "#ffb347",
        "emissive": "#ffb347"
      },
      {
        "type": "cyl",
        "pos": [
          3,
          1.5,
          -4
        ],
        "size": [
          0.5,
          3
        ],
        "color": "#5a4636",
        "emissive": "#ff8c3a"
      },
      {
        "type": "cone",
        "pos": [
          -4,
          1,
          2
        ],
        "size": [
          1,
          2
        ],
        "color": "#6b5640"
      },
      {
        "type": "box",
        "pos": [
          4,
          0.6,
          2
        ],
        "size": [
          1.6,
          1.2,
          1.2
        ],
        "color": "#7a6346"
      },
      {
        "type": "cyl",
        "pos": [
          -3,
          1.5,
          -4
        ],
        "size": [
          0.5,
          3
        ],
        "color": "#5a4636",
        "emissive": "#ff8c3a"
      }
    ],
    "spots": [
      {
        "id": "clock",
        "label": "巨型钟楼",
        "pos": [
          -4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "齿轮在玻璃后缓缓咬合。",
        "event": {
          "title": "校对手表",
          "desc": "你对上了这座城的节拍。",
          "choices": [
            {
              "label": "认真校准",
              "hint": "知识+3 精力+1",
              "effect": {
                "knowledge": 3,
                "energy": 1
              }
            },
            {
              "label": "听钟声",
              "hint": "快乐+2",
              "effect": {
                "happy": 2
              }
            }
          ]
        }
      },
      {
        "id": "shop",
        "label": "零件铺",
        "pos": [
          -5,
          0,
          3
        ],
        "radius": 2.6,
        "intro": "螺丝、发条、真空管堆成小山。",
        "event": {
          "title": "淘零件",
          "desc": "你拼出个能用的小玩意。",
          "choices": [
            {
              "label": "倒卖零件",
              "hint": "金钱+45 知识+1",
              "effect": {
                "money": 45,
                "knowledge": 1
              }
            },
            {
              "label": "亲手改造",
              "hint": "知识+4 精力-2",
              "effect": {
                "knowledge": 4,
                "energy": -2
              }
            }
          ]
        }
      },
      {
        "id": "train",
        "label": "黄铜列车",
        "pos": [
          0,
          0,
          -4
        ],
        "radius": 3,
        "intro": "锅炉嘶鸣，蒸汽扑上脸。",
        "event": {
          "title": "登车出发",
          "desc": "乘务员问你要去哪条时间线。",
          "choices": [
            {
              "label": "买张票",
              "hint": "金钱-35 快乐+4",
              "effect": {
                "money": -35,
                "happy": 4
              }
            },
            {
              "label": "帮司炉加煤",
              "hint": "精力-3 声望+3",
              "effect": {
                "energy": -3,
                "reputation": 3
              }
            }
          ]
        }
      },
      {
        "id": "platform",
        "label": "月台尽头",
        "pos": [
          5,
          0,
          4
        ],
        "radius": 3,
        "intro": "铁轨没入雾里，不知通向何方。",
        "event": {
          "title": "月台发呆",
          "desc": "等待本身成了一种享受。",
          "choices": [
            {
              "label": "看车来车往",
              "hint": "精力+3 快乐+2",
              "effect": {
                "energy": 3,
                "happy": 2
              }
            },
            {
              "label": "写旅行日记",
              "hint": "知识+3 社交+1",
              "effect": {
                "knowledge": 3,
                "social": 1
              }
            }
          ]
        }
      }
    ],
    "narrative": "锅炉嘶鸣，黄铜在灯光下泛着暖光，时间在这里打着齿轮的拍子。",
    "ambient": "锅炉嘶鸣 · 齿轮轻转",
    "eventHooks": [
      "boom",
      "tech",
      "tourism"
    ],
    "meta": {
      "author": "创始神",
      "style": "蒸汽 · 自动生成",
      "theme": "蒸汽朋克车站",
      "note": "v3 主题化生成 · 主题「蒸汽朋克车站」"
    }
  });
