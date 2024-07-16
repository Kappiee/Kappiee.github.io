import comp from "/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/haha.html.vue"

const data = JSON.parse("{\"path\":\"/haha.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1721133818000,\"contributors\":[{\"name\":\"kappie\",\"email\":\"1780409106@qq.com\",\"commits\":1}]},\"filePathRelative\":\"haha.md\"}")
export {comp, data}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({data}) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
