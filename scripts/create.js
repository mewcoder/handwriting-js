import fs from "fs";
import path from "path";
import chalk from "chalk"; // 控制台颜色
import prettier from "prettier";
import ejs from "ejs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const __dirname = path.dirname(".");
const solutionsDir = "../solutions/";
const templateDir = "./template/";

const checkDir = (dir) => {
  if (fs.existsSync(dir)) {
    return true;
  } else {
    return false;
  }
};


export const create = (config) => {
  const { cname, group } = config;
  if (!cname) {
    console.log(chalk.red("名称不能为空"));
    return false;
  }
  const dir = createDir(`${group}/${cname}`);
  const params = { ...config };
  if (dir) {
    createFile("index", dir, params, "js");
    createFile("index.spec", dir, params, "js");
    createFile("README", dir, params, "md");
    return true;
  }
};

export const createDir = (str) => {
  const dir = path.resolve(__dirname, solutionsDir + str);
  if (!checkDir(dir)) {
    fs.mkdirSync(dir);
    return dir;
  } else {
    console.log(chalk.red("目录已存在"));
  }
};

const parserMap = {
  js: "babel",
  json: "json",
  md: "markdown",
};

export const createFile = (file, dir, config, type) => {
  const templateCode = fs.readFileSync(
    path.resolve(__dirname, templateDir + file + ".ejs")
  );
  const code = ejs.render(templateCode.toString(), config);
  const resultCode = prettier.format(code, { parser: parserMap[type] });
  fs.writeFileSync(`${dir}/${file}.${type}`, resultCode);
};
