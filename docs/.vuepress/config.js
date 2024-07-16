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
                    text: 'ES6',
                    link: '/ES6/',
                }, {
                    text: 'Typescript',
                    link: '/Typescript/',
                }]
            }
        ],

        sideBar: {
            '/ES6/': [
                {
                    text: 'ES6',
                    collapsible: true,
                    children: [
                        '声明变量.md'
                    ]
                }
            ]
        }
    }),

    base: '/ibooks/',
})