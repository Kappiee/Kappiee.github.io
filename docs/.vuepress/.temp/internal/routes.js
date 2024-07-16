export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/haha.html", { loader: () => import(/* webpackChunkName: "haha.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/haha.html.js"), meta: {"title":""} }],
  ["/my-note/Typescript/readonly%E4%BF%AE%E9%A5%B0%E7%AC%A6.html", {
    loader: () => import(/* webpackChunkName: "my-note_Typescript_readonly修饰符.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/Typescript/readonly修饰符.html.js"),
    meta: {"title": "readonly修饰符"}
  }],
  ["/my-note/Typescript/tsconfig.json.html", {
    loader: () => import(/* webpackChunkName: "my-note_Typescript_tsconfig.json.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/Typescript/tsconfig.json.html.js"),
    meta: {"title": "tsconfig.json"}
  }],
  ["/my-note/Typescript/%E4%BD%8D%E6%9E%9A%E4%B8%BE.html", {
    loader: () => import(/* webpackChunkName: "my-note_Typescript_位枚举.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/Typescript/位枚举.html.js"),
    meta: {"title": "位枚举"}
  }],
  ["/my-note/Typescript/%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6.html", {
    loader: () => import(/* webpackChunkName: "my-note_Typescript_声明文件.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/Typescript/声明文件.html.js"),
    meta: {"title": "声明文件"}
  }],
  ["/my-note/Typescript/%E6%B3%9B%E5%9E%8B.html", {
    loader: () => import(/* webpackChunkName: "my-note_Typescript_泛型.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/Typescript/泛型.html.js"),
    meta: {"title": "泛型"}
  }],
  ["/my-note/Typescript/%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%93.html", {
    loader: () => import(/* webpackChunkName: "my-note_Typescript_第三方库.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/Typescript/第三方库.html.js"),
    meta: {"title": "第三方库"}
  }],
  ["/my-note/Typescript/%E7%B1%BB.html", {
    loader: () => import(/* webpackChunkName: "my-note_Typescript_类.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/Typescript/类.html.js"),
    meta: {"title": "类"}
  }],
  ["/my-note/Typescript/%E7%B1%BB%E5%9E%8B.html", {
    loader: () => import(/* webpackChunkName: "my-note_Typescript_类型.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/Typescript/类型.html.js"),
    meta: {"title": "类型"}
  }],
  ["/my-note/Typescript/%E7%B1%BB%E5%9E%8B%E5%85%BC%E5%AE%B9%E6%80%A7.html", {
    loader: () => import(/* webpackChunkName: "my-note_Typescript_类型兼容性.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/Typescript/类型兼容性.html.js"),
    meta: {"title": "类型兼容性"}
  }],
  ["/my-note/Typescript/%E7%B1%BB%E5%9E%8B%E6%BC%94%E7%AE%97.html", {
    loader: () => import(/* webpackChunkName: "my-note_Typescript_类型演算.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/Typescript/类型演算.html.js"),
    meta: {"title": "类型演算"}
  }],
  ["/my-note/Typescript/%E8%AE%BF%E9%97%AE%E5%99%A8.html", {
    loader: () => import(/* webpackChunkName: "my-note_Typescript_访问器.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/Typescript/访问器.html.js"),
    meta: {"title": "访问器"}
  }],
  ["/my-note/ES6/1.%E5%A3%B0%E6%98%8E%E5%8F%98%E9%87%8F/%E5%A3%B0%E6%98%8E%E5%8F%98%E9%87%8F.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_1.声明变量_声明变量.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/1.声明变量/声明变量.html.js"),
    meta: {"title": "声明变量"}
  }],
  ["/my-note/ES6/2.%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%8E%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F/Unicode%E6%94%AF%E6%8C%81.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_2.字符串与正则表达式_Unicode支持.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/2.字符串与正则表达式/Unicode支持.html.js"),
    meta: {"title": "Unicode支持"}
  }],
  ["/my-note/ES6/2.%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%8E%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F/%E5%AD%97%E7%AC%A6%E4%B8%B2API.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_2.字符串与正则表达式_字符串API.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/2.字符串与正则表达式/字符串API.html.js"),
    meta: {"title": "更多的字符串API"}
  }],
  ["/my-note/ES6/2.%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%8E%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F/%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_2.字符串与正则表达式_模板字符串.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/2.字符串与正则表达式/模板字符串.html.js"),
    meta: {"title": "模板字符串"}
  }],
  ["/my-note/ES6/2.%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%8E%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F/%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%A0%87%E8%AE%B0.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_2.字符串与正则表达式_模板字符串标记.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/2.字符串与正则表达式/模板字符串标记.html.js"),
    meta: {"title": "模板字符串标记"}
  }],
  ["/my-note/ES6/2.%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%8E%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E4%B8%AD%E7%9A%84%E7%B2%98%E8%BF%9E%E6%A0%87%E8%AE%B0.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_2.字符串与正则表达式_正则表达式中的粘连标记.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/2.字符串与正则表达式/正则表达式中的粘连标记.html.js"),
    meta: {"title": "3-3. [扩展]正则中的粘连标记"}
  }],
  ["/my-note/ES6/3.%E5%87%BD%E6%95%B0/%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_3.函数_函数作为构造函数.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/3.函数/函数作为构造函数.html.js"),
    meta: {"title": "函数作为构造函数"}
  }],
  ["/my-note/ES6/3.%E5%87%BD%E6%95%B0/%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_3.函数_剩余参数.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/3.函数/剩余参数.html.js"),
    meta: {"title": "剩余参数"}
  }],
  ["/my-note/ES6/3.%E5%87%BD%E6%95%B0/%E5%8F%82%E6%95%B0%E9%BB%98%E8%AE%A4%E5%80%BC.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_3.函数_参数默认值.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/3.函数/参数默认值.html.js"),
    meta: {"title": "参数默认值"}
  }],
  ["/my-note/ES6/3.%E5%87%BD%E6%95%B0/%E5%B1%95%E5%BC%80%E8%BF%90%E7%AE%97%E7%AC%A6.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_3.函数_展开运算符.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/3.函数/展开运算符.html.js"),
    meta: {"title": "4-3. 展开运算符"}
  }],
  ["/my-note/ES6/3.%E5%87%BD%E6%95%B0/%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_3.函数_箭头函数.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/3.函数/箭头函数.html.js"),
    meta: {"title": "4-6. 箭头函数"}
  }],
  ["/my-note/ES6/5.%E8%A7%A3%E6%9E%84/%E5%8F%82%E6%95%B0%E8%A7%A3%E6%9E%84.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_5.解构_参数解构.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/5.解构/参数解构.html.js"),
    meta: {"title": "参数解构"}
  }],
  ["/my-note/ES6/5.%E8%A7%A3%E6%9E%84/%E5%AF%B9%E8%B1%A1%E8%A7%A3%E6%9E%84.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_5.解构_对象解构.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/5.解构/对象解构.html.js"),
    meta: {"title": "对象解构"}
  }],
  ["/my-note/ES6/5.%E8%A7%A3%E6%9E%84/%E6%95%B0%E7%BB%84%E8%A7%A3%E6%9E%84.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_5.解构_数组解构.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/5.解构/数组解构.html.js"),
    meta: {"title": "数组解构"}
  }],
  ["/my-note/ES6/4.%E5%AF%B9%E8%B1%A1/Object%E7%9A%84%E6%96%B0%E5%A2%9EAPI.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_4.对象_Object的新增API.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/4.对象/Object的新增API.html.js"),
    meta: {"title": "Object的新增API"}
  }],
  ["/my-note/ES6/4.%E5%AF%B9%E8%B1%A1/%E6%96%B0%E5%A2%9E%E7%9A%84%E5%AF%B9%E8%B1%A1%E5%AD%97%E9%9D%A2%E9%87%8F%E8%AF%AD%E6%B3%95.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_4.对象_新增的对象字面量语法.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/4.对象/新增的对象字面量语法.html.js"),
    meta: {"title": "新增的对象字面量语法"}
  }],
  ["/my-note/ES6/4.%E5%AF%B9%E8%B1%A1/%E7%B1%BB-%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%9A%84%E8%AF%AD%E6%B3%95%E7%B3%96.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_4.对象_类-构造函数的语法糖.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/4.对象/类-构造函数的语法糖.html.js"),
    meta: {"title": "类：构造函数的语法糖"}
  }],
  ["/my-note/ES6/4.%E5%AF%B9%E8%B1%A1/%E7%B1%BB%E7%9A%84%E5%85%B6%E4%BB%96%E4%B9%A6%E5%86%99%E6%96%B9%E5%BC%8F.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_4.对象_类的其他书写方式.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/4.对象/类的其他书写方式.html.js"),
    meta: {"title": "类的其他书写方式"}
  }],
  ["/my-note/ES6/4.%E5%AF%B9%E8%B1%A1/%E7%B1%BB%E7%9A%84%E7%BB%A7%E6%89%BF.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_4.对象_类的继承.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/4.对象/类的继承.html.js"),
    meta: {"title": "类的继承"}
  }],
  ["/my-note/ES6/4.%E5%AF%B9%E8%B1%A1/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%AE%80%E4%BB%8B.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_4.对象_面向对象简介.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/4.对象/面向对象简介.html.js"),
    meta: {"title": "面向对象简介"}
  }],
  ["/my-note/ES6/6.%E7%AC%A6%E5%8F%B7/%E5%85%B1%E4%BA%AB%E7%AC%A6%E5%8F%B7.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_6.符号_共享符号.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/6.符号/共享符号.html.js"),
    meta: {"title": "共享符号"}
  }],
  ["/my-note/ES6/6.%E7%AC%A6%E5%8F%B7/%E6%99%AE%E9%80%9A%E7%AC%A6%E5%8F%B7.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_6.符号_普通符号.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/6.符号/普通符号.html.js"),
    meta: {"title": "普通符号"}
  }],
  ["/my-note/ES6/6.%E7%AC%A6%E5%8F%B7/%E7%9F%A5%E5%90%8D%EF%BC%88%E5%85%AC%E5%85%B1%E3%80%81%E5%85%B7%E5%90%8D%EF%BC%89%E7%AC%A6%E5%8F%B7.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_6.符号_知名（公共、具名）符号.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/6.符号/知名（公共、具名）符号.html.js"),
    meta: {"title": "知名（公共、具名）符号"}
  }],
  ["/my-note/ES6/7.%E5%BC%82%E6%AD%A5%E5%A4%84%E7%90%86/Promise.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_7.异步处理_Promise.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/7.异步处理/Promise.html.js"),
    meta: {"title": "Promise"}
  }],
  ["/my-note/ES6/7.%E5%BC%82%E6%AD%A5%E5%A4%84%E7%90%86/async%E5%92%8Cawait.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_7.异步处理_async和await.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/7.异步处理/async和await.html.js"),
    meta: {"title": "async 和 await"}
  }],
  ["/my-note/ES6/8.FetchApi/%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_8.FetchApi_基本使用.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/8.FetchApi/基本使用.html.js"),
    meta: {"title": "基本使用"}
  }],
  ["/my-note/ES6/8.FetchApi/%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0.html", {
    loader: () => import(/* webpackChunkName: "my-note_ES6_8.FetchApi_文件上传.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/ES6/8.FetchApi/文件上传.html.js"),
    meta: {"title": "文件上传"}
  }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
