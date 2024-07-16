import comp from "/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/head.jpg\",\"actionText\":\"快速了解 →\",\"actionLink\":\"/opensource/\",\"features\":[{\"title\":\"个人介绍\",\"details\":\"主要涉及技术：Java后端开发、聚合支付、公众号开发、开源爱好者、Linux\"},{\"title\":\"开发笔记\",\"details\":\"Java笔记、前端开发笔记、Hexo博客笔记、日记本、Linux笔记、ELK日志分析\"},{\"title\":\"技术博客\",\"details\":\"将深入探讨相关技术，包括行业动态，架构设计，设计模式，框架使用等。\"}]},\"headers\":[],\"git\":{\"updatedTime\":1721134940000,\"contributors\":[{\"name\":\"kappie\",\"email\":\"1780409106@qq.com\",\"commits\":2}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
