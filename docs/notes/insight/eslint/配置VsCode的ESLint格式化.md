---
title: 配置VsCode的ESLint格式化
author: Kapppiee
createTime: 2024/07/18 09:29:00
permalink: /insight/eslint/format/
---

1. 此时已出9.0版本,但是VsCode的ESLint插件版本为3.0.10,还是WebStorm都不支持9.0版本.
2. 该版本不支持使用ESM,故JavaScript只能使用commonJS
3. 网站:<https://zh-hans.eslint.org/docs/>
4. 使用版本8.49.0

## 配置流程

1. 下载Eslint插件, 我的版本为3.0.10
2. 编辑VsCode配置Json
3. `<Ctrl/Cmd+Shift+P>` 搜索 `Open User Settings` 打开用户配置
4. 加入一下json

```json
{
    "editor.defaultFormatter": "dbaeumer.vscode-eslint", // 设置默认格式化工具
    "editor.codeActionsOnSave": { 
        "source.fixAll.eslint": "explicit", // 设置保存时触发ESLint
    },
    "editor.formatOnSave": true, // 打开保存格式化功能
}
```

不生效的几种原因:

1. ESLint未加载新的配置文件,`<Ctrl/Cmd+Shift+P>` 搜索 `ESLint: Restart ESLint Server` 回车执行
2. ESLint配置报错,查看控制台输出选择查看ESLint信息.根据报错更改配置
3. 格式化时无法格式化正确格式, 检查是否使用了其他格式化工具.

## 配置文件名称

1. 如果项目type为CommonJS则起名 `.eslintrc.js`
2. 如果项目type为module则起名 `.eslintrc.cjs`

## 配置

### 我的配置

```js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require( "eslint-define-config" );

module.exports = defineConfig({
  env: {
    browser: true,
    es6: true,
  },
  plugins: [ "@typescript-eslint", "vue", "markdown" ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/essential",
    "plugin:markdown/recommended-legacy",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  overrides: [
    {
      files: [ "**/*.{js,mjs,cjs,ts,vue,md}" ],
      rules: {
        "no-irregular-whitespace": "error",
        camelcase: "error",
        "no-console": "error",
        "no-sparse-arrays": "error",
      },
    },
  ],
} );

```

配置中使用的插件

```json
"devDependencies": {
    "@eslint/js": "^9.7.0",
    "@typescript-eslint/eslint-plugin": "^7.16.1",
    "eslint-define-config": "^2.1.0",
    "eslint-plugin-vue": "^9.27.0",
    "typescript-eslint": "^7.16.1",
    "eslint": "^8.56.0",
    "eslint-plugin-markdown": "^5.1.0"
  }
```

使用的忽略文件

1. 注意使用这种方式时: `!docs/.vuepress/config.js`,ESLint忽略规则会自动过滤点文件. 需要先`!docs/.vuepress`来使其处于允许列表中

```.eslintignore

.eslintrc.js

Note_Vault/

node_modules/

!docs/.vuepress
docs/.vuepress/*
!docs/.vuepress/config.js
```

### 配置示例

```json
{
    "root": true,
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": { "project": ["./tsconfig.json"] },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/strict-boolean-expressions": [
            2,
            {
                "allowString" : false,
                "allowNumber" : false
            }
        ]
    },
    "ignorePatterns": ["src/**/*.test.ts", "src/frontend/generated/*"]
}
``
