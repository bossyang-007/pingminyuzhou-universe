// 场景分包 · 极地科考站（由创始神 v3 自动生成，纯数据）
// 字段见 src/content/schema.md
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push(  {
    "id": "god_极地科考站_yz6a",
    "name": "极地科考站",
    "sky": "#cfe6f2",
    "ground": "#e8f0f5",
    "fog": 0.02,
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
        "color": "#b8c8d4"
      },
      {
        "type": "sphere",
        "pos": [
          -4,
          3.4,
          -3
        ],
        "size": [
          1.4
        ],
        "color": "#e8f4fa"
      },
      {
        "type": "cone",
        "pos": [
          4,
          1.2,
          -3
        ],
        "size": [
          1.4,
          2.4
        ],
        "color": "#cfe0ea"
      },
      {
        "type": "box",
        "pos": [
          0,
          1,
          -6
        ],
        "size": [
          5,
          2,
          3
        ],
        "color": "#dfeaf2",
        "emissive": "#aee0ff"
      },
      {
        "type": "box",
        "pos": [
          3,
          0.5,
          3
        ],
        "size": [
          1.4,
          1,
          1.2
        ],
        "color": "#9ab0c0"
      },
      {
        "type": "box",
        "pos": [
          -3,
          0.3,
          4
        ],
        "size": [
          1.2,
          0.6,
          1
        ],
        "color": "#aec4d2"
      }
    ],
    "spots": [
      {
        "id": "radio",
        "label": "通讯塔",
        "pos": [
          -5,
          0,
          3
        ],
        "radius": 2.6,
        "intro": "电波穿越冰原，连向世界。",
        "event": {
          "title": "呼叫基地",
          "desc": "你给家人发了条平安信。",
          "choices": [
            {
              "label": "报平安",
              "hint": "社交+5 快乐+2",
              "effect": {
                "social": 5,
                "happy": 2
              }
            },
            {
              "label": "传回数据",
              "hint": "声望+4 知识+1",
              "effect": {
                "reputation": 4,
                "knowledge": 1
              }
            }
          ]
        }
      },
      {
        "id": "lab",
        "label": "实验舱",
        "pos": [
          0,
          0,
          -3
        ],
        "radius": 2.8,
        "intro": "冰芯样本在冷光里泛蓝。",
        "event": {
          "title": "数据分析",
          "desc": "你对着屏幕解读万年冰层。",
          "choices": [
            {
              "label": "深挖论文",
              "hint": "知识+6 精力-2",
              "effect": {
                "knowledge": 6,
                "energy": -2
              }
            },
            {
              "label": "记录日志",
              "hint": "知识+3 声望+1",
              "effect": {
                "knowledge": 3,
                "reputation": 1
              }
            }
          ]
        }
      },
      {
        "id": "aurora",
        "label": "极光观测台",
        "pos": [
          -4,
          0,
          1
        ],
        "radius": 3,
        "intro": "头顶的绿光像在呼吸。",
        "event": {
          "title": "守候极光",
          "desc": "你等了三小时，值了。",
          "choices": [
            {
              "label": "静静欣赏",
              "hint": "快乐+5 精力-2",
              "effect": {
                "happy": 5,
                "energy": -2
              }
            },
            {
              "label": "拍延时",
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
        "id": "sauna",
        "label": "暖房",
        "pos": [
          5,
          0,
          4
        ],
        "radius": 2.6,
        "intro": "零下三十度外，这里是天堂。",
        "event": {
          "title": "蒸个暖房",
          "desc": "冷热交替，浑身通透。",
          "choices": [
            {
              "label": "好好放松",
              "hint": "健康+5 精力+3",
              "effect": {
                "health": 5,
                "energy": 3
              }
            },
            {
              "label": "顺便搓澡",
              "hint": "健康+3 快乐+1",
              "effect": {
                "health": 3,
                "happy": 1
              }
            }
          ]
        }
      }
    ],
    "narrative": "白茫一片里只有仪器的蜂鸣，呼出的白雾提醒你还在呼吸。",
    "ambient": "风雪呼啸 · 仪器蜂鸣",
    "eventHooks": [
      "climate_cold",
      "shortage",
      "wonder"
    ],
    "meta": {
      "author": "创始神",
      "style": "极地 · 自动生成",
      "theme": "极地科考站",
      "note": "v3 主题化生成 · 主题「极地科考站」"
    }
  });
