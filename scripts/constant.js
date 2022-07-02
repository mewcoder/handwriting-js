const groupMap = {
  javascript: "javascript",
  problem: "场景",
  pattern: "设计模式",
  demo: "样例",
};

export const promptList = [
  {
    name: "cname",
    message: "请输入题目:",
    validate: () => true,
  },
  {
    type: "list",
    name: "group",
    message: "请选择分类",
    choices: Object.keys(groupMap).map((key) => ({
      name: groupMap[key],
      value: key,
    })),
  },
];
