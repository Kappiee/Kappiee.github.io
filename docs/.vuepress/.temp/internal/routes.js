export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", {
    loader: () => import(/* webpackChunkName: "index.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/index.html.js"),
    meta: {"title": "Hello VuePress"}
  }],
  ["/haha.html", {
    loader: () => import(/* webpackChunkName: "haha.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/haha.html.js"),
    meta: {"title": ""}
  }],
  ["/hjihihih/test.html", {
    loader: () => import(/* webpackChunkName: "hjihihih_test.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/hjihihih/test.html.js"),
    meta: {"title": ""}
  }],
  ["/%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A/hihii.html", {
    loader: () => import(/* webpackChunkName: "啊啊啊啊啊_hihii.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/啊啊啊啊啊/hihii.html.js"),
    meta: {"title": ""}
  }],
  ["/%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A/%E6%89%98%E5%B0%94%E6%96%AF%E6%B3%B0.html", {
    loader: () => import(/* webpackChunkName: "啊啊啊啊啊_托尔斯泰.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/啊啊啊啊啊/托尔斯泰.html.js"),
    meta: {"title": ""}
  }],
  ["/404.html", {
    loader: () => import(/* webpackChunkName: "404.html" */"/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/404.html.js"),
    meta: {"title": ""}
  }],
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
  import.meta.hot.accept(({routes, redirects}) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
