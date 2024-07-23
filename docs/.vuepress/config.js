
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import path from "path";
import { theme } from './theme.js'

const __dirname = path.resolve();

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  source: path.resolve(__dirname, '../'),
  plugins: [
    mdEnhancePlugin({
      mermaid: true
    })
  ],
  bundler: viteBundler(),
  theme,
  // theme: plumeTheme({
  //   notes:{
  //     dir: 'typescript', // 声明笔记的目录，相对于 `notes.dir`
  //         link: '/typescript/', // 声明笔记的链接前缀
  //         sidebar: [ // 配置侧边栏
  //           {
  //             text: '简介',
  //             icon: 'mdi:language-typescript', // 侧边栏图标
  //             items: [ '声明文件' ] // 简化写法，主题会自动补全为 `foo.md`
  //           }
  //         ]
  //       },
  //   }),
  //   navbar: [
  //     { text: '首页', link: '/', icon: 'material-symbols:home-outline' },
  //     { text: '博客', link: '/blog/', icon: 'material-symbols:article-outline' },
  //     { text: '技术文档', link: '/notes/', icon: 'material-symbols:article-outline' },
  //     {
  //       text: "知识笔记",
  //       prefix: "/notes/",
  //       children: [
  //         {
  //           text: "前端",
  //           prefix: "/my-note/",
  //           children:[
  //             {
  //               text: "ES6",
  //               link: "es6/声明变量",
  //             },
  //             {
  //               text: "Typescript",
  //               link: "typescript/类型",
  //             },
  //             {
  //               text: "ESLint",
  //               link: "eslint/配置VsCode的ESLint格式化",
  //             }
  //           ]
  //         },
  //         // {
  //         //   text: "后端",
  //         //   prefix: "/my-note/",
  //         //   children:[
  //         //     {
  //         //       text: "NodeJs",
  //         //     },
  //         //     {
  //         //       text: "dotNet"
  //         //     }
  //         //   ]
  //         // }
        
  //       ],
  //     },
  //   ],
  //   // sidebar: {
  //   //   "/my-note/es6/": [
  //   //     "声明变量",
  //   //     "字符串与正则表达式",
  //   //     "函数",
  //   //     "对象",
  //   //     "解构",
  //   //     "符号",
  //   //     "异步处理",
  //   //     "FetchApi",
  //   //   ],
  //   //   "/my-note/typescript/": [
  //   //     "类型",
  //   //     "类型兼容性",
  //   //     "类型演算",
  //   //     "泛型",
  //   //     "位枚举",
  //   //     "类",
  //   //     "readonly修饰符",
  //   //     "访问器",
  //   //     "第三方库",
  //   //     "声明文件",
  //   //     "tsconfig.json",
  //   //   ],
  //   //   "/my-note/eslint/":[
  //   //     "配置VsCode的ESLint格式化"
  //   //   ]
  //   // },
});

