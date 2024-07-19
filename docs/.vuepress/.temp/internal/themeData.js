export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"我的笔记\",\"prefix\":\"/my-note/\",\"children\":[{\"text\":\"前端\",\"prefix\":\"/my-note/\",\"children\":[{\"text\":\"ES6\",\"link\":\"es6/声明变量\"},{\"text\":\"Typescript\",\"link\":\"typescript/类型\"},{\"text\":\"ESLint\",\"link\":\"eslint/配置VsCode的ESLint格式化\"}]}]}],\"sidebar\":{\"/my-note/es6/\":[\"声明变量\",\"字符串与正则表达式\",\"函数\",\"对象\",\"解构\",\"符号\",\"异步处理\",\"FetchApi\"],\"/my-note/typescript/\":[\"类型\",\"类型兼容性\",\"类型演算\",\"泛型\",\"位枚举\",\"类\",\"readonly修饰符\",\"访问器\",\"第三方库\",\"声明文件\",\"tsconfig.json\"],\"/my-note/eslint/\":[\"配置VsCode的ESLint格式化\"]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
