import { promisify } from "util";
import _figlet from "figlet"; // 字符图形
import chalk from "chalk"; // 控制台颜色
import clear from "clear"; // 清屏
import inquirer from "inquirer"; // 交互信息
import ora from "ora";
import { promptList } from "./constant.js";
import { create } from "./create.js";
const figlet = promisify(_figlet);

// 打印
const log = async (msg, color = "blue", useFig = false) => {
  if (useFig) {
    msg = await figlet(msg);
  }
  console.log(chalk[color](msg));
};

(async () => {
  clear();
  await log("HandwritingJS", "blue", true);
  let answer;
  try {
    answer = await inquirer.prompt(promptList);
  } catch (err) {
    console.log(chalk.red(err));
  }
  const process = ora();
  process.start("创建题目...");
  const res = create(answer);
  setTimeout(() => {
    if (res) {
      process.succeed("创建成功");
    } else {
      process.fail("创建失败");
    }
  }, 1000);
})();
