// 场景分包 · 森林树屋社区（由创始神 v3 自动生成，纯数据）
// 字段见 src/content/schema.md
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push(  {
    "id": "god_森林树屋社区_cd4m",
    "name": "森林树屋社区",
    "sky": "#aed3e8",
    "ground": "#6fa257",
    "fog": 0.014,
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
          4.4,
          -3
        ],
        "size": [
          1.8
        ],
        "color": "#4f8f4f"
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
        "color": "#8a6f4a"
      },
      {
        "type": "sphere",
        "pos": [
          -3,
          4.4,
          -5
        ],
        "size": [
          2
        ],
        "color": "#3f7d3f"
      },
      {
        "type": "box",
        "pos": [
          0,
          2.4,
          -4
        ],
        "size": [
          3,
          1.6,
          2.4
        ],
        "color": "#9a7b4f"
      },
      {
        "type": "cyl",
        "pos": [
          -3,
          2,
          -5
        ],
        "size": [
          0.5,
          4
        ],
        "color": "#6b4a2f"
      },
      {
        "type": "cyl",
        "pos": [
          4,
          2,
          -3
        ],
        "size": [
          0.5,
          4
        ],
        "color": "#6b4a2f"
      }
    ],
    "spots": [
      {
        "id": "bridge",
        "label": "吊桥",
        "pos": [
          -4,
          0,
          1
        ],
        "radius": 2.6,
        "intro": "桥板随脚步轻晃，下面是溪。",
        "event": {
          "title": "走吊桥",
          "desc": "你一步步踩稳了心跳。",
          "choices": [
            {
              "label": "慢慢走完",
              "hint": "健康+3 快乐+2",
              "effect": {
                "health": 3,
                "happy": 2
              }
            },
            {
              "label": "中途看景",
              "hint": "快乐+3",
              "effect": {
                "happy": 3
              }
            }
          ]
        }
      },
      {
        "id": "bird",
        "label": "鸟巢观察点",
        "pos": [
          -5,
          0,
          3
        ],
        "radius": 2.6,
        "intro": "一只翠鸟正教雏鸟飞。",
        "event": {
          "title": "观鸟",
          "desc": "你屏住呼吸看了很久。",
          "choices": [
            {
              "label": "记观察笔记",
              "hint": "知识+4 快乐+1",
              "effect": {
                "knowledge": 4,
                "happy": 1
              }
            },
            {
              "label": "拍下来分享",
              "hint": "社交+3",
              "effect": {
                "social": 3
              }
            }
          ]
        }
      },
      {
        "id": "hammock",
        "label": "吊床",
        "pos": [
          5,
          0,
          4
        ],
        "radius": 2.6,
        "intro": "两张树之间的吊床等着你。",
        "event": {
          "title": "吊床小睡",
          "desc": "风穿过叶隙，像在哄你。",
          "choices": [
            {
              "label": "睡个午觉",
              "hint": "精力+6 健康+1",
              "effect": {
                "energy": 6,
                "health": 1
              }
            },
            {
              "label": "躺着听声",
              "hint": "精力+3 快乐+2",
              "effect": {
                "energy": 3,
                "happy": 2
              }
            }
          ]
        }
      },
      {
        "id": "treehouse",
        "label": "主树屋",
        "pos": [
          0,
          0,
          -3
        ],
        "radius": 2.8,
        "intro": "绳梯晃悠悠，屋内飘着松木香。",
        "event": {
          "title": "树屋茶会",
          "desc": "邻居们邀你一起吃点心。",
          "choices": [
            {
              "label": "欣然加入",
              "hint": "社交+5 快乐+3",
              "effect": {
                "social": 5,
                "happy": 3
              }
            },
            {
              "label": "帮忙布置",
              "hint": "声望+3 精力-2",
              "effect": {
                "reputation": 3,
                "energy": -2
              }
            }
          ]
        }
      }
    ],
    "narrative": "松木与泥土的气味混着溪声，绳梯晃悠悠地等你上去。",
    "ambient": "鸟鸣四时 · 溪水潺潺",
    "eventHooks": [
      "festival",
      "wonder",
      "mutual"
    ],
    "meta": {
      "author": "创始神",
      "style": "自然 · 自动生成",
      "theme": "森林树屋社区",
      "note": "v3 主题化生成 · 主题「森林树屋社区」"
    }
  });
