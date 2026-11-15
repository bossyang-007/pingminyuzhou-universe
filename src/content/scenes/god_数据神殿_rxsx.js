// 场景分包 · 数据神殿（由创始神 v3 自动生成，纯数据）
// 字段见 src/content/schema.md
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push(  {
    "id": "god_数据神殿_rxsx",
    "name": "数据神殿",
    "sky": "#0d1b2a",
    "ground": "#1b263b",
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
          0,
          2,
          -7
        ],
        "size": [
          8,
          4,
          0.4
        ],
        "color": "#16263a",
        "emissive": "#39d0ff"
      },
      {
        "type": "sphere",
        "pos": [
          -4,
          3.4,
          -3
        ],
        "size": [
          1.2
        ],
        "color": "#39d0ff",
        "emissive": "#39d0ff"
      },
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
        "color": "#26344a"
      },
      {
        "type": "cone",
        "pos": [
          4,
          1.2,
          -3
        ],
        "size": [
          1.2,
          2.4
        ],
        "color": "#1b2b40",
        "emissive": "#2bffea"
      },
      {
        "type": "sphere",
        "pos": [
          -3,
          1,
          2
        ],
        "size": [
          0.6
        ],
        "color": "#ffe9a8",
        "emissive": "#ffd166"
      },
      {
        "type": "box",
        "pos": [
          3,
          0.6,
          3
        ],
        "size": [
          1.6,
          1.2,
          1.2
        ],
        "color": "#26344a"
      }
    ],
    "spots": [
      {
        "id": "altar",
        "label": "算力祭坛",
        "pos": [
          -4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "献祭一点算力，换一份答案。",
        "event": {
          "title": "献祭算力",
          "desc": "你用闲时 GPU 换了情报。",
          "choices": [
            {
              "label": "豪掷算力",
              "hint": "知识+5 精力-2",
              "effect": {
                "knowledge": 5,
                "energy": -2
              }
            },
            {
              "label": "量力而行",
              "hint": "知识+2 精力-1",
              "effect": {
                "knowledge": 2,
                "energy": -1
              }
            }
          ]
        }
      },
      {
        "id": "void",
        "label": "静默区",
        "pos": [
          5,
          0,
          4
        ],
        "radius": 3,
        "intro": "这里没有信号，只有你。",
        "event": {
          "title": "断网放空",
          "desc": "难得的不被追踪。",
          "choices": [
            {
              "label": "彻底放空",
              "hint": "精力+5 快乐+3",
              "effect": {
                "energy": 5,
                "happy": 3
              }
            },
            {
              "label": "写私密日记",
              "hint": "知识+2 快乐+1",
              "effect": {
                "knowledge": 2,
                "happy": 1
              }
            }
          ]
        }
      },
      {
        "id": "library",
        "label": "云端书库",
        "pos": [
          4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "每一本书都是一段代码。",
        "event": {
          "title": "研读代码",
          "desc": "你啃下了一份难懂的开源。",
          "choices": [
            {
              "label": "精读并复现",
              "hint": "知识+5 声望+2",
              "effect": {
                "knowledge": 5,
                "reputation": 2
              }
            },
            {
              "label": "抄录要点",
              "hint": "知识+3",
              "effect": {
                "knowledge": 3
              }
            }
          ]
        }
      },
      {
        "id": "core",
        "label": "神殿核心",
        "pos": [
          0,
          0,
          -4
        ],
        "radius": 3,
        "intro": "数据流如星河在穹顶奔流。",
        "event": {
          "title": "接入核心",
          "desc": "你向主脑提交了一次查询。",
          "choices": [
            {
              "label": "深度检索",
              "hint": "知识+6 精力-3",
              "effect": {
                "knowledge": 6,
                "energy": -3
              }
            },
            {
              "label": "快速扫一眼",
              "hint": "知识+3",
              "effect": {
                "knowledge": 3
              }
            }
          ]
        }
      }
    ],
    "narrative": "数据流如星河在穹顶奔流，每一本书都是一段代码。",
    "ambient": "数据流声 · 服务器嗡鸣",
    "eventHooks": [
      "digital",
      "tech",
      "hackathon"
    ],
    "meta": {
      "author": "创始神",
      "style": "数字 · 自动生成",
      "theme": "数据神殿",
      "note": "v3 主题化生成 · 主题「数据神殿」"
    }
  });
