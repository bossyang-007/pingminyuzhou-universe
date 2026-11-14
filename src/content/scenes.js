// 内容数据层 · 场景配置（纯数据，零逻辑）
// 新增场景：在数组里追加一个对象即可，引擎零改动。
// 字段详见 src/content/schema.md
export const scenes = [
  {
    id: 'home',
    name: '温馨小家',
    sky: '#c9b79a',
    ground: '#b98c5a',
    fog: 0.01,
    spawn: [0, 0, 4],
    props: [
      { type: 'box', pos: [0, 0.05, 0], size: [11, 0.1, 11], color: '#a87c4e' },
      { type: 'box', pos: [-3.4, 0.6, -3], size: [3, 1.2, 1.4], color: '#6b8e9e' },
      { type: 'box', pos: [2.4, 0.5, 1.2], size: [2, 1, 1.2], color: '#8a6f4a' },
      { type: 'box', pos: [0, 1.7, -5.2], size: [3.4, 1.8, 0.2], color: '#10151a', emissive: '#2b6cff' },
      { type: 'box', pos: [3.6, 0.4, -3.4], size: [2.6, 0.8, 1.8], color: '#7d6a8a' },
      { type: 'cyl', pos: [-4.6, 0.4, 3], size: [0.5, 0.8], color: '#b5642f' },
      { type: 'sphere', pos: [-4.6, 1.3, 3], size: [0.9], color: '#4a8c4a' },
      { type: 'box', pos: [4.8, 1.1, 3.2], size: [1.4, 2.2, 0.5], color: '#caa06a' },
    ],
    spots: [
      {
        id: 'kitchen', label: '厨房', pos: [3.6, 0, -3.4], radius: 2.4,
        intro: '锅铲碰撞，香味钻进鼻子。',
        event: {
          title: '在厨房折腾一顿饭',
          desc: '你决定给自己做点好吃的，哪怕只是泡面升级版。',
          choices: [
            { label: '认真做饭', hint: '快乐+4 健康+3', effect: { happy: 4, health: 3 } },
            { label: '点外卖算了', hint: '金钱-30 精力+3', effect: { money: -30, energy: 3 } },
          ],
        },
      },
      {
        id: 'desk', label: '书桌', pos: [4.8, 0, 3.2], radius: 2.2,
        intro: '台灯下摊着没看完的书。',
        event: {
          title: '深夜书桌',
          desc: '世界安静下来，只剩翻书声。',
          choices: [
            { label: '读一小时书', hint: '知识+4 精力-2', effect: { knowledge: 4, energy: -2 } },
            { label: '刷手机', hint: '快乐+2 知识-1', effect: { happy: 2, knowledge: -1 } },
          ],
        },
      },
      {
        id: 'balcony', label: '阳台', pos: [0, 0, 5], radius: 2.4,
        intro: '风把窗帘吹得鼓起来。',
        event: {
          title: '阳台发呆',
          desc: '楼下的猫在打架，远处的霓虹一闪一闪。',
          choices: [
            { label: '深呼吸放空', hint: '精力+5 快乐+2', effect: { energy: 5, happy: 2 } },
            { label: '计划明天', hint: '声望+2', effect: { reputation: 2 } },
          ],
        },
      },
    ],
  },

  {
    id: 'office',
    name: '写字楼',
    sky: '#9fb3c4',
    ground: '#8c98a3',
    fog: 0.014,
    spawn: [0, 0, 5],
    props: [
      { type: 'box', pos: [0, 0.05, 0], size: [14, 0.1, 12], color: '#9aa6b0' },
      { type: 'box', pos: [0, 2.5, -6], size: [12, 5, 0.4], color: '#33414d', emissive: '#1c2b3a' },
      { type: 'box', pos: [-3, 0.6, 0], size: [2.4, 1.2, 1.4], color: '#c9d2da' },
      { type: 'box', pos: [0, 0.6, 1], size: [2.4, 1.2, 1.4], color: '#c9d2da' },
      { type: 'box', pos: [3, 0.6, 0], size: [2.4, 1.2, 1.4], color: '#c9d2da' },
      { type: 'box', pos: [-3, 1.1, 0], size: [1, 0.6, 0.1], color: '#10151a', emissive: '#39d0ff' },
      { type: 'box', pos: [0, 1.1, 1], size: [1, 0.6, 0.1], color: '#10151a', emissive: '#39d0ff' },
      { type: 'box', pos: [3, 1.1, 0], size: [1, 0.6, 0.1], color: '#10151a', emissive: '#39d0ff' },
      { type: 'cyl', pos: [5, 1.5, 4], size: [0.4, 3], color: '#5b6b76' },
    ],
    spots: [
      {
        id: 'cubicle', label: '工位', pos: [0, 0, 1], radius: 2.4,
        intro: '屏幕亮着，待办清单还有三页。',
        event: {
          title: '工位上的抉择',
          desc: '临近下班，最后一项任务要不要现在收尾？',
          choices: [
            { label: '加班搞定', hint: '声望+4 精力-4', effect: { reputation: 4, energy: -4 } },
            { label: '明天再说', hint: '快乐+3 声望-2', effect: { happy: 3, reputation: -2 } },
          ],
        },
      },
      {
        id: 'pantry', label: '茶水间', pos: [5, 0, 4], radius: 2.2,
        intro: '咖啡机咕噜咕噜。',
        event: {
          title: '茶水间闲聊',
          desc: '同事递来一杯咖啡，聊起周末的安排。',
          choices: [
            { label: '加入八卦', hint: '社交+4 快乐+2', effect: { social: 4, happy: 2 } },
            { label: '安静喝完', hint: '精力+3', effect: { energy: 3 } },
          ],
        },
      },
      {
        id: 'meeting', label: '会议室', pos: [-5, 0, -3], radius: 2.6,
        intro: '白板上写满了箭头。',
        event: {
          title: '突发会议',
          desc: '老板临时拉会，要你提一个方案。',
          choices: [
            { label: '主动发言', hint: '声望+5 知识-1', effect: { reputation: 5, knowledge: -1 } },
            { label: '默默记录', hint: '知识+3', effect: { knowledge: 3 } },
          ],
        },
      },
    ],
  },

  {
    id: 'street',
    name: '街角',
    sky: '#aebfc9',
    ground: '#6f7a82',
    fog: 0.016,
    spawn: [0, 0, 6],
    props: [
      { type: 'box', pos: [0, 0.05, 0], size: [16, 0.1, 10], color: '#5d6970' },
      { type: 'box', pos: [0, 0.1, 0], size: [16, 0.02, 1.2], color: '#d8d2c4' },
      { type: 'cyl', pos: [-5, 2.5, -3], size: [0.3, 5], color: '#3c4650' },
      { type: 'sphere', pos: [-5, 5.1, -3], size: [0.5], color: '#ffe9a8', emissive: '#ffd166' },
      { type: 'box', pos: [5, 1.2, -3], size: [3, 2.4, 2], color: '#c46a4a' },
      { type: 'box', pos: [5, 2.6, -3], size: [3.2, 0.6, 2.2], color: '#a8543a', emissive: '#ffb347' },
      { type: 'box', pos: [-2, 0.5, 2], size: [2.4, 1, 0.8], color: '#7a8a92' },
      { type: 'cyl', pos: [2, 0.6, -1], size: [0.6, 1.2], color: '#9aa6ad' },
    ],
    spots: [
      {
        id: 'store', label: '便利店', pos: [5, 0, -3], radius: 2.6,
        intro: '关东煮的热气糊了玻璃。',
        event: {
          title: '便利店补给',
          desc: '夜班前的能量补给站。',
          choices: [
            { label: '买份便当', hint: '金钱-25 健康+3', effect: { money: -25, health: 3 } },
            { label: '只买饮料', hint: '金钱-8 快乐+1', effect: { money: -8, happy: 1 } },
          ],
        },
      },
      {
        id: 'busstop', label: '公交站', pos: [-5, 0, 3], radius: 2.6,
        intro: '末班车还有七分钟。',
        event: {
          title: '等车的陌生人',
          desc: '旁边的人也在看手机，你们相视一笑。',
          choices: [
            { label: '主动搭话', hint: '社交+3', effect: { social: 3 } },
            { label: '保持距离', hint: '精力+1', effect: { energy: 1 } },
          ],
        },
      },
      {
        id: 'busker', label: '街头艺人', pos: [2, 0, 2], radius: 2.4,
        intro: '吉他声把整条街都暖了。',
        event: {
          title: '为才华驻足',
          desc: '你听入迷，口袋里的零钱蠢蠢欲动。',
          choices: [
            { label: '投币支持', hint: '金钱-10 快乐+4', effect: { money: -10, happy: 4 } },
            { label: '鼓掌离开', hint: '快乐+2', effect: { happy: 2 } },
          ],
        },
      },
    ],
  },

  {
    id: 'park',
    name: '公园',
    sky: '#aed3e8',
    ground: '#7fae6a',
    fog: 0.012,
    spawn: [0, 0, 6],
    props: [
      { type: 'box', pos: [0, 0.05, 0], size: [18, 0.1, 14], color: '#6fa257' },
      { type: 'cyl', pos: [-4, 1.5, -3], size: [0.4, 3], color: '#6b4a2f' },
      { type: 'sphere', pos: [-4, 3.4, -3], size: [1.8], color: '#3f7d3f' },
      { type: 'cyl', pos: [4, 1.5, -2], size: [0.4, 3], color: '#6b4a2f' },
      { type: 'sphere', pos: [4, 3.4, -2], size: [1.8], color: '#3f7d3f' },
      { type: 'box', pos: [0, 0.4, 0], size: [3, 0.8, 1], color: '#9a7b4f' },
      { type: 'cyl', pos: [6, 0.1, 4], size: [3, 0.2], color: '#5b8fb0' },
      { type: 'box', pos: [-6, 0.5, 4], size: [1.2, 1, 1.2], color: '#b9a06a' },
    ],
    spots: [
      {
        id: 'bench', label: '长椅', pos: [0, 0, 0], radius: 2.4,
        intro: '老人遛狗经过，狗对你摇尾巴。',
        event: {
          title: '公园长椅',
          desc: '阳光正好，适合发一会儿呆。',
          choices: [
            { label: '晒晒太阳', hint: '健康+4 快乐+3', effect: { health: 4, happy: 3 } },
            { label: '喂喂鸽子', hint: '快乐+3 社交+1', effect: { happy: 3, social: 1 } },
          ],
        },
      },
      {
        id: 'lake', label: '湖边', pos: [6, 0, 4], radius: 3,
        intro: '水面把云朵揉碎了。',
        event: {
          title: '湖边沉思',
          desc: '你想起好久没联系的朋友。',
          choices: [
            { label: '发条消息', hint: '社交+5', effect: { social: 5 } },
            { label: '写篇日记', hint: '知识+2 快乐+2', effect: { knowledge: 2, happy: 2 } },
          ],
        },
      },
      {
        id: 'gym', label: '健身角', pos: [-6, 0, 4], radius: 2.4,
        intro: '单杠上还留着上个人的温度。',
        event: {
          title: '公园健身',
          desc: '身体是革命的本钱。',
          choices: [
            { label: '拉伸一组', hint: '健康+5 精力-2', effect: { health: 5, energy: -2 } },
            { label: '慢跑两圈', hint: '健康+6 精力-3', effect: { health: 6, energy: -3 } },
          ],
        },
      },
    ],
  },

  {
    id: 'nightmarket',
    name: '夜市',
    sky: '#2a2233',
    ground: '#3a2f3f',
    fog: 0.02,
    spawn: [0, 0, 7],
    props: [
      { type: 'box', pos: [0, 0.05, 0], size: [18, 0.1, 8], color: '#2f2633' },
      { type: 'box', pos: [-4, 1, -2], size: [3, 2, 1.6], color: '#b5472f', emissive: '#ff7a3d' },
      { type: 'box', pos: [0, 1, -2], size: [3, 2, 1.6], color: '#2f7d6b', emissive: '#3df0c8' },
      { type: 'box', pos: [4, 1, -2], size: [3, 2, 1.6], color: '#7a4fb0', emissive: '#c08bff' },
      { type: 'sphere', pos: [-4, 3, -2], size: [0.4], color: '#ffd166', emissive: '#ffb347' },
      { type: 'sphere', pos: [0, 3, -2], size: [0.4], color: '#ffd166', emissive: '#ffb347' },
      { type: 'sphere', pos: [4, 3, -2], size: [0.4], color: '#ffd166', emissive: '#ffb347' },
      { type: 'cyl', pos: [2, 0.6, 2], size: [0.5, 1.2], color: '#caa06a' },
    ],
    spots: [
      {
        id: 'food', label: '小吃摊', pos: [-4, 0, -2], radius: 2.6,
        intro: '烤串的烟直往鼻子里钻。',
        event: {
          title: '夜市觅食',
          desc: '肚子和钱包开始谈判。',
          choices: [
            { label: '放开吃', hint: '金钱-40 快乐+6 健康-2', effect: { money: -40, happy: 6, health: -2 } },
            { label: '浅尝辄止', hint: '金钱-15 快乐+3', effect: { money: -15, happy: 3 } },
          ],
        },
      },
      {
        id: 'game', label: '游戏摊', pos: [0, 0, -2], radius: 2.6,
        intro: '套圈摊主冲你挤眼睛。',
        event: {
          title: '游戏摊挑战',
          desc: '十块钱三个圈，奖品是一只瓷猪。',
          choices: [
            { label: '试试手气', hint: '金钱-10 快乐+5', effect: { money: -10, happy: 5 } },
            { label: '看看就好', hint: '快乐+1', effect: { happy: 1 } },
          ],
        },
      },
      {
        id: 'craft', label: '手作摊', pos: [4, 0, -2], radius: 2.6,
        intro: '摊主在串一颗星。',
        event: {
          title: '手作小物',
          desc: '你被一枚木质书签吸引。',
          choices: [
            { label: '买下留念', hint: '金钱-20 快乐+4', effect: { money: -20, happy: 4 } },
            { label: '聊聊天', hint: '社交+4 知识+1', effect: { social: 4, knowledge: 1 } },
          ],
        },
      },
    ],
  },

  {
    id: 'mall',
    name: '商场',
    sky: '#cdd6dd',
    ground: '#cfd6dc',
    fog: 0.012,
    spawn: [0, 0, 7],
    props: [
      { type: 'box', pos: [0, 0.05, 0], size: [16, 0.1, 12], color: '#c4ccd3' },
      { type: 'box', pos: [0, 3, -5], size: [14, 6, 0.5], color: '#dfe6ec' },
      { type: 'box', pos: [-4, 1.4, -4], size: [3, 2.8, 1], color: '#e7a9b8', emissive: '#ffd0dc' },
      { type: 'box', pos: [0, 1.4, -4], size: [3, 2.8, 1], color: '#a9c8e7', emissive: '#cfe6ff' },
      { type: 'box', pos: [4, 1.4, -4], size: [3, 2.8, 1], color: '#b8e0a9', emissive: '#d6f5c8' },
      { type: 'box', pos: [0, 1.6, 2], size: [2.4, 0.4, 1.2], color: '#b9a06a' },
    ],
    spots: [
      {
        id: 'clothes', label: '服饰店', pos: [-4, 0, -4], radius: 2.6,
        intro: '新品上新，模特笑得很自信。',
        event: {
          title: '逛服饰店',
          desc: '那件外套好像在等你。',
          choices: [
            { label: '买下它', hint: '金钱-120 快乐+6 声望+2', effect: { money: -120, happy: 6, reputation: 2 } },
            { label: '试穿拍照', hint: '快乐+3 社交+2', effect: { happy: 3, social: 2 } },
          ],
        },
      },
      {
        id: 'foodcourt', label: '美食层', pos: [0, 0, 2], radius: 2.6,
        intro: '各国味道在此交汇。',
        event: {
          title: '美食层巡视',
          desc: '选择困难症发作。',
          choices: [
            { label: '犒劳自己', hint: '金钱-50 快乐+5', effect: { money: -50, happy: 5 } },
            { label: '只喝杯奶茶', hint: '金钱-18 快乐+3', effect: { money: -18, happy: 3 } },
          ],
        },
      },
      {
        id: 'atrium', label: '中庭', pos: [4, 0, 2], radius: 2.6,
        intro: '中庭在办小展览。',
        event: {
          title: '中庭展览',
          desc: '一幅画让你驻足良久。',
          choices: [
            { label: '认真欣赏', hint: '知识+4 快乐+2', effect: { knowledge: 4, happy: 2 } },
            { label: '打卡拍照', hint: '社交+3', effect: { social: 3 } },
          ],
        },
      },
    ],
  },
];

export default scenes;
