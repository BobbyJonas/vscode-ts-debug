## 在 VSCode 下使用 TypeScript 愉快刷题

VSCode 下的 TypeScript 断点调试方法，附带个人 OJ 题库题解：

- 剑指 Offer
- leetcode 题库前 200
- TypeChallenge 题库部分题目

### 食用方法

#### 安装环境

使用 `git clone` 将本仓库克隆到本地，或者下载当前包.

1. 全局安装 `typescript` 和 `tsc`：

   ```shell
   npm install typescript tsc -g
   ```

2. `cd` 到该目录，并执行命令行 `npm install`

#### 调试

支持在 VSCode 的 “调试” 面板、以及命令行内，来进行 TS 程序调试。

##### 在 VSCode 中

点击进入 VSCode 的 “调试” 面板，可在顶部选择框中看到，本项目提供的两种不同的打包调试方式。

- `Launch Program`：将**与当前文件相关联**的所有 TS 文件，编译到 `dist` 目录，并执行当前文件。

  (**相关联**指包含使用 `import` 方法等导入的其他关联文件)

- `Launch Program (Build the Project)`：编译 `src` 目录下的**所有 TS 文件**到 `dist` 目录，并执行当前文件。

##### 命令行中

通过命令行来进行热更新调试操作。

- `npm run dev`：使用 ts-node 执行 `/src/index.ts` 文件，

  随着 `src` 目录文件发生变化进行热更新

#### 打包 & 其他命令

- `npm run build`：使用 tsc 编译所有 `src` 目录下的 TS 文件到 `dist` 目录
- `npm run start`：执行 `dist/index.js`
- `npm run clear`：清空 `dist` 目录
