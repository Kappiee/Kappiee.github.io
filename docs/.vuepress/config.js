import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";


export default defineUserConfig({
  plugins: [
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "我的笔记",
        prefix: "/my-note/",
        children: [
          {
            text: "前端",
            prefix: "/my-note/",
            children:[
              {
                text: "ES6",
                link: "es6/声明变量",
              },
              {
                text: "Typescript",
                link: "typescript/类型",
              },
              {
                text: "ESLint",
                link: "eslint/配置VsCode的ESLint格式化",
              }
            ]
          },
          // {
          //   text: "后端",
          //   prefix: "/my-note/",
          //   children:[
          //     {
          //       text: "NodeJs",
          //     },
          //     {
          //       text: "dotNet"
          //     }
          //   ]
          // }
        
        ],
      },
    ],
    sidebar: {
      "/my-note/es6/": [
        "声明变量",
        "字符串与正则表达式",
        "函数",
        "对象",
        "解构",
        "符号",
        "异步处理",
        "FetchApi",
      ],
      "/my-note/typescript/": [
        "类型",
        "类型兼容性",
        "类型演算",
        "泛型",
        "位枚举",
        "类",
        "readonly修饰符",
        "访问器",
        "第三方库",
        "声明文件",
        "tsconfig.json",
      ],
      "/my-note/eslint/":[
        "配置VsCode的ESLint格式化"
      ]
    },
  }),
  base: "/ibooks/",
});
