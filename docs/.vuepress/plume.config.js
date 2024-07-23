
import { defineThemeConfig } from 'vuepress-theme-plume'
import { zhNotes } from './notes.js'
import { zhNavbar } from './navbar.js'
// 打印当前目录

export default defineThemeConfig({
  //   logo: '/avatar.png',
  //   docsRepo: 'https://github.com/pengzhanbo/vuepress-theme-plume',
  docsDir: 'docs',

  profile: {
    avatar: '/avatar.png',
    circle: true,
    name: 'Kapppiee',
    description: 'Learning from all',
    location: 'Dalian, China',
  },

  locales: {
    '/': {
      notes: zhNotes,
      navbar: zhNavbar,
    },
  },
})
