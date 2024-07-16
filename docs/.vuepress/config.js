import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '我的笔记',
                prefix: '/my-note/',
                children: [{
                    text: 'foo',
                    link: '/foo/',
                }, {
                    text: 'bar',
                    link: '/bar/',
                }]

            }
        ]
    }),
    base: '/ibooks/',
})